# December 2025 Changelog - DRAFT

This is the draft for the December 2025 changelog. Review and then copy to help-center/changelog.mdx.

---

## Mintlify Format (copy below this line):

```mdx
<Update label="December 2025">

## Automations: Major Upgrade

We shipped a significant update to Automations this month, giving you more power to automate your business workflows.

### New Features

**Session Notes & Custom Fields in Automations**
You can now include session notes and athlete custom fields (like skill level, position, or training focus) in your automated messages. Perfect for sending personalized session reminders with context about each athlete.

**Booking Notes**
Add notes to individual sessions or entire recurring booking series. Great for tracking athlete-specific information, session goals, or occurrence-specific details. Notes are visible from your calendar and can be used in automations.

**Wait/Delay Actions**
Create timed sequences in your automations. For example: send a welcome email immediately, then follow up with a training tips message 3 days later.

**Scheduled Check Trigger**
Run automations on a recurring schedule (daily, weekly, etc.) to check conditions across your athlete base. Use this to automatically tag athletes based on subscription status, send weekly check-ins, or manage credits.

### Bug Fixes
- Fixed issues with email, SMS, and in-app message actions not sending correctly
- Resolved errors when adding tags to users via automation
- Fixed announcement sending errors
- Wait/delay duration can now be adjusted properly
- Trash icon now works correctly under wait/delay conditions
- Product list UI no longer overlaps in automation builder
- Scheduled check trigger now saves and fires correctly

---

## Scheduling Improvements

**Booking Notes**
Add notes directly to bookings from your calendar. Notes can be added when creating a booking or edited afterward. Perfect for tracking session goals, athlete preferences, or special instructions.

### Bug Fixes
- Fixed an issue where notes weren't saving when first creating a booking
- Resolved a bug where free schedulers were incorrectly asking for credits

---

## Payments & Billing

**Revenue Sharing Fix**
Products with revenue sharing enabled now correctly display sales data in the original organization, not just the partner org.

**Transactions Page Default**
The transactions page now defaults to showing 90 days instead of 7 days, so you see more of your payment history without having to change filters.

### Bug Fixes
- Fixed sync issues between Stripe and CoachIQ for transactions
- Resolved cases where payments showed in Stripe but not CoachIQ (and vice versa)
- Fixed subscription cancellation toggle not being respected
- Investigated and resolved double charge reports

---

## Coupons

**Multi-Product Coupons**
You can now select multiple products when restricting a coupon, making it easier to run promotions across related offerings without creating separate coupons for each.

---

## Website Builder

**Navigation Fix**
Fixed an issue where navigation links were all redirecting to the home page instead of their assigned destinations.

**Header/Logo Overlap**
Resolved UI issue where the header and navigation were overlapping with logos on some websites.

**Subheading Font Weight**
Increased the font weight on all subheadings so they stand out better without manual bolding.

**Apostrophe Handling**
Fixed an issue where apostrophes copied from Google Docs weren't transferring correctly to website builder fields.

---

## Native App (iOS & Android)

We shipped several stability and UX improvements to the mobile app this month.

### Bug Fixes
- Fixed crash when searching in Media Hub
- Fixed crash when adding credits from the scheduler
- Resolved issue where changing a single occurrence of a recurring booking wasn't saving
- Fixed session dates displaying in non-chronological order and repeating

---

## Inbox & Messaging

**SMS Message Linking**
Fixed an issue where incoming SMS messages were appearing as "guest" instead of being linked to the correct athlete profile.

**Coach Role Messages**
Resolved a bug where messages from coach roles were being sent to admins instead of the intended athletes.

**Phantom SMS Fix**
Fixed an issue where some organizations were seeing SMS messages in their inbox despite not having SMS enabled.

---

## Programs & Content

### Bug Fixes
- Resolved access issues for free programs

---

## Forms

**Profile Link Fix**
Clicking on a user within form responses now correctly opens their profile instead of redirecting to the dashboard.

**Athlete Portal Redirect**
Fixed an issue where embedded forms weren't redirecting to the athlete portal after submission, even when configured to do so.

---

## People / CRM

**Bank Credit Display**
Added a toggle to display bank credit amounts in the people archive view.

---

## Media Hub

**Video/Image Filter**
Added the ability to filter by video or image in the media center popup within Website Builder, making it easier to find specific content.

**Search Results Fix (Native)**
Fixed issue where search results weren't populating correctly on the native app.

---

## Help Center Launch

We launched the new CoachIQ Help Center with comprehensive documentation:
- ~80 feature articles
- Step-by-step workflow guides
- Business playbooks
- Power-up documentation

Visit [help.coachiq.com](https://help.coachiq.com) for all documentation.

</Update>
```

---

## Notes for Review:

### Tickets Included (December 2025):
- COA-471: Navigation links bug (12/31)
- COA-395: Help Center launch (12/29)
- COA-458: Coach role messages bug (12/29)
- COA-462: Subscription sync issue (12/29)
- COA-414: Session notes & custom fields (12/28)
- COA-457: Custom field refs (12/28)
- COA-456: Booking notes (12/26)
- COA-445: Automation quiz error (12/22)
- COA-444: Subscription cancel toggle (12/22)
- COA-420: Product list UI overlap (12/22)
- COA-418: Automation testing error (12/22)
- COA-427: Scheduled check trigger error (12/21)
- COA-441: Trash icon in wait/delay (12/21)
- COA-416: Wait/delay duration (12/21)
- COA-417: Email automation error (12/20)
- COA-442: Tag action error (12/20)
- COA-439: Apostrophe copy issue (12/18)
- COA-423: SMS automation error (12/17)
- COA-422: In-app message error (12/17)
- COA-433: Double charges review (12/16)
- COA-431: Payment sync (CIQ but not Stripe) (12/15)
- COA-401: Subheading font weight (12/14)
- COA-425: SMS not attached to account (12/14)
- COA-426: Payment sync (Stripe but not CIQ) (12/14)
- COA-421: Native search results (12/12)
- COA-419: Announcement error (12/11)
- COA-415: Header/logo overlap (12/10)
- COA-413: Free program access (12/09)
- COA-400: Media filter by type (12/09)
- COA-411: Multi-product coupons (12/08)
- COA-373: Native recurring booking edit (12/08)
- COA-405: Native media hub crash (12/08)
- COA-393: Native session dates order (12/08)
- COA-406: Form redirect to portal (12/05)
- COA-385: Bank credit display toggle (12/03)
- COA-380: Transaction page 90 day default (12/03)
- COA-398: Form response profile link (12/03)
- COA-396: Phantom SMS messages (12/01)
- COA-372: Native crash adding credits (12/01)

### Items NOT included (internal/support tasks):
- COA-428: Delete user contacts (manual support task)
- COA-455: Help center article correction (internal)
- COA-367: Tax collection (internal setup, not feature)
- COA-394: Notification delivery (moved to Nov - was 12/01 but related to Nov work)
- Various "needs further review" items

### Potential Help Center Links to Add:
- Automations: /automations/what-are-automations
- Scheduling: /scheduling/calendar-overview-and-navigation
- Payments: /payments/product-overview
- Coupons: /payments/coupon-overview
- Forms: /forms/overview
- Programs: /content/programs-overview
