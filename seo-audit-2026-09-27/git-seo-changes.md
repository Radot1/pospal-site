# Git changes relevant to the SEO decline

Audit date: 27 September 2026. Git history is available and `git rev-parse --is-shallow-repository` returns `false`. This report uses local refs; it does not prove when each commit was deployed or crawled by Google.

User comparison: 25 March–24 June versus 25 June–24 September 2026. The strongest migration event in this history reaches `main` on **June 28**, near the beginning of the later period.

## Branch chronology matters

`1615fbb` made the major deletions on the redesign branch on June 26. `9cda0b5` merged `redesign/new-website` into main at **2026-06-28 09:25:26 +03:00**, with parents `8f817a8` and `c4013cc`. Compare first parent `8f817a8` to the merge for the main-branch before/after, rather than treating every intermediate redesign commit as production.

In particular, the June 25/26 branch snapshot briefly contains a minimal homepage titled `POSPal redesign` with no H1. The merge contains a substantive homepage. There is no deployment evidence that the temporary branch shell was served on production; it should not be claimed as a cause of the decline.

The deployment workflow at the merge was GitHub Pages, uploaded the repository root and triggered on pushes to `main`. That makes June 28 a strong candidate publication date, **not a verified successful deployment timestamp**. Actions logs, deployment SHA and GSC crawl data would confirm it. The current manual publication gate is later; it should not be projected backward onto June.

## Relevant chronology

| Date | Commit | SEO-relevant change | Assessment |
|---|---|---|---|
| June 19 | Existing baseline document | Records 21 live sitemap URLs returning 200; overlapping pricing/cafe/wireless pages; five slashless canonical mismatches; old guide refresh shells | Corroborating historical audit, not a fresh measurement of those dates |
| June 21 | `864a1f3` | Homepage/download/guides/pricing and prototype work on redesign branch | Prelaunch content/layout changes; not deployment proof |
| June 23 | `709d7ca` | Revised old commercial routes; added four setup guide pages; installation shell points to `/guides/windows-installation/`; sitemap edits | Confirms original target semantics and changing onboarding structure |
| June 24 | `f531492` | Further homepage/download/guide work; prototype deletions | Branch preparation; no demonstrated robots block |
| June 25 | `64897fe` | Homepage/download changes | Intermediate branch state, not the main merge |
| June 26 | `1615fbb` | Deletes 27 non-prototype HTML files relative to its parent, including the four user-reported URLs; adds waiter PDA page; replaces commercial pages; adds 28 exact `_redirects` rules to preexisting `/s/*` rewrite; sitemap contracts from 23 to 11 URLs | Central migration change; configured redirects do not execute on GitHub Pages |
| June 27–28 | `8463415`, `c4013cc` | Homepage/footer refinements | Navigation changes are relevant; no new penalty evidence |
| June 28 | `9cda0b5` | Redesign merged into main | Main-branch inventory and commercial content change together |
| June 28 | `33bc163` | Homepage tracking and sitemap dates | Sitemap remains 11 URLs; not a restoration of removed URLs |
| June 28 | `8323e06` | Download CTA click tracking | Analytics instrumentation change; distinguish measurement from organic rank change |
| June 28 | `049cee7` | CSS update | No demonstrated URL/canonical/noindex failure from this commit |
| July 4 | `4c7a5a2` | Price changes EUR 18.90 → 24.90 in visible copy, metadata and FAQ answers on commercial pages | Offer/CTR context, not proof of ranking causation |
| July 4 | `962358d` | Deployment workflow update | Hosting remains GitHub Pages; inspect actual run if aligning publication dates |
| July 4 | `6a7f382` | Corrects price EUR 24.90 → 23.90 | Same-day correction; no assumption Google crawled the intermediate price |
| July 5 | `e05b1a3`, `a5f92ed` and adjacent commits | Guide hub/academy script work; internal graph added around this period | Relevant to client routing and internal artifacts, not a new commercial URL migration |
| August 5 | `277623f`, `e678480` | About/entity and repository-backed workflow pages | Additional changes within later comparison period |
| August 30–31 | `14afc25`, `b833cd9`, `a0cc262`, `7fdbbc4` | PDA/system edits and static guide publication | Reintroduces canonical static guide destinations; old install URL remains broken |
| September 1 | `fb20fe0`, `7c0ab8f` and related commits | Pricing buyer-guide and PDA work | Current content differs materially from June launch |
| September 13 | `53a1255`, `b0a195b` | Homepage animation and deployment gate bypass option | Later changes; not evidence of a June cause |

Complete commit IDs, timestamps and changed paths for the requested window are in `git-window-evidence.txt`.

## Removed URLs and original meaning

All four user-proposed replacements are supported:

| Removed file/route | Archived evidence immediately before deletion | Recommended successor |
|---|---|---|
| `/times-systimatos-parageliolipsias/` | Title `Τιμές Συστήματος Παραγγελιοληψίας \| €18,90/μήνα \| POSPal`; H1 describes transparent subscription price | `/times.html` |
| `/dwrean-dokimi-30-imeron/` | Title `Δωρεάν Δοκιμή 30 Ημερών για POSPal \| Χωρίς Κάρτα`; H1 `30 ημέρες δωρεάν δοκιμή` | `/download/` |
| `/buy-license.html` | Title `Συνδρομή POSPal €18,90/μήνα \| Αγορά άδειας`; H1 `Συνδρομή POSPal με καθαρή μηνιαία τιμή` | `/times.html`, not the currently configured download destination |
| `/installation-guide.html` | Already a noindex 200 refresh/JS shell, explicitly canonicalizing and navigating to the Windows installation guide | `/guides/windows-installation/`, not the generic hub |

The pricing/trial/cafe/wireless directory pages had slashless canonicals, while sitemap URLs used slashes. Both forms should be included in a repair. The complete historical inventory is in `historical-url-inventory.csv`; archived title/canonical/text evidence is in `legacy-content-evidence.json`.

Other removed clusters include duplicate cafe/wireless landings, QR/menu pages, ordering-workflow content, support, demo aliases and specialist guides. Some guides were already redirect shells, so 27 deleted files does **not** mean 27 substantive indexed articles disappeared. Static printer/setup guides were deleted during June consolidation and later recreated on August 31; their current 200 status does not disprove the intervening migration gap.

## Sitemap, robots and canonical history

| Snapshot | Sitemap URLs |
|---|---:|
| Premerge main `8f817a8` | 21 |
| Redesign parent `1615fbb^` | 23 |
| Deletion commit `1615fbb` | 11 |
| Main merge `9cda0b5` | 11 |
| Current committed HEAD | 19 |
| Current live sitemap | 19 |
| Current working-tree sitemap | 20 |

Removed URLs were removed from the sitemap; this is not a present stale-sitemap-404 problem. The missing step was an effective migration redirect. Surviving system/pricing/wireless URLs retained their `.html` canonicals. `robots.txt` has no changes in the requested June 15–July 5 window and currently allows crawling. No blanket noindex on the surviving marketing pages was found in the compared snapshots.

## Titles and H1s

| Page | Premerge main | June launch | Current live |
|---|---|---|---|
| System H1 | `Σύστημα παραγγελιοληψίας για εστίαση` | `Η παραγγελία από τη σάλα μέχρι την κουζίνα.` | `Παραγγελιοληψία για εστίαση 23,90 €/μήνα` |
| Pricing H1 | `Σύστημα παραγγελιοληψίας τιμές για εστίαση` | `Μία καθαρή τιμή για όλη τη ροή.` | `Σύστημα παραγγελιοληψίας: τιμές και τι πραγματικά χρειάζεσαι.` |
| Wireless H1 | `Ασύρματη παραγγελιοληψία για εστίαση` | `Ασύρματη παραγγελιοληψία στην πράξη` | `Ασύρματη παραγγελιοληψία από κινητό ή tablet` |

The broad commercial title remained on the system page, but its premerge `και προγράμματα PDA` title phrase was removed. Homepage title changed from a PDA/ordering/price focus to Windows ordering; homepage H1 changed from an explicit system proposition to a workflow line. Complete title/H1/canonical values for six key pages across premerge, launch and HEAD are preserved in `git-metadata-comparison.md`.

These changes establish a different presentation and relevance emphasis. They do not establish that removing an exact keyword from an H1 caused the ranking decline, and restoring old text is not recommended without query evidence.

## Internal-link redistribution

Counts below are distinct referring files among the normalized non-prototype/non-document HTML files present at each Git snapshot; self-links excluded. Historical legal/support files are included, so these are not directly identical to the current 19-marketing-page corpus in the main URL table.

| Target | Premerge `8f817a8` | Merge `9cda0b5` |
|---|---:|---:|
| `/times.html` | 16 | 5 |
| `/systima-paraggeliolipsias.html` | 10 | 8 |
| `/asyrmati-paraggeliolipsia.html` | 1 | 3 |
| `/pda-ti-einai.html` | 0 | 7 |

The definition page's premerge zero is a source-corpus observation, not a claim that it had no external links, search visibility or JavaScript-discovered links. The existing June 19 audit records informational search traffic. The data show that the migration changed commercial/informational link support unevenly; they do not show a sitewide removal of all commercial links.

## Generated SEO content and schema

No automated SEO route generator or bulk keyword template expansion was found. June consolidation reduced the indexable sitemap rather than launching a large page farm, although premerge duplicate intent clusters existed. The checked commercial June snapshots use FAQPage schema, not Product. Later pricing/about SoftwareApplication offers should not be assumed to have created irrelevant Product search appearances without GSC evidence.

## Causal conclusion

**Confirmed:** URL removals, non-executing redirect configuration, changed headings/navigation and sitemap contraction occurred close to the period boundary; the four old URLs still fail today.

**Plausible but not established:** lost migration signals, changed internal-link support and changed commercial relevance contributed to the decline.

**Not established:** an algorithm penalty, a particular percentage of loss caused by any change, exact historical deployment/crawl dates, or irrelevant Product rich-result impressions. Test those claims against daily GSC query/page data and the June 28 deployment record before approving broader changes.
