# Living Order Route: Plan and Delivery Log

*Updated: 2026-06-23*

## Status

`Living Order Route` is the selected homepage direction. Homepage V3 is the kept main landing page for the redesign workspace. The current high-fidelity implementation lives in:

- `prototype/homepage-v3/index.html`
- `prototype/homepage-v3/styles.css`
- `prototype/homepage-v3/motion.js`

It remains outside the production sitemap until explicit promotion, push, merge, or deploy approval. It is no longer treated as one disposable probe among alternatives.

## Original Plan

The route visual had to explain one truthful operational story:

1. A server takes an order on a phone or tablet.
2. The device moves outside the venue's Wi-Fi range.
3. The order remains stored on that device.
4. The device returns to the local network and synchronizes with POSPal on Windows.
5. The order continues to the kitchen.

The visual also had to:

- avoid implying cloud or cellular transmission outside Wi-Fi range;
- avoid implying that the main Windows application works indefinitely without internet;
- use one consistent order across staff device, Windows application, and kitchen output;
- keep the Windows download as the homepage's dominant action;
- work as static HTML/CSS without JavaScript;
- provide reduced motion, keyboard controls, and 320px reflow;
- remain compatible with GitHub Pages.

## Work Completed

### Direction and Composition

- Selected the workflow-led `Living Order Route` direction after comparing multiple homepage concepts.
- Preserved the light hero and deep-forest operational section.
- Kept POSPal green for progress/completion and amber for the offline/stored state.
- Separated the early-user price panel from the route visual so pricing no longer competes with the workflow.
- Removed decorative and explanatory duplication that made the scene harder to decode.

### Route Story and Copy

- Replaced `Ζωντανή ροή` with the more accurate `Η διαδρομή της παραγγελίας`.
- Final premise: `Εκτός Wi-Fi, η παραγγελία παραμένει στη συσκευή.`
- Final supporting line: `Μόλις επιστρέψει, συγχρονίζεται με το POSPal και συνεχίζει στην κουζίνα.`
- Consolidated the route into four labels:
  - `1 · Εκτός Wi-Fi`
  - `2 · Αποθηκεύτηκε στη συσκευή`
  - `3 · Επιστροφή και συγχρονισμός`
  - `4 · Στην κουζίνα`
- Removed redundant or unclear labels such as `τοπικός έλεγχος`, `σωστή έξοδος`, `Η παραγγελία πέρασε`, and the unrelated QR mode strip.
- Replaced signal-strength bars with a disconnected Wi-Fi symbol.

### Fit Section Redesign

- Redesigned only the V3 homepage fit section in `prototype/homepage-v3/index.html` and `prototype/homepage-v3/styles.css`; the completed `.route-theatre` markup, styling, and behavior were not changed.
- Replaced the generic four-cell matrix with a clearer operational setup hierarchy:
  - Windows computer as the required host;
  - phone or tablet for wireless ordering on the same local network;
  - thermal printer as optional for printed kitchen tickets.
- Separated the fiscal boundary from the equipment list so it no longer reads as another hardware requirement.
- Replaced the overconfident fit headline with the direct `Τι χρειάζεσαι για να ξεκινήσεις.`
- Added a section-level `Κατέβασε για Windows` action with the verified 30-day trial terms.
- Changed the equipment content to a semantic list and added descriptive labelling for the fiscal clarification.
- Added fit-specific responsive typography and scroll offsets so the sticky header does not obscure the section when reached through an anchor.
- Verified at `1440px`, `1024px`, `768px`, `375px`, and `320px` with:
  - no horizontal overflow or unintended overlap;
  - no broken images, duplicate IDs, console errors, or page errors;
  - clean Impeccable detector output;
  - clean JavaScript syntax and Git whitespace checks;
  - zero changed `.route-theatre` lines.

### Full Homepage Section Completion Pass

- Completed the remaining `prototype/homepage-v3/` landing-page sections after the route and fit work:
  - `.qr-section .shell.qr-grid`
  - `.onboarding-section`
  - `.pricing-section`
  - `.faq-section`
  - `.final-cta`
  - `.site-footer`
- QR section now uses real proof assets instead of fake/unpublished preview material:
  - `static/qr-menu-live-code.png`
  - `static/qr-menu-live-preview.png`
- QR copy keeps the feature positioned as included product proof, not a separate demo funnel or paid module.
- Onboarding section now presents a practical setup sequence with real links to the currently available guide lessons where appropriate.
- Pricing section now emphasizes one subscription, the first-user price, included workflow areas, cancellation, and the non-fiscal-POS boundary.
- FAQ section was rebuilt from Search Console intent and final-buyer objections:
  - PDA meaning;
  - POSPal order-taking flow;
  - fiscal POS boundary;
  - equipment requirements;
  - self-installation;
  - pricing;
  - cancellation.
- Final CTA now acts as a download handoff with trial terms, Windows setup expectations, and a secondary guide link.
- Footer now includes a semantic utility navigation, support address, privacy link, download link, and the fiscal POS boundary.
- The protected `.route-theatre` section was not modified during these later section passes.

### Full Homepage Verification

