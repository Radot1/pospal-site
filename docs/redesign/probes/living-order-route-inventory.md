# Living Order Route: Plan and Delivery Log

*Updated: 2026-06-21*

## Status

`Living Order Route` is the selected homepage direction. The current high-fidelity implementation lives in:

- `prototype/homepage-v3/index.html`
- `prototype/homepage-v3/styles.css`
- `prototype/homepage-v3/motion.js`

It remains a `noindex` prototype outside the sitemap. It has not been promoted to production, pushed, merged, or deployed.

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
