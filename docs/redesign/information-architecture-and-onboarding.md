# POSPal Information Architecture And Onboarding Specification

*Draft for approval: 2026-06-19*

## Launch Candidate Update: 2026-06-27

The redesign is now being closed as a launch candidate. The launch inventory is frozen unless final QA finds a blocker:

- `/`
- `/download/`
- `/guides/`
- `/times.html`
- `/pda-ti-einai.html`
- `/pda-pos-leitourgei.html`
- `/pda-gia-servitoro/`
- `/pda-gia-kafeteries.html`
- `/systima-paraggeliolipsias.html`
- `/asyrmati-paraggeliolipsia.html`
- `/paraggelio-lipsia-gia-beach-bar.html`
- required infrastructure files such as sitemap, redirects, robots, manifest, and Google verification

Hard lock: `/`, `/download/`, and `/guides/` stay locked. Do not edit `index.html`, `download/index.html`, or `guides/index.html`, and do not change shared CSS or JS in a way that alters those pages, except for narrowly scoped first-party launch blocker fixes such as accessibility, tap-target, overflow, broken-route, or critical crawlability repairs. This exception does not allow new content, SEO rewrites, visual redesign, or route expansion.

Accessibility decision, 2026-06-27: keep the embedded YouTube guide video because it is central to the onboarding surface. Axe issues from YouTube's internal iframe player are treated as third-party exceptions; first-party accessibility issues must still be fixed.

Current route decisions:

- `/support.html` is not part of the launch inventory. It redirects to `/guides/`.
- `/guides/` is the only public guide route for launch.
- Guide variants may exist as state inside `/guides/`, including query-driven selection, but standalone guide URLs are not launch pages.
- Demo, privacy, support, QR, individual guide, and additional legacy SEO URLs remain outside the launch inventory unless a future post-launch data review reopens them.
- Older Academy/classroom/sidebar/lesson-route language in this document is historical and superseded for the launch candidate.

Final QA bar before closing launch candidate:

- Locked hashes unchanged for `/`, `/download/`, and `/guides/`.
- Sitemap contains exactly the launch inventory.
- Removed and legacy URLs resolve through tested one-hop redirects.
- Every sitemap URL returns local `200`.
- Every public page has one `h1`, title, meta description, canonical, and no accidental `noindex`.
- SEO pages with FAQ schema have matching visible FAQ.
- No direct `POSPal.exe`, demo funnel, `buy-license.html`, dead support/privacy links, or dead individual guide links.
- Browser checks pass at desktop, tablet, 390px, and 320px.
- No horizontal overflow; visible interactive targets meet the agreed tap-target standard.
- Axe reports zero first-party serious or critical violations; documented third-party exceptions are allowed.
- Cookie banner does not block understanding or the primary CTA.
- JavaScript syntax checks pass.
- Documentation matches the launch inventory, launch guide boundary, and SEO expansion gate.

## Status Update: 2026-06-24

The kept main landing page for the redesign workspace is `prototype/homepage-v3/`. This is the active homepage direction, not a disposable prototype branch. The paired onboarding surface is the production `/guides/` simple video guide surface.

Earlier Academy/course-player guidance in this document is superseded where it mentions a classroom sidebar, full course outline, manual completion, local progress, or visible upcoming modules. The active guide direction is simpler:

- `/guides/` opens a focused video guide page.
- Only published videos are shown.
- `/guides/printer-setup/` and `/guides/windows-installation/` are the current real guide URLs.
- Unfinished guide URLs remain `noindex` and are not listed in the selector.
- The UI should feel like practical support material, not a course platform.

## Direction Update: 2026-06-24

The redesign is a full ranking, conversion, and onboarding system, not a two-page launch made only from the homepage and guides.

The active site system has three layers:

1. **Conversion core**: pages that turn qualified visitors into Windows downloads.
   - `prototype/homepage-v3/` as the kept main landing page until production promotion
   - `/` may temporarily redirect to `prototype/homepage-v3/` during local redesign review
   - `/download/`
   - `/times.html`
   - `/support.html`
   - `/guides/`
2. **Onboarding core**: guide pages that make the download feel safe and help a customer reach first useful operation.
   - `/guides/`
   - `/guides/printer-setup/`
   - `/guides/windows-installation/`
   - the next real guide for first menu / QR setup when content exists
   - the next real guide for first test order or first shift when content exists
