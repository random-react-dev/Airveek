# Airveek PMS Landing Page Strategy

Date: 2026-06-26  
Target product: Airveek Hotel PMS  
Reference implementation reviewed: `F:\Airvik-dyad`  
Current marketing repo reviewed: `F:\airveek`

## 1. Goal

Build a clean, modern, professional landing page that sells Airveek as a practical Hotel PMS for independent hotels, resorts, guest houses, boutique stays, homestays, service apartments, and wellness properties.

The page should make hotel owners feel three things quickly:

- Airveek already comes from a real hotel booking/admin workflow, not a generic mockup.
- The software covers daily hotel operations: bookings, calendar, rooms, guests, payments, housekeeping, reports, staff roles, and audit history.
- A 30-day trial is low-risk because the Airveek team will help configure the property, learn the hotel's workflow, and build custom features when needed.

## 2. Research Scope

The research pass used 15+ targeted web searches around hotel PMS competitors, PMS pricing/trial messaging, channel manager positioning, small-hotel PMS positioning, and booking engine workflows.

Competitor/product pages reviewed or referenced:

- Cloudbeds hotel management software: https://www.cloudbeds.com/hotel-management-software/
- Cloudbeds pricing: https://www.cloudbeds.com/pricing/
- Mews property management system: https://www.mews.com/en/products/property-management-system
- Mews pricing: https://www.mews.com/en/pricing
- SiteMinder pricing: https://www.siteminder.com/pricing/
- Little Hotelier PMS: https://www.littlehotelier.com/property-management-system/
- Little Hotelier pricing: https://www.littlehotelier.com/pricing/
- Hotelogix: https://www.hotelogix.com/
- eZee Absolute: https://www.ezeeabsolute.com/
- innRoad: https://www.innroad.com/
- RoomRaccoon: https://roomraccoon.com/
- Booking.com Connectivity APIs: https://developers.booking.com/connectivity/docs
- Google Hotel Prices ARI overview: https://developers.google.com/hotels/hotel-prices/dev-guide/ari-overview
- Airbnb software partners: https://www.airbnb.com/software-partners
- Agoda Developer Supply: https://developer.agoda.com/supply
- Go-MMT channel manager mapping: https://ingommt.goibibo.com/support/solutions/articles/81000197192-how-can-i-map-my-property-s-channel-manager-with-ingo-mmt-extranet-

## 3. Competitor Pattern Summary

Strong PMS landing pages usually repeat the same conversion structure:

- A hero section with a simple operational promise, not abstract SaaS language.
- Real product UI screenshots above the fold or immediately after the hero.
- Trust proof through hotel count, integration count, OTA logos, support promises, or customer stories.
- Feature sections grouped by hotel workflow, not by technical modules.
- Pricing or plan direction near the middle/end, with a clear trial/demo CTA.
- Onboarding and support content that reduces migration anxiety.
- Security, payments, and data ownership content for serious buyers.
- FAQ that answers trial, setup, pricing, channel manager, training, and customization questions.

Airveek should not copy the large-enterprise tone of global PMS tools. The stronger positioning is:

> "A hotel PMS built from a live Indian hotel workflow, simple enough for daily staff, flexible enough for custom property operations."

## 4. Existing Airveek Product Inventory

The `F:\Airvik-dyad` project is currently specific to Sahajanand Wellness, but it already contains many PMS-relevant workflows that can be used as marketing proof.

Useful existing modules:

- Admin dashboard with occupancy, arrivals, departures, available rooms, drag-and-drop layout, sticky notes, and calendar.
- Reservation list with search, status filters, pagination, grouped multi-room bookings, cancel/check-in/check-out actions, payment balance display.
- Booking calendar / availability calendar.
- Room types, room categories, rooms, amenities, seasonal prices, and rate plans.
- Guest management.
- Payments dashboard with Google Sheet transaction import, QR download, refresh, payment attach flow, booking links, and daily collection summary.
- Housekeeping page with room status filters and room status cards.
- Reports with bookings, occupancy, and revenue tabs.
- Settings with property profile, closures, roles and permissions, users, amenities, billing placeholder, and CSV import tools.
- Activity logs and permission gates.
- Invoice, receipt, payment request, cash payment, credit note, and payment reconciliation code paths.

Recommended product visuals to capture:

