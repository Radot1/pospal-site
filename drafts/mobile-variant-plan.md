# Mobile Variant Plan (Auto Switching)

## Decision
- Desktop keeps the current experience unchanged.
- Mobile uses the mobile demo in Phase 1 and QR demo in Phase 2.
- Demo source switches automatically based on device/viewport (no manual toggle).

## Phases (Mobile)
1) **Welcome**: hero copy + primary/secondary CTAs + small preview hint.
2) **Phase 1 — Workflow Demo**: sticky phone frame with mobile demo + 2–3 bullets.
3) **Phase 2 — QR Menu**: same frame cross-fades to QR demo + QR bullets + live QR link.

## Transition Behavior
- Welcome → Phase 1: preview expands into sticky device; copy fades to phase bullets.
- Phase 1 → Phase 2: device stays sticky; iframe cross-fades to QR demo; phase label updates.
- Motion: subtle opacity + 8–12px translate; respects `prefers-reduced-motion`.

## Interaction Rules
- Iframe starts non-interactive to preserve scroll.
- “Tap to interact” overlay enables pointer events.
- Lazy-load Phase 2 iframe as it approaches viewport to avoid heavy load.

## Risks & Mitigations
- iOS sticky quirks → avoid transforms on sticky parents; use `100svh`.
- Iframe scroll trapping → overlay + pointer-events gating.
- Performance → lazy-load second iframe + avoid heavy transforms on mobile.

## Implementation Checklist
- [ ] Remove mobile-only splash block.
- [ ] Add mobile phase layout (single column + sticky device).
- [ ] Mobile-specific CSS: phone ratio, max width, spacing.
- [ ] IntersectionObserver to switch phase state + iframe visibility.
- [ ] Lazy-load QR iframe + cross-fade.
- [ ] Add phase label/progress hint (1/2).