3. **SEO acquisition layer**: existing and future search-intent pages that answer specific Greek hospitality queries, then route visitors into download, pricing, or the relevant guide.
   - Preserve and improve existing ranking URLs before creating many new pages.
   - Prioritize the current Search Console demand around PDA meaning, waiter PDA, PDA in hospitality, how PDA works, order-taking systems, wireless ordering, cafe use cases, beach-bar use cases, pricing, and QR menu intent.

Immediate sequencing:

1. Start with the redesigned `/download/` page because it is the conversion handoff from the homepage, SEO pages, pricing, and guides.
2. Redesign `/times.html` next so price, trial, cancellation, inclusion, and product boundaries match the new homepage.
3. Bring `/support.html` and `/guides/` into the same restrained visual system without turning guides into a course platform.
4. Rewrite high-impression existing SEO pages before creating net-new pages:
   - `/pda-ti-einai.html`
   - `/pda-pos-leitourgei.html`
   - `/pda-gia-kafeteries.html`
   - `/systima-paraggeliolipsias.html`
   - `/asyrmati-paraggeliolipsia.html`
   - `/paraggelio-lipsia-gia-beach-bar.html`
5. Add new SEO pages only when Search Console demand cannot be served cleanly by an existing preserved URL. The strongest current candidate is a focused waiter PDA page for the `pda servitorou` intent.

Do not create broad content inventory for its own sake. Every new or rewritten page must have a clear role in one of the three layers and must route toward the download flow or a real onboarding step.

## Implementation Log: 2026-06-26

The redesign public surface was narrowed by explicit direction to the three agreed pages:

- `/` is now the kept Homepage V3 direction and no longer redirects to `prototype/homepage-v3/`.
- `/download/` is the simple installer handoff page.
- `/guides/` is the single guide/onboarding page.

Implementation notes:

- Promoted Homepage V3 from `prototype/homepage-v3/index.html` into root `index.html`.
- Removed the old prototype HTML entry point so `/prototype/homepage-v3/` is no longer a separate local page.
- Kept `prototype/homepage-v3/styles.css` and `prototype/homepage-v3/motion.js` only as root-page assets.
- Removed old public HTML pages from the working tree, including pricing, support, privacy, demo, SEO article pages, and individual guide lesson pages.
- Kept the Google verification HTML file because it is site infrastructure, not a public marketing page.
- Updated navigation and footer links on the agreed pages so the public path is only `/`, `/download/`, and `/guides/`.
- Updated `/guides/` so the two available guide videos live inside the single page via `?guide=printer-setup` and `?guide=windows-installation`, rather than separate public lesson URLs.
- Updated `/download/` so its next-step guide link points to `/guides/`.
- Rebuilt `sitemap.xml` to list only `/`, `/download/`, and `/guides/`.
- Added `_redirects` entries so old public URLs collapse into one-hop destinations on `/`, `/download/`, or `/guides/` instead of becoming dead links.
- Cleaned analytics helper logic so it no longer treats removed demo or legacy SEO pages as active public surfaces.

Current public HTML entry points after cleanup:

- `index.html`
- `download/index.html`
- `guides/index.html`
- `google768162376caa4dfd.html` remains only for Google verification.

Verification performed:

- `http://127.0.0.1:4176/` returned `200`.
- `http://127.0.0.1:4176/download/` returned `200`.
- `http://127.0.0.1:4176/guides/` returned `200`.
- `http://127.0.0.1:4176/guides/?guide=windows-installation` returned `200`.
- Browser audit found one `h1` per agreed page and no horizontal overflow.
- JavaScript syntax checks passed for `static/js/academy.js`, `static/js/ga-consent.js`, `static/js/ga-events.js`, and `prototype/homepage-v3/motion.js`.
- Link scans found no remaining old-page links in `index.html`, `download/index.html`, `guides/index.html`, `static/js/academy.js`, `static/js/ga-consent.js`, `static/js/ga-events.js`, or `sitemap.xml`.

Important follow-up:

- The site now intentionally sacrifices the previous broad SEO page inventory. If this direction is kept, redirects must be reviewed before deployment because removed URLs previously represented search landing pages.
- The root page still uses `prototype/homepage-v3/styles.css` and `prototype/homepage-v3/motion.js` as assets. This is acceptable for local redesign work, but the assets should eventually move into `static/` before production cleanup.

## SEO Acquisition Update: 2026-06-26

After reviewing the Search Console opportunity around PDA queries, the redesign restored a small SEO acquisition batch while keeping the locked homepage, download page, and guides page unchanged.

