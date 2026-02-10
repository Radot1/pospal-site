# Home v2 Draft Structure Notes

Status: Draft only (no changes to index.html). Target draft file: drafts/home-v2.html.

## Goals
- Make the site feel like the product: clean, modern, business-grade.
- Show the UI and workflow by visual experience, minimal text.
- Elevate the QR menu as a core included feature.
- Keep CTA hierarchy: Demo primary, Download secondary.

## Constraints
- Greek-only public copy (English notes are OK here).
- Keep the existing welcome page unchanged; work in drafts/ only.
- Do not link to POSPal.exe; download is POSPal-win-Setup.exe (pospal-artifacts host).
- No competitor mentions or compliance/fines claims.
- "Not a fiscal POS" note only when approved.

## Visual Direction (business-grade)
- Crisp, software-first aesthetic with a friendly feel; neutral base + brand green.
- Avoid cozy/cafe styling; keep it owner-focused and approachable.
- Motion is purposeful (staggered reveals, gentle transitions).
- Clean demo frames (soft bezels, minimal chrome) with real UI previews.
- Consistent desktop container width for all sections; hero uses a wider container and gives more space to the demo column.
- Header banner expands to hero width at top and tightens to the content width on scroll.
- Banner motion: subtle horizontal drift on scroll + progress line + adaptive header content (tagline + secondary CTA collapse).

## Experience-First Structure (outline)
1. Hero: two-column layout with headline + CTAs on the left and the experience stage on the right. Stage 1 expands to full width on scroll (with a scroll runway), adds a "try it" focus state, then unlocks the live demo. Stage 2 swaps in QR menu copy (left) + live QR menu (right).
2. Pricing block + CTA (repeat primary + secondary).
3. Short FAQ (SEO-focused).
4. Footer.

## Feature-to-Visual Mapping
- Clean UI: hero demo iframe in the experience stage.
- Orders + kitchen: ticket/receipt micro panel.
- QR menu: live iframe paired side-by-side with the demo.
- Multi-device: hero iframe switches between mobile/desktop views.
- Guides removed for now; revisit when scope allows.

## Replacement Ideas (pending approval)
- Trust strip: small row with "No card for trial", "Cancel anytime", "Works alongside fiscal POS".
- Mini proof panel: 2–3 short bullets about speed, clarity, QR menu included.
- CTA band with QR + Demo (lightweight, no new visuals).

## Notes
- Keep copy minimal; rely on visuals to communicate.
- All public copy stays Greek; this doc remains English.
- Coffee-menu demo pages live in `drafts/pospal-demo-coffee-desktop.html` and `drafts/pospal-demo-coffee-mobile.html`; items and categories mirror the live QR menu.
- Stage 2 uses a same-origin QR menu in `drafts/qr-menu-demo.html` with a live link to the hosted QR menu.
