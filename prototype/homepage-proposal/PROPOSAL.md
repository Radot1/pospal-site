# POSPal homepage proposal

Created 2026-09-14. Review copy only. Not published or linked from the production site.

## Open the proposal

Serve the repository root and open `/prototype/homepage-proposal/`.
The current local preview is http://127.0.0.1:8765/prototype/homepage-proposal/.
The server is bound to loopback. It can be restarted from the repository root with
`python -m http.server 8765 --bind 127.0.0.1` and stopped with Ctrl+C.

## Direction and skills

- **design-taste-frontend:** preserve brand green and actual incumbent typography, put real application screens beside the offer, reduce supporting heading scale, remove decorative animation, keep the page in a consistent light theme. Dial choices: DESIGN_VARIANCE 5, MOTION_INTENSITY 2, VISUAL_DENSITY 5. This is a restrained refinement for hospitality owners, not a visual identity replacement.
- **POSPal Voice:** explain the Windows/mobile mechanism plainly, use the canonical PDA proposition with a recognizable device-sharing moment, retain network and printer qualifications, simplify the closing invitation. The new PDA scene is a general observation, not a customer testimonial.
- **SEO Audit:** retain the baseline title, meta description, canonical, H1 and all seven FAQ question/answer pairs. Retain every baseline HTML link destination and the dedicated acquisition-page links. Keep all explanatory content in static HTML.

Repository sources: `AGENTS.md`, `MARKETING_PLAN.md`, `.agents/product-marketing.md`, `docs/redesign/search-console-intent-map-2026-06-23.md`, and the current `index.html`.

## What changed in this copy

1. Split opening with real Windows and mobile screenshots. Screenshots can be opened at full size. The H1 remains unchanged. The lead now explains how the product works.
2. Trial and the existing first-user price condition remain near the first download action.
3. The animated printer and connection theatre become real screenshots plus a short, expandable explanation of the same-device reconnect behaviour. The unique factual content from the feature strip remains in the page.
4. A short PDA argument connects the device-sharing problem to POSPal's no-per-device-fee proposition and the existing waiter page.
5. Equipment, QR, setup and price remain distinct topics but use smaller headings and tighter layouts. Printer text adds the actual Windows/test-print qualification.
6. All seven original FAQ answers remain verbatim. The closing ledger is condensed while retaining its information.
7. Footer acquisition links and legal destinations remain available.

## Challenges applied before delivery

| Challenge | Decision |
| --- | --- |
| Is the split hero just another template? | The visual evidence is the existing application, not an invented interface or device illustration. |
| Would a campaign headline introduce unnecessary SEO uncertainty? | Preserve the existing H1. The campaign headline remains an unimplemented alternative. |
| Does reducing page height mean deleting useful answers? | Preserve all FAQ answers, equipment facts, setup steps, price conditions, cancellation and fiscal distinctions. |
| Does the new PDA block take over homepage intent? | Keep it brief, retain the broad product explanation and link to the existing dedicated page. |
| Does screenshot placement hide the offer? | Tighten the desktop composition and place product proof at about 610px from the document top at 390px width. |
| Can taste criteria guarantee SEO improvement? | No. This is a review prototype. Current GSC and CWV measurements are still needed before a release decision. |

## Isolation and SEO boundaries

- Only this proposal directory was added. Production `index.html`, `download/index.html`, `guides/index.html`, shared styles/scripts, robots.txt and sitemap are unchanged.
- The draft has its own stylesheet; it does not import the production homepage stylesheet or scripts.
- The draft uses `noindex, nofollow`, retains the production canonical as baseline metadata, and is not listed in the sitemap. It is intended for localhost review. These preview settings must not be copied blindly into a production page.
- Analytics and consent scripts are deliberately not executed in this local review copy. Production analytics and consent behaviour would need to be preserved and verified in any separately authorized implementation.
- Actual legacy screenshot files already used by the homepage are reused. No new screenshot archive or duplicate image assets were created. Before publication of a new page, these references should be migrated to `static/` without breaking the locked homepage's existing asset paths.
- The source font-family label says Commissioner but loads Inter files. This draft names the actual existing files Inter; it does not introduce a new typeface.
- The homepage lock remains in force. Approval of this proposal alone is not a replacement of the permanent lock.

## Verification

- Compared source and draft: title, description, canonical and H1 preserved; 7/7 FAQ pairs preserved verbatim.
- No baseline link destination removed. All local HTML link/asset paths resolve to existing repository files.
- One H1, no duplicate IDs, no scripts in the draft, no locked/shared file modifications.
- Browser inspection: desktop and 390px mobile screenshots; narrow 320px overflow check. No horizontal overflow observed in checked layouts. All five images loaded.
- FAQ expansion works with native details/summary, with answers already in HTML. Mobile navigation also uses native details/summary.
- No SEO ranking prediction, Lighthouse score, field Core Web Vitals result or conversion improvement is claimed.

## Before considering production

Review the visual direction and copy first. Then obtain a fresh Search Console homepage/query baseline, compare content and links again after any requested revisions, measure loading behaviour, validate consent/analytics and image delivery, and explicitly resolve the homepage lock if replacing the live page is requested. Nothing has been committed, pushed or deployed by this proposal task.

## Approved taste refinement

Applied to this copy only, after the user's review:

- The Windows and phone screens now share one background, aligned captions and a common display height. The phone has more presence; on narrow screens the desktop preview focuses on the order panel. Both existing full-resolution images still open via their original links.
- The PDA passage spans the section instead of repeating the two-column introduction/detail arrangement.
- Removed redundant green introductory labels from equipment, QR, setup, pricing, FAQ and the closing offer. Kept the hero product category and the PDA topic label.
- Setup now uses one ordered sequence at desktop and mobile widths.
- Removed the download invitation beneath the FAQ. The final offer remains the sole concluding invitation, with its guide link below the download button.
- Desktop (1280px) and mobile (390px) browser checks found no horizontal overflow. All images loaded. All 7 baseline FAQ question/answer pairs remain unchanged. Production files remain untouched and the preview still has noindex/nofollow.
# Implemented hero follow-up

## Taste + Impeccable polish

Removed the hero eyebrow, retained the category in the shorter explanation, and moved feature coverage into the existing order-flow paragraph. Aligned screenshot captions, reduced the Windows frame height, tightened the offer grouping, and raised hero supporting text to 12px. Existing headline, trial, price conditions and destinations remain. Screenshots are approved placeholders. Detector warnings about the inherited Inter family are intentionally accepted to preserve this refinement's identity; lower-page warnings are outside this hero pass.

The hero now uses unboxed real order screenshots, independent device proportions, and a quieter second headline line. Download, trial, pricing conditions, and the seven FAQs remain. The existing Windows and mobile captures show different orders, so captions describe the devices without claiming a matched order. A genuine matching capture is still needed for that exact visual story. Production files remain untouched.
