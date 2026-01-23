# November 2025 Changelog - DRAFT

This is the draft for the November 2025 changelog. Review and then copy to help-center/changelog.mdx.

---

## Mintlify Format (copy below this line):

```mdx
<Update label="November 2025">

## API & Integrations

**Custom Fields via API**
You can now read and write custom fields through the CoachIQ API. This opens up powerful integrations - for example, when a lead comes in from Facebook Ads, you can automatically populate custom fields like "source: FB Ads" or UTM campaign data directly into athlete profiles.

**Tags via API**
Add and remove tags from athlete profiles through external systems. Combined with custom fields, this enables fully automated lead tracking and segmentation from your marketing tools.

**Phone Number Import Fix**
Fixed an issue with adding phone numbers via N8N and other integration tools.

---

## Payments & Transactions

**Transaction Sync Improvements**
Resolved issues where recent transactions weren't displaying correctly between Stripe and CoachIQ. Your transaction history now stays in sync reliably.

**Rollover Credits Fix**
Fixed an issue where rollover credits were being granted even when the subscription was configured not to allow them.

---

## Scheduling

**Booking Error Fix**
Resolved an issue where athletes were receiving "another athlete booked" errors when trying to complete checkout, even when the session was available.

**Reminder Message Fix**
Fixed an issue where athletes were receiving reminder messages that didn't match the scheduler's configured reminder settings.

---

## Native App (iOS & Android)

We shipped several important fixes to improve the mobile experience this month.

**Inbox Fix**
Fixed an issue where user names were displaying as the admin's name in inbox conversations.

---

## Notifications

**Delivery Fix**
Resolved an issue affecting notification delivery for some organizations. All athletes should now receive their booking confirmations, reminders, and announcements reliably.

---

## Video & Media

**Video Encoder Update**
Updated the video encoding system to improve reliability when processing uploaded content. Videos should now process more consistently across all formats.

**Program Video Playback**
Fixed an issue where some videos weren't playing within programs, even though they worked in the Media Hub.

---

## Website Builder

**Blog Improvements**
- Removed featured image duplication (now only shows on blog list, not individual posts)
- Fixed YouTube video embeds that had stopped working

---

## Athlete Portal

**Access Fix**
Resolved an issue where some athletes were unable to access the athlete portal and were seeing an error screen instead.

---

## iOS Specific

**Scroll Fix**
Fixed a UX issue on iOS where scrolling behavior wasn't working correctly in certain views.

</Update>
```

---

## Notes for Review:

### Tickets Included (November 2025):
- COA-389: "Another athlete booked" error (11/27)
- COA-384: Reminder message mismatch (11/24)
- COA-378: Rollover credits bug (11/22)
- COA-375: Stripe/CIQ transaction sync (11/21)
- COA-369: Native inbox name display (11/17)
- COA-366: Video encoder update (11/14)
- COA-365: Videos not playing in programs (11/13)
- COA-361: Transaction display sync (11/12)
- COA-352: N8N phone number import (11/11)
- COA-348: Website builder blog updates (11/09)
- COA-347: Athlete portal access fix (11/07)
- COA-341: iOS scroll issue (11/05)
- COA-340: Recent transactions not available (11/04)
- COA-339: API read/write + custom fields (11/03)

### Moved to December (released in Dec despite Nov ticket #):
- COA-383: Product-specific coupon config (released 11/28 but part of Dec coupon update)
- COA-393: Native session dates order (released 12/08)
- COA-372: Native crash adding credits (released 12/01)

### Items NOT included (internal/support tasks):
- COA-387: Manual user info updates (support task)
- COA-368: Product deletion investigation (no bug found)
- COA-344: Spelling error (likely user error)

### Potential Help Center Links to Add:
- Payments: /payments/transactions
- Scheduling: /scheduling/calendar-overview-and-navigation
- Programs: /content/programs-overview
- Notifications: /scheduling/session-reminders
