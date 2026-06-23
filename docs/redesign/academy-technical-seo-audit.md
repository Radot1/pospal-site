# Academy Technical SEO Audit And URL Migration Plan

Audit date: 2026-06-23  
Scope: current live `/guides/` system, the selected Academy classroom direction, `robots.txt`, `sitemap.xml`, canonicals, legacy redirect shells, and internal `?lesson=` links.

This document is the technical SEO launch gate for promoting the Academy from prototype to production.

## Evidence

Metric labels follow the technical SEO checker rule: Measured, User-provided, Estimated, or N/A.

| Item | Status | Evidence |
| --- | --- | --- |
| Live `/guides/` | Measured | `https://pospal.gr/guides/` returns `200 OK` on GitHub Pages over HTTPS. |
| Live `robots.txt` | Measured | `https://pospal.gr/robots.txt` returns `200 OK`, allows all crawlers, and declares `https://pospal.gr/sitemap.xml`. |
| Live `sitemap.xml` | Measured | `https://pospal.gr/sitemap.xml` returns `200 OK`, includes `/guides/`, and does not include lesson URLs. |
| Legacy `installation-guide.html` | Measured | Returns `200 OK`; current HTML has `noindex,follow`, canonical to `https://pospal.gr/guides/index.html?lesson=0`, and meta-refresh/JS to that query URL. |
| Production `?lesson=` internal links | Measured | 45 matches across 12 HTML files: 31 to `lesson=0`, 10 to `lesson=1`, 4 to `lesson=2`. |
| Current guide lessons | Measured | `guides/index.html` has only two real lesson records: `0 = printer preparation`, `1 = Windows installation`. |
| Prototype indexing | Measured | `prototype/academy-odoo-lab/` is intentionally prototype-only and should remain out of sitemap. |
| Core Web Vitals | N/A | No Lighthouse, PSI, or CrUX export was run in this pass. |

## Locked URL Decisions

| Route | Role | Indexing | Canonical |
| --- | --- | --- | --- |
| `/guides/` | Public Academy entry point, labelled "Guides" in navigation | Index | `https://pospal.gr/guides/` |
| `/guides/printer-setup/` | Start Here lesson: equipment/printer preparation | Index when the real lesson page exists | `https://pospal.gr/guides/printer-setup/` |
| `/guides/windows-installation/` | Start Here lesson: install POSPal on Windows | Index when the real lesson page exists | `https://pospal.gr/guides/windows-installation/` |
| `/guides/connect-staff-devices/` | Start Here lesson: connect staff phone/tablet | Index when the real lesson page exists | `https://pospal.gr/guides/connect-staff-devices/` |
| `/guides/test-order/` | Start Here lesson: run the first test order | Index when the real lesson page exists | `https://pospal.gr/guides/test-order/` |
| `/academy/` | Not approved | Do not create | N/A |
| `/guides/index.html?lesson=*` | Legacy query-param state only | Do not link internally; do not add to sitemap | Prefer client-side replacement to stable route while on GitHub Pages |

Important implementation note: `/guides/` may open with the first Start Here lesson selected, but it must not be an exact duplicate of `/guides/printer-setup/`. Keep the same classroom shell, but give `/guides/` hub-level metadata and heading context, while `/guides/printer-setup/` gets lesson-specific title, description, canonical, and primary H1.

## Canonical Rules

| Check | Status | Evidence | Action |
| --- | --- | --- | --- |
| Hub self-canonical | Pass | Current `guides/index.html` canonical is `https://pospal.gr/guides/`. | Keep this. |
| Lesson self-canonicals | Partial risk | Stable lesson files do not exist yet. | Add self-canonical to each published lesson path during implementation. |
| Query-param canonicals | Fail | Current legacy installation page canonicals to `https://pospal.gr/guides/index.html?lesson=0`. | Replace with stable destination canonicals; never canonicalize to `?lesson=`. |
| Duplicate first lesson risk | Partial risk | `/guides/` and `/guides/printer-setup/` can render the same selected lesson. | Use distinct hub vs lesson metadata, or delay indexing `/guides/printer-setup/` until the implementation can set unique metadata. |

## Sitemap Decisions

Current sitemap state is acceptable for the existing production guide hub: `/guides/` is listed, no lesson URLs are listed.

When the Academy is promoted:

1. Keep `https://pospal.gr/guides/`.
2. Add only finished, indexable Start Here lesson URLs:
   - `https://pospal.gr/guides/printer-setup/`
   - `https://pospal.gr/guides/windows-installation/`
   - `https://pospal.gr/guides/connect-staff-devices/`
   - `https://pospal.gr/guides/test-order/`
3. Do not add prototype URLs.
4. Do not add `/academy/`.
5. Do not add `/guides/index.html?lesson=*`.
6. Do not add `Soon` lessons or collapsed future modules.
7. Do not add noindex redirect shells.
8. Update `lastmod` only for pages whose meaningful content changed.

Score: 8/10. Issue: lesson URLs are not yet represented because they do not exist in production.

## Old `?lesson=` Link Replacement

Measured inventory:

| Legacy target | Count | Current meaning | Production replacement |
| --- | ---: | --- | --- |
| `/guides/index.html?lesson=0` | 31 | Printer preparation / generic Guides nav | Use `/guides/printer-setup/` when the link promises printer/setup. Use `/guides/` for generic nav/footer labels. |
| `/guides/index.html?lesson=1` | 10 | Windows installation | Use `/guides/windows-installation/`. |
| `/guides/index.html?lesson=2` | 4 | Old copy says "First menu and QR", but no current real lesson exists. | Do not create an indexable URL just to satisfy old links. For launch, replace with `/guides/` and adjust visible copy to a generic Guides label, or defer until a real `/guides/qr-menu/` or `/guides/first-menu/` lesson is approved and published. |

Affected files:

| File | Action |
| --- | --- |
| `times.html` | Replace install/setup guide link with `/guides/printer-setup/` or `/guides/windows-installation/` based on visible text. |
| `buy-license.html` | Generic nav/footer links go to `/guides/`; installation guide links go to `/guides/windows-installation/`. |
| `support.html` | Generic guide links go to `/guides/`. |
| `privacy.html` | Generic guide links go to `/guides/`. |
| `download/index.html` | Installation handoff should go to `/guides/windows-installation/`; "Guide 0" copy should be updated to the new lesson label. |
| `systima-paraggeliolipsias.html` | Installation guide links go to `/guides/windows-installation/`; generic nav links go to `/guides/`. |
| `times-systimatos-parageliolipsias/index.html` | Installation guide links go to `/guides/windows-installation/`; generic nav links go to `/guides/`. |
| `pda-gia-kafeteria/index.html` | Printer/setup links go to stable setup lessons; old QR lesson links should become `/guides/` until a real QR lesson exists. |
| `dwrean-dokimi-30-imeron/index.html` | Windows install links go to `/guides/windows-installation/`; old QR lesson links should become `/guides/` until a real QR lesson exists. |
| `asyrmati-parageliolipsia-estiasi/index.html` | Windows install links go to `/guides/windows-installation/`; printer links go to `/guides/printer-setup/`. |
| `qr-menu-estiasis/index.html` | Old QR lesson links should not point to a fake lesson. Use `/guides/` until a real QR lesson exists. |
| `installation-guide.html` | Replace canonical, refresh URL, JS replacement URL, and body link with the stable destination. |

Do the replacements in the same implementation pass that creates the stable destination pages. Replacing links before the pages exist would create avoidable 404s.

## Legacy Redirect Handling

GitHub Pages cannot issue query-string-specific 301 redirects from `/guides/index.html?lesson=0` to `/guides/printer-setup/`. Until hosting changes, use three layers:

1. Remove all internal links to `?lesson=`.
2. In the guide shell, detect legacy `?lesson=` values and `window.location.replace()` to the stable path.
3. Keep a visible fallback link for no-JavaScript users.

Recommended legacy query mapping:

| Legacy URL | Best destination |
| --- | --- |
| `/guides/index.html?lesson=0` | `/guides/printer-setup/` |
| `/guides/index.html?lesson=1` | `/guides/windows-installation/` |
| `/guides/index.html?lesson=2` | `/guides/` until the QR/menu lesson exists |

Recommended legacy shell page mapping:

| Old URL | Current state | Destination |
| --- | --- | --- |
| `/installation-guide.html` | `noindex,follow` shell, currently points to `?lesson=0` | `/guides/printer-setup/` or `/guides/windows-installation/` depending final visible copy. Prefer `/guides/windows-installation/` if the page title remains "installation guide". |
| `/guides/first-week-optimization/` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real lesson exists. |
| `/guides/seasonal-management/` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real lesson exists. |
| `/guides/qr-menu-best-practices.html` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real QR lesson exists. |
| `/guides/beach-bar-setup.html` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real lesson exists. |
| `/guides/cafe-optimization.html` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real lesson exists. |
| `/guides/food-truck-mobile/` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real lesson exists. |
| `/guides/proto-menou-kai-qr/` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real QR/menu lesson exists. |
| `/guides/logariasmos-kai-pliromes/` | `noindex,follow` shell to `/guides/` | Keep to `/guides/` until a real billing/support lesson exists. |

If hosting later supports server redirects, convert these to one-hop 301 redirects and remove the meta-refresh dependency.

## Crawlability

| Check | Status | Evidence | Action |
| --- | --- | --- | --- |
| `robots.txt` exists and parses | Pass | Live file returns 200 and is simple allow-all. | Keep. |
| Sitemap declared | Pass | `Sitemap: https://pospal.gr/sitemap.xml`. | Keep. |
| Important templates not blocked | Pass | No disallow rules. | Keep. |
| Sitemap contains only indexable URLs | Partial risk | Current sitemap is clean for guides; future lesson URLs need controlled addition. | Add only real, self-canonical lesson pages. |

Score: 8/10. No P0 crawl blocker found.

## Indexability

| Check | Status | Evidence | Action |
| --- | --- | --- | --- |
| Noindex blocks intentional | Pass | Legacy redirect shells use `noindex,follow`; prototype is not in sitemap. | Keep noindex on redirect/prototype pages. |
| Canonicals self-consistent | Partial risk | Hub is good; legacy installation shell canonicals to a query URL. | Canonical legacy shells to stable destination. |
| Query URLs controlled | Fail | Current guide JS writes `?lesson=` into the address and internal pages link to it. | Replace with stable lesson paths. |
| 4xx risk controlled | Partial risk | Stable lesson URLs do not exist yet. | Create pages before replacing internal links. |

Score: 6/10 until stable lesson URLs exist and old internal links are replaced.

## URL Structure

| Check | Status | Evidence | Action |
| --- | --- | --- | --- |
| Canonical host/protocol consistent | Pass | Live pages use `https://pospal.gr/`; HTTPS/HSTS present. | Keep absolute canonicals. |
| Slugs stable/readable | Pass | Proposed lesson slugs are stable and descriptive. | Use lowercase trailing-slash directory routes. |
| Parameters controlled | Fail | `?lesson=` is currently part of the guide navigation. | Stop generating query URLs for public navigation. |
| Redirect chains avoided | Partial risk | GitHub Pages shells are HTML-level, not HTTP 301. | Keep one-hop meta refresh for now; use 301s only if hosting changes. |

Score: 7/10 after implementation; 5/10 in current production state.

## Structured Data

| Check | Status | Evidence | Action |
| --- | --- | --- | --- |
| Current schema valid | N/A | Not audited in this pass. | Validate during implementation. |
| Video schema opportunity | Partial risk | Academy is video-led; videos are known, but facts like upload date/duration were not verified here. | Add `VideoObject` only when title, embed URL, thumbnail, upload date, and duration are verified. |
| Breadcrumb opportunity | Partial risk | Stable lesson hierarchy is clear. | Add `BreadcrumbList` for `/guides/` and lesson pages if implementation supports it cleanly. |

Score: 6/10 planning score; validation still required.

## Performance, Mobile, Security, International

| Area | Status | Evidence | Action |
| --- | --- | --- | --- |
| Performance | N/A | No Lighthouse/PSI/CrUX run in this pass. | Run mobile and desktop Lighthouse after pages are promoted locally. |
| Mobile | Partial pass | Prototype mobile screenshot was previously checked at 390px with no horizontal overflow. | Re-test production `/guides/` and lesson URLs at 320, 390, 768, and desktop. |
| Security | Pass | Live pages served over HTTPS with HSTS from GitHub Pages. | Avoid mixed content; keep YouTube embeds HTTPS. |
| International | N/A | Greek-only site; no alternate language set. | Keep `lang="el"`; do not add hreflang unless another locale launches. |

## Priority Queue

P0: Do not publish internal links to stable lesson URLs until the destination pages exist and return 200.

P0: Do not promote prototype or `Soon` lessons into sitemap/indexing.

P1: Replace all 45 internal `/guides/index.html?lesson=*` links during the Academy implementation pass.

P1: Replace `installation-guide.html` canonical/refresh/body links so they no longer point to `?lesson=0`.

P1: Make `/guides/` and `/guides/printer-setup/` distinct enough for indexing, or delay indexing the first lesson URL.

P1: Add self-canonicals and sitemap entries only for finished Start Here lessons.

P2: Add `VideoObject` and `BreadcrumbList` schema after video facts and visible breadcrumbs are final.

P2: Re-run mobile, no-JS, and Lighthouse QA after promotion.

## Launch Checklist

- `/guides/` returns 200, has hub-level metadata, self-canonical, and no `noindex`.
- Each published lesson URL returns 200, has lesson-level metadata, self-canonical, and no `noindex`.
- Every production guide link uses `/guides/` or a stable lesson path, never `?lesson=`.
- `sitemap.xml` lists `/guides/` plus only finished, indexable Start Here lesson URLs.
- Legacy shells are `noindex,follow` and point one hop to the closest stable destination.
- Legacy query values are handled by client-side replacement while GitHub Pages remains the host.
- No `/academy/` route exists.
- No prototype URL appears in sitemap or public navigation.
- No fake QR/menu lesson URL is created before real content exists.
- Download CTAs continue to use `/download/` or the approved installer host, not a direct `POSPal.exe` link.

## Handoff Summary

The Academy URL strategy is viable if promotion is atomic: create the stable lesson pages, set self-canonicals, update sitemap entries, and replace old `?lesson=` links in the same pass. The biggest current technical SEO risks are query-param guide navigation, the legacy installation shell canonicalizing to a query URL, and the duplicate-content risk between `/guides/` and `/guides/printer-setup/`. GitHub Pages cannot solve query-specific redirects with real 301s, so the practical mitigation is to remove internal query links, client-side replace old query visits, and keep redirect shells noindexed until hosting supports server redirects.
