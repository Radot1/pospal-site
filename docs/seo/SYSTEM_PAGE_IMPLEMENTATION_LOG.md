# Commercial system page — implementation record

Date: 2026-08-30

Page: `/systima-paraggeliolipsias.html`

Status: Implemented and checked locally. Not committed, pushed or published.

## Approved direction

The user approved making this the commercial decision page for independent Greek hospitality owners who will install and try POSPal themselves. The page uses Robert's attitude without becoming a long first-person pitch.

Source of truth: [MARKETING_PLAN.md](../../MARKETING_PLAN.md). Supporting documents:

- [Content brief and pre-rewrite baseline](SYSTEM_PAGE_CONTENT_BRIEF.md)
- [Competitor research](SYSTEM_PAGE_COMPETITOR_RESEARCH_2026-08-30.md)

## What changed

1. The hero keeps the exact category in the H1 and adds the campaign line: `Σύστημα παραγγελιοληψίας για εστίαση. Χωρίς όλη την ιστορία.` Public price, Windows, trial and direct download are immediately part of the offer.
2. Self-service is explicit: download, guided setup, a real test order, then self-managed subscription. No sales call, quote or presentation is required.
3. One short founder note links Robert to the existing About page. This is founder copy written for the page, not a testimonial or purported historical quotation.
4. A simple phone → Windows → kitchen/printing sequence replaces several separate technical explanations. Simple mode, table mode and included QR menu remain covered.
5. Device freedom uses the exact canonical PDA line and a recognisable shift problem. Local-network/browser requirements remain next to the claim.
6. Printer copy supports reuse without promising every printer/connection combination: installed in Windows, then verified with a real test print.
7. A dedicated offer block makes the 30-day trial, no card/personal details, €23.90/month including VAT and cancellation clear. The non-fiscal boundary appears in the price footnote, FAQ and footer.
8. Essential Windows/network requirements stay visible; a native disclosure contains the detailed checklist. FAQ answers are also native disclosures. All their content remains in the HTML without JavaScript loading.
9. The page uses existing real desktop and QR screenshots. No fake customer proof, decorative product mockups, new demo funnel or generated image assets were added.

## SEO and conversion checks

Measured from the final local page:

| Check | Result |
| --- | --- |
| Title | 57 characters; category, monthly price and brand |
| Meta description | 153 characters; product, Windows, trial, no card, price including VAT |
| Main heading structure | One H1, seven H2s, four H3s |
| Main content | Approximately 1,023 whitespace-delimited words, including collapsed requirements/FAQ |
| Canonical | Existing `https://pospal.gr/systima-paraggeliolipsias.html` retained |
| Social metadata | Updated title/description; existing real product image |
| FAQ | Nine visible questions; nine schema questions; exact normalized question/answer parity |
| JSON-LD | Parses successfully |
| Local links/assets | All referenced local destinations and files exist |
| Fragment targets | Valid; no duplicate IDs |
| Download path | All five download-labelled links reach `/download/`; that unchanged page links to the approved `pospal-artifacts` installer |
| Sitemap | Existing URL retained, lastmod updated to 2026-08-30; XML parses |

These are implementation checks, not a Google ranking score. Search Console, real downloads and installed trials were not remeasured during this implementation. No higher ranking, AI citation or conversion result is claimed.

The existing FAQ schema was synchronized. SoftwareApplication/Organization schema and external authority work remain separate future work; neither was silently added here.

## Responsive and functional verification

- Inspected the local page in the in-app browser at 320, 390, 768, 1024 and 1440-pixel viewport widths.
- No main/header element overflow at those widths; headline no longer splits the word `παραγγελιοληψίας`.
- Desktop hero, workflow and pricing inspected visually; narrow-phone text, CTAs, setup steps and expanded FAQ inspected visually.
- Requirements and FAQ disclosures checked for expansion/collapse; the setup jump link lands below the sticky header.
- Real screenshot assets load; explicit dimensions remain; hero image is WebP with high fetch priority, lower QR image lazy-loads.
- Dark-section signal contrast corrected. Existing visible focus treatment retained.
- Fixed a page-specific markup interaction: the founder attribution is not a nested `footer`, so the existing consent script places its cookie-settings link in the actual site footer.
- No new JavaScript or dependencies.
- Browser console check returned no warnings or errors.

## Scope protection

- `index.html`, `download/index.html` and `guides/index.html` are unchanged.
- Existing shared CSS rules were not edited. Every new selector is scoped to `.seo-page-system`.
- Shared analytics and consent scripts are unchanged.
- PDA pages are unchanged.
- No temporary screenshots or review assets were created in the repository. Pre-existing files under `tmp/` were left alone.
- `git diff --check` passes; Git reports only normal LF/CRLF conversion warnings.

## Skills used

`pospal-voice`, `copywriting`, `cro`, `on-page-seo-auditor`, `frontend-design`, and `browser:control-in-app-browser`.

