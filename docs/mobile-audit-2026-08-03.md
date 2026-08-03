# POSPal mobile audit — 2026-08-03

## Scope and method

This audit covers every canonical URL currently listed in `sitemap.xml`.

Measured on the live site at:

- 390 × 844 CSS px (representative modern phone)
- 320 × 568 CSS px (narrow-phone stress test)
- 1440 × 900 CSS px for confirmation of the shared image defect

Checks included live visual review, document overflow, rendered versus intrinsic image dimensions, primary CTA position, tap-target size, text size, fixed overlays, responsive media rules, focus treatment, reduced-motion support, and initial resource transfer. Screenshots were temporary verification artifacts and are not part of the repository.

This is a layout and delivery audit, not a field Core Web Vitals report. All performance figures below are measured browser transfers; LCP, INP, and CLS are not claimed where no field data was collected.

## Executive verdict

The live site audited at the start of this work was not uniformly mobile-optimised. The critical defect is now repaired in the local working tree and awaits deployment.

- **7 of 11 pages reflow without document-level horizontal overflow and preserve their main image ratios.**
- **4 of 11 live pages had a critical image-ratio defect.** A 1280 × 900 screenshot rendered as 251 × 900 at 390 px and 187 × 900 at 320 px. The local fix now renders it proportionally.
- The critical defect is shared CSS, so one targeted rule can repair all four affected pages.
- The remaining pages are usable, but have secondary issues involving page length, very small supporting text, sub-44 px controls, and inefficient image delivery.

## Priority findings

### P0 — Four acquisition pages stretched the product screenshot vertically — resolved locally

Affected URLs:

- `/systima-paraggeliolipsias.html`
- `/pda-gia-kafeteries.html`
- `/paraggelio-lipsia-gia-beach-bar.html`
- `/asyrmati-paraggeliolipsia.html`

Measured rendering of the same 1280 × 900 source image:

| Viewport | Rendered size | Correct proportional height |
|---|---:|---:|
| 1440 px desktop | 332 × 900 | about 233 px |
| 390 px mobile | 251 × 900 | about 177 px |
| 320 px mobile | 187 × 900 | about 132 px |

The HTML `height="900"` presentation value remained active when CSS narrowed the image because `.seo-screen-card img` did not set `height: auto`. This added roughly 720–770 unnecessary vertical pixels to the hero and visibly deformed the UI screenshot.

Implemented repair: target only the product screenshot, not every image:

```css
.seo-screen-card img {
  width: 100%;
  height: auto;
}
```

The relevant rule is in `static/css/seo-acquisition.css`. It has been retested at 320, 390, and 1440 px.

## Implementation results

The following improvements are implemented in the working tree:

- Correct proportional screenshot rendering on all four affected SEO acquisition pages.
- PDA screenshots retain eager loading because they enter the first desktop viewport, and now use asynchronous decoding.
- Critical bold font is preloaded on all eight editable acquisition/PDA pages.
- Mobile cards no longer reserve an artificial 230 px minimum height.
- Mobile heading scale, section gaps, CTA proof layout, and touch feedback are tightened.
- The long `PDA σερβιτόρου` heading no longer splits the word `παραγγελιοληψία` across lines.

Measured at 390 px after implementation:

| Page | Before | After | Reduction |
|---|---:|---:|---:|
| `/pda-ti-einai.html` | 5,709 px | 5,025 px | 684 px |
| `/pda-pos-leitourgei.html` | 5,841 px | 5,241 px | 600 px |
| `/pda-gia-servitoro/` | 5,761 px | 4,967 px | 794 px |
| `/times.html` | 5,651 px | 5,524 px | 127 px |
| `/systima-paraggeliolipsias.html` | 7,339 px | 6,465 px | 874 px |
| `/pda-gia-kafeteries.html` | 7,170 px | 6,300 px | 870 px |
| `/paraggelio-lipsia-gia-beach-bar.html` | 7,303 px | 6,432 px | 871 px |
| `/asyrmati-paraggeliolipsia.html` | 7,456 px | 6,582 px | 874 px |