## Cluster-Led SEO Update: 2026-06-26

The SEO backlog is now cluster-led, not restoration-led. Use `docs/redesign/search-console-intent-map-2026-06-23.md` as the Search Console source of truth for the current acquisition backlog.

Hard rule: `/`, `/download/`, and `/guides/` are permanently locked. Do not edit `index.html`, `download/index.html`, or `guides/index.html`, and do not change shared CSS or JS in a way that alters those pages. All other restored acquisition pages are unlocked for SEO, CRO, accessibility, and visual polish.

Default priority:

1. Optimize the PDA education and waiter/service clusters.
2. Strengthen internal links across unlocked acquisition pages.
3. Treat `/systima-paraggeliolipsias.html` as the broad long-term παραγγελιοληψία hub.
4. Keep `/times.html` as conversion reassurance for price, trial, cancellation, and product boundaries.
5. Add no new public SEO routes unless fresh data shows an intent that cannot be served by an existing unlocked page.

Implemented pages:

- `/pda-ti-einai.html` answers the broad "PDA τι είναι" and "PDA στην εστίαση" intent.
- `/pda-gia-servitoro/` answers the focused "PDA σερβιτόρου" workflow intent.

Design and content decisions:

- Both pages use a page-scoped stylesheet at `static/css/pda-acquisition.css`.
- The visual system was adjusted to match the active homepage direction: light acquisition hero, centered copy, green primary CTA, compact trial reassurance, and one dark workflow/proof band below the first screen.
- The pages were shortened to avoid article-like density. Each now keeps only the hero, workflow proof, practical fit/boundary section, FAQ, and final CTA.
- Public copy remains Greek-only and monotonic, with natural use of `παραγγελιοληψία`, `ασύρματη`, and `σερβιτόρος`.
- Primary CTA remains `/download/` with `Κατέβασε για Windows`; secondary CTA remains `/guides/`.
- Both pages clearly state that POSPal is not a fiscal POS and not a cash register.
- `/pda-ti-einai.html` remains a real file rather than a redirect.
- `/pda-gia-servitoro/` was added as a real directory route for GitHub Pages compatibility.

Verification performed:

- Both local URLs returned `200` on `http://127.0.0.1:4181/`.
- Locked files `index.html`, `download/index.html`, and `guides/index.html` retained their pre-polish SHA-256 hashes.
- Each page has exactly one `h1`, a self-canonical URL, FAQPage schema, and no `noindex`.
- Link checks on the two pages found no direct `POSPal.exe`, demo-first, or artifact-host download links.
- Playwright checks passed for desktop, tablet, 390px, and 320px: no horizontal overflow.
- Axe desktop scans reported zero violations for both pages.
- Visible interactive targets were brought to a 44px minimum in the page-scoped CSS.

Remaining SEO follow-up:

- `/pda-pos-leitourgei.html` remains the next high-priority preserved SEO page because the Search Console baseline shows meaningful existing demand.
- Cafe, wireless ordering, beach-bar, QR-menu, and order-taking system intents still need deliberate keep/redirect/rebuild decisions before deployment.

## Final Visual Evidence Update: 2026-06-27

The repeated product screenshots that showed the old test menu were replaced in-place. No backup copies were kept.

Updated assets:

- `static/img/pospal-desktop-order.png`
- `docs/redesign/captures/app-route-desktop-order.png`
- `docs/redesign/captures/app-route-mobile-order.png`
- `static/qr-menu-live-preview.png`

Evidence source:

- Product captures came from the running local POSPal app at `http://127.0.0.1:5000`.
- The current controlled fixture is the Brunch Cafe dataset, including Coffee, Brunch Plates, Sandwiches, Fresh & Sweet, and Juices & Drinks.
- The desktop order capture shows a real order workflow with Espresso, Cappuccino, Iced Latte, Chicken Club, Halloumi Pita, and a total of `EUR 32.80`.
- The mobile route capture shows the table/order surface rather than the old menu test data.
- The QR menu preview was captured from `https://menu.pospal.gr/s/pospal` using the same live Brunch Cafe menu data, with only the live page controls hidden for a cleaner marketing preview.
- The QR code asset was not regenerated in this pass; the homepage links around it still point to `https://menu.pospal.gr/s/pospal`.

Additional launch-blocker fixes completed in the same pass:

- Homepage route motion now runs continuously and the former replay button acts as a pause/resume control.
- Homepage footer now exposes the full launch site structure for discovery across the public pages.
- Tablet overflow from the homepage footer and route decoration was fixed in `prototype/homepage-v3/styles.css`.
- The route motion controls now use `role="group"` for the labelled control wrapper.

Verification performed:

- Visual inspection passed for the replaced desktop capture, route desktop capture, route mobile capture, and QR menu preview.
- Affected public routes were checked locally at `http://127.0.0.1:4176/`.
- Checked routes: `/`, `/download/`, `/pda-ti-einai.html`, `/pda-pos-leitourgei.html`, `/pda-gia-servitoro/`, `/pda-gia-kafeteries.html`, `/systima-paraggeliolipsias.html`, `/asyrmati-paraggeliolipsia.html`, and `/paraggelio-lipsia-gia-beach-bar.html`.
- Browser checks passed at desktop, tablet, 390px, and 320px with no horizontal overflow.
- Replaced image URLs returned local `200`.
- Focused QR mobile checks confirmed the QR code and menu preview load when the homepage QR section enters view.
- Axe on the homepage reported zero first-party serious or critical violations after the ARIA fix.
- Static search found no old `coffee/pizza`, repeated cappuccino test-order strings, `buy-license.html`, `support.html`, `privacy.html`, `POSPal.exe`, or forbidden direct installer references in the checked public page files.

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

- EUR 24.90/month.
- Thirty days free without a card or personal information.
- All included modes/features.
- Cancel-anytime language.
- What is not included: fiscal functions and any unverified hardware/service promises.
- Equipment/setup requirements.
- Explicit download CTA and installation-guide CTA.

Keep `/times.html` as the working canonical because it has the stronger Search Console history. Redirect decisions remain subject to fresh page-level data before launch.

### Download `/download/`

**Job:** Deliver the correct installer and hand the visitor into onboarding.

Resolved decision, 2026-06-24: `/download/` is an installer handoff page, not another sales page. It confirms the installer, trial terms, Windows requirement, and immediate next step. It should not repeat the full homepage argument, broad feature set, pricing section, or SEO explainer content.

Resolved decision, 2026-06-24: do not build a complicated post-click state after the installer click. The browser will start the download. The page only needs simple surrounding guidance, especially for mobile visitors who need to understand that a Windows `.exe` file should be downloaded and opened on a computer, not on a phone or tablet.

Resolved decision, 2026-06-24: use a light mobile/desktop split. Desktop and laptop visitors see the installer download as the dominant action. Mobile and tablet visitors are guided first to open or share `/download/` on a Windows computer. The `.exe` link may remain available for transparency, but it should not be the dominant mobile action.

Resolved decision, 2026-06-24: the body-level next-step CTA on `/download/` points directly to `/guides/windows-installation/`, not generic `/guides/`. Use human installation-guide language such as "open the installation guide"; avoid "Guide 0" phrasing because the active guide direction is not a course platform.

Resolved decision, 2026-06-24: keep reassurance on `/download/` compact. Below the installer action, use only short support blocks for what the visitor is downloading, what they need before opening it, and the fiscal-POS boundary. Do not add full feature cards, screenshot carousels, testimonials, pricing ledgers, long FAQ sections, or SEO explainer content to this page.

Resolved decision, 2026-06-24: the primary conversion on `/download/` is only a real click on the installer URL and should emit `download_click`. Page views, hash-link clicks, guide clicks, and copy/share actions are not primary download conversions. Mobile copy/share, installation-guide clicks, and support clicks may be tracked as secondary events.

Requirements:

- One semantic `h1` and one visible primary download action.
- Detect Windows only to adapt guidance, never to hide the real installer URL from a supported visitor.
- Do not automatically download the `.exe` on macOS or Linux.
- Prefer an explicit download click so analytics measure intent accurately.
- Keep the core action usable without JavaScript.
- On mobile, show copy/share and guide actions without collecting email.
- Show the expected filename, basic browser/download-folder expectation, and `/guides/windows-installation/` as the next installation guide without requiring a dynamic post-click flow.
- Emit `download_click` only from a real user click.

### Guides `/guides/`

**Job:** Present the POSPal Academy as a teaching environment: a complete, confidence-building curriculum with a required Start Here path and broader learning tracks.

The hub remains publicly labelled `Οδηγοί` and keeps `/guides/` as the canonical URL. Internally, it is the Academy. Do not create a competing `/academy/` route.