Voice and conversion skills shaped the argument around independent ownership, with restrained founder presence and fewer repeated claims. Frontend and browser checks corrected responsive typography, overflow, disclosure layout and the consent-footer interaction. The SEO audit protected query coverage, metadata, existing URL, internal paths and FAQ consistency.

## Handoff

The next action is user review of the local page, then commit/push only when requested. After publication, confirm the live page and canonical are served correctly. Do not treat these local checks as a deployment or an indexing confirmation.

## Follow-up: mobile optimization — 2026-08-30

User requested a dedicated mobile-device pass after reviewing the commercial rewrite.

### Changes

- Reduced phone headline/tagline size and section spacing while retaining 16px main body copy.
- Moved trial/price details above the first download button visually on phones. No-card/no-personal-details terms remain visible.
- Kept the primary download button full-width in portrait; the secondary setup jump is a quieter, 44px-high text link.
- Replaced the narrow two-column setup grid with numbered rows and increased its explanation text from approximately 13.8px to 15px.
- Simplified the stacked mode cards and FAQ cards into compact rows. All explanations and nine FAQ answers remain in the HTML; no extra content was hidden or removed for mobile.
- Kept the real product screenshot, sized it for phone reading flow, and added a labelled magnification link to the full image in a new tab.
- Reduced QR image/display padding without adding assets or JavaScript.
- Made footer links a two-column touch-friendly list, with bottom space for the existing cookie-settings control.
- Applied the compact layout to phone landscape as well as narrow portrait widths. Added safe-area padding for devices with display cutouts; physical notched-device behavior was not tested.
- Versioned this page's stylesheet URL so cached CSS does not mask the update.

### Measured checks

At 390 × 844, with disclosures closed, local page height changed from approximately **8,095px to 7,024px** (about **13% less scrolling**). The monthly price moved from roughly y=741px to y=492px; the primary hero download button ends at y=599px. These are rendered-layout measurements, not Core Web Vitals or a conversion forecast.

Checked 320 × 740, 375 × 812, 390 × 844, 430 × 932, 768 × 1024, 844 × 390 landscape and 1440 × 900 desktop:

- No measured horizontal overflow in the main content, header or footer.
- Visible main/header/footer links and disclosure summaries have at least 44px-high targets at checked portrait widths; no undersized targets were found in the tablet/desktop matrix either.
- The 320px portrait view shows both price and primary hero download button within the first 740px viewport.
- Setup anchor clears the sticky header; the FAQ opens and closes successfully.
- Title, description, canonical, one H1, five download links and exact nine-question FAQ/schema parity are preserved.
- All three page images load; browser console returns no warnings or errors.
- Desktop visual structure remains intact; its checked page height remains approximately 5,378px.
- Locked pages and shared JavaScript are unchanged; all styling additions remain scoped to the system page.

Skills for this follow-up: `frontend-design`, `pospal-voice`, `browser:control-in-app-browser`. The voice pass preserved the approved substantive copy; this was a mobile presentation pass, not another marketing rewrite.

Status: locally implemented and checked; not committed, pushed or published. No generated review assets were added to the repository.

## Follow-up: SEO audit fixes and recheck — 2026-08-30

The user approved addressing the preceding audit findings and repeating the check. This section supersedes earlier counts and estimated scores; earlier sections remain historical baselines.

### Implemented fixes

- Replaced this page's header/favicon ICO references with a 96 × 96 PNG (8,214 bytes) derived from the existing brand artwork. Added a 180 × 180 Apple touch icon (23,564 bytes). The original ICO remains untouched for other pages. The header asset is 97% smaller than the 270,398-byte original; even both new icons combined are 88% smaller. These are file-size comparisons, not measured loading-time gains.
- Tightened the hero, setup, founder note, equipment and offer copy. Kept the campaign line, canonical PDA proposition, self-service purchase, full offer and product limitations. No font-size reduction or new mobile-only hiding was used in this pass.
- Removed three duplicate FAQ entries: the definition, included features/price and QR inclusion are already explained in the main page. QR internet requirements remain in the requirements disclosure. Six remaining questions and their JSON-LD answers match exactly.
- Added specific links to the existing Windows installation and equipment preparation videos. Printer copy now gives a concrete trial check: send an order from the phone and verify that it prints at the intended preparation point. This is an instruction for the owner's test, not a claim that we tested their printer.
- Preserved real desktop/QR screenshots. No fabricated customer evidence, compatibility matrix, review markup or new video embed was added.

### Measured local recheck

