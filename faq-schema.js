// faq-schema.js
// Injects FAQPage JSON-LD structured data on /faq/ pages
// Reads questions and answers directly from accordion elements — no duplication needed
(function () {
  if (!window.location.pathname.startsWith('/faq/')) return;

  function injectSchema() {
    var accordions = document.querySelectorAll('[class*="accordion"]');
    var questions = [];

    accordions.forEach(function (accordion) {
      var trigger = accordion.querySelector('button, [role="button"], [data-state]');
      var content = accordion.querySelector('[role="region"], [data-state="open"], [data-state="closed"]');

      if (!trigger) return;

      var questionText = trigger.textContent.trim();
      if (!questionText) return;

      var answerText = '';
      if (content) {
        answerText = content.textContent.trim();
      }

      if (questionText && answerText) {
        questions.push({
          '@type': 'Question',
          name: questionText,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answerText
          }
        });
      }
    });

    if (questions.length === 0) return;

    var existing = document.querySelector('script[data-faq-schema]');
    if (existing) existing.remove();

    var schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Run after page content is fully rendered
  if (document.readyState === 'complete') {
    setTimeout(injectSchema, 500);
  } else {
    window.addEventListener('load', function () {
      setTimeout(injectSchema, 500);
    });
  }

  // Re-inject on client-side navigation (Mintlify uses SPA routing)
  var lastPath = window.location.pathname;
  var observer = new MutationObserver(function () {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      if (lastPath.startsWith('/faq/')) {
        setTimeout(injectSchema, 500);
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