All eight editable pages return 200 locally, have no document-level horizontal overflow at 320, 390, or 1440 px, expose a visible 3 px keyboard focus indicator, and produced no console errors during the verification pass.

### P1 — Shared brand icon is oversized for its rendered use

`app_icon.ico` is 270,398 bytes on disk and is displayed at only 34–38 px. The live browser transferred about 42 KB for it in the measured sessions, but it still decodes from an unnecessarily large multi-resolution ICO.

Recommended repair: create an appropriately sized PNG/WebP brand image for visible page branding, retain a separate favicon, and use a proper PNG for `apple-touch-icon`.

### P1 — No responsive image candidates

The 1280 × 900 product screenshot is approximately 122 KB and is sent unchanged to 320 px phones. This is not catastrophic, but all screenshot-bearing pages lack `srcset` and `sizes`. A mobile candidate would reduce transfer and decoding work.

### P2 — Mobile controls and supporting text are sometimes too small

- Consent buttons measure 40 px high on most pages and 34 px on the homepage. They exceed the WCAG 24 px minimum but miss the preferred 44 px touch target.
- The homepage header CTA is approximately 11.5 px text.
- Guide carousel metadata is approximately 10.6 px text.
- Some homepage footer links are 34 px high; the support email is only 16 px high as a tap target.

### P2 — Several pages are unnecessarily long on mobile

- Homepage: 9,705 px at 390 px width.
- PDA pages: approximately 5,700–5,840 px.
- Pricing page: 5,651 px.
- Broken acquisition pages: approximately 7,170–7,456 px, with about 720–770 px caused by the image defect.

Length is not automatically a failure, but the homepage and PDA templates use very large headings, generous vertical spacing, and repeated proof/CTA sections. After the image repair, a separate content-density pass should decide what earns its space rather than shrinking everything indiscriminately.

## Page-by-page audit

### 1. `/`

**Verdict: usable, needs refinement.**

- No horizontal document overflow at 390 or 320 px.
- Primary CTA appears around 495 px from the top, within the first 390 × 844 viewport.
- Product screenshots keep intentional cropped proportions: mobile view about 160 × 330; Windows view about 290 × 230 at 390 px.
- Main weakness is density: the hero alone is about 2,230 px and the full page is 9,705 px.
- Header CTA text and several footer targets are undersized.
- Above-fold screenshots do not declare high fetch priority; below-fold QR assets correctly use lazy loading.

### 2. `/download/`

**Verdict: mobile-usable.**

- No horizontal overflow at either width.
- Download CTA is around 360 px from the top and measures about 362 × 60 at 390 px.
- Product screenshot keeps its ratio at about 332 × 233.
- Page length is a reasonable 1,935 px at 390 px.
- Secondary proof text wraps awkwardly on narrow screens, and the consent overlay occupies about 15% of the 390 × 844 viewport.
- This page is permanently locked under repository rules; findings are recorded only.

### 3. `/guides/`

**Verdict: mobile-usable, small-text issue.**

- No document-level horizontal overflow.
- The guide selector intentionally uses a horizontally scrollable carousel; off-screen cards are contained inside it.
- Video frame preserves 16:9 at about 354 × 194 and uses lazy loading.
- Carousel metadata is only about 10.6 px, which is too small for comfortable mobile reading.
- Consent controls are 40 px high rather than the preferred 44 px.
- This page is permanently locked under repository rules; findings are recorded only.

### 4. `/pda-ti-einai.html`

**Verdict: mobile-usable.**

- No horizontal overflow at 390 or 320 px.
- Product screenshot keeps its ratio: about 358 × 256 at 390 px and 288 × 207 at 320 px.
- Primary CTA is visible around 476 px from the top.
- Touch targets pass the 44 px check in the measured interactive content.
- Page is long at 5,709 px and uses a highly enlarged, centre-aligned lead; this is a density concern rather than a broken layout.