| Check | Result |
| --- | --- |
| Main words, including closed disclosures | 1,026 → 839 (18.2% fewer) |
| Phone height, 390 × 844, disclosures closed | 7,024 → 6,427px (8.5% shorter) |
| Desktop height, 1440 × 900 | 5,378 → 4,955px (7.9% shorter) |
| Phone hero offer | Price at approximately y=468px; download button ends at y=575px |
| Title / description | Unchanged: 57 / 153 characters |
| Main headings | One H1, seven H2s, four H3s; no skipped levels |
| FAQ | Six questions; JSON parses; exact normalized visible/schema parity |
| Canonical / sitemap | Original canonical retained; sitemap XML parses and includes it |
| Local URLs | All 18 unique root-relative file/page paths exist and return HTTP 200 from the local server |
| Anchor IDs | Main-page fragments valid; no duplicate IDs |
| Download path | Five links to `/download/`; approved installer destination unchanged |
| Specific guide links | Both open the intended guide heading and existing video iframe |
| Images | All three page images load; explicit dimensions retained; below-fold QR remains lazy-loaded |
| Desktop/mobile content | Exact main-text parity |
| Disclosures | FAQ opens/closes; requirements opens/closes; setup anchor clears the sticky header |
| Console | No warnings/errors on the system-page check |

Responsive matrix: 320 × 740, 375 × 812, 390 × 844, 430 × 932, 768 × 1024, 844 × 390 landscape, 1440 × 900. No horizontal overflow or visible main/header/footer links or summaries below 44px in height were measured. This is not a full WCAG certification or physical-device test.

The existing cookie-settings link is a JavaScript action with a `#cookie-settings` placeholder, not a missing content anchor. Its unchanged handler prevents navigation and opens settings. Consent UI adds two headings outside `main`; those are not included in the page-content heading count.

### Estimated scorecard, same weights as the preceding audit

These are editorial on-page readiness estimates, not Google scores, measured rankings or Lighthouse results. The primary category remains `σύστημα παραγγελιοληψίας για εστίαση`; secondary coverage includes phone/tablet ordering, kitchen flow, QR menu, Windows and transparent pricing.

| Area | Weight | Desktop /10 | Mobile /10 | Evidence / limitation |
| --- | --- | --- | --- | --- |
| Title | 15% | 9 | 9 | Category first, price and brand; unchanged |
| Meta description | 5% | 9 | 9 | Clear Windows/trial/price summary; unchanged |
| Headings | 10% | 9 | 9 | One category H1, logical hierarchy, shorter supporting headings |
| Content / readability | 25% | 8.5 | 8 | 18.2% fewer words, fewer repeat questions, actionable proof links; genuine customer evidence still missing |
| Keyword use | 15% | 9 | 9 | Category in title/H1/opening and natural related terms; no filler added to meet a word-count target |
| Links | 10% | 9 | 9 | Local paths pass; direct links to the relevant video guides replace a generic guide detour |
| Images | 10% | 9 | 9 | Lightweight brand derivatives, existing real screenshots, dimensions and appropriate loading |
| Observable technical | 10% | 8 | 8 | Canonical/robots/sitemap/markup/layout pass locally; field speed and deployed response headers unmeasured |
| **Weighted total /100** | **100%** | **87.75** | **86.5** | **Rounded /10: desktop 8.8, mobile 8.7** |

Previous estimates were desktop 83.5/100 (reported as 8.4/10) and mobile 81/100 (8.1/10). The improvement is attributed to shorter copy, stronger guide connections and smaller logo assets, not to newly demonstrated ranking performance.

### Remaining gaps and handoff

- **P1 — performance verification pending:** LCP, INP, CLS and a throttled Lighthouse/PageSpeed test are N/A. The available browser connection supports viewport and visibility control but does not expose a performance-audit capability. Local asset weights were measured; they cannot establish real-world speed. Test the deployed revision after publication rather than scoring the old live page as this revision.
- **P1 — independent proof pending:** the repo explicitly has no approved testimonials, customer logos, case studies or model-specific printer test evidence. Existing screens/videos are first-party product proof only. Obtain authentic evidence before adding it.
- **P2 — post-publication check:** confirm the new assets, canonical and page return correctly on the live site. Do not interpret local HTTP 200 as production deployment or Google indexing.
- FAQ markup earns no rich-result uplift in this score. [Google retired FAQ rich results starting May 7, 2026](https://developers.google.com/search/updates). The remaining answers are kept because they help buyers.
- The same content is served to desktop and mobile, consistent with [Google's mobile-first guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing).

Scope: only this system page, two public icon derivatives and maintained documentation changed during this follow-up. No CSS or JavaScript changes in this pass. Locked pages and PDA pages are untouched. Existing earlier uncommitted page/CSS work is preserved. No screenshots or temporary review outputs were created in the repo.

Skills used: `pospal-voice`, `frontend-design`, `image`, `seo-audit`, `on-page-seo-auditor`, `technical-seo-checker`, `browser:control-in-app-browser`. Voice reduced repetition without removing Robert's stance; image guidance preserved the real logo instead of generating new artwork; SEO checks protected intent and metadata without padding the page. The unavailable shared remote skill-contract reference was not required to fabricate a result; the installed local audit templates and scoring rubric were used.

Status: **DONE_WITH_CONCERNS** — approved local fixes completed and rechecked; live performance and authentic customer proof remain unverified. Not committed, pushed or published.