- `/admin/dashboard`: main product hero screenshot.
- `/admin/calendar`: booking calendar proof.
- `/admin/reservations`: reservations workflow proof.
- `/admin/payments`: payments and reconciliation proof.
- `/admin/housekeeping`: mobile/staff operations proof.
- `/admin/reports`: owner reporting proof.
- `/admin/settings`: onboarding, roles, and property setup proof.
- `F:\Airvik-dyad\payments-page.png`: can be used as a payment-workflow visual if current and polished.

Use Sahajanand Wellness as a case-study/pilot proof, but do not make the full landing page feel like one client's website.

## 5. Recommended Page Structure

### Section 1: Sticky Navigation

Purpose: Give quick access to major buyer questions.

Navigation items:

- Product
- Features
- Comparison
- Pricing
- Trial
- FAQ

Primary CTA: `Start 30-Day Trial`  
Secondary CTA: `Book Demo`

UI/UX:

- White sticky header with subtle border.
- Airveek logo on the left.
- Compact desktop nav.
- Mobile menu with the same CTA buttons.
- Avoid heavy dropdowns unless there are many pages.

### Section 2: Hero

Purpose: Explain the product in the first 5 seconds.

Recommended headline:

> Hotel PMS software built for faster bookings, cleaner operations, and happier hotel teams.

Supporting copy:

> Airveek brings reservations, room calendar, guests, payments, housekeeping, reports, and staff roles into one simple workspace. Start with a 30-day trial and shape the workflow around your property.

Primary CTA: `Start 30-Day Trial`  
Secondary CTA: `Watch Product Tour`

Proof badges:

- 30-day guided trial
- Setup support included
- Built from a live hotel workflow
- Custom features available

Visual:

- Use a real dashboard screenshot from Airvik-dyad.
- Place the screenshot in a polished product frame.
- Add 2-3 floating metric chips only if they do not make the design look noisy:
  - `72% occupancy`
  - `18 arrivals today`
  - `Payments synced`

UI/UX:

- First viewport should clearly show "Airveek PMS" and the product UI.
- Avoid generic hotel lobby stock imagery as the main visual.
- Keep copy direct and operational.

### Section 3: Trust Strip

Purpose: Create immediate confidence before deeper selling.

Content:

- `30-day trial`
- `Guided onboarding`
- `Role-based access`
- `UPI/cash/payment workflows`
- `Booking.com / Google / OTA-ready roadmap`
- `Custom workflow support`

UI/UX:

- Use a horizontal strip with small icons and short labels.
- Do not overclaim live OTA integrations unless they are production-ready.
- Phrase OTA messaging as "ready to connect" or "channel-manager roadmap" until certified integrations exist.

### Section 4: Product Proof Reel

Purpose: Show that the product is real and usable.

Layout:

- Large center screenshot/video.
- Thumbnail tabs below or beside it:
  - Dashboard
  - Calendar
  - Reservations
  - Payments
  - Housekeeping
  - Reports

Each tab should show:

- A real screenshot or short silent video.
- A one-line workflow explanation.
- 3 feature bullets.

UI/UX:

- Use real admin screenshots captured with clean demo data.
- Blur or replace sensitive guest names, phone numbers, payment references, and revenue values if using production-like data.
- Keep the product visual crisp and readable, not dark/blurred.

### Section 5: Problem Section

Purpose: Make the buyer feel understood.

Recommended heading:

> Hotel work becomes messy when every team uses a different system.

Problems to show:

- Reception tracks bookings in spreadsheets or WhatsApp.
- Staff cannot quickly see which rooms are ready.
- Payments are difficult to match with bookings.
- Owners need daily occupancy and revenue visibility.
- OTA/direct booking updates create overbooking risk.
- Every hotel has small workflow differences that generic PMS tools do not support.

UI/UX:

- Use six compact problem cards.
- Keep them text-light.
- Use icons, not decorative illustrations.

### Section 6: Core PMS Feature Grid

Purpose: Present the full product surface.

Pinned features:

- Front desk PMS
- Booking calendar
- Reservations and guest profiles
- Room and rate management
- Payments and dues
- Housekeeping
- Reports and owner dashboard
- Roles and permissions
- Activity logs
- Property setup
- Custom workflows
- Channel manager readiness

UI/UX:

- Use a dense but clean grid.
- Each feature should have a strong verb-led line:
  - "Create and manage bookings"
  - "Track every room by date"
  - "Match payments to bookings"
  - "Assign staff access by role"