The selected interface direction is the classroom lesson environment from `prototype/academy-odoo-lab/?variant=classroom`. `/guides/` should open directly into this course/player surface with the first available Start Here lesson selected by default, rather than acting as a separate course landing page, marketing landing page, or blog archive.

The hub should show published lessons and clearly labelled upcoming lessons. Each lesson must have a stable, crawlable URL that renders the same classroom environment with that lesson selected. Query parameters may preserve old links but should not be the only public URL.

The classroom sidebar shows the full Academy module shape from day one. Start Here is open and actionable at launch; broader modules are collapsed and clearly marked `Σύντομα`.

Proposed guide routes:

- `/guides/printer-setup/`
- `/guides/windows-installation/`
- `/guides/connect-staff-devices/`
- `/guides/first-menu/`
- `/guides/qr-menu/`
- `/guides/test-order/`
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

Onboarding is part of the product promise, but the education system is broader than setup alone. The Academy is video-led at first, with minimal supporting text for orientation, lesson state, completion, and the next action.

The Academy never includes quizzes, forums, comments, discussions, certificates, scores, or social learning features. It is not an LMS or community surface.

### Academy Launch Gate

The Academy can launch when the Start Here path is complete. Broader modules may be visible with planned lessons marked `Σύντομα`, but they are not published as indexable lesson URLs until real lesson content exists.

Required launch lessons:

- What you need before installing.
- Install POSPal on Windows.
- Connect the first staff phone or tablet.
- Run the first test order.

Production launch URLs:

- `/guides/`
- `/guides/printer-setup/`
- `/guides/windows-installation/`
- `/guides/connect-staff-devices/`
- `/guides/test-order/`

### Module 1: Ξεκίνα εδώ

**Outcome:** The customer gets from download to one successful test order before the first live shift.

Initial lessons:

- What you need before installing.
- Install POSPal on Windows.
- Connect the first staff phone or tablet.
- Run the first test order.

This Start Here path must stay visually first in the Academy.

### Module 2: Κατάλογος και προϊόντα

**Outcome:** The customer understands how to prepare and adjust the working catalogue.

Initial lessons:

- Categories.
- Products.
- Prices.
- Simple changes before a shift.

### Module 3: QR μενού

**Outcome:** The customer can check and present the included QR menu with confidence.

Initial lessons:

- QR menu appearance.
- Mobile check.
- Publishing or sharing the QR.
- Common QR mistakes.

### Module 4: Παραγγελιοληψία στη βάρδια

**Outcome:** The customer sees how POSPal behaves during a real service flow.

Initial lessons:

- Table mode.
- Simple mode.
- Waiter phone or tablet use.
- Kitchen workflow.

### Module 5: Εξοπλισμός και σύνδεση

**Outcome:** The customer understands the basic physical and local-network setup.

Initial lessons:

- Windows computer.
- Local network.
- Thermal printer.
- Staff devices.

### Module 6: Λογαριασμός και υποστήριξη

**Outcome:** The customer understands subscription, cancellation, support, and the product boundary.

Initial lessons:

- Subscription.
- Cancellation.
- What to send to support.
- What POSPal is not.

## Guide Page Template

Every video-led lesson uses the same classroom lesson environment:

1. Top course bar with POSPal Academy identity, current path, support, and download action.
2. Left lesson outline grouped by module, showing available and upcoming lessons.
3. Lesson title, module context, and one short statement of what the customer will learn.
4. Video player or clearly labelled `Σύντομα` placeholder.
5. Manual completion action.
6. Previous and next lesson links.
7. Support link where the lesson touches setup risk.
8. Persistent local progress that does not block content when JavaScript is unavailable.

Do not include a supporting or companion panel beside the video. Keep the page video-first with minimal orientation, completion, and navigation.

Completion is explicit: the customer marks a lesson complete. Do not infer completion from video watch time. Completion is stored in `localStorage` only, requires no account or login, and never gates access to another lesson. If JavaScript or `localStorage` is unavailable, lessons remain usable without saved progress.

Do not add quizzes, forums, comments, discussions, certificates, scores, or social learning features to this template.

## CTA Rules

- Primary public CTA: `Κατέβασε για Windows`.
- Secondary CTA: a specific guide, normally the installation path.
- Inside the classroom environment, primary lesson actions are completion and next lesson.
- The classroom top bar may always include `Κατέβασε για Windows`, but it should not dominate the lesson.
- `/guides/windows-installation/` may make the download action more prominent because downloading the installer is part of the task.
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
