# POSPal Information Architecture And Onboarding Specification

*Draft for approval: 2026-06-19*

## Objective

Create one clear path from discovery to a successful first shift:

`understand -> verify fit -> download -> prepare equipment -> install -> configure -> run first shift`

The site must support visitors who are ready to download and visitors who still need compatibility or setup confidence. It must not create a separate demo funnel.

## Primary Journeys

### 1. Ready Windows Visitor

1. Lands on the homepage, pricing page, or an SEO page.
2. Understands that POSPal is ordering/kitchen workflow software, not a fiscal POS.
3. Confirms price, trial, Windows requirement, and basic equipment.
4. Explicitly clicks `Κατέβασε για Windows`.
5. Sees the downloaded filename and the next required guide.
6. Continues through Guides 0-3.

### 2. Mobile Researcher

1. Lands on the homepage or an SEO page from search.
2. Reads product, pricing, and readiness information without being pushed into an unusable `.exe` download.
3. Opens the setup guide or copies/shares the `/download/` URL.
4. Continues on a Windows computer.

Do not require an email address or other personal information for this handoff.

### 3. Organic Search Visitor

1. Lands on the existing URL that best matches the query.
2. Gets a direct answer before encountering product promotion.
3. Sees a concrete POSPal workflow relevant to that query.
4. Checks requirements and product boundaries.
5. Downloads for Windows or opens the relevant setup guide.

## Primary Navigation

Keep the header deliberately small:

| Label | Destination | Role |
|-------|-------------|------|
| Αρχική | `/` | Product and conversion overview |
| Τιμές | `/times.html` | Price, inclusion, trial, cancellation, boundaries |
| Οδηγοί | `/guides/` | Setup and onboarding |
| Υποστήριξη | `/support.html` | Troubleshooting and escalation |
| Κατέβασε για Windows | `/download/` | Visually dominant CTA |

Do not add Demo, Customers, Resources, Features, About, or Contact to the primary navigation until real content and business need justify them.

## Core Page Roles

### Homepage `/`

**Job:** Explain POSPal within five seconds, prove that the workflow is real, reduce setup anxiety, and move the visitor to download.

**Section order:**

1. Hero: what it is, who it is for, price/trial, download CTA, guide CTA.
2. Readiness strip: Windows computer, supported printer, staff phone/tablet, and any verified network requirement.
3. Real shift workflow: staff device -> POSPal -> kitchen/order output.
4. Product modes: tables, simple mode, QR menu.
5. Onboarding path: four visible completed steps.
6. Price and trial terms.
7. Product boundary: not a fiscal POS or cash register.
8. Practical FAQ addressing fit, installation, equipment, support, and cancellation.
9. Final download and guide handoff.

Use real product screens. A small interactive proof may support the workflow section, but it must not become a navigation item or primary CTA.

### Pricing `/times.html`

**Job:** Resolve cost and commitment anxiety.

Required content:

- EUR 18.90/month.
- Thirty days free without a card or personal information.
- All included modes/features.
- Cancel-anytime language.
- What is not included: fiscal functions and any unverified hardware/service promises.
- Equipment/setup requirements.
- Explicit download CTA and installation-guide CTA.

Keep `/times.html` as the working canonical because it has the stronger Search Console history. Redirect decisions remain subject to fresh page-level data before launch.

### Download `/download/`

**Job:** Deliver the correct installer and hand the visitor into onboarding.

Requirements:

- One semantic `h1` and one visible primary download action.
- Detect Windows only to adapt guidance, never to hide the real installer URL from a supported visitor.
- Do not automatically download the `.exe` on macOS or Linux.
- Prefer an explicit download click so analytics measure intent accurately.
- Keep the core action usable without JavaScript.
- On mobile, show copy/share and guide actions without collecting email.
- After the click, show filename, expected browser behavior, Guide 0, and support.
- Emit `download_click` only from a real user click.

### Guides `/guides/`

**Job:** Present a complete, confidence-building curriculum and resume progress.

The hub should show only published guides. Each guide must have a stable, crawlable URL. Query parameters may preserve old links but should not be the only public URL.

Proposed guide routes:

- `/guides/printer-setup/`
- `/guides/installation/`
- `/guides/first-menu-and-qr/`
- `/guides/first-shift/`

### Support `/support.html`

**Job:** Explain what help is available and route common setup failures before email escalation.

Required categories:

- Download and Windows installation.
- Printer and equipment.
- Phone/tablet connection.
- Menu and QR setup.
- First-shift troubleshooting.
- Subscription and billing.

Publish only support channels, hours, and response expectations that can actually be delivered.

## SEO Landing Pages

Preserve useful URLs and keep them outside the primary navigation. Each page should answer its search intent, then use the same readiness/download/guide modules.

### Preserve As VIP URLs

- `/pda-ti-einai.html`
- `/pda-pos-leitourgei.html`
- `/paraggelio-lipsia-gia-beach-bar.html`
- `/systima-paraggeliolipsias.html`
- `/times.html`
- `/pda-gia-kafeteries.html`

### Working Consolidation Direction

| Intent | Working canonical | Candidate redirect |
|--------|-------------------|--------------------|
| Pricing | `/times.html` | `/times-systimatos-parageliolipsias/` |
| Cafe PDA | `/pda-gia-kafeteries.html` | `/pda-gia-kafeteria/` |
| Wireless ordering | `/asyrmati-paraggeliolipsia.html` | `/asyrmati-parageliolipsia-estiasi/` |
| QR menu | Pending content/backlink review | The non-selected QR URL |

No redirect ships until the destination contains equivalent intent and the map has been tested as a one-hop HTTP redirect.

## Onboarding Curriculum

Onboarding is part of the product promise. The redesigned site should not launch with Guides 0-3 incomplete.

### Guide 0: Printer And Equipment Preparation

**Outcome:** The venue has the required Windows computer, a verified compatible printer/setup, and the information needed to install POSPal.

Content:

- Supported host requirements.
- Verified printer types and connection requirements.
- Staff device requirements.
- Network requirements, if applicable.
- Physical connection checklist.
- Printer test procedure.
- Readiness checkpoint.
- Next action: download and install POSPal.

Do not publish exact compatibility or timing claims until tested.

### Guide 1: Windows Installation

**Outcome:** POSPal is installed and opens successfully.

Content:

- Installer filename and trusted download source.
- Browser download behavior.
- Windows installation steps.
- Expected prompts and screens.
- First launch.
- Common download/install errors.
- Success checkpoint.
- Next action: create the first menu.

### Guide 2: First Menu And QR

**Outcome:** A basic catalogue exists and the QR menu can be checked from a phone.

Content:

- Minimum useful catalogue.
- Categories, products, and prices.
- QR generation/publishing flow.
- Mobile verification.
- Common catalogue/QR problems.
- Success checkpoint.
- Next action: prepare the first shift.

### Guide 3: First Real Shift

**Outcome:** The operator has tested the end-to-end order flow before serving customers.

Content:

- Choose table or simple mode.
- Connect/test the staff device.
- Enter a test order.
- Verify kitchen/order output.
- Correct or cancel a test order using only verified product behavior.
- First-shift checklist.
- Escalation path if a checkpoint fails.
- Next action: begin the trial workflow and review subscription timing.

## Guide Page Template

Every guide uses the same functional structure:

1. Plain outcome statement.
2. Verified estimated time.
3. Prerequisites and equipment.
4. Numbered steps with real screenshots.
5. Visible success checkpoint.
6. Troubleshooting matched to each failure point.
7. Support escalation.
8. One next-guide CTA.
9. Persistent progress that does not block content when JavaScript is unavailable.

Video may supplement a guide but cannot be the only explanation.

## CTA Rules

- Primary public CTA: `Κατέβασε για Windows`.
- Secondary CTA: a specific guide, normally the installation path.
- Never label a guide link generically when the destination is known.
- Do not point Guide 1 or Guide 2 labels to Guide 0.
- SEO pages may use contextual CTA text, but the destination remains download or the relevant guide.
- Do not introduce email capture, demo booking, or sales-contact friction into the trial path.

## Measurement Model

Use events that describe real actions rather than inferred conversions:

| Event | Trigger |
|-------|---------|
| `download_click` | Explicit click on the approved installer URL |
| `guide_step_start` | First meaningful interaction with a guide |
| `guide_step_complete` | User completes the visible checkpoint |
| `guide_next_click` | Click to the next guide |
| `support_click` | User opens the published support path |
| `pricing_view` | Pricing page or pricing section becomes meaningfully visible |

Do not emit `trial_start_click` merely because `/download/` loaded. Product-side telemetry is needed to measure completed installation, first menu, trial activation, and subscription accurately.

## Approval Gates

Before implementation:

- Verify the exact meaning of locally installed versus self-hosted.
- Verify supported Windows versions, printer models/types, network, and staff-device requirements.
- Approve the final canonical/redirect map.
- Complete and approve the content outline for Guides 0-3.
- Approve homepage structure and Greek copy.

Before launch:

- Publish Guides 0-3 at stable URLs.
- Validate every CTA destination.
- Test the download journey on Windows, macOS, Linux, Android, and iOS.
- Test keyboard access, 320px reflow, zoom, reduced motion, and no-JavaScript fallback.
- Diff titles, descriptions, headings, canonicals, schema, and internal links against the SEO baseline.
