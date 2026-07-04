# POSPal Homepage Design Brief

*Decisions confirmed through `grill-with-docs`: 2026-06-21*

## Goal

Design a download-led Greek homepage for hospitality owners and operators who already understand ordering software and want a direct, affordable month-to-month alternative.

The redesign changes the landing-page layout, typography, visual language, copy hierarchy, imagery, and motion. It preserves the POSPal name, logo, app icon, and green recognition anchor.

## Core Promise

> **Η παραγγελιοληψία σου. Χωρίς μεσάζοντα.**
>
> Τραπέζια, απλή λειτουργία, ροή κουζίνας και προσαρμόσιμο QR μενού σε ένα πρόγραμμα για Windows. Το κατεβάζεις και το στήνεις με οδηγούς βήμα-βήμα.
>
> **Τιμή πρώτων χρηστών: €23,90/μήνα**
> Την κρατάς όσο η συνδρομή παραμένει ενεργή. 30 ημέρες δωρεάν, χωρίς κάρτα ή προσωπικά στοιχεία.

Primary CTA: `Κατέβασε για Windows` -> `/download/`

Secondary CTA: `Δες τι χρειάζεσαι για το στήσιμο` -> completed equipment-preparation guide

## Commercial Model

- EUR 23.90 per month is the early-adopter price.
- Customers keep that price while their subscription remains active.
- Subscription renews month to month; cancellation stops the next renewal rather than ending current access immediately.
- All current modes are included: tables, simple mode, kitchen workflow, and QR menu.
- No setup, maintenance, or separately priced module fees.
- No countdown, artificial deadline, or unconfirmed future price.
- Present pricing as a clean subscription ledger, not a receipt or fiscal ticket.

## Product Claims

- Say `Εγκαθίσταται σε Windows`; do not say `self-hosted`.
- A Windows computer hosts the main application.
- Staff phones and tablets connect through the venue's local network.
- A thermal printer is optional and is needed only for printed tickets.
- POSPal works alongside the fiscal system. It is not a cash register or fiscal POS.
- Guides are the primary setup path; practical email help is available at `support@pospal.gr` without an SLA or done-for-you setup promise.

### Offline Order Capture

> **Η παραγγελία δεν χάνεται μαζί με το Wi-Fi.**  
> Ο σερβιτόρος συνεχίζει να καταχωρεί παραγγελίες εκτός εμβέλειας. Αποθηκεύονται στη συσκευή και συγχρονίζονται όταν επιστρέψει στο τοπικό δίκτυο.

Do not generalize this into a claim that the main Windows computer works indefinitely without internet.

### Included QR Menu

> **Προϊόντα και QR μενού, από το ίδιο σημείο.**  
> Περιλαμβάνεται στη συνδρομή. Προσαρμόζεις την εμφάνιση χωρίς έξτρα χρέωση.

Do not claim automatic QR-menu synchronization until it ships and is verified. The homepage may include a real scannable sample based on the controlled fictional cafe dataset, but it must remain supporting proof rather than a demo funnel.

## Homepage Journey

1. Hero and direct offer.
2. Fit requirements and fiscal boundary.
3. Real order workflow with offline capture.
4. Table and simple modes.
5. Dedicated QR-menu visual beat.
6. Four-step onboarding preview.
7. Subscription ledger.
8. Practical FAQ.
9. Final download handoff.

The onboarding preview uses four outcomes: equipment, installation, menu and QR, and first shift. The homepage may be prototyped immediately but must not launch until all four linked guides are complete at stable URLs.

## Art Direction

- Approximately 70 percent Craft-like tactile depth and disciplined composition.
- Approximately 30 percent SayBriefly-like bold voice and warm energy.
- Predominantly warm light canvas with controlled deep-forest sections.
- POSPal green reserved for actions and meaningful progress.
- Real POSPal UI dominates the hero.
- Tactile order and kitchen objects provide context.
- No stock hospitality scene, fake interface, doodle system, luxury serif treatment, or generic SaaS card wall.
- AI-generated assets are limited to abstract backgrounds or isolated decorative props.

## Motion

Use one signature animation:

`out-of-range table -> order stored on phone -> Wi-Fi returns -> automatic local sync -> kitchen`

It must not imply cellular or cloud transmission while out of range. Other motion remains restrained. Provide a complete reduced-motion equivalent.

## Evidence

- Real product captures at readable size.
- Controlled fictional Greek cafe dataset; no real customer data.
- Consistent order across desktop, staff device, and kitchen output.
- Real pricing and cancellation terms.
- Complete onboarding material.
- No testimonials, logos, ratings, or usage numbers until verified and consented.

## Navigation

`POSPal logo | Τιμές | Οδηγοί | Υποστήριξη | Κατέβασε για Windows`

No Demo, Features, Customers, About, or Contact item. Logo returns home. Download remains visible on mobile.

## Delivery Constraints

- GitHub Pages static hosting.
- Plain HTML and CSS with small local JavaScript modules.
- No frontend framework, server logic, or runtime CDN dependency.
- Complete content and core actions without JavaScript.
- Greek-only public copy in natural second-person singular.
- WCAG 2.2 AA target, 320px reflow, keyboard support, reduced motion, and performance-conscious assets.
- Preserve VIP URLs and existing search equity.

## Probe Phase

Build three switchable desktop/mobile probes under `/prototype/homepage-v2/` using identical copy:

1. **Tactile Counter**: physical depth, Craft-led.
2. **Operator Editorial**: bold typography, SayBriefly-led.
3. **Living Order Route**: workflow-led and cinematic.

Probe rules:

- `noindex`.
- Excluded from sitemap.
- No production homepage edits.
- Clearly labelled screenshot placeholders allowed.
- Real product captures required before production promotion.

Selection criteria, in order:

1. Product understood within five seconds.
2. Download CTA unmistakable.
3. Real UI readable.
4. Direct commercial model credible.
5. QR-menu value memorable.
6. Onboarding feels approachable.
7. Mobile accessibility and performance.

Visual excitement breaks ties; it does not override clarity.
