# AGENTS.md

## Purpose
Guidance for agents working on the POSPal marketing site.

## Scope
- Marketing site only (static HTML/CSS/JS in this repo).
- Use MARKETING_PLAN.md as the source of truth.

## Objectives
- Primary: drive downloads of `POSPal-win-Setup.exe` (Windows installer).
- Secondary: drive guide engagement after or around the download, especially installation/setup guides.
- Emphasize the 30-day free trial with no card and no personal information required.
- Demo traffic is no longer a goal. Keep any demo content small and proof-oriented only; do not create or promote a dedicated demo funnel unless explicitly approved.

## Audience
- Greek hospitality businesses (cafes, restaurants, beach bars, food trucks, seasonal).
- Decision makers: owners/managers/operators.

## Positioning
- POSPal is a kitchen/order workflow tool.
- It runs alongside existing fiscal POS systems.
- It does NOT handle the fiscal layer.
- State this clearly when relevant: POSPal is **not** a fiscal POS and **not** a cash register.

## Messaging pillars
- All-in-one workflow (tables, simple mode, QR menu included).
- Modern UI with clear pricing.
- Direct subscription; no middleman; cancel anytime.

## CTA rules
- Primary CTA: Download `POSPal-win-Setup.exe`.
- Primary public CTA wording should usually be `Κατέβασε για Windows` or trial wording that still points to the download flow.
- Secondary CTA: Guides, especially installation/setup guides.
- Do not make Demo the primary CTA.
- Do not add a dedicated demo page, demo nav item, or demo-first funnel unless explicitly approved.
- Do NOT link to POSPal.exe directly.
- Use pospal-artifacts as the download host:
  `https://github.com/Radot1/pospal-artifacts/releases/latest/download/POSPal-win-Setup.exe`

## Funnel rules
- Search and landing pages should answer the query quickly, then move the visitor toward download.
- Guides are a commitment/investment step after interest in the product, not a replacement for the download CTA.
- A small embedded demo or screenshot can support trust, but should not distract from download.
- Old or dead demo URLs should not remain as destinations; redirect them to the current download-led path when site edits are approved.

## Content rules
- Greek-only public copy (English internal notes are OK).
- Avoid naming competitors.
- Avoid claims about compliance or fines.
- Keep statements factual and non-comparative.

## Writing style
- Tone: natural human Greek.
- Prefer short, clear sentences.
- Do not stuff keywords unnaturally.

## Language standards
- Use monotonic Greek (μονοτονικό) consistently.
- Keep spelling and tonos usage correct and consistent.
- Preferred terms: `παραγγελιοληψία`, `ασύρματη`, `σερβιτόρος`.
- Preserve Greek readability first; include search-term variants only where they read naturally.

## What to avoid
- Do not over-promise features or outcomes.
- Do not claim integrations unless they are real and verified in this repo/project context.
- Do not write fake testimonials, fabricated social proof, or invented customer quotes.

## Legal/clarity note
- Include a "not a fiscal POS" note in FAQ + pricing footnote + footer (only when approved).

## Asset rules
- Do not reference missing assets.
- Prefer static/ for new assets.
- Keep links and sitemap updated when pages change.

## Workflow constraints
- Do not edit the website without explicit approval, except under the redesign branch mandate below.
- Draft copy/structure first, then implement after approval.
- Ground all outputs in repository context files (for example this `AGENTS.md` and `MARKETING_PLAN.md`) before drafting or editing.
- Permanent lock: `index.html`, `download/index.html`, and `guides/index.html` are locked forever unless the user explicitly replaces this rule. Do not edit these files, and do not change shared CSS or JS in a way that alters their rendering.

## Redesign branch mandate
- On `redesign/new-website`, the user has explicitly approved experimental website edits, throwaway prototypes, and substantial visual departures without per-change approval.
- Improvise boldly and surprise the user; the existing site is product/SEO context, not a visual template that must be preserved.
- Prototype multiple genuinely different structures before promoting a direction into production files.
- Product truth, Greek-only public copy, download rules, fiscal-POS clarity, real asset requirements, and the ban on fabricated proof remain mandatory.
- Preserve existing search equity through measured URL decisions and tested one-hop redirects; do not rewrite ranking URLs for aesthetics alone.
- Do not deploy, push, or merge the redesign unless the user explicitly requests it.

## Testing
- No automated tests required (static site).
