---
title: "How to Set Up Camp Registration: Complete Step-by-Step Guide"
description: "Launch your sports camp with CoachIQ - from product creation to promotion, including registration forms, waivers, and payment processing"
sidebarTitle: "Camp Registration Setup"
icon: "campground"
---

<Info>
  **Time to complete**: 45-60 minutes for first-time setup | **Skill level**: Beginner-friendly
</Info>

## What you'll accomplish

By following this guide, you'll create a complete camp registration system that handles everything from payments to participant information collection. Your parents will be able to register their athletes, complete waivers, and pay - all in one seamless flow.

## Before you begin

<Note>
  **Required setup:**

  - Active CoachIQ account with payment processing enabled
  - Basic camp details decided (dates, times, pricing, capacity)
  - Waiver content prepared (we'll help you with this)
  - Any additional forms/questions identified
</Note>

<Tip>
  **Planning checklist**: Have these details ready before you start:

  - Camp name and description
  - Dates and times
  - Age/skill level requirements
  - Pricing structure (early bird, regular, late fees)
  - Maximum participant capacity
  - What's included (t-shirt, equipment, meals, etc.)
  - Additional information you need to collect
</Tip>

---

## Phase 1: Create Your Camp Product

This is the foundation of your camp registration system - it's what parents will purchase.

<Steps>
  <Step title="Navigate to Products">
    From your CoachIQ dashboard, go to **Store** → **Products** → **Create Product**.

    <Frame>
      ![Create product button location](/images/products-create-button.png)
    </Frame>
  </Step>
  <Step title="Configure basic camp details">
    Fill in the essential information:

    **Product Name**: Use a clear, descriptive name that includes the sport and dates

    - ✅ Good: "Summer Basketball Skills Camp - July 15-19, 2024"
    - ❌ Avoid: "Camp Session 1"

    **Description**: Write a compelling description that includes:

    - What athletes will learn/experience
    - Dates and daily schedule
    - Age/skill level
    - What's included (equipment, t-shirt, meals, etc.)
    - Coach credentials/experience

    <Tip>
      **Marketing tip**: Parents make quick decisions. Put the most exciting benefits in the first 2-3 sentences. Include bullet points for easy scanning.
    </Tip>
    **Product Type**: Select **"One-Time Purchase"** (not recurring)

    **Category**: Choose **"Camps & Clinics"** or create a custom category
  </Step>
  <Step title="Set up pricing structure">
    Click **Add Price** to configure your payment options.

    ### Recommended pricing strategy:

    <Tabs>
      <Tab title="Single Price">
        **Best for**: Simple camps with one registration deadline

        - Set your regular camp price
        - Consider adding a late registration fee option as a separate price tier

        **Example**: \$299 per camper
      </Tab>
      <Tab title="Early Bird Pricing">
        **Best for**: Camps launching 6+ weeks in advance

        1. Create **Early Bird Price** (\$249)
           - Set availability end date (e.g., 4 weeks before camp)
        2. Create **Regular Price** (\$299)
           - Available after early bird expires
        3. Optional: Create **Late Registration** (\$349)
           - Available 1 week before camp starts

        <Check>
          **Why this works**: Creates urgency and rewards early registrations, helping you plan better.
        </Check>
      </Tab>
      <Tab title="Sibling Discount">
        **Best for**: Multi-day camps where families may register multiple children

        1. Set regular price (\$299)
        2. Create discounted price for additional siblings (\$249)
        3. In description, note: "Register multiple athletes and use code SIBLING50 for \$50 off each additional registration"

        <Note>
          You'll create the discount code in the next section. This pricing structure just communicates the offer.
        </Note>
      </Tab>
    </Tabs>
    ### Payment options to enable:

    - ✅ **Full payment upfront** (recommended for camps)
    - ⚠️ **Payment plans**: Only if camp is 8+ weeks away and high-priced (\$500+)
  </Step>
  <Step title="Set participant capacity limit">
    Scroll to **Inventory Management** section:

    1. Toggle **Track Inventory** to ON
    2. Enter your **Maximum Capacity**
       - Consider: coach-to-athlete ratio, facility size, equipment available
       - Recommended starting point: 20-30 athletes for first camp
    3. Toggle **Allow Waitlist** to ON

    <Warning>
      **Important**: Once you hit capacity, new registrations will automatically go to a waitlist. You'll be notified and can manually approve additional spots if you expand capacity.
    </Warning>
    <Tip>
      **Pro strategy**: Set capacity at 80% of your actual maximum. This creates scarcity in marketing ("Only 5 spots left!") and gives you flexibility to add spots if demand is high.
    </Tip>
  </Step>
  <Step title="Add camp-specific custom fields">
    Scroll to **Custom Fields** and add information you need to collect at purchase:

    **Essential fields for camps**:

    1. **Athlete Age/Birth Date**
       - Field Type: Date
       - Required: Yes
       - Purpose: Verify age eligibility
    2. **T-Shirt Size** (if providing shirts)
       - Field Type: Dropdown
       - Options: Youth S, Youth M, Youth L, Adult S, Adult M, Adult L, Adult XL, Adult XXL
       - Required: Yes
    3. **Emergency Contact Name**
       - Field Type: Text
       - Required: Yes
    4. **Emergency Contact Phone**
       - Field Type: Phone
       - Required: Yes
    5. **Medical Conditions/Allergies**
       - Field Type: Long Text
       - Required: No
       - Placeholder: "List any medical conditions, allergies, or medications we should be aware of"
    6. **Parent/Guardian Cell Phone**
       - Field Type: Phone
       - Required: Yes
       - Purpose: For day-of communication
    7. **Skill Level** (optional but recommended)
       - Field Type: Dropdown
       - Options: Beginner, Intermediate, Advanced
       - Purpose: Helps you plan appropriate drills

    <Accordion title="Additional optional fields to consider">
      - **Dietary Restrictions** (if providing meals/snacks)
      - **Previous Camp Experience** (Yes/No)
      - **What athlete hopes to learn**
      - **Carpool Interest** (for parent connections)
      - **Photo/Video Permission** (though this should also be in waiver)
      - **Preferred Group Placement** (if they're coming with friends)
    </Accordion>
    <Check>
      **Validation**: Preview how these fields will appear to parents during checkout. Does it feel overwhelming or reasonable? Aim for 7-10 fields maximum.
    </Check>
  </Step>
  <Step title="Save your camp product">
    Click **Save Product** at the top right.

    Your camp product is now created! Next, we'll attach the forms that parents need to complete.
  </Step>
</Steps>

---

## Phase 2: Create Registration & Waiver Forms

Parents need to complete an onboarding form and waiver when they register. Here's how to set that up.

<Steps>
  <Step title="Navigate to Forms">
    Go to **Grow** → **Forms** → **Create Form**.
  </Step>
  <Step title="Create the camp waiver form first">
    **Form Name**: "[Camp Name] Waiver & Liability Release"

    **Form Type**: Select **"Waiver"**

    ### Essential waiver components:

    <CodeGroup>

    ```text Standard Youth Camp Waiver Template
    WAIVER AND RELEASE OF LIABILITY
    
    I, the undersigned parent/legal guardian of _________________________ (Participant Name), 
    hereby acknowledge and agree to the following:
    
    1. ASSUMPTION OF RISK
    I understand that participation in [Camp Name] involves physical activity and inherent 
    risks including, but not limited to, physical injury, illness, or property damage. I 
    voluntarily assume all risks associated with participation.
    
    2. RELEASE OF LIABILITY
    I hereby release, waive, and discharge [Your Business Name], its owners, coaches, 
    employees, and volunteers from any and all liability, claims, demands, or causes of 
    action arising from the Participant's involvement in camp activities.
    
    3. MEDICAL AUTHORIZATION
    In case of emergency, I authorize camp staff to:
    - Administer basic first aid
    - Arrange for emergency medical treatment
    - Transport Participant to medical facility if necessary
    
    I understand I am responsible for all medical costs.
    
    4. PHOTO/VIDEO CONSENT
    I grant permission for photographs and videos taken during camp to be used for:
    ☐ Social media and marketing purposes
    ☐ Internal documentation only
    ☐ No photo/video permission granted
    
    5. CODE OF CONDUCT
    I understand the Participant is expected to:
    - Respect coaches, staff, and other participants
    - Follow all camp rules and safety guidelines
    - Arrive on time and be picked up promptly
    
    I understand dismissal without refund may result from serious behavioral issues.
    
    PARENT/GUARDIAN SIGNATURE: _________________________
    PRINTED NAME: _________________________
    DATE: _________________________
    EMERGENCY CONTACT: _________________________
    EMERGENCY PHONE: _________________________
    ```

    
    ```text Extended Waiver (High-Risk Activities)
    [Include all sections above, PLUS:]
    
    6. COVID-19 AND ILLNESS ACKNOWLEDGMENT
    I understand that camp activities involve close contact with others and that 
    [Your Business Name] cannot guarantee a disease-free environment. I agree to:
    - Keep Participant home if showing symptoms of illness
    - Notify camp staff immediately if Participant develops symptoms
    - Follow any health protocols established by the camp
    
    7. ALLERGY AND MEDICAL INFORMATION
    Known allergies: _________________________
    Current medications: _________________________
    Medical conditions staff should know about: _________________________
    
    I confirm this information is accurate and will update staff if changes occur.
    
    8. SPECIALIZED ACTIVITY RISKS
    I specifically acknowledge risks associated with:
    ☐ Contact drills and scrimmages
    ☐ Weight training and conditioning
    ☐ Outdoor activities (heat, weather, terrain)
    ☐ Equipment use (specify: _____________)
    
    9. TRANSPORTATION (if applicable)
    I give permission for Participant to be transported by camp staff or designated drivers:
    ☐ Yes, for field trips or off-site activities
    ☐ No, I will provide all transportation
    
    10. INDEMNIFICATION
    I agree to indemnify and hold harmless [Your Business Name] from any claims, 
    including attorney fees, arising from Participant's actions during camp.
    ```

    </CodeGroup>

    <Warning>
      **Legal disclaimer**: These templates are examples only. Consult with an attorney in your state to ensure your waiver provides appropriate legal protection. Waiver enforceability varies by jurisdiction.
    </Warning>
    **Field setup in CoachIQ**:

    1. Add **Signature Field** (required)
       - Label: "Parent/Guardian Electronic Signature"
       - Include text: "By signing, I confirm I have read and agree to all terms above"
    2. Add **Date Field** (auto-populated)
    3. Add **Checkbox Fields** for specific consents:
       - Photo/video permission
       - Transportation permission (if applicable)
       - Acknowledgment of risks

    <Tip>
      **Make it accessible**: Use clear headings, short paragraphs, and bullet points. Parents are more likely to actually read (and you want them to understand what they're signing).
    </Tip>
  </Step>
  <Step title="Create the camp onboarding form">
    Click **Create Another Form** or go back to Forms list.

    **Form Name**: "[Camp Name] Registration Information"

    **Form Type**: Select **"Onboarding"**

    This form collects detailed information you didn't gather at checkout:

    ### Recommended form fields:

    <Accordion title="Athlete Information Section">
      1. **Athlete Full Name** (Text - Required)
      2. **Date of Birth** (Date - Required)
      3. **Grade in Fall 2024** (Dropdown - Required)
      4. **Gender** (Dropdown - Optional)
      5. **Current Team/School** (Text - Optional)
      6. **Jersey Number Preference** (Number - Optional)
         - Note: "We'll do our best to accommodate"
    </Accordion>
    <Accordion title="Medical & Safety Section">
      1. **Primary Care Physician** (Text)
      2. **Physician Phone** (Phone)
      3. **Insurance Provider** (Text - Required)
      4. **Policy Number** (Text - Required)
      5. **Medications Taken During Camp Hours** (Long Text)
         - Include dosage and timing
      6. **Allergies (Food, Medication, Environmental)** (Long Text - Required)
         - Even if none, require "None" response
      7. **Medical Conditions We Should Know About** (Long Text)
         - Asthma, diabetes, seizures, previous injuries, etc.
      8. **Physical Limitations or Restrictions** (Long Text)
    </Accordion>
    <Accordion title="Contact Information Section">
      1. **Parent/Guardian 1 Name** (Text - Required)
      2. **Relationship to Athlete** (Dropdown - Required)
      3. **Phone Number** (Phone - Required)
      4. **Email** (Email - Auto-populated from purchase)
      5. **Parent/Guardian 2 Name** (Text - Optional)
      6. **Parent 2 Phone** (Phone - Optional)
      7. **Emergency Contact (if parents unreachable)** (Text - Required)
      8. **Emergency Contact Phone** (Phone - Required)
      9. **Emergency Contact Relationship** (Text - Required)
    </Accordion>
    <Accordion title="Logistics Section">
      1. **Drop-off/Pick-up Authorized Adults** (Long Text - Required)
         - "List all adults authorized to drop off and pick up athlete"
      2. **Daily Transportation** (Dropdown)
         - Parent drop-off/pick-up
         - Carpool (looking for match)
         - Carpool (already arranged)
         - Athlete will drive self (high school only)
      3. **Special Accommodations Needed** (Long Text - Optional)
         - Learning differences, language barriers, etc.
    </Accordion>
    <Accordion title="Camp-Specific Questions">
      1. **What does athlete hope to learn at camp?** (Long Text - Optional)
      2. **Previous [Sport] Experience** (Dropdown)
         - No experience
         - 1 year
         - 2-3 years
         - 4+ years
      3. **Positions Played/Interested In** (Checkboxes)
      4. **Has athlete attended this camp before?** (Yes/No)
      5. **How did you hear about this camp?** (Dropdown)
         - Essential for tracking marketing effectiveness
    </Accordion>
    <Check>
      **Parent-friendly language**: Instead of "medical conditions," say "anything that might affect camp participation or safety." Be warm and conversational in field descriptions.
    </Check>
  </Step>
  <Step title="Configure form completion timing">
    For each form you created:

    1. Go to **Form Settings**
    2. Under **When to Send**, select: **"Immediately after product purchase"**
    3. Toggle **Required Completion** to ON
    4. Set deadline: **"Must be completed 48 hours before camp start date"**

    <Note>
      Parents will receive an email immediately after purchase with a link to complete both forms. They'll get reminder emails if incomplete as the deadline approaches.
    </Note>
  </Step>
  <Step title="Attach forms to your camp product">
    Go back to **Store** → **Products** → Open your camp product.

    Scroll to **Attached Forms** section:

    1. Click **Attach Form**
    2. Select your waiver form
    3. Click **Attach Form** again
    4. Select your onboarding form
    5. **Save Product**

    <Check>
      **Test it**: Make a test purchase (you can refund yourself) to see exactly what parents will experience. Does the flow make sense? Are instructions clear?
    </Check>
  </Step>
</Steps>

---

## Phase 3: Build Your Camp Landing Page

Now create a dedicated webpage where parents can learn about your camp and register.

<Steps>
  <Step title="Navigate to Website Builder">
    Go to **Grow** → **Website** → **Pages** → **Create Page**.
  </Step>
  <Step title="Choose a template">
    Select **"Event Landing Page"** or **"Product Showcase"** template.

    <Tip>
      **Quick start**: These templates include proven conversion elements like testimonials, FAQ sections, and clear CTAs. You can customize everything.
    </Tip>
  </Step>
  <Step title="Design your hero section">
    The hero section (top of page) is what parents see first. Make it compelling.

    **Essential elements**:

    1. **Headline**: Clear, benefit-focused
       - ✅ "Elevate Your Game: Elite Basketball Skills Camp"
       - ✅ "Summer Soccer Camp: Where Champions Are Made"
       - ❌ "2024 Camp Registration"
    2. **Subheadline**: Dates, ages, location
       - "July 15-19 | Ages 10-14 | Central High School Gym"
    3. **Hero Image**:
       - Use action shot from previous camps
       - Or high-quality stock photo of athletes in your sport
       - Must be energetic and aspirational
    4. **Primary CTA Button**:
       - Text: "Register Now" or "Save Your Spot"
       - Link to: Camp product checkout page
       - Color: High contrast (usually your brand color)
    5. **Social Proof**: Add one of these under CTA
       - "23 spots remaining!" (creates urgency)
       - "Join 150+ athletes who've trained with us"
       - ⭐⭐⭐⭐⭐ "4.9/5 from 42 parent reviews"

    <Frame>
      ![Example camp landing page hero section](/images/camp-hero-example.png)
    </Frame>
  </Step>
  <Step title="Add camp details section">
    Create a section with 3-4 columns highlighting what makes your camp special:

    <CardGroup cols={4}>
      <Card title="Expert Coaching" icon="trophy">
        15+ years experience, former D1 athlete
      </Card>
      <Card title="Small Groups" icon="users">
        6:1 athlete-to-coach ratio for personalized attention
      </Card>
      <Card title="All Inclusive" icon="check">
        Camp t-shirt, equipment, and daily snacks included
      </Card>
      <Card title="Rain or Shine" icon="cloud-sun">
        Indoor facilities mean we never cancel
      </Card>
    </CardGroup>
    **Content to include**:

    - Daily schedule breakdown
    - What athletes will learn (specific skills)
    - Coach bios and credentials
    - Facility details and amenities
    - What's included in registration
  </Step>
  <Step title="Build trust with social proof">
    Add one or more of these sections:

    ### Testimonials

    ```
    "Coach [Name]'s camp helped my daughter improve her shot by 40%. 
    She went from bench player to starting lineup!"
    - Sarah M., Parent of 2023 Camper
    ```

    Add 3-5 testimonials with:

    - Parent name (first name + last initial)
    - Year they attended
    - Specific outcome or improvement
    - Optional: Photo of athlete in action (with permission)

    ### Photo Gallery

    Create a gallery section with 6-12 photos showing:

    - Athletes practicing skills
    - Coach instruction and interaction
    - Fun moments (water breaks, celebrations)
    - Facility and equipment
    - Previous camp group photos

    <Note>
      **No photos yet?** Use high-quality stock photos from sites like Unsplash or Pexels. Search: "[your sport] youth training" or "[your sport] coaching kids"
    </Note>
    ### Stats or Results

    If you have them, showcase:

    - Number of athletes trained
    - Years in business
    - Success stories (scholarships, team placements)
    - Specific skill improvements (average shooting % increase, etc.)
  </Step>
  <Step title="Add comprehensive FAQ section">
    Answer the questions parents will have before registering:

    <AccordionGroup>
      <Accordion title="What should my athlete bring each day?">
        - Athletic shoes (specific type if needed)
        - Water bottle
        - Athletic clothing
        - Any personal equipment (mouthguard, etc.)
        - Lunch/snacks if not provided
      </Accordion>
      <Accordion title="What's your refund/cancellation policy?">
        Be crystal clear about:

        - Deadline for full refund
        - Partial refund windows
        - No refund deadline
        - Transfer policy to future camps
        - Weather-related cancellations

        **Example**: "Full refund if cancelled 30+ days before camp. 50% refund 15-29 days before. No refunds within 14 days of camp start. All registrations are transferable to a friend or future camp session."
      </Accordion>
      <Accordion title="What if my athlete has food allergies or medical needs?">
        Explain your protocol and reassure parents you're prepared.
      </Accordion>
      <Accordion title="What's the coach-to-athlete ratio?">
        Specific numbers build confidence in safety and attention.
      </Accordion>
      <Accordion title="Is financial assistance available?">
        If you offer scholarships or payment plans, explain here.
      </Accordion>
      <Accordion title="What if I need to reach you during camp?">
        Provide clear communication protocol for emergencies.
      </Accordion>
      <Accordion title="Can I watch my athlete during camp?">
        Set expectations about parent observation.
      </Accordion>
    </AccordionGroup>
    <Tip>
      **Add 8-12 FAQs**: More FAQs = fewer emails/calls = more time coaching. Think through every question you've been asked about previous events.
    </Tip>
  </Step>
  <Step title="Create urgency with scarcity">
    Add a section that highlights limited availability:

    **Options**:

    1. **Countdown timer**: "Early bird pricing ends in [X] days"
    2. **Capacity tracker**: "Only 8 of 30 spots remaining"
    3. **Date reminder**: "Camp starts in 6 weeks - register before we're full!"

    Place this above your final CTA button.
  </Step>
  <Step title="Add final call-to-action section">
    End with a strong CTA section:

    **Structure**:

    - **Headline**: "Ready to take your game to the next level?"
    - **Reinforcement**: "Join [number] athletes this summer"
    - **Primary Button**: "Register for Camp - \$299"
    - **Secondary Info**: "Questions? Text/call [your number]"

    **Button design tips**:

    - Make it BIG (twice the size of normal buttons)
    - Use action color (often red, orange, or bright blue)
    - Include price on button if single option
    - Place multiple times on long pages (top, middle, bottom)
  </Step>
  <Step title="Configure page settings">
    Before publishing:

    1. **Page URL**: Set custom URL slug
       - Example: `yoursite.com/summer-basketball-camp-2024`
       - Keep it short and SEO-friendly
    2. **SEO Settings**:
       - **Meta Title**: "[Camp Name] - [Location] | [Your Business Name]"
       - **Meta Description**: "Join our [sport] camp for athletes ages [X-X]. [Dates], [Location]. Expert coaching, small groups, and proven results. Limited spots available!"
    3. **Social Sharing Image**: Upload an engaging camp image
       - 1200x630 pixels recommended
       - This appears when page is shared on Facebook, Twitter, etc.

    <Check>
      **Mobile check**: Preview your page on mobile. 80% of parents will view on their phone. Is it easy to read and navigate?
    </Check>
  </Step>
  <Step title="Publish your page">
    Click **Publish** in the top right.

    Your camp landing page is now live! Copy the URL - you'll need it for promotion.
  </Step>
</Steps>

---

## Phase 4: Create Your Camp Flyer

While CoachIQ handles registration, you'll need a promotional flyer for social media and printing. Here's how to create one that converts.

<Note>
  **Tool recommendation**: Use Canva (free), Adobe Express (free), or similar design tools. We'll provide the content strategy and design principles.
</Note>

<Steps>
  <Step title="Choose flyer dimensions">
    Create two versions for different uses:

    1. **Social Media Flyer**: 1080 x 1080 pixels (square)
       - Perfect for Instagram posts
       - Works on Facebook
       - Easy to view on mobile
    2. **Printable Flyer**: 8.5" x 11" (standard letter)
       - For posting at schools, gyms, community centers
       - Can be emailed as PDF
       - Easy for parents to print and share

    <Tip>
      **Time-saver**: Design the social media version first, then adapt it to print dimensions. Most design tools have templates for both.
    </Tip>
  </Step>
  <Step title="Essential flyer elements">
    Include these components in this priority order:

    ### 1. Eye-Catching Header (Top 25% of flyer)

    - **Camp name** in large, bold text
    - **Dates** prominently displayed
    - **High-energy image** as background or focal point
      - Action shot from previous camps
      - Professional stock photo of sport
      - Your logo/brand imagery

    ### 2. Key Information (Middle 50%)

    Present in scannable format:

    **Who:**

    - Age range/grade levels
    - Skill level (if specific)

    **What:**

    - Sport and focus (skills, fundamentals, competition, etc.)
    - What athletes will learn/experience
    - 3-5 bullet points maximum

    **When:**

    - Dates and days of week
    - Daily hours (e.g., "9am-3pm daily")
    - Total number of days

    **Where:**

    - Facility name
    - City/neighborhood (not full address on social version)

    **Cost:**

    - Regular price
    - Early bird price (if applicable)
    - "Starting at \$X" if multiple options

    **What's Included:**

    - Icon-based list of inclusions
      - ✓ Camp T-shirt
      - ✓ Professional coaching
      - ✓ Small group training
      - ✓ Daily snacks

    ### 3. Call-to-Action (Bottom 25%)

    - **Registration URL**: Your camp landing page
      - Use QR code for print flyers
      - Shortened URL for easy typing: bit.ly/yourcamp24
    - **Urgency element**:
      - "Limited to 30 athletes"
      - "Early bird pricing ends June 1st"
      - "Only 12 spots remaining!"
    - **Contact info**: Phone or email for questions

    <Frame>
      ![Example camp flyer layout](/images/camp-flyer-template.png)
    </Frame>
  </Step>
  <Step title="Design best practices">
    Apply these principles for maximum impact:

    **Color Psychology:**

    - Use your brand colors as primary
    - Add one accent color for CTA/pricing
    - Keep background light for readability (on print version)
    - High contrast between text and background

    **Typography:**

    - Maximum 2-3 font families
    - Headline: Bold, sans-serif (thick and readable)
    - Body: Clean, simple sans-serif
    - Minimum font size: 12pt for body text (16pt for digital)

    **Visual Hierarchy:**

    - Largest: Camp name and dates
    - Medium: Key details (age, time, location)
    - Smaller: Descriptions and fine print
    - Highlighted: Price and CTA

    **White Space:**

    - Don't cram everything in
    - Let important elements breathe
    - Margins of at least 0.25" on print versions

    <Warning>
      **Common mistakes to avoid:**

      - Too much text (parents won't read it all)
      - Low-quality or stretched images
      - Unclear call-to-action
      - Missing critical info (dates, price, how to register)
      - Fonts too small to read on mobile
    </Warning>
  </Step>
  <Step title="Create multiple variations">
    Design 3 versions for different marketing stages:

    **Version 1: Launch/Early Bird** (6-8 weeks before camp)

    - Emphasize early bird pricing
    - "Just announced" or "Registration open" messaging
    - Focus on excitement and getting in early

    **Version 2: Standard Registration** (2-5 weeks before)

    - Regular pricing
    - Highlight what makes camp special
    - Social proof (if you have testimonials)

    **Version 3: Last Call** (1-2 weeks before)

    - Urgency messaging: "Final spots!"
    - Show how many spots remain
    - "Don't miss out" language
    - May include slight price increase

    <Tip>
      **Efficiency hack**: Keep the same layout and design. Only change the text and urgency elements. This maintains brand consistency and saves time.
    </Tip>
  </Step>
  <Step title="Add QR code to print version">
    For physical flyers, add a QR code that links directly to your registration page:

    1. Use a free QR generator: [qr-code-generator.com](https://www.qr-code-generator.com) or [qrcode-monkey.com](https://www.qrcode-monkey.com)
    2. Input your camp landing page URL
    3. Customize with your brand colors (optional)
    4. Download as PNG
    5. Place in bottom corner of flyer (1.5" x 1.5" minimum)
    6. Add text: "Scan to register" under QR code

    <Check>
      **Always test**: Print one copy and scan the QR code with your phone. Does it work? Is it large enough?
    </Check>
  </Step>
  <Step title="Export in correct formats">
    Save your flyers for different uses:

    **For social media:**

    - Format: PNG or JPEG
    - Resolution: 72 DPI minimum
    - Size: 1080 x 1080 pixels
    - Keep file under 2MB for fast loading

    **For printing:**

    - Format: PDF (preferred) or PNG
    - Resolution: 300 DPI
    - Size: 8.5" x 11"
    - CMYK color mode (if professional printing)

    **For email:**

    - Format: JPEG
    - Medium resolution: 150 DPI
    - Compressed to under 1MB
  </Step>
</Steps>

---

## Phase 5: Promote Your Camp on Social Media

Now it's time to fill those spots! Here's your complete social media promotion strategy.

<Steps>
  <Step title="Create your content calendar">
    Plan posts leading up to your camp. Here's a proven timeline:

    ### 6-8 Weeks Before (Launch Phase)

    - **Week 1**: Announcement post with flyer
    - **Week 2**: Coach introduction/credentials
    - **Week 3**: Early bird reminder (if applicable)
    - **Week 4**: Testimonial from previous camp

    ### 4-5 Weeks Before (Build Phase)

    - **Week 5**: Day-in-the-life preview (what a typical camp day looks like)
    - **Week 6**: Highlight specific skills athletes will learn
    - **Week 7**: Answer common parent questions
    - **Week 8**: Early bird deadline urgency post

    ### 2-3 Weeks Before (Urgency Phase)

    - **Week 9**: Spots remaining update
    - **Week 10**: Behind-the-scenes prep (you getting facility ready)
    - **Week 11**: Last call with strong urgency

    ### Week Of

    - Daily countdown posts
    - "Final spots" posts
    - Excited check-in from registered families

    <Tip>
      **Posting frequency**: Aim for 3-5 posts per week about your camp during promotion period. Mix camp content with regular coaching content to avoid being too "salesy."
    </Tip>
  </Step>
  <Step title="Craft your launch post">
    Your first post is critical. Use this structure:

    <CodeGroup>

    ```text Instagram Caption Template
    🏀 [CAMP ANNOUNCEMENT] 🏀
    
    [Camp Name] is BACK! 
    
    [Dates] | Ages [X-X] | [Location]
    
    Your athlete will:
    ✓ [Specific skill #1]
    ✓ [Specific skill #2]
    ✓ [Specific skill #3]
    ✓ [Specific benefit]
    
    Led by [Your name] - [credential/experience]
    
    👉 What's Included:
    • [X] hours of coaching
    • Small group instruction (6:1 ratio)
    • Camp t-shirt
    • [Other inclusions]
    
    💰 Investment: $[price]
    ⏰ Early Bird: $[discounted price] until [date]
    🎯 Limited to [#] athletes
    
    Spots are filling up fast! 
    
    [Registration Link in Bio] or visit [shortened URL]
    
    Questions? Drop them in the comments or DM me! 👇
    
    #[YourSport]Camp #[City][Sport] #YouthSports #[SportName]Training #SummerCamp #[YourBusinessName]
    ```

    
    ```text Facebook Post Template
    📣 EXCITING NEWS FOR [CITY] [SPORT] FAMILIES! 📣
    
    Registration is NOW OPEN for [Camp Name]!
    
    🗓️ WHEN: [Dates], [Time]
    📍 WHERE: [Facility Name, City]
    👥 WHO: Athletes ages [X-X], all skill levels welcome
    💵 INVESTMENT: Starting at $[price] ([discount] for early registration!)
    
    WHAT YOUR ATHLETE GETS:
    ➡️ [X] hours of expert coaching
    ➡️ Small group training (we cap at [#] athletes)
    ➡️ Focus on [key skills/benefits]
    ➡️ Camp t-shirt + [other inclusions]
    ➡️ Memories and friendships that last beyond the court/field
    
    I'm [your name], and I've been coaching [sport] for [X] years, including [credentials]. My coaching philosophy is simple: [one sentence about your approach].
    
    Last summer, we had [#] athletes and spots filled up [fast/in X weeks]. This year we're limiting registration to [#] spots to maintain our small-group approach.
    
    REGISTER NOW: [Full URL to camp landing page]
    
    Early bird pricing ends [date] - don't wait!
    
    Have questions? Comment below or call/text me at [number].
    
    Let's make this the summer your athlete takes their game to the next level! 🙌
    
    #[YourSport] #[City]Sports #YouthAthletes #SummerCamp
    ```

    </CodeGroup>

    **Post timing:**

    - Instagram: Tuesday-Thursday, 8-9am or 7-9pm
    - Facebook: Tuesday-Thursday, 12-1pm or 7-8pm
    - Best practice: Schedule in advance using Meta Business Suite

    <Note>
      **Instagram-specific tip**: You can't put clickable links in captions. Put "Link in bio" and use a link-in-bio tool like Linktree, or update your single bio link to your camp registration page during promotion period.
    </Note>
  </Step>
  <Step title="Create varied content types">
    Don't just post flyers. Mix up your content for better engagement:

    ### Content Type #1: Coach Credibility Post

    - Photo of you coaching or your headshot
    - Bio highlighting experience
    - "Why I love coaching [sport]"
    - Builds trust with parents who don't know you

    ### Content Type #2: Skills Preview

    - Video of you demonstrating a drill
    - "Here's one drill we'll work on at camp..."
    - Shows parents what they're paying for
    - Makes athletes excited to participate

    ### Content Type #3: Testimonial Post

    - Quote from previous parent/athlete
    - Before/after story if you have it
    - Photo from previous camp
    - Social proof that your camp delivers results

    ### Content Type #4: FAQ Post

    - Graphic with 3-4 common questions answered
    - "Everything you need to know about [camp name]"
    - Reduces barrier to registration

    ### Content Type #5: Behind-the-Scenes

    - Story/reel of you planning or prepping
    - "Getting ready for camp! Here's what we're working on..."
    - Builds excitement and shows professionalism

    ### Content Type #6: Urgency Post

    - Update on spots remaining
    - Countdown to early bird deadline
    - "Only 5 spots left!" with camp flyer

    <Tip>
      **Video performs best**: Short videos (15-60 seconds) get 3-5x more engagement than static images. Use Instagram Reels or Facebook Reels for maximum reach.
    </Tip>
  </Step>
  <Step title="Leverage Instagram Stories">
    Stories are perfect for daily updates without overwhelming your feed:

    **Story ideas:**

    - Daily countdown to camp
    - "Swipe up to register" (if you have 10k+ followers)
    - Poll: "Which skill are you most excited to work on?"
    - Question sticker: "What questions do you have about camp?"
    - Behind-the-scenes prep
    - Reshare posts from registered families
    - "Spots remaining" updates

    **Story highlights to create:**

    - Create a "Camp [Year]" highlight on your profile
    - Save all camp-related stories here
    - Keeps information accessible even after 24 hours

    <Frame>
      ![Instagram story examples for camp promotion](/images/instagram-story-templates.png)
    </Frame>
  </Step>
  <Step title="Engage your existing athletes' families">
    Your current clients are your best marketers:

    **Email your list:**

    ```text
    Subject: [Kid's Name]'s Coach Has Exciting Summer News! ⚡
    
    Hi [Parent Name],
    
    I wanted you to be the first to know - summer camp registration is open!
    
    [Camp Name] is specifically designed for athletes like [Kid's Name] who want to [benefit/goal]. We'll be working on [skills] over [dates].
    
    EXCLUSIVE: As a current athlete family, use code LOYALTY25 for $25 off registration.
    
    [CTA Button: Register [Kid's Name]]
    
    Spots are limited to [#] athletes and I expect we'll fill up like we did last year.
    
    Questions? Just reply to this email or text me at [number].
    
    See you this summer!
    [Your name]
    ```

    **Text message (if you have permission):**

    ```text
    Hey [Parent Name]! Summer camp registration just opened 🏀 [Kid's Name] would love it! Early bird pricing ends [date]. [shortened URL] Questions? Just reply!
    ```

    **Facebook Group post (if you have one):** Pin the camp announcement to top of group and tag all families.

    <Check>
      **Permission check**: Only contact people who've opted in to receive promotional messages. For email, they should have joined your list. For text, they should have given explicit permission.
    </Check>
  </Step>
  <Step title="Use strategic hashtags">
    Research and use hashtags to reach new families:

    **Hashtag strategy:**

    - 3-5 **niche hashtags** (competitive but targeted)
    - 3-5 **local hashtags** (your city/region + sport)
    - 2-3 **broad hashtags** (high volume)
    - 1-2 **branded hashtags** (your business name)

    **Example hashtag sets:**

    ```text
    Basketball Camp:
    #BasketballCamp #YouthBasketball #BasketballTraining
    #[YourCity]Basketball #[YourCity]Sports #[YourCity]Kids
    #YouthSports #SummerCamp #KidsSports
    #[YourBusinessName] #[YourCoachName]Basketball
    ```

    ```text
    Soccer Camp:
    #SoccerCamp #YouthSoccer #SoccerTraining
    #[YourCity]Soccer #[YourCity]Youth #[YourCity]FC
    #YouthAthletes #SummerCamp #KidsSoccer
    #[YourBusinessName]Soccer
    ```

    <Tip>
      **Research local hashtags**: Search Instagram for "[Your City] youth sports" and see what parents and local organizations are using. Add those to your sets.
    </Tip>
  </Step>
  <Step title="Run a simple paid ad campaign (optional but recommended)">
    Even a small ad budget can significantly boost registrations:

    ### Facebook/Instagram Ads:

    **Budget recommendation**: $10-15/day for 14 days = $140-\$210 total

    **Campaign setup:**

    1. Use your best performing organic post as the ad
    2. Target:
       - Location: 15-25 mile radius of your facility
       - Age: 30-50 (parents of youth athletes)
       - Interests: Youth sports, parenting, [your specific sport]
       - Behaviors: Parents with children ages [your target range]
    3. Objective: "Traffic" (driving to registration page)
    4. Run for 2 weeks during either:
       - Launch phase (to build momentum)
       - OR final 2 weeks (to fill remaining spots)

    **What to expect:**

    - Reach: 5,000-10,000 people
    - Clicks: 150-300 to your registration page
    - Registrations: 3-10 (depending on price and competition)
    - Cost per registration: $14-$70

    <Note>
      **First-time ads?** Start with "Boost Post" button on Facebook/Instagram. It's simpler than Ads Manager and works well for local businesses.
    </Note>
    ### Google Ads (Advanced):

    Only if you have budget (\$300+) and time:

    - Target keywords: "[sport] camp [your city]"
    - Set up conversion tracking for registrations
    - Expect higher cost per click (\$2-5) but more qualified traffic

    <Tip>
      **Free alternative**: Post in local Facebook groups (parenting groups, neighborhood groups, sports groups). Many allow business posts on specific days. Always check group rules first.
    </Tip>
  </Step>
  <Step title="Track what's working">
    Monitor your promotion effectiveness:

    **Metrics to watch:**

    1. **Registration source tracking:**
       - Ask in your form: "How did you hear about us?"
       - Use different URLs for different channels (UTM codes)
       - Track which posts drive the most clicks
    2. **Social media engagement:**
       - Which posts get most likes/comments/shares?
       - Which content types get most engagement?
       - What time/day performs best?
    3. **Conversion metrics:**
       - How many page views before typical registration?
       - What's your landing page bounce rate?
       - Where do parents drop off in registration flow?

    **Adjust as you go:**

    - Double down on what's working
    - Post more of your best-performing content type
    - Increase ad spend if you're getting good cost per registration
    - Address questions/concerns you see in comments

    <Check>
      **Mid-campaign check-in**: At 3-4 weeks before camp, evaluate:

      - Are you on pace to fill spots?
      - If ahead: Consider increasing price or capacity
      - If behind: Increase promotion frequency or run ads
    </Check>
  </Step>
  <Step title="Leverage word-of-mouth incentives">
    Turn registered families into your sales force:

    ### Referral Program Options:

    **Option 1: Friend Discount** "When you refer a friend who registers, you both get \$25 off your camp fee."

    **Option 2: Earn Free Camp** "Refer 3 friends who register and your camp is FREE!"

    **Option 3: Raffle Entry** "Every friend you refer = 1 entry to win [prize: camp gear, private training, etc.]"

    **How to implement:**

    1. Email registered families with unique referral code
    2. They share with friends
    3. Friend uses code at checkout
    4. You track and reward referrer

    <Tip>
      **Make it easy**: Create a simple message they can copy-paste: "We just signed [Child] up for [Coach Name]'s [Sport] camp and they're so excited! Using code FRIEND25 gets you \$25 off. [Link]"
    </Tip>
  </Step>
</Steps>

---

## Phase 6: Pre-Camp Preparation & Communication

The weeks before camp starts are crucial for setting expectations and ensuring smooth operations.

<Steps>
  <Step title="Send welcome email to registered families">
    1 week after registration, send personalized welcome:

    ```text
    Subject: [Child's Name] is Registered! Here's What Happens Next 🎉
    
    Hi [Parent Name],
    
    We're thrilled [Child's Name] will be joining us for [Camp Name]!
    
    NEXT STEPS:
    ✓ Complete waiver & forms (if not done): [link]
       Deadline: [date]
    
    ✓ Mark your calendar: [Camp dates & times]
    
    ✓ Download the CoachIQ app: [links] 
       This is where you'll get daily updates during camp
    
    WHAT TO BRING EACH DAY:
    • Athletic shoes ([specific type if needed])
    • Water bottle
    • Athletic clothing
    • [Sport-specific gear]
    • Lunch/snacks [if not provided]
    
    WHAT WE'LL PROVIDE:
    • Camp t-shirt (we'll have them on Day 1)
    • All training equipment
    • [Any other inclusions]
    
    FIRST DAY LOGISTICS:
    Drop-off: [time and location]
    What to expect: We'll check in athletes, distribute shirts, and dive right into our first skill session!
    
    Questions before camp? Reply to this email or text me at [number].
    
    Can't wait to get started!
    
    [Your name]
    [Your Business Name]
    
    P.S. Got a friend who'd love camp? They can still register: [link]
    ```

    <Note>
      Send this as a CoachIQ automated email or through your regular email platform. Personalize with athlete name if possible.
    </Note>
  </Step>
  <Step title="Create camp schedule and share it">
    2 weeks before camp, send detailed schedule:

    **Create a document showing:**

    - Day-by-day breakdown
    - Specific skills focus each day
    - Time blocks (arrival, training, breaks, departure)
    - What to expect each day

    **Example schedule format:**

    ```
    MONDAY - Fundamentals Day
    9:00am - Check-in & Warm-up
    9:30am - Ball Handling Drills
    10:30am - Shooting Technique
    11:30am - Water Break & Snack
    12:00pm - Small-Sided Games
    1:00pm - Cool Down & Wrap-up
    1:30pm - Pick-up
    
    TUESDAY - Offensive Skills
    [Similar breakdown]
    
    [etc. for each day]
    ```

    <Tip>
      **Parent peace of mind**: Detailed schedules show professionalism and help parents plan their days. They also reduce "What's happening today?" questions.
    </Tip>
  </Step>
  <Step title="Send reminder sequence">
    Set up these automated reminders:

    **7 days before:**

    ```
    Subject: [Camp Name] Starts in One Week! 🎉
    
    Reminder: Camp begins [day/date] at [time]
    
    Action items:
    □ Forms completed? Check your email for completion link
    □ Calendar marked? [Dates and times]
    □ Supplies ready? [Quick checklist]
    
    First day location: [Address with Google Maps link]
    Parking: [Instructions]
    
    See you next [day of week]!
    ```

    **48 hours before:**

    ```
    Subject: [Child's Name] - Camp Starts in 2 Days!
    
    Quick reminders:
    ✓ Drop-off: [Day] at [time]
    ✓ Location: [Address]
    ✓ Bring: [Essential items only]
    ✓ Weather: [Current forecast with indoor/outdoor confirmation]
    
    Forms deadline: TODAY
    Complete here: [link]
    
    Questions? Text me: [number]
    ```

    **Night before:**

    ```
    Subject: See You Tomorrow, [Child's Name]! ☀️
    
    Tomorrow's the day! 🎉
    
    ⏰ Drop-off: [Time] (please arrive 10 min early for check-in)
    📍 Location: [Address] - [Parking instructions]
    🎽 Bring: [Top 3 essential items]
    
    Weather: [Forecast] - We're [indoor/outdoor status]
    
    I'll be at the entrance starting at [time] to welcome everyone!
    
    Let's do this!
    [Your name]
    ```
  </Step>
  <Step title="Prepare camp materials">
    Final logistics 3-5 days before:

    **Athlete materials:**

    - T-shirts organized by size
    - Name tags or check-in roster
    - Waivers printed (backup if digital fails)
    - Emergency contact cards
    - Attendance sheets for each day

    **Training materials:**

    - Equipment inventory checked
    - Drills planned for each day
    - Groups/teams determined (if applicable)
    - Awards/certificates designed (for final day)
    - Music playlist ready (if using)

    **Communication setup:**

    - CoachIQ app ready for daily photo posts
    - Group chat or communication method established
    - Emergency contact phone tree created
    - "Day 1 Recap" message template prepared

    <Check>
      **Safety check**: Walk through facility and verify:

      - First aid kit stocked and accessible
      - Emergency exits clear
      - Bathrooms clean and stocked
      - Temperature controls working (especially in summer heat)
      - All equipment safe and functional
    </Check>
  </Step>
  <Step title="Day 1 excellence sets the tone">
    Make the first day special:

    **Arrival experience:**

    1. Welcome sign at entrance
    2. Check-in table with roster
    3. Name tags ready
    4. Upbeat music playing
    5. You greeting every athlete and parent personally

    **First 30 minutes:**

    - Distribute t-shirts
    - Group ice-breaker activity
    - Set expectations and rules
    - Get everyone moving immediately

    **End of Day 1:**

    - Send photo recap via CoachIQ: "Day 1 in the books! Here's what we worked on today..."
    - Brief video message summarizing day
    - Preview tomorrow's focus

    <Tip>
      **Photos are marketing gold**: Take tons of photos every day. Post 3-5 to social media with parents tagged (permission required). This markets future camps automatically.
    </Tip>
  </Step>
</Steps>

---

## Ongoing Optimization

<AccordionGroup>
  <Accordion title="How to increase camp prices over time">
    As you build reputation and demand:

    **Year 1**: Price competitively ($199-$299 for week-long camp) **Year 2**: Increase 10-15% based on demand ($219-$349) **Year 3+**: Price based on value, not competition ($299-$499+)

    **Justify increases with:**

    - Smaller group sizes
    - Additional inclusions (meals, equipment, extra days)
    - Enhanced curriculum
    - Proven results/testimonials
    - Facility upgrades

    <Note>
      **Grandfather pricing**: Offer returning families discount as loyalty reward while raising prices for new families.
    </Note>
  </Accordion>
  <Accordion title="When to add multiple sessions or camps">
    **Add second session when:**

    - First session fills 3+ weeks before camp
    - You have 10+ waitlist requests
    - You can maintain quality with back-to-back sessions

    **Add different camp types when:**

    - Requests for different age groups
    - Requests for different skill levels
    - Requests for different sports/specialties
    - You want to extend season (fall, winter, spring camps)

    **Expansion strategy:** Start with one successful camp format → Add second session → Add different age group → Add new camp type
  </Accordion>
  <Accordion title="How to handle common issues">
    **Cancellations:**

    - Enforce refund policy consistently
    - Offer transfer to friend or future camp
    - Keep waitlist active to fill spots

    **Behavioral problems:**

    - Address immediately and privately
    - Contact parents same day
    - Document incidents
    - Follow through on consequences in your policies

    **Low registration:**

    - Extend early bird pricing
    - Increase social media promotion
    - Offer sibling/friend discounts
    - Consider shortening camp or reducing price
    - For future: start promotion earlier (8-10 weeks minimum)

    **Weather issues:**

    - Always have indoor backup plan
    - Communicate changes immediately via text/app
    - Never cancel without makeup plan
    - Consider refund policy for multi-day cancellations
  </Accordion>
  <Accordion title="Post-camp follow-up for future success">
    **Within 24 hours of final day:**

    - Thank you email with highlight photos
    - Request reviews/testimonials
    - Survey: "What did [Child] enjoy most?"

    **One week after:**

    - Offer continuing training programs
    - Early bird offer for next year's camp
    - Referral incentive

    **One month after:**

    - Check-in: "How is [Child] doing?"
    - Share success stories from camp
    - Ask for video testimonials

    **6 months before next camp:**

    - "Save the date" to previous families
    - Super early bird pricing
    - Priority registration window
  </Accordion>
  <Accordion title="How to scale to multiple locations">
    **Prerequisites:**

    1. Successfully run same camp 2+ years
    2. Have repeatable systems documented
    3. Profitable at current scale
    4. 6+ months of operational cash flow

    **Expansion process:**

    1. Hire and train assistant coach thoroughly
    2. Test assistant running camp under your supervision
    3. Document every detail of operations
    4. Clone successful camp to new location
    5. You manage both + quality control

    **Success metrics before next expansion:**

    - Both camps profitable
    - Quality maintained
    - Systems documented
    - Team trained
    - Customer satisfaction \>4.5/5
  </Accordion>
</AccordionGroup>

---

## Quick Reference Checklist

<Steps>
  <Step title="8 weeks before camp">
    - Create camp product in CoachIQ
    - Set pricing and capacity
    - Create waiver form
    - Create registration form
    - Build landing page
    - Design camp flyer
    - Launch social media promotion
    - Send email to existing athlete families
  </Step>
  <Step title="4 weeks before camp">
    - Continue social media posts (3-5x weekly)
    - Send early bird deadline reminders
    - Start paid ads (if using)
    - Share testimonials and social proof
    - Post behind-the-scenes content
  </Step>
  <Step title="2 weeks before camp">
    - Send detailed camp schedule to families
    - Finalize t-shirt orders
    - Confirm facility reservation
    - Inventory equipment
    - Create check-in system
    - Urgency marketing (spots remaining)
  </Step>
  <Step title="1 week before camp">
    - Send 7-day reminder email
    - Verify all forms completed
    - Print necessary materials
    - Prepare first-day welcome
    - Test check-in process
    - Final social media push
  </Step>
  <Step title="48 hours before camp">
    - Send final reminder
    - Check weather forecast
    - Confirm indoor/outdoor plans
    - Organize athlete materials
    - Set up communication channels
    - Last call for stragglers post
  </Step>
  <Step title="Day before camp">
    - Send night-before message
    - Final facility walk-through
    - Review emergency procedures
    - Prepare Day 1 agenda
    - Get a good night's sleep!
  </Step>
</Steps>

---

## Pro Tips for Maximum Success

<CardGroup cols={2}>
  <Card title="Start Early" icon="calendar-days">
    Begin promotion 8-10 weeks before camp. Earlier = more time for word-of-mouth and better decision-making from parents.
  </Card>
  <Card title="Price Confidently" icon="dollar-sign">
    Don't be the cheapest option. Competitive pricing with clear value builds credibility. Parents associate price with quality.
  </Card>
  <Card title="Photos are Everything" icon="camera">
    Take 50+ photos every camp day. Use for social media, testimonials, and marketing future camps. They're your most valuable asset.
  </Card>
  <Card title="Over-Communicate" icon="messages">
    Send more updates than you think necessary. Parents appreciate knowing what's happening. Use CoachIQ app for daily recaps.
  </Card>
  <Card title="First Day Counts" icon="star">
    Make Day 1 special with welcome signs, energy, and immediate fun. First impressions determine reviews and referrals.
  </Card>
  <Card title="Ask for Reviews" icon="heart">
    Within 24 hours of camp ending, send review request with direct links. 5-star reviews are your best marketing tool for next year.
  </Card>
  <Card title="Build Your List" icon="envelope">
    Every camp registration is an email subscriber. Nurture this list year-round for easy promotion of future camps.
  </Card>
  <Card title="Document Everything" icon="clipboard-check">
    Create systems and checklists for everything. Makes Year 2 easier and enables scaling to multiple camps/locations.
  </Card>
</CardGroup>

---

## Still Have Questions?

<CardGroup cols={2}>
  <Card title="Join Office Hours" icon="users">
    Get live help from our team

    [Register for Office Hours →](#)
  </Card>
  <Card title="Contact Support" icon="headset">
    Have a specific question? Our team is here to help

    [Get Help →](#)
  </Card>
</CardGroup>

---

## Related Articles

- [How to Create Products and Pricing in CoachIQ](#)
- [Building High-Converting Landing Pages](#)
- [Forms & Waivers: Complete Guide](#)
- [Social Media Marketing for Coaches](#)
- [Payment Processing & Refund Policies](#)
- [Using the CoachIQ Mobile App](#)
- [Email Marketing Best Practices](#)

---

<Check>
  **You're ready!** Follow this guide step-by-step and you'll have a professional camp registration system that makes you look like a million bucks and fills your spots fast. Your first camp might feel overwhelming, but trust the process - it gets easier every time.
</Check>

<Tip>
  **Bookmark this guide**: You'll reference it every time you set up a new camp. As you go through the process, note any custom adjustments for your specific sport or situation.
</Tip>