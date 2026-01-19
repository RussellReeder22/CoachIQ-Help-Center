# CLAUDE.md - CoachIQ Help Center Documentation Project

## Project Overview

This is a **Mintlify-powered help center** for **CoachIQ**, a comprehensive sports coaching platform. The documentation helps coaches, trainers, and facility owners maximize their use of CoachIQ's features.

**Tech Stack:**
- Documentation platform: Mintlify (MDX files)
- Hosting: Mintlify auto-deploys on merge to main
- Repository: GitHub (connected to Mintlify)
- File format: `.mdx` files
- Config file: `docs.json`

**Key URLs:**
- Admin portal: https://admin.coachiq.io
- Office Hours: https://cal.com/team/coach-iq/office-hours
- Help center: (deployed via Mintlify)

---

## File Structure

```
CoachIQ-Help-Center/
├── docs.json              # Main Mintlify configuration (navigation, redirects, theme)
├── introduction.mdx       # Homepage
├── changelog.mdx          # Product updates
├── images/                # All screenshots and images (flat structure)
├── logo/                  # Brand assets
│
├── website/               # Website Builder
│   ├── pages-navigation/
│   ├── sections/
│   ├── section-types/
│   ├── domain-setup/
│   ├── analytics-tracking/
│   └── seo-marketing/
├── athlete-portal/        # App Builder
├── inbox/                 # Communication
├── scheduling/            # Schedule & Calendar
├── payments/              # Payments & Products
├── people/                # User management
│   └── client-profiles/
├── forms/                 # Form builder
├── automations/           # Automations
├── content/               # Media, Programs, Lessons
├── settings/              # Configuration
├── power-ups/             # Advanced features
├── flows/                 # Complete workflows
├── guides/                # Business guides
├── business-guides/       # Additional guides
├── help-center/           # Support articles
│   ├── helping-your-athlete/
│   └── inbox/
├── essentials/            # Core concepts
└── api-reference/         # API documentation
```

### Navigation Tabs (defined in docs.json)
1. **Help Center** - Main documentation (root `/`)
2. **Power-Ups** - Advanced features
3. **Complete Flows** - Step-by-step workflows
4. **Business Guides** - Growth strategies
5. **Change log** - Product updates

---

## Writing Style Guidelines

### Voice & Tone
- **Clear & Direct**: Simple language coaches understand, no technical jargon
- **Empathetic**: Users may be frustrated when seeking help
- **Action-Oriented**: Focus on solutions and outcomes, not just features
- **Professional yet Approachable**: Balance expertise with accessibility

### Key Writing Rules
- Use **second person** ("you") for instructions
- Use **active voice** over passive voice
- Use **present tense** for current states
- Write **tactical, no-fluff content** - focus on "how to do X"
- Keep sentences concise while providing context
- Lead with the most important information (inverted pyramid)

### Formatting Rules
- **Main section pages**: Include icons in frontmatter
- **Sub-pages**: Icons optional, focus on specific tasks
- Start headings at `##` (H2) - never use H1 in content
- Always include proper frontmatter (title, description, sidebarTitle)
- Use kebab-case for file names (lowercase with hyphens)
- **Blank lines required** before and after all Mintlify components

---

## Mintlify Component Usage

### Required Page Frontmatter
```yaml
---
title: "Action-Focused Title - What User Will Accomplish"
description: "Clear value proposition in 155 characters"
sidebarTitle: "Short navigation title"
icon: "font-awesome-icon-name"  # For main/overview pages
---
```

### Component Decision Tree

**Is it a procedure?** → Use `<Steps>` with `<Step>` components
**Is it platform-specific?** → Use `<Tabs>` with `<Tab>` components
**Is it supplementary info?**
  - Critical warning → `<Warning>`
  - Best practice → `<Tip>`
  - Additional context → `<Note>`
  - Success confirmation → `<Check>`
  - General info → `<Info>`
**Is it lengthy optional content?** → `<Accordion>` or `<AccordionGroup>`
**Is it navigation/features?** → `<Card>` and `<CardGroup>`
**Is it an image?** → Wrap in `<Frame>`
**Is it a CoachIQ term needing definition?** → Use `<Tooltip>`

### Critical Formatting Rules
1. **Blank lines before AND after** all component tags (required for rendering)
2. **2-space indentation** within components
3. Proper list formatting (bullet points on their own lines)
4. Use realistic data in examples, not placeholders

### Common Component Examples

