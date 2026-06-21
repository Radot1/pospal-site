# POSPal Technical SEO Baseline

*Audit date: 2026-06-19*

## Scope And Evidence

This is the pre-redesign baseline for `https://pospal.gr/`.

- **Measured:** Live HTTP responses, headers, HTML, internal links, sitemap, robots.txt, canonical tags, JSON-LD, resource sizes, and redirect behavior captured on 2026-06-19.
- **User-provided:** Search Console export covering the last three months and ending around 2026-05-19.
- **N/A:** Current CrUX/Lighthouse metrics. The public PageSpeed API returned a quota-exceeded response for all requested samples.
- **Not available:** Raw access logs, backlink export, GA4 conversion report, completed-install telemetry, and staging site.

The live sitemap contains 21 URLs. All 21 returned `200 OK`. A crawl of 36 unique internal HTTP targets found no broken internal target, but five internal targets first return a `301` because links omit the served trailing slash.

## Search Baseline

Search Console summary, user-provided:

- 101 clicks
- 2,613 impressions
- 3.87% CTR
- Average position 12.64
- Mobile: 66 clicks / 1,759 impressions
- Desktop: 30 clicks / 835 impressions
- Tablet: 5 clicks / 19 impressions

### VIP URLs To Preserve

| URL | Clicks | Impressions | CTR | Position | Migration note |
|-----|------:|------------:|----:|---------:|----------------|
| `/` | 47 | 423 | 11.11% | 5.56 | Preserve metadata intent and internal authority |
| `/pda-ti-einai.html` | 29 | 1,120 | 2.59% | 7.05 | Highest non-brand opportunity; preserve URL |
| `/pda-pos-leitourgei.html` | 14 | 573 | 2.44% | 7.39 | Preserve URL and improve CTR/first screen |
| `/paraggelio-lipsia-gia-beach-bar.html` | 4 | 114 | 3.51% | 5.75 | Preserve seasonal landing URL |
| `/systima-paraggeliolipsias.html` | 3 | 282 | 1.06% | 36.27 | Preserve until content role is decided |
| `/times.html` | 2 | 151 | 1.32% | 8.36 | Stronger historical pricing URL |
| `/pda-gia-kafeteries.html` | 1 | 100 | 1.00% | 7.61 | Stronger historical cafe URL |

The clean-directory pricing page has 1 click and 13 impressions. The older `/times.html` has substantially more visibility, so a redesign must not replace it solely for URL aesthetics. The same principle applies to cafe and wireless-ordering duplicate clusters.

## 1. Crawlability

**Evidence:** `robots.txt`, `sitemap.xml`, 21 sitemap pages, and 36 internal targets measured live.

| Check | Status | Evidence | Action |
|-------|--------|----------|--------|
| `robots.txt` exists | Pass | `200 OK`; allows `/` | Keep crawl access explicit |
| Sitemap declared | Pass | `Sitemap: https://pospal.gr/sitemap.xml` | Preserve declaration |
| Sitemap is reachable | Pass | `200 OK`; valid XML with 21 URLs | Rebuild after canonical decisions |
| Important assets crawlable | Pass | No blocking directives | Preserve |
| Internal target health | Partial | No broken targets; five links cause an avoidable 301 | Link directly to trailing-slash URLs |
| Sitemap quality | Partial | Includes overlapping intent clusters and one mojibake page | Include only chosen canonical URLs |
| `lastmod` reliability | Unverified | Dates exist but were not compared to deployment history | Generate from real content changes or omit |

**Score:** 8/10.

## 2. Indexability

| Check | Status | Evidence | Action |
|-------|--------|----------|--------|
| Sitemap URLs return 2xx | Pass | 21/21 return `200` | Preserve during rebuild |
| Canonicals match served URL | Fail | Five clean-directory pages omit their served trailing slash in canonical tags | Use exact final URL including slash |
| Duplicate clusters resolved | Fail | Pricing, cafe, wireless, and QR intent exists on overlapping URLs | Select by Search Console evidence and redirect deliberately |
| Legacy pages use HTTP redirects | Fail | Retired guides return `200` meta-refresh/JavaScript shells | Replace with real one-hop 301 redirects where hosting permits |
| Broken encoding controlled | Fail | `/qr-menu-gia-estiash.html` has mojibake in title, metadata, schema, and body | Fix immediately or redirect to the selected QR canonical |
| Error handling | Partial | Old demo URLs return 404 but still appear in historical Search Console data | Map to an equivalent download-led page only if relevance is clear |

**Affected canonical mismatches:**

- `/dwrean-dokimi-30-imeron/`
- `/pda-gia-kafeteria/`
- `/times-systimatos-parageliolipsias/`
- `/qr-menu-estiasis/`
- `/asyrmati-parageliolipsia-estiasi/`

**Score:** 5/10.

## 3. Performance

**Field/lab metrics:** N/A. The PageSpeed API quota was unavailable.

Measured implementation risks:

- Homepage HTML: approximately 105 KB.
- Runtime Tailwind script: approximately 407 KB and loaded in the document head.
- Consent script: approximately 23 KB.
- GA event script: approximately 12 KB.
- Homepage embeds dynamic demo/QR frames and substantial inline CSS/JavaScript.

The redesign should compile static CSS, reduce inline/runtime work, reserve media dimensions, and lazy-load below-the-fold proof. Lighthouse/CrUX must be captured before implementation is approved for release.

**Score:** N/A until measured performance data is available.

## 4. Mobile

| Check | Status | Evidence | Action |
|-------|--------|----------|--------|
| Viewport present | Pass | Core pages include a responsive viewport tag | Preserve |
| Mobile content intent | Partial | Download page has a mobile-specific share/copy route | Keep without collecting personal information |
| Semantic parity | Partial | Download page contains two `h1` elements and hides both variants until JavaScript selects one | Render one semantic page with progressive enhancement |
| Visual reflow and targets | N/A | In-app browser was unavailable for visual/interaction testing | Test at 320px, 375px, tablet, desktop, keyboard, and zoom |

**Score:** 6/10 based on markup only.

## 5. Security And HTTPS

| Check | Status | Evidence | Action |
|-------|--------|----------|--------|
| HTTPS canonical host | Pass | HTTP and `www` redirect to `https://pospal.gr/` | Preserve |
| HSTS | Pass | `max-age=31556952` | Preserve |
| Mixed content | Pass | No HTTP asset references found across sitemap pages | Preserve |
| Common security headers | Partial | CSP, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` absent | Review host capabilities; document GitHub Pages limitations |

**Score:** 7/10.

## 6. URL Structure

Current patterns mix `.html` pages and trailing-slash directories. Transliteration and singular/plural forms are inconsistent. Consistency is desirable, but preserving existing search equity is more important than a cosmetic URL rewrite.

### Duplicate Decisions

| Intent | URLs | Evidence-led direction |
|--------|------|------------------------|
| Pricing | `/times.html`, `/times-systimatos-parageliolipsias/` | Prefer preserving `/times.html` unless newer data reverses the visibility gap |
| Cafe PDA | `/pda-gia-kafeteries.html`, `/pda-gia-kafeteria/` | Prefer preserving `/pda-gia-kafeteries.html` pending query-page validation |
| Wireless ordering | `/asyrmati-paraggeliolipsia.html`, `/asyrmati-parageliolipsia-estiasi/` | Preserve the older URL until the replacement is proven and redirected |
| QR menu | `/qr-menu-gia-estiash.html`, `/qr-menu-estiasis/` | Fix the broken page immediately; choose the final canonical after content/backlink review |

No final redirects should ship until every old URL has a one-hop mapping and equivalent destination.

**Score:** 4/10.

## 7. Structured Data

Measured live:

- Homepage contains valid `Organization`, `WebSite`, and `FAQPage` JSON-LD.
- Ten additional `.html` marketing pages contain valid `FAQPage` JSON-LD.
- All extracted JSON-LD parsed successfully.
- Several clean-directory pages, guides, support, download, and privacy have no JSON-LD.
- The QR `.html` schema parses but its Greek content is mojibake.

Actions:

- Preserve `Organization` and `WebSite` on the homepage.
- Add `BreadcrumbList` only where visible hierarchy exists.
- Add software/product markup only after confirming eligibility and matching visible facts.
- Do not treat schema volume as a ranking strategy.
- Ensure all schema copy exactly matches readable page content.

**Score:** 6/10.

## 8. International SEO

**Status:** N/A. Public content is intentionally Greek-only. Do not add English URLs or hreflang unless the market strategy changes.

## Scorecard

| Area | Score | Top blocker | First fix |
|------|:-----:|-------------|-----------|
| Crawlability | 8/10 | Sitemap contains overlapping intent URLs | Rebuild after canonical selection |
| Indexability | 5/10 | Canonical conflicts, legacy 200 shells, mojibake | Fix encoding and redirect/canonical behavior |
| Performance | N/A | No CWV data; large runtime CSS dependency | Capture Lighthouse/CrUX and compile CSS |
| Mobile | 6/10 | Markup-only review; JS-dependent download view | Progressive enhancement and device testing |
| Security | 7/10 | Missing optional security headers | Review hosting limitations |
| URL structure | 4/10 | Mixed duplicate URL clusters | Evidence-led one-hop redirect map |
| Structured data | 6/10 | Uneven coverage and corrupted QR schema | Preserve valid core schema; fix alignment |
| International | N/A | Not applicable | Keep Greek-only |

**Partial score:** 36/60 across the six areas with sufficient evidence. Performance and international SEO are excluded rather than estimated.

## Priority Queue

### P0

1. Fix or redirect the mojibake QR page.
2. Preserve the seven VIP URLs listed above during all design work.

### P1

1. Choose canonical URLs for duplicate intent clusters using Search Console evidence.
2. Replace legacy guide move pages with one-hop HTTP redirects to equivalent completed guides.
3. Correct the five trailing-slash canonical mismatches and internal links.
4. Remove the runtime Tailwind dependency in the redesigned templates.
5. Make the download page semantic and progressively enhanced.

### P2

1. Normalize metadata and schema per final template.
2. Review sitemap `lastmod` accuracy.
3. Add useful breadcrumbs where hierarchy is visible.
4. Document hosting-related security-header limitations.

## Migration Gates

Do not ship the redesign until:

- every current sitemap and Search Console URL has a keep, redirect, or intentional removal decision;
- redirects are one hop with no loops;
- VIP titles, descriptions, headings, canonicals, and internal links are diffed against this baseline;
- no production `noindex` or `Disallow: /` is present;
- each template has exactly one visible `h1`;
- schema validates and matches visible content;
- mobile and desktop Lighthouse results are recorded;
- all onboarding destinations referenced by download CTAs are complete;
- post-launch checks are scheduled for T+1, T+7, and T+30.

## Handoff Summary

- **Status:** DONE_WITH_CONCERNS
- **Objective:** Freeze the technical SEO state before the POSPal website redesign.
- **Output:** 21-URL live inventory, Search Console VIP list, risk map, duplicate clusters, priority queue, and migration gates.
- **Evidence:** Live crawl on 2026-06-19 plus user-provided three-month Search Console export ending around 2026-05-19.
- **Open loops:** Page-level query mapping, backlink data, GA4 conversion data, real CWV metrics, final canonical choices, and hosting support for HTTP redirects/headers.
- **Next design input:** Use the product-marketing context and this baseline when producing the sitemap, onboarding specification, and homepage concepts.