### 5. `/pda-pos-leitourgei.html`

**Verdict: mobile-usable.**

- No horizontal overflow.
- Product screenshot ratio is preserved at both widths.
- Primary CTA is visible around 465 px from the top.
- H1 occupies about 125 px at 390 px and 106 px at 320 px; readable but visually dominant.
- Page length is 5,841 px.

### 6. `/pda-gia-servitoro/`

**Verdict: mobile-usable, dense hero.**

- No horizontal overflow.
- Product screenshot ratio is preserved.
- Primary CTA appears around 506 px from the top.
- The H1 is the longest in this template family: about 166 px tall at 390 px and 141 px at 320 px.
- Page length is 5,761 px; a later copy/layout pass should reduce first-screen reading effort.

### 7. `/times.html`

**Verdict: strongest acquisition-template mobile page.**

- No horizontal overflow.
- No large product screenshot, therefore it avoids the shared image defect.
- Primary CTA appears around 395 px from the top and is 48 px high.
- H1 scales from 34 px at 390 width to 31 px at 320 width.
- Remaining issues are the common consent target size, icon delivery, and overall page length of 5,651 px.

### 8. `/systima-paraggeliolipsias.html`

**Verdict: broken product image; fix before refinement.**

- No horizontal document overflow.
- CTA and text reflow correctly.
- Product screenshot renders 251 × 900 at 390 px and 187 × 900 at 320 px.
- Hero becomes about 1,725 px tall; full page becomes 7,339 px.
- Shares the P0 `.seo-screen-card img` defect.

### 9. `/pda-gia-kafeteries.html`

**Verdict: broken product image; fix before refinement.**

- No horizontal document overflow.
- H1 reflows to four lines at 320 px but remains readable.
- Product screenshot renders 251 × 900 at 390 px and 187 × 900 at 320 px.
- Hero becomes about 1,725 px tall; full page becomes 7,170 px.
- Shares the P0 `.seo-screen-card img` defect.

### 10. `/paraggelio-lipsia-gia-beach-bar.html`

**Verdict: broken product image; fix before refinement.**

- No horizontal document overflow.
- CTA and body copy reflow correctly.
- Product screenshot renders 251 × 900 at 390 px and 187 × 900 at 320 px.
- Hero becomes about 1,748 px tall; full page becomes 7,303 px.
- Shares the P0 `.seo-screen-card img` defect.

### 11. `/asyrmati-paraggeliolipsia.html`

**Verdict: broken product image; fix before refinement.**

- No horizontal document overflow.
- CTA and body copy reflow correctly.
- Product screenshot renders 251 × 900 at 390 px and 187 × 900 at 320 px.
- Hero becomes about 1,725 px tall; full page becomes 7,456 px.
- Shares the P0 `.seo-screen-card img` defect.

## What is already good

- Every audited URL returned HTTP 200.
- Every page has a viewport meta tag.
- All content images declare intrinsic width and height, which helps layout stability.
- Product images have meaningful alternative text; decorative brand icons use empty alt text.
- Page-level horizontal overflow was absent at both tested mobile widths.
- Focus-visible styles and reduced-motion handling exist across the template families.
- Main CTAs are full-width or comfortably sized on mobile.
- The guides carousel is intentionally scrollable rather than forcing the whole document wider.

## Recommended sequence

1. **Completed locally:** repair `.seo-screen-card img` and retest the four affected pages.
2. Deploy the current working-tree changes and repeat a short live smoke test.
3. Replace the visible `.ico` brand image with an appropriately sized asset and add responsive screenshot candidates. The locked pages require explicit approval before this shared asset work.
4. Review the locked homepage, download, and guides findings only if their permanent lock is explicitly lifted.
5. Run a separate mobile Lighthouse/Core Web Vitals lab pass after deployment.

Do not combine these phases. The image-ratio repair is isolated, measurable, and should be completed first.