```mdx
<Info>
**Where to find this**: Dashboard → Schedule → Schedulers
</Info>

<Steps>
<Step title="Navigate to Schedulers">
From your dashboard, click **Schedule** then **Schedulers**.

<Tip>
**Pro tip**: Bookmark this page for quick access.
</Tip>
</Step>

<Step title="Create New Scheduler">
Click **+ New Scheduler** in the top right.

<Check>
**Success!** You should see the scheduler builder modal.
</Check>
</Step>
</Steps>

<AccordionGroup>
<Accordion title="What if I don't see the button?">
Ensure you have admin permissions in Settings → Team.
</Accordion>
</AccordionGroup>

Your <Tooltip tip="A booking page where athletes can schedule sessions with you">scheduler</Tooltip> will appear on your website automatically.
```

---

## Common Maintenance Tasks

### Broken Link Audits
Periodically check for broken internal links:
1. Search for links pointing to non-existent files
2. Verify all paths in docs.json navigation exist
3. Add redirects for moved/renamed pages

### Adding Redirects (in docs.json)
When renaming or moving pages, add redirects to maintain old URLs:
```json
{ "source": "/old/path", "destination": "/new/path" }
```

### Adding New Pages
1. Create the `.mdx` file with proper frontmatter
2. Add the page path to `docs.json` navigation
3. Include icon for overview/main pages
4. Link from related pages

### Image Guidelines
- Store all images in `/images/` (flat structure)
- Use descriptive filenames
- Supported formats: `.png`, `.webp`, `.avif`
- Wrap in `<Frame>` component:
```mdx
<Frame>
  ![Alt text description](/images/filename.png)
</Frame>
```

---

## Important Patterns & Preferences

### From Past Conversations

1. **Be tactical, not encyclopedic** - Focus on "how to do X" rather than exhaustive explanations
2. **Light on customer avatar adaptations** - Don't write super long docs accommodating every user type
3. **Heavy use of Mintlify components** - Make articles visually scannable
4. **CoachIQ handles technical work** - Users just provide access/content (especially for domain setup)
5. **Avoid bullet points in flowing prose** - Use them strategically
6. **Always verify blank lines** around components (common rendering issue)
7. **Use realistic data** in examples, not placeholder text

### Page Types

**Overview/Index Pages:**
- Include icon in frontmatter
- Use `<CardGroup>` for navigation to sub-pages
- Brief explanation of the feature area
- Link to most common tasks

**Task-Specific Pages:**
- Icon optional in frontmatter
- Detailed step-by-step instructions
- `<Steps>` component is primary structure
- Include troubleshooting and FAQs

---

## Quality Checklist

### Before Completing Any Article
- [ ] Title clearly states what user will accomplish
- [ ] Frontmatter includes title, description, sidebarTitle
- [ ] Prerequisites listed upfront (if applicable)
- [ ] Steps are numbered and sequential using `<Steps>`
- [ ] Each step has a clear outcome
- [ ] Blank lines before/after all Mintlify components
- [ ] Common questions addressed with `<AccordionGroup>`
- [ ] Related articles linked
- [ ] No excessive bullet points in prose
- [ ] Proper alt text for images

### Mintlify Component Rendering Fixes
If components don't render correctly:
1. Check for blank lines before AND after component tags
2. Verify proper nesting and closing tags
3. Ensure content inside components has proper spacing
4. Use 2-space indentation within components

---

## Quick Reference

### Brand Colors (from docs.json)
- Primary: `#F9C117`
- Light: `#FDDC7B`
- Dark: `#D4A017`

### Icon Library
Use FontAwesome icons. Common ones for CoachIQ:
- `rocket` - Getting started
- `globe` - Website/domains
- `mobile` - App builder
- `inbox` - Inbox/messaging
- `calendar` - Schedule
- `calendar-plus` - Schedulers
- `clock` - Availability
- `calendar-days` - Calendar & Bookings
- `coins` - Credits
- `credit-card` - Payments
- `box` - Products
- `rotate` - Subscriptions
- `users` - People
- `user` - Client profiles
- `video` - Content/media
- `file-lines` - Forms
- `bolt` - Automations/Power-ups
- `gears` - Tools
- `sliders` - Settings
- `chart-line` - Analytics
- `magnifying-glass-chart` - SEO
- `route` - Flows/workflows
- `book-open` - Guides

### Support Contact
- Email: liz@coachiq.io (for domain setup access)

---

## docs.json Structure

The `docs.json` file controls:
- **Navigation**: Tab structure and page hierarchy
- **Redirects**: URL forwarding for moved pages (170+ redirects configured)
- **Theme**: Colors, fonts, styling
- **Metadata**: SEO and social sharing settings
- **Footer**: Social media links

When adding new pages, always update the navigation in docs.json.

---

*Last updated: January 2026*
*This file should be updated as new patterns emerge or project structure changes.*