- Verified the completed V3 homepage sections at `1440px`, `1024px`, `768px`, `375px`, and `320px`.
- Repeated checks passed across the section passes:
  - no page or section horizontal overflow;
  - no duplicate IDs;
  - no console or page errors;
  - keyboard-operable FAQ disclosure controls;
  - footer and final CTA links with 44px or greater target heights;
  - local footer destination checks for download, pricing, guides, support, and privacy;
  - no forbidden direct `POSPal.exe`, demo-first, or fake cookie-settings links;
  - clean Impeccable detector output;
  - clean `prototype/homepage-v3/motion.js` syntax;
  - `git diff --check` clean apart from the repository's existing LF/CRLF warning.

### Search Console-Informed Next Direction

- User-provided Search Console export:
  - `C:\Users\bzoum\Downloads\pospal.gr-Performance-on-Search-2026-06-23.zip`
- Highest-impression demand is around:
  - `pda τι ειναι`
  - `pda σερβιτορου`
  - `pda εστιαση`
  - `pda πωσ λειτουργει`
  - `συστημα παραγγελιοληψιασ`
  - `ασυρματη παραγγελιοληψια`
  - `προγραμμα παραγγελιοληψιασ`
- Recommended next sequence:
  1. Productionize the approved V3 homepage after final review.
  2. Build a stronger onboarding curriculum and guide hub before creating many new SEO pages.
  3. Refresh existing high-impression SEO pages before creating net-new pages.
  4. Build a dedicated QR-menu page as an included-feature/product-proof page, not a separate demo funnel.
  5. Audit sitemap, canonical, redirect, and URL hygiene before launch.

### Authentic Product Evidence

- Captured a controlled real order from the application running locally.
- Matched `Order #1`, `Table 1`, and the cappuccino order across mobile and Windows evidence.
- Added:
  - `docs/redesign/captures/app-route-mobile-order.png`
  - `docs/redesign/captures/app-route-desktop-order.png`
- Replaced the fake physical receipt over the phone with an in-app-style stored status.
- Updated the kitchen ticket to match the depicted order.
- Added explicit image dimensions and descriptive alternatives.

### Responsive Layout

- Desktop keeps the cinematic horizontal route.
- Tablet uses a dedicated two-row route and separate SVG path rather than compressed desktop coordinates.
- Mobile uses an ordered vertical timeline with all four route steps retained.
- Removed unintended label/device collisions at intermediate widths.
- Fixed inherited mobile grid overflow in onboarding and pricing sections discovered during route QA.

### Motion and Accessibility

- Replaced the endless 5.8-second loop with one staged 8-second playback.
- Playback starts when the route enters the viewport.
- `Παύση` pauses the active sequence; `Συνέχεια` resumes it; `Ξανά` appears after completion.
- Reduced-motion users receive the complete final state without animation or controls.
- No-JavaScript users receive the complete static route with controls hidden.
- Motion controls use semantic buttons, visible focus treatment, and 44px minimum height.
- The route is a labelled semantic figure with one complete screen-reader description.

## Verification Completed

Verified at viewport widths:

- `1440px`
- `1024px`
- `768px`
- `720px`
- `375px`
- `320px`

Checks passed:

- no unintended overlaps at final responsive layouts;
- no horizontal overflow;
- no broken images;
- no duplicate IDs;
- no console or page errors;
- JavaScript syntax check;
- Impeccable detector returned no findings;
- reduced-motion final state;
- no-JavaScript final state;
- pause, resume, completion, and replay behavior;
- Git whitespace validation.

Final visual captures are stored as:

- `docs/redesign/captures/homepage-v3-route-delivery-1440.png`
- `docs/redesign/captures/homepage-v3-route-delivery-1024.png`
- `docs/redesign/captures/homepage-v3-route-delivery-768.png`
- `docs/redesign/captures/homepage-v3-route-delivery-375.png`
- `docs/redesign/captures/homepage-v3-route-delivery-320.png`

## Remaining Work

### Before Production Promotion

- Complete a final user review of the whole V3 homepage, not only the route visual.
- Decide whether V3 is ready to replace the production homepage structure.
- Capture or verify authentic kitchen/printer output; the current kitchen ticket is a truthful HTML representation, not a photograph or application capture.
- Publish and verify the controlled QR-menu sample and real scannable QR code.
- Do not claim automatic QR-menu synchronization until the feature ships and is verified.
- Confirm every product requirement and equipment claim against current application behavior.

### Onboarding and Conversion

- Complete and publish Guides 0-3 at stable URLs:
  - equipment and printer preparation;
  - Windows installation;
  - first menu and QR setup;
  - first real shift.
- Connect every homepage onboarding step to the correct completed guide.
- Verify the `/download/` handoff and installer analytics.
- Keep download primary, guides secondary, and demo content proof-only.

### Production and Release QA

- Promote approved V3 markup, styles, scripts, and assets into production files.
- Keep the public site Greek-only and include the approved non-fiscal-POS clarification in FAQ, pricing footnote, and footer.
- Audit all internal links, download links, assets, sitemap entries, canonicals, and one-hop redirects.
- Preserve ranking URLs and validate the SEO migration plan before changing production paths.
- Run full keyboard, screen-reader, contrast, cross-browser, link, Lighthouse, Core Web Vitals, and GitHub Pages checks.
- Verify analytics events for downloads, guides, pricing, and trial starts.
- Obtain explicit approval before push, merge, or deployment.

## Deferred Assets

- Authentic kitchen/printer output capture.
- Published controlled QR-menu sample.
- Verified scannable QR code tied to that sample.