### Section 7: Booking Calendar And Reservations

Purpose: Make the most important PMS workflow tangible.

Content:

- Room-wise calendar.
- Arrivals, departures, in-house guests, room holds, cancellations, no-shows.
- Multi-room booking visibility.
- Check-in/check-out actions.
- Search and status filters.

Visual:

- Use `/admin/calendar` or `/admin/reservations` screenshot.

UI/UX:

- Use a split section: text on one side, large product screenshot on the other.
- On mobile, screenshot comes after the copy.
- Include a small workflow timeline:
  - New booking -> Room assigned -> Payment tracked -> Check-in -> Check-out -> Room dirty/clean.

### Section 8: Payments, UPI, Cash, And Invoices

Purpose: Differentiate Airveek for Indian hotel workflows.

Content:

- UPI/QR payment support.
- Cash payment recording.
- Payment request and payment attach flow.
- Google Sheet transaction import/reconciliation if the customer uses bank/payment exports.
- Balance due visibility.
- Invoice/receipt workflows.
- Credit notes where applicable.

Visual:

- Use the payments page screenshot or `payments-page.png`.

UI/UX:

- Use a strong metric-style card: "Know what is paid, pending, and unmatched."
- Show payment states with badges: `Paid`, `Pending`, `Attached`, `Unmatched`.
- Avoid promising legal GST compliance unless tax rules are fully configurable and verified.

### Section 9: Housekeeping And Room Readiness

Purpose: Show operational coordination beyond booking entry.

Content:

- Room statuses: clean, dirty, inspected, maintenance.
- Housekeeping assignment direction.
- Room readiness before check-in.
- Front desk and housekeeping share one view.

Visual:

- Use `/admin/housekeeping` screenshot.

UI/UX:

- Make this section lighter and mobile-friendly.
- Show a phone-size mockup only if the actual UI is responsive and readable.

### Section 10: Reports And Owner View

Purpose: Appeal to owners and managers.

Content:

- Occupancy.
- Revenue.
- Bookings report.
- Arrivals/departures.
- Pending dues.
- Payment collections.
- Export-ready reports.

Visual:

- Use dashboard and reports screenshots.

UI/UX:

- Use a calm analytics layout.
- Show sample KPIs in small cards.
- Avoid oversized charts with fake precision.

### Section 11: Property Types

Purpose: Help different buyers identify themselves.

Property cards:

- Independent hotels
- Resorts
- Boutique hotels
- Guest houses
- Wellness stays
- Service apartments
- Homestays
- Dharamshala/ashram stays, only if this is a real target segment

UI/UX:

- Use simple cards with one line per property type.
- Do not make this section too decorative.
- For each property type, mention one operational fit.

### Section 12: Comparison Section

Purpose: Explain why Airveek is better for the target buyer.

Recommended heading:

> Why hotels choose Airveek instead of a generic PMS.

Comparison columns:

- Generic PMS
- Manual spreadsheets
- Airveek PMS

Rows:

- Setup
- Daily usability
- Local payment workflow
- Custom feature support
- Trial experience
- Owner visibility
- Staff roles
- Future channel manager readiness

Suggested positioning:

- Generic PMS tools can be powerful but may feel heavy, expensive, or less flexible for smaller independent hotels.
- Spreadsheets are flexible but create payment, room-status, and overbooking risk.
- Airveek focuses on practical daily hotel workflows and custom adaptation during trial.

UI/UX:

- Use a comparison table.
- Keep the Airveek column visually highlighted.
- Avoid attacking competitors by name.

### Section 13: 30-Day Guided Trial

Purpose: Convert cautious buyers.

Recommended heading:

> Try Airveek with your real hotel workflow for 30 days.

Trial flow:

1. Setup call: rooms, rates, staff roles, payment modes, booking sources.
2. Demo data or real workflow setup.
3. Team training for reception/manager/housekeeping.
4. Daily trial usage.
5. Workflow review.
6. Custom feature estimate if needed.

CTA: `Start 30-Day Trial`

UI/UX:

- Use a six-step horizontal timeline on desktop.
- Use vertical steps on mobile.
- Add a small note: "No long-term commitment during trial."

### Section 14: Pricing

Purpose: Give enough clarity without locking the business too early.

Recommended structure:

- Starter: small properties, core PMS, trial onboarding.
- Growth: more rooms, payments, reports, housekeeping, priority support.
- Custom: multi-property, custom workflows, integrations, dedicated onboarding.

Possible pricing basis:

- Per property + room-count tier.
- Add-ons for channel manager, custom booking engine, custom reports, integrations, and dedicated infrastructure.

Important:

- If final pricing is not confirmed, show "Starting from" or "Talk to us" instead of fake exact prices.
- Include the 30-day trial in all plans.
- Mention setup support clearly.

UI/UX:

- Three pricing cards.
- Keep the recommended plan visually highlighted.
- Add a pricing FAQ below the cards.

### Section 15: Custom Features And Implementation Partnership

Purpose: Turn customization from risk into value.

Content:

- During trial, Airveek observes the hotel's workflow.
- If a custom feature is needed, the team scopes it clearly.
- Examples:
  - Custom invoice format
  - Property-specific payment matching
  - Staff approval flows
  - Custom reports
  - Special booking rules
  - Website booking flow
  - Integration with accounting or CRM tools

UI/UX:

- Use a "Request -> Scope -> Build -> Train -> Go live" process.
- Keep it professional; do not make it sound like every client gets unlimited custom work for free.

### Section 16: Channel Manager And Direct Booking Roadmap

Purpose: Address the buyer's OTA concern without overclaiming.

Content:

- Direct website booking engine readiness.
- Booking source tracking.
- OTA/channel-manager-ready room/rate architecture.
- Future mapping for Booking.com, Google Hotels, Agoda, Expedia, Airbnb, MakeMyTrip/Goibibo.
- Explanation that real OTA connectivity depends on platform approvals and hotel authorization.

UI/UX:

- Use OTA logos only as "planned/compatible roadmap" if integrations are not live.
- Use labels such as `Roadmap`, `Setup support`, or `Connection-ready`.
- Do not say "live sync" until real production sync exists.

### Section 17: Security, Roles, And Data Control

Purpose: Build trust for owners and managers.

Content:

- Role-based staff access.
- Permission gates.
- Activity logs.
- Private document/storage roadmap.
- Property-level data isolation roadmap for SaaS.
- Secure payment handling.
- No public exposure of guest/reservation data in the future multi-client PMS.

UI/UX:

- Use a calm, serious design.
- Include a small architecture-style graphic only if simple.
- Avoid overclaiming compliance certifications unless obtained.

### Section 18: Sahajanand Wellness Pilot Case Study

Purpose: Show real-world origin.

Recommended heading:

> Built from a real hotel and wellness-stay workflow.

Content:

- Sahajanand Wellness used as the first workflow foundation.
- Booking, payment, room, housekeeping, report, and admin needs shaped the product.
- Airveek is now being generalized for multi-client hotel use.

Visual:

- Use one clean screenshot from the admin system.
- Optionally add a short video walkthrough from the current admin panel.

UI/UX:

- Keep client branding secondary.
- Do not mix too many public website images from the wellness property into the SaaS landing page.

### Section 19: FAQ

Purpose: Remove final objections.

Questions:

- What happens in the 30-day trial?
- Do you help set up rooms, rates, and staff accounts?
- Is Airveek only for Sahajanand Wellness?
- Can Airveek work for multiple hotels?
- Can I request custom features?
- Does it support UPI/cash payments?
- Does it support OTA/channel manager sync?
- Can my staff use it on mobile?
- Can we migrate from spreadsheets or another system?
- Is pricing based on room count?

UI/UX:

- Accordion layout.
- Keep answers short and direct.
- Add CTA after the FAQ.

### Section 20: Final CTA

Purpose: Close with one clear action.

Recommended heading:

> Start your 30-day Airveek PMS trial.

Supporting copy:

> We will help map your rooms, booking sources, payment process, and staff workflow so you can test Airveek with real hotel operations.

CTA buttons:

- `Start 30-Day Trial`
- `Book Demo`

UI/UX:

- Strong but simple section.
- Use product screenshot background or clean white/orange brand treatment.
- Avoid generic stock photo backgrounds.

## 6. Visual Design Direction

Overall feel:

- Professional SaaS.
- Operational and trustworthy.
- Clean enough for hotel owners.
- Not too playful, not too enterprise-heavy.

Recommended palette:

- Keep Airveek orange as the action color.
- Use white, off-white, black, graphite, and muted green/blue for status accents.
- Avoid a page dominated only by orange/beige tones.

Typography:

- Use the existing Host Grotesk direction from `F:\airveek`.
- Use strong but compact headings.
- Do not use hero-sized text inside cards or dashboard panels.

Layout:

- Use full-width sections with constrained inner content.
- Cards only for feature items, pricing, comparison, FAQ, and repeated lists.
- Product screenshots should be large and readable.
- Mobile layout must keep text and buttons from wrapping awkwardly.

Icons:

- Use lucide-style icons for features, buttons, and status indicators.
- Use real product screenshots for visual proof instead of SVG illustrations.

Motion:

- Subtle tab switching, screenshot carousel, and hover states are enough.
- Avoid heavy animations that distract from the product.

## 7. Content Tone

Use plain, practical language:

- "Manage bookings"
- "Track room status"
- "Match payments"
- "Know today's arrivals"
- "Train your staff"
- "Request custom workflows"

Avoid vague SaaS language:

- "Revolutionize hospitality"
- "Next-generation experience platform"
- "AI-powered transformation"
- "End-to-end ecosystem" unless the feature truly exists.

Use careful promise wording:

- Good: "Channel-manager-ready roadmap."
- Avoid until live: "Instantly sync all OTAs."
- Good: "GST-ready billing workflows can be configured."
- Avoid unless legally verified: "Fully GST compliant for every hotel."

## 8. Required Assets

Must capture:

- Desktop dashboard screenshot.
- Calendar screenshot.
- Reservations screenshot.
- Payments screenshot.
- Housekeeping screenshot.
- Reports screenshot.
- Short product walkthrough video, 45-90 seconds.

Optional:

- Client testimonial video from Sahajanand Wellness.
- Before/after workflow diagram.
- Hotel staff workflow photo if permission is available.

Data rules:

- Use demo data wherever possible.
- Remove or mask guest phone numbers, payment references, full names, and private notes.
- Do not use production financial values unless approved.

## 9. Implementation Notes For Current `F:\airveek` Repo

The current Airveek landing repo already has these sections:

- Hero
- Trust strip
- Pain points
- Features tabs
- Channel/booking section
- Mobile housekeeping
- Property types
- Integrations
- Demo/pricing
- Support/security
- Final CTA

Recommended upgrades:

- Add Product Proof Reel section using real Airvik-dyad screenshots.
- Add dedicated 30-Day Guided Trial section.
- Add Comparison section.
- Add Custom Features section.
- Add Sahajanand Wellness pilot case-study section.
- Reword integrations/channel manager content to avoid overclaiming live integrations.
- Replace generic stock imagery with real product UI wherever possible.
- Fix brand spelling consistently to `Airveek`.
- Make demo form submit or clearly connect it to lead capture.
- Update FAQ to include trial, setup, pricing, customization, mobile, and OTA readiness.

## 10. Recommended Final Section Order

1. Sticky navigation
2. Hero with real product screenshot
3. Trust strip
4. Product proof reel
5. Problem section
6. Core PMS feature grid
7. Booking calendar and reservations
8. Payments, UPI, cash, and invoices
9. Housekeeping and room readiness
10. Reports and owner view
11. Property types
12. Comparison
13. 30-day guided trial
14. Pricing
15. Custom features and implementation partnership
16. Channel manager and direct booking roadmap
17. Security, roles, and data control
18. Sahajanand Wellness pilot case study
19. FAQ
20. Final CTA

## 11. Primary Conversion Flow

The page should route every major CTA to one of two actions:

- Start trial lead form
- Book demo call

Lead form fields:

- Name
- Phone / WhatsApp
- Email
- Hotel / property name
- City
- Number of rooms
- Current booking method
- Main problem to solve
- Preferred demo time

After submit:

- Show a thank-you state.
- Mention the next step: setup call and workflow review.
- Store the lead in a database/email/CRM destination.

## 12. Final Recommendation

Airveek's strongest marketing angle is not "we are another PMS." It is:

> Airveek is a practical hotel PMS built from a real hotel workflow, with a guided 30-day trial and the flexibility to adapt to each property's operations.

The landing page should lead with real product UI, operational clarity, trial confidence, and customization support. Use Sahajanand Wellness as proof of origin, but position Airveek as a multi-client PMS product for many hotel types.
