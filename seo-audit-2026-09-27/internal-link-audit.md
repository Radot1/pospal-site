# Targeted internal-link authority and relevance audit

Updated 28 September 2026. **Audit and proposal only. No website, copy, redirects, titles, H1s, canonicals or deployment changed.** Paths below are relative to https://pospal.gr.

## Scope, reused evidence and current status

This extends the existing [internal-links.csv](internal-links.csv), [URL table](indexable-marketing-urls.md), [SEO audit](seo-audit.md), [Git analysis](git-seo-changes.md), [rendered evidence](rendered-evidence.json) and [production redirect specification](production-redirects/README.md). No dedicated placement/anchor audit previously existed. The prior CSV covered links between the 19 canonical marketing/support URLs; it omitted legal destinations and query aliases. Those omissions explain differences in the broader outgoing counts below, not newly added links.

Fresh GETs on 28 September verified the same 19 live sitemap pages, all HTTP 200. Their literal links to one another match the previous CSV exactly. Newly examined: anchor wording, body versus boilerplate placement, live/local differences, guide-query status, and placement changes in the already identified Git snapshots. The owner confirms the 90 Cloudflare static redirects are active; this audit accepts that completion and does not re-audit redirect architecture. GitHub Pages remains origin.

The supplied exact-query GSC results supersede earlier uncertainty about major cannibalisation: Google generally selects the intended system, wireless and pricing pages, but their positions are weak (system queries 41.65/65.72; wireless 52.48; wireless prices 41.90). Definition-page performance (~5,034 impressions, 63 clicks, position ~5.7) versus system (~885 impressions, zero clicks, ~54) makes the definition-to-system transition a useful priority. These are owner-supplied figures, not a fresh GSC export. Better informational rankings demonstrate performance for those queries, not a measurable transferable quantity of “Google trust.”

### Counting and placement rules

- Primary corpus: the 19 live canonical indexable marketing, informational, conversion and guide pages. Excludes noindex legal pages, prototypes, public internal reports and unpublished `/arthra/`.
- Incoming = literal cross-page anchor occurrences; unique referring pages are separate. Repeated links do not represent additional independent authority. Self-links and fragment-only jumps are excluded; destination fragments otherwise collapse to the same page, while query URLs remain separate.
- Outgoing shows both links into the 19-page corpus and all same-site HTML/page-route links, including legal pages and unresolved guide queries. Excludes image links, installer/external links, email/telephone links and Cloudflare email-protection URLs.
- Placement: contextual body (including relevant article-local related cards/next-article navigation), CTA/button in content, site navigation, or footer. Header download buttons count as navigation by location. Contextual buttons count as meaningful progression, not automatically as boilerplate. Relevant `<nav>` blocks within an article are not confused with the global menu.
- These are fresh HTML-source counts. The previous rendered crawl and current script review show legal consent links may be injected; they are excluded from these static counts. They do not add commercial inlinks. The guide hub's normal static links are retained; query routing is treated separately. No fresh pixel/scroll-depth or user-click measurement was performed. “Prominent” means structural hero/body placement, not measured attention.
- Repository-wide searches separately checked current HTML anchors plus JS/CSS/config/documentation references against approved static legacy sources. Archived records are evidence, not active navigation. Existing uncommitted changes were preserved.

## Main finding

**One strong contextual link from the PDA definition article is the clearest opportunity.** It currently links to the system page only as `Το σύστημα` in the footer. The other three priority PDA pages already have meaningful system links. Commercial pages already connect to pricing/download; no blanket linking programme is justified.

The system page has 21 incoming anchor occurrences from 9 canonical pages: 9 footer, 3 global navigation, 6 body CTA/buttons and 3 contextual body links. Those 9 meaningful body/button occurrences come from 7 distinct pages. It is not orphaned and is not generally less supported than minor content. The issue is the quality and location of one valuable missing progression, not a demonstrated sitewide authority starvation.

## 1. Current page inventory and link map

Incoming counts are from the primary corpus. Outgoing `corpus / all` uses the definitions above. S/T/W/D = links to system/pricing/wireless/download; self is not counted as an outgoing link.

| URL | Title | H1 | Incoming anchors | Source pages | Outgoing corpus / all | S / T / W / D |
|---|---|---|---|---|---|---|
| / | POSPal \| Παραγγελιοληψία για εστίαση σε Windows | Από το τραπέζι μέχρι την κουζίνα. Χωρίς διακοπές. | 35 | 18 | 26 / 33 | yes / yes / yes / yes |
| /sxetika-me-to-pospal/ | Σχετικά με το POSPal \| Παραγγελιοληψία για εστίαση | Το POSPal, με καθαρά λόγια. | 7 | 4 | 23 / 30 | yes / yes / yes / yes |
| /download/ | Κατέβασε POSPal για Windows \| POSPal-win-Setup.exe | Κατέβασε POSPal για Windows | 64 | 18 | 7 / 18 | no / no / no / self |
| /guides/ | Οδηγοί POSPal \| Εγκατάσταση, ρυθμίσεις και υποστήριξη | Οδηγοί POSPal | 55 | 18 | 13 / 20 | no / no / no / yes |
| /guides/printer-setup/ | Σύνδεση θερμικού εκτυπωτή στα Windows \| POSPal | Σύνδεση θερμικού εκτυπωτή στα Windows για το POSPal | 3 | 3 | 8 / 15 | no / no / no / yes |
| /guides/windows-installation/ | Εγκατάσταση POSPal σε Windows \| Πρώτη ρύθμιση | Εγκατάσταση και πρώτη ρύθμιση του POSPal σε Windows | 4 | 3 | 9 / 16 | no / no / no / yes |
| /guides/app-tour/ | Πρώτη χρήση POSPal: τραπέζια και παραγγελίες | Πρώτη χρήση του POSPal: μενού, τραπέζια και πληρωμές | 2 | 2 | 7 / 14 | no / no / no / yes |
| /guides/settings/ | Ρυθμίσεις POSPal: εκτυπωτές, τραπέζια και συσκευές | Ρυθμίσεις POSPal για τραπέζια, εκτυπωτές και συσκευές | 2 | 2 | 7 / 14 | no / no / no / yes |
| /guides/qr-menu/ | QR menu POSPal: δημιουργία και δημοσίευση | Δημιουργία και δημοσίευση QR menu στο POSPal | 3 | 3 | 7 / 14 | no / no / no / yes |
| /guides/account/ | Λογαριασμός POSPal: συνδρομή, άδεια και πληρωμές | Διαχείριση λογαριασμού, συνδρομής και άδειας POSPal | 2 | 2 | 7 / 14 | no / no / no / yes |
| /guides/troubleshooting/ | Αντιμετώπιση προβλημάτων POSPal και σύνδεσης κινητού | Αντιμετώπιση προβλημάτων και σύνδεσης κινητού στο POSPal | 2 | 2 | 6 / 13 | no / no / no / yes |
| /pda-ti-einai.html | PDA τι είναι: έννοια και χρήση στην εστίαση \| POSPal | PDA τι είναι στην εστίαση; | 10 | 8 | 9 / 16 | yes / yes / no / yes |
| /pda-pos-leitourgei.html | PDA πώς λειτουργεί: 3 βήματα στην εστίαση \| POSPal | PDA πώς λειτουργεί στην πράξη | 3 | 3 | 16 / 23 | yes / no / no / yes |
| /pda-gia-servitoro/ | PDA σερβιτόρου από κινητό ή tablet \| POSPal | PDA σερβιτόρου από κινητό ή tablet | 11 | 7 | 16 / 23 | yes / yes / yes / yes |
| /times.html | Σύστημα παραγγελιοληψίας: τιμές 23,90 €/μήνα \| POSPal | Σύστημα παραγγελιοληψίας: τιμές και τι πραγματικά χρειάζεσαι. | 18 | 8 | 18 / 28 | yes / self / no / yes |
| /systima-paraggeliolipsias.html | Σύστημα παραγγελιοληψίας εστίασης \| 23,90 €/μήνα \| POSPal | Παραγγελιοληψία για εστίαση 23,90 €/μήνα | 21 | 9 | 15 / 27 | self / yes / no / yes |
| /pda-gia-kafeteries.html | PDA για καφετέριες και παραγγελιοληψία \| POSPal | Παραγγελιοληψία για καφέδες, τραπέζια και πάγκο. | 6 | 5 | 20 / 27 | yes / yes / yes / yes |
| /paraggelio-lipsia-gia-beach-bar.html | Παραγγελιοληψία για beach bar με PDA \| POSPal | Παραγγελιοληψία για beach bar με PDA | 2 | 2 | 20 / 27 | yes / yes / yes / yes |
| /asyrmati-paraggeliolipsia.html | Ασύρματη παραγγελιοληψία για εστίαση σε Windows \| POSPal | Ασύρματη παραγγελιοληψία από κινητό ή tablet | 6 | 5 | 22 / 29 | yes / yes / self / yes |

Full source/anchor/placement tables for every destination are in Appendix A. All four informational pages link to the system somewhere; **only `/pda-ti-einai.html` lacks a meaningful body/button link**. No important canonical page in this corpus is orphaned. Beach-bar has only two sources, both footer placements; its weaker support is not a reason to take links away from it.

## 2. Every current source linking to the system page

| Source | Exact anchor | Placement | Context |
|---|---|---|---|
| / | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /sxetika-me-to-pospal/ | Δες τι περιλαμβάνει το POSPal | CTA/button | Hero / opening CTA |
| /sxetika-me-to-pospal/ | Δες το πρόγραμμα παραγγελιοληψίας του POSPal | CTA/button | Μία ροή από την παραγγελία μέχρι την κουζίνα. |
| /sxetika-me-to-pospal/ | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /pda-ti-einai.html | Το σύστημα | footer | Boilerplate |
| /pda-pos-leitourgei.html | Δες το σύστημα παραγγελιοληψίας στην πράξη | CTA/button | Hero / opening CTA |
| /pda-pos-leitourgei.html | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /pda-gia-servitoro/ | Δες όλη τη ροή του POSPal | contextual body | Μία συνδρομή. Όχι χρέωση για κάθε PDA. |
| /pda-gia-servitoro/ | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /times.html | Δες πώς λειτουργεί το σύστημα παραγγελιοληψίας → | contextual body | Χρειάζεσαι ταμειακή ή παραγγελιοληψία; |
| /times.html | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | navigation | Boilerplate |
| /pda-gia-kafeteries.html | Δες όλη τη ροή του POSPal | CTA/button | Hero / opening CTA |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | navigation | Boilerplate |
| /paraggelio-lipsia-gia-beach-bar.html | Δες όλη τη ροή του POSPal | CTA/button | Hero / opening CTA |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | footer | Boilerplate |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | navigation | Boilerplate |
| /asyrmati-paraggeliolipsia.html | Δες όλη τη ροή του POSPal | CTA/button | Hero / opening CTA |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας Λειτουργίες, κουζίνα, εκτυπώσεις, QR μενού και συνολικές απαιτήσεις. | contextual body | Δες το ασύρματο μέρος μέσα στο συνολικό σύστημα. |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | footer | Boilerplate |

The article-local wireless link card is contextual despite using a `<nav>` container. Conversely, the homepage link is footer-only. All other canonical pages absent from this table (download, guide hub and seven individual guides) do not link to the system. None of the four nominated PDA pages is wholly missing an inlink.

No system-page inlink uses a bare `περισσότερα`, `μάθε περισσότερα`, `εδώ` or `δείτε εδώ`. `Το σύστημα` is a relatively vague footer label, but changing that label is lower value than adding the missing contextual progression. `Δες όλη τη ροή του POSPal` is descriptive in its local product context; do not mechanically replace it with an exact-match keyword.

Relative support: pricing receives 18 links from 8 sources; PDA definition 10 from 8; how-it-works 3 from 3 (all footer); beach-bar 2 from 2 (all footer). The system's 21/9 and seven body/button sources are comparatively healthy. There is no defensible “enough links to rank” threshold, and these are not PageRank estimates.

## 3. Informational → commercial progression

| Source | Natural transition | Existing system link and assessment | Minimal decision |
|---|---|---|---|
| `/pda-ti-einai.html` | Opening explanation that a PDA is only the input device, followed by the software, Windows computer, network and kitchen workflow | Only `Το σύστημα` in footer. No body progression. An end-of-article pricing link is useful but skips the broader system explanation. | Add ONE short link immediately after that opening distinction. Keep the existing pricing progression. |
| `/pda-pos-leitourgei.html` | Opening paragraph explains device → local network → Windows/POSPal | Hero button `Δες το σύστημα παραγγελιοληψίας στην πράξη`, plus footer. Prominent, descriptive and relevant; not buried. | Retain. No second forced paragraph link. |
| `/pda-gia-servitoro/` | Reader moves from staff-device use to what the shared subscription includes | Body text link `Δες όλη τη ροή του POSPal` beside pricing in `Μία συνδρομή. Όχι χρέωση για κάθε PDA.`, plus footer. Relevant mid-page decision point. | Retain. No extra SEO block or repeated link. |
| `/pda-gia-kafeteries.html` | Opening venue-specific explanation connects table/counter orders with the Windows workflow | Hero secondary button `Δες όλη τη ροή του POSPal`, navigation and footer. Clear early progression; the three placements are normal navigation plus one contextual CTA. | Retain. Do not add a fourth system link. |

The proposed definition-page sentence is `Δες πώς δουλεύει όλο το σύστημα του POSPal.` with that sentence (excluding final punctuation) linked to the system page. It asks the next logical question without changing the factual explanation or repeating the same commercial keyword anchor across articles.

## 4. Commercial funnel

### /systima-paraggeliolipsias.html

| Destination | Existing non-footer progression |
|---|---|
| /times.html | Δες αναλυτικά τιμές, χρεώσεις και τι περιλαμβάνεται → [contextual body] |
| /download/ | Κατέβασε για Windows [navigation]; Κατέβασε για Windows [CTA/button]; Κατέβασε για Windows [CTA/button]; Κατέβασε για Windows [CTA/button] |

### /times.html

| Destination | Existing non-footer progression |
|---|---|
| /systima-paraggeliolipsias.html | Δες πώς λειτουργεί το σύστημα παραγγελιοληψίας → [contextual body] |
| /download/ | Κατέβασε για Windows [navigation]; Κατέβασε για Windows [CTA/button]; Κατέβασε για Windows [CTA/button]; Κατέβασε για Windows [CTA/button] |

### /asyrmati-paraggeliolipsia.html

| Destination | Existing non-footer progression |
|---|---|
| /systima-paraggeliolipsias.html | Σύστημα παραγγελιοληψίας [navigation]; Δες όλη τη ροή του POSPal [CTA/button]; Σύστημα παραγγελιοληψίας Λειτουργίες, κουζίνα, εκτυπώσεις, QR μενού και συνολικές απαιτήσεις. [contextual body] |
| /times.html | Τιμές [navigation]; Τιμή και δωρεάν δοκιμή Το καθαρό μηνιαίο κόστος και οι όροι της δοκιμής. [contextual body] |
| /download/ | Κατέβασε για Windows [navigation]; Κατέβασε για Windows [CTA/button] |

System → pricing already has `Δες αναλυτικά τιμές, χρεώσεις και τι περιλαμβάνεται →` in the subscription section; download is offered in the hero, subscription and closing CTA. Pricing → system appears in the product/fiscal boundary explanation; download is prominent. Wireless → system has a hero CTA and a relevant related-content card; pricing and download are also present. **No meaningful missing commercial step was found.** Visitors ready to download should not be forced through every funnel page first.

## 5. Internal links relying on redirects

**No active HTML anchor to an approved static legacy source was found in the current repository, including local unpublished HTML; none appears in the 19 live pages.** This includes the old pricing, trial, installation, wireless and PDA routes and their mapped slash/slashless forms. Therefore no current page-link replacement is needed for the 90-entry Cloudflare list. Canonical current paths already appear in public navigation.

Whole-repository reference hits still occur in `_redirects`, historical audit JSON/CSV and generated Graphify metadata. They describe rules or history, not clickable current page navigation, and should not be rewritten as though they were broken links. The map also contains query-dependent guide cases outside the static Bulk list.

Six live anchors still point through query-based guide routing. Fresh requests return HTTP 200 with no Location header; the existing academy script then chooses the static guide. These are **client-side routing dependencies, not newly discovered Cloudflare 301 failures**. Direct internal URLs are preferable without changing any redirect rule:

| Source | Anchor (unchanged) | Current href | Direct destination | Disposition |
|---|---|---|---|---|
| /download/ | Οδηγός εγκατάστασης σε Windows · 8 λεπτά | /guides/?guide=windows-installation | /guides/windows-installation/ | Hold: permanently locked source |
| /systima-paraggeliolipsias.html | Δες τη βιντεοξενάγηση του POSPal → | /guides/?guide=app-tour | /guides/app-tour/ | Propose href-only correction |
| /systima-paraggeliolipsias.html | Οδηγός εγκατάστασης → | /guides/?guide=windows-installation | /guides/windows-installation/ | Propose href-only correction |
| /systima-paraggeliolipsias.html | Οδηγός ρυθμίσεων → | /guides/?guide=settings | /guides/settings/ | Propose href-only correction |
| /systima-paraggeliolipsias.html | αντιμετώπιση προβλημάτων | /guides/?guide=troubleshooting | /guides/troubleshooting/ | Propose href-only correction |
| /systima-paraggeliolipsias.html | Δες τον οδηγό προετοιμασίας εξοπλισμού → | /guides/?guide=printer-setup | /guides/printer-setup/ | Propose href-only correction |

`index.html`, `download/index.html` and `guides/index.html` remain permanently locked under AGENTS.md. This audit grants no implementation permission and does not ask to bypass the lock. The download link is recorded as an exception, excluded from the actionable proposal.

## 6. Anchor repetition and over-optimisation

| Exact anchor (case-insensitive) | Occurrences | Placement |
|---|---|---|
| σύστημα παραγγελιοληψίας | 11 | footer: 8, navigation: 3 |
| πρόγραμμα παραγγελιοληψίας | 0 | None |
| ασύρματη παραγγελιοληψία | 4 | footer: 3, contextual body: 1 |

Exact-match system anchors mostly occur in footer/navigation, rather than being repeatedly inserted into prose. That is normal descriptive labelling, not evidence of a penalty. Do not expand them into every footer, guide or paragraph. The body anchors already vary naturally (`Δες όλη τη ροή του POSPal`, `Δες τι περιλαμβάνει το POSPal`, and descriptive workflow wording).

Related-page grids on how-it-works, cafe, beach-bar and wireless share a template structure. Their links mostly answer adjacent venue/device/network/pricing questions. They are not proof of a doorway pattern, but adding another identical keyword grid would be unnecessary. Wireless already has four system links across navigation, hero, related card and footer; cafe has three. More repetitions there have little demonstrated user value. No evidence supports removing useful existing links or using nofollow to concentrate authority.

## 7. June redesign and later changes

Reuses the previous branch chronology: premerge main `8f817a8` → June 28 merge `9cda0b5`. These are source snapshots, not verified Google crawl/deployment timestamps. Historical corpus excludes prototype/docs/Graphify HTML but includes support/legal/legacy HTML present at that time; current corpus is the 19 live canonical pages. Raw cross-period totals must be read with that inventory difference.

| Snapshot | All inlinks | All sources | Body | Body CTA | Navigation | Footer | Body/CTA sources |
|---|---|---|---|---|---|---|---|
| 8f817a8 | 16 | 10 | 12 | 4 | 0 | 0 | 10 |
| 9cda0b5 | 18 | 8 | 6 | 0 | 4 | 8 | 6 |
| Current live | 21 | 9 | 3 | 6 | 3 | 9 | 7 |

A matched set of 10 surviving page paths controls for deleted/new sources (homepage, download, guides, system, pricing, wireless, definition, how-it-works, cafe and beach-bar):

| Snapshot | All inlinks | All sources | Body/CTA occurrences | Body/CTA sources |
|---|---|---|---|---|
| 8f817a8 | 9 | 6 | 9 | 6 |
| 9cda0b5 | 16 | 7 | 5 | 5 |
| Current live | 16 | 7 | 6 | 5 |

On the matched set, gross links increased while body/CTA support declined. That is stronger evidence of a placement shift than the simple 10 → 8 referring-page count. Some premerge body links were FAQ/related lists rather than inline editorial sentences; do not equate all body occurrences with equally valuable endorsements.

### Specific changes and anchors

- Premerge system sources included four subsequently retired routes: `/buy-license.html`, `/menu-estiatoriou.html`, `/paraggelies-gia-estiash.html`, `/qr-menu-gia-estiash.html`. The June source set added homepage/footer and waiter-page coverage while losing those sources. This changed the hierarchy rather than deleting every route to the system.
- How-it-works: premerge hero `Δες σύστημα` plus explanatory `σύστημα παραγγελιοληψίας`; June retained only a footer system link. Current live again has a descriptive hero system CTA. This part of the June weakness is already repaired.
- Definition: premerge two body links (next-step list and FAQ); June retained one related-content body link plus footer. A later August 31 commit `2e8f95d` added a prominent `Έχω κατάστημα και ψάχνω πρόγραμμα παραγγελιοληψίας` CTA. September 1 commit `af4fe8b` removed that CTA and added the footer `Το σύστημα`. The current missing progression therefore reflects a later revision, not solely June.
- June pricing, cafe, wireless and beach-bar pages gained system navigation/footer placements, while related-card links replaced earlier body/FAQ or CTA patterns. Homepage support for the system is currently still footer-only; the homepage is locked, so it is not in the implementation proposal.
- Prior pricing-source counts (16 → 5 at merge) remain a useful historical signal. Current pricing has 8 sources. Do not sum old and new aliases as independent ranking authority.
- The user-cited system H1 `Η παραγγελία από τη σάλα μέχρι την κουζίνα.` is the **June launch H1**, not today's. Fresh live H1 is `Παραγγελιοληψία για εστίαση 23,90 €/μήνα`. The old premerge H1 was `Σύστημα παραγγελιοληψίας για εστίαση`. This corrects a stale assumption; no H1/title change is proposed.

### Historical system anchors (complete measured source set)

#### 8f817a8

| Source | Anchor | Placement |
|---|---|---|
| /asyrmati-paraggeliolipsia.html | Δες το σύστημα παραγγελιοληψίας | contextual body |
| /buy-license.html | Σύστημα παραγγελιοληψίας | contextual body |
| /menu-estiatoriou.html | Δες λύση παραγγελιοληψίας | CTA/button |
| /menu-estiatoriou.html | Δες το σύστημα παραγγελιοληψίας | contextual body |
| /paraggelies-gia-estiash.html | Δες το σύστημα | CTA/button |
| /paraggelies-gia-estiash.html | Δες το σύστημα παραγγελιοληψίας | contextual body |
| /paraggelio-lipsia-gia-beach-bar.html | σύστημα παραγγελιοληψίας | contextual body |
| /pda-gia-kafeteries.html | Δες το σύστημα παραγγελιοληψίας | contextual body |
| /pda-pos-leitourgei.html | Δες σύστημα | CTA/button |
| /pda-pos-leitourgei.html | σύστημα παραγγελιοληψίας | contextual body |
| /pda-ti-einai.html | Δες το σύστημα παραγγελιοληψίας | contextual body |
| /pda-ti-einai.html | Σύστημα παραγγελιοληψίας | contextual body |
| /qr-menu-gia-estiash.html | Î”ÎµÏ‚ Ï„Î¿ ÏƒÏÏƒÏ„Î·Î¼Î± | CTA/button |
| /qr-menu-gia-estiash.html | Î”ÎµÏ‚ Ï„Î¿ ÏƒÏÏƒÏ„Î·Î¼Î± Ï€Î±ÏÎ±Î³Î³ÎµÎ»Î¹Î¿Î»Î·ÏˆÎ¯Î±Ï‚ | contextual body |
| /times.html | Δες αναλυτικά το σύστημα παραγγελιοληψίας | contextual body |
| /times.html | Σύστημα παραγγελιοληψίας | contextual body |

#### 9cda0b5

| Source | Anchor | Placement |
|---|---|---|
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | navigation |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | contextual body |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | footer |
| / | Σύστημα παραγγελιοληψίας | footer |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | navigation |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | contextual body |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | footer |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | navigation |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | contextual body |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | footer |
| /pda-gia-servitoro/ | Σύστημα παραγγελιοληψίας | contextual body |
| /pda-gia-servitoro/ | Σύστημα παραγγελιοληψίας | footer |
| /pda-pos-leitourgei.html | Σύστημα παραγγελιοληψίας | footer |
| /pda-ti-einai.html | Σύστημα παραγγελιοληψίας | contextual body |
| /pda-ti-einai.html | Σύστημα παραγγελιοληψίας | footer |
| /times.html | Σύστημα παραγγελιοληψίας | navigation |
| /times.html | Σύστημα παραγγελιοληψίας | contextual body |
| /times.html | Σύστημα παραγγελιοληψίας | footer |

The premerge QR page contains encoding-corrupted text in the recovered source, retained above rather than silently repaired. Historical counts are based on hrefs, not decoding quality.

## 8. Local/live drift and implementation boundaries

The working tree has existing edits; it is not the production baseline. `/arthra/` is still live 404 and absent from the live sitemap, while local sitemap/HTML include it. Six local pages add article-hub links (definition, how-it-works, waiter, system, pricing, wireless). Local definition also adds a download CTA and a direct installation CTA absent live. Neither introduces the missing contextual system link. The unpublished article hub would add a system card, but it contributes no present live link authority and is not proposed for publication here.

All current system-target anchors agree between working tree and live. Cloudflare email obfuscation adds non-content URLs to fetched HTML; those are excluded. Future implementation must preserve existing unrelated edits and the permanently locked pages, and must not accidentally deploy local-only material with these link changes.

## 9. Minimal plan and final decision

See [proposed-internal-link-changes.md](proposed-internal-link-changes.md) for exact anchors, destinations, priorities and approval scope.

1. **Is weak internal linking contributing?** Plausibly in a specific way: the best-performing definition page lacks a body progression to the system. Evidence does not establish that generally weak internal authority is the primary ranking cause; the system already receives more support than many informational pages.
2. **Best opportunities:** (1) one contextual definition → system link; (2) direct installation/equipment guide hrefs on the system page; (3) direct tour/settings/troubleshooting hrefs there. Only the first is a substantial commercial-link opportunity. The other two improve navigation continuity and crawl clarity; do not promise a material ranking lift.
3. **Do not do:** add repeated exact-match links, add more system links to already connected PDA pages, force users through pricing before download, merge commercial pages, rename URLs, change canonicals/headings/titles, alter working Cloudflare redirects, or edit locked pages.
4. **June evidence:** yes, body/CTA source support and placement weakened at launch, even on surviving pages, while boilerplate links expanded. Some support was later restored; definition-page deterioration is also tied to September. This is correlation, not proof of ranking causation.
5. **Main diagnosis:** likely a combination of commercial relevance/competitiveness and authority, with one documented internal-link gap. The relative contribution of on-page versus external authority is unknown: no backlink/competitor authority evidence was supplied or newly audited. Correct URL selection reduces the case for cannibalisation/canonical repair; it does not prove competitive on-page relevance or external authority is sufficient. Allow the repaired redirects to be recrawled and compare the same query/page filters over time before attributing gains or losses to additional changes.

Google recommends descriptive, natural contextual anchors, and states there is no ideal link count. This supports small useful changes, not keyword repetition or a promised ranking outcome. [Google link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## Appendix A — incoming source, anchor and placement for every important page

One row per source/anchor/placement combination; multiplicity is shown explicitly. This is the detailed companion to the compact inventory above. Header CTAs are labelled navigation because of location; body cards/next-article links are contextual. Source URLs are exact current paths.

### /

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /sxetika-me-to-pospal/ | POS Pal | navigation | 1 |
| /sxetika-me-to-pospal/ | Αρχική | navigation | 1 |
| /sxetika-me-to-pospal/ | Αρχική | footer | 1 |
| /download/ | POS Pal | navigation | 1 |
| /download/ | Αρχική | navigation | 2 |
| /download/ | Αρχική | footer | 1 |
| /guides/ | POS Pal | navigation | 1 |
| /guides/ | Αρχική | navigation | 1 |
| /guides/ | Αρχική | footer | 1 |
| /guides/printer-setup/ | POS Pal | navigation | 1 |
| /guides/windows-installation/ | POS Pal | navigation | 1 |
| /guides/app-tour/ | POS Pal | navigation | 1 |
| /guides/settings/ | POS Pal | navigation | 1 |
| /guides/qr-menu/ | POS Pal | navigation | 1 |
| /guides/account/ | POS Pal | navigation | 1 |
| /guides/troubleshooting/ | POS Pal | navigation | 1 |
| /pda-ti-einai.html | POS Pal | navigation | 1 |
| /pda-pos-leitourgei.html | POS Pal | navigation | 1 |
| /pda-pos-leitourgei.html | Αρχική | footer | 1 |
| /pda-gia-servitoro/ | POS Pal | navigation | 1 |
| /pda-gia-servitoro/ | Αρχική | footer | 1 |
| /times.html | POS Pal | navigation | 1 |
| /times.html | Αρχική | footer | 1 |
| /systima-paraggeliolipsias.html | POS Pal | navigation | 1 |
| /systima-paraggeliolipsias.html | Αρχική | footer | 1 |
| /pda-gia-kafeteries.html | POS Pal | navigation | 1 |
| /pda-gia-kafeteries.html | Αρχική | navigation | 1 |
| /pda-gia-kafeteries.html | Αρχική | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | POS Pal | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Αρχική | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Αρχική | footer | 1 |
| /asyrmati-paraggeliolipsia.html | POS Pal | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Αρχική | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Αρχική | footer | 1 |

### /sxetika-me-to-pospal/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /pda-ti-einai.html | ΑΠΟ ΤΟΝ ROBERT AIREY | contextual body | 1 |
| /times.html | Ποιος βρίσκεται πίσω από το POSPal → | contextual body | 1 |
| /times.html | Σχετικά με το POSPal | footer | 1 |
| /systima-paraggeliolipsias.html | Robert · Ιδρυτής του POSPal | contextual body | 1 |
| /systima-paraggeliolipsias.html | Σχετικά με το POSPal | footer | 1 |
| /asyrmati-paraggeliolipsia.html | Σχετικά με το POSPal Δημόσια στοιχεία, υποστήριξη και όρια προϊόντος. | contextual body | 1 |
| /asyrmati-paraggeliolipsia.html | Σχετικά με το POSPal | footer | 1 |

### /download/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Κατέβασε για Windows | navigation | 2 |
| / | Κατέβασε για Windows | CTA/button | 6 |
| / | Ξεκίνα 30 ημέρες δωρεάν | CTA/button | 1 |
| / | Κατέβασε για Windows | footer | 1 |
| /sxetika-me-to-pospal/ | Κατέβασε για Windows | navigation | 2 |
| /sxetika-me-to-pospal/ | Ξεκίνα 30 ημέρες δωρεάν | CTA/button | 1 |
| /sxetika-me-to-pospal/ | Κατέβασε για Windows | CTA/button | 1 |
| /sxetika-me-to-pospal/ | Κατέβασε για Windows | footer | 1 |
| /guides/ | Κατέβασε για Windows | navigation | 1 |
| /guides/ | Κατέβασε για Windows | contextual body | 1 |
| /guides/ | Κατέβασε για Windows | footer | 1 |
| /guides/printer-setup/ | Κατέβασε για Windows | navigation | 1 |
| /guides/printer-setup/ | Κατέβασε για Windows | contextual body | 1 |
| /guides/printer-setup/ | Κατέβασε για Windows | footer | 1 |
| /guides/windows-installation/ | Κατέβασε για Windows | navigation | 2 |
| /guides/windows-installation/ | Κατέβασε για Windows | footer | 1 |
| /guides/app-tour/ | Κατέβασε για Windows | navigation | 1 |
| /guides/app-tour/ | Κατέβασε για Windows | footer | 1 |
| /guides/settings/ | Κατέβασε για Windows | navigation | 1 |
| /guides/settings/ | Κατέβασε για Windows | footer | 1 |
| /guides/qr-menu/ | Κατέβασε για Windows | navigation | 1 |
| /guides/qr-menu/ | Κατέβασε για Windows | footer | 1 |
| /guides/account/ | Κατέβασε για Windows | navigation | 1 |
| /guides/account/ | Κατέβασε για Windows | footer | 1 |
| /guides/troubleshooting/ | Κατέβασε για Windows | navigation | 1 |
| /guides/troubleshooting/ | Κατέβασε για Windows | footer | 1 |
| /pda-ti-einai.html | ΚΑΤΕΒΑΣΕ | navigation | 1 |
| /pda-ti-einai.html | Κατέβασε | footer | 1 |
| /pda-pos-leitourgei.html | Κατέβασε για Windows | navigation | 1 |
| /pda-pos-leitourgei.html | Κατέβασε για Windows | CTA/button | 1 |
| /pda-pos-leitourgei.html | Κατέβασε | footer | 1 |
| /pda-gia-servitoro/ | Κατέβασε για Windows | navigation | 1 |
| /pda-gia-servitoro/ | Κατέβασε για Windows | CTA/button | 2 |
| /pda-gia-servitoro/ | Κατέβασε | footer | 1 |
| /times.html | Κατέβασε για Windows | navigation | 1 |
| /times.html | Κατέβασε για Windows | CTA/button | 3 |
| /times.html | Κατέβασε | footer | 1 |
| /systima-paraggeliolipsias.html | Κατέβασε για Windows | navigation | 1 |
| /systima-paraggeliolipsias.html | Κατέβασε για Windows | CTA/button | 3 |
| /systima-paraggeliolipsias.html | Κατέβασε | footer | 1 |
| /pda-gia-kafeteries.html | Κατέβασε για Windows | navigation | 1 |
| /pda-gia-kafeteries.html | Κατέβασε για Windows | CTA/button | 2 |
| /pda-gia-kafeteries.html | Κατέβασε | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Κατέβασε για Windows | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Κατέβασε για Windows | CTA/button | 2 |
| /paraggelio-lipsia-gia-beach-bar.html | Κατέβασε | footer | 1 |
| /asyrmati-paraggeliolipsia.html | Κατέβασε για Windows | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Κατέβασε για Windows | CTA/button | 1 |
| /asyrmati-paraggeliolipsia.html | Κατέβασε | footer | 1 |

### /guides/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Οδηγοί | navigation | 2 |
| / | Δες το στήσιμο | CTA/button | 1 |
| / | Άνοιξε τον οδηγό εξοπλισμού → | contextual body | 1 |
| / | Άνοιξε τον οδηγό εγκατάστασης → | contextual body | 1 |
| / | Δες τους οδηγούς εγκατάστασης | contextual body | 1 |
| / | οδηγό εγκατάστασης | contextual body | 1 |
| / | Οδηγοί | footer | 1 |
| /sxetika-me-to-pospal/ | Οδηγοί | navigation | 2 |
| /sxetika-me-to-pospal/ | οδηγό εγκατάστασης | contextual body | 1 |
| /sxetika-me-to-pospal/ | Οδηγοί | footer | 1 |
| /download/ | Οδηγοί | navigation | 2 |
| /download/ | Οδηγοί | footer | 1 |
| /guides/printer-setup/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/printer-setup/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/printer-setup/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/windows-installation/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/windows-installation/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/windows-installation/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/app-tour/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/app-tour/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/app-tour/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/settings/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/settings/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/settings/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/qr-menu/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/qr-menu/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/qr-menu/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/account/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/account/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/account/ | Όλοι οι οδηγοί | footer | 1 |
| /guides/troubleshooting/ | Όλοι οι οδηγοί | navigation | 1 |
| /guides/troubleshooting/ | ← Όλοι οι οδηγοί | contextual body | 1 |
| /guides/troubleshooting/ | Όλοι οι οδηγοί | footer | 1 |
| /pda-ti-einai.html | Οδηγοί | footer | 1 |
| /pda-pos-leitourgei.html | Οδηγοί | navigation | 1 |
| /pda-pos-leitourgei.html | Άνοιξε τους οδηγούς | CTA/button | 1 |
| /pda-pos-leitourgei.html | Οδηγοί | footer | 1 |
| /pda-gia-servitoro/ | Οδηγοί | navigation | 1 |
| /pda-gia-servitoro/ | Άνοιξε τους οδηγούς εγκατάστασης | contextual body | 1 |
| /pda-gia-servitoro/ | Οδηγοί | footer | 1 |
| /times.html | Οδηγοί | footer | 1 |
| /systima-paraggeliolipsias.html | Οδηγοί | footer | 1 |
| /pda-gia-kafeteries.html | Οδηγοί | navigation | 1 |
| /pda-gia-kafeteries.html | Άνοιξε τους οδηγούς | CTA/button | 1 |
| /pda-gia-kafeteries.html | Οδηγοί | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Οδηγοί | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Άνοιξε τους οδηγούς | CTA/button | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Οδηγοί | footer | 1 |
| /asyrmati-paraggeliolipsia.html | Οδηγοί | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Οδηγοί εγκατάστασης Η πρακτική διαδρομή για να στήσεις και να ελέγξεις τη σύνδεση. | contextual body | 1 |
| /asyrmati-paraggeliolipsia.html | Άνοιξε τους οδηγούς | CTA/button | 1 |
| /asyrmati-paraggeliolipsia.html | Οδηγοί | footer | 1 |

### /guides/printer-setup/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Σύνδεση θερμικού εκτυπωτή Εκτυπωτής · 2:52 · Προαιρετικό Άνοιγμα | contextual body | 1 |
| /guides/windows-installation/ | οδηγό σύνδεσης θερμικού εκτυπωτή | contextual body | 1 |
| /times.html | Δες τον οδηγό εκτυπωτή → | contextual body | 1 |

### /guides/windows-installation/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Εγκατάσταση POSPal σε Windows Εγκατάσταση · 9:38 Άνοιγμα | contextual body | 1 |
| /guides/printer-setup/ | εγκατάσταση του POSPal σε Windows | contextual body | 1 |
| /times.html | Δες πώς εγκαθίσταται → | contextual body | 1 |
| /times.html | Οδηγός εγκατάστασης | CTA/button | 1 |

### /guides/app-tour/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Πρώτη χρήση του POSPal Μενού, παραγγελίες και πληρωμές · 8:36 Άνοιγμα | contextual body | 1 |
| /guides/windows-installation/ | επόμενο οδηγό για την περιήγηση στο POSPal και την καταχώρηση του μενού | contextual body | 1 |

### /guides/settings/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Ρυθμίσεις POSPal Εκτυπωτές, τραπέζια και συσκευές · 14:40 Άνοιγμα | contextual body | 1 |
| /guides/app-tour/ | οδηγό για τις ρυθμίσεις του POSPal | contextual body | 1 |

### /guides/qr-menu/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ QR menu POSPal Δημιουργία και δημοσίευση · 13:37 Άνοιγμα | contextual body | 1 |
| /guides/settings/ | οδηγό για τη δημιουργία και τη δημοσίευση του QR menu | contextual body | 1 |
| /times.html | Δες τον οδηγό QR μενού → | contextual body | 1 |

### /guides/account/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Διαχείριση λογαριασμού Συνδρομή, άδεια και πληρωμές · 6:18 Άνοιγμα | contextual body | 1 |
| /guides/qr-menu/ | οδηγό για τη διαχείριση λογαριασμού και συνδρομής στο POSPal | contextual body | 1 |

### /guides/troubleshooting/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| /guides/ | ▶ Αντιμετώπιση προβλημάτων Αναφορά και σύνδεση κινητού · 5:08 Άνοιγμα | contextual body | 1 |
| /guides/account/ | οδηγό αντιμετώπισης προβλημάτων POSPal | contextual body | 1 |

### /pda-ti-einai.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | PDA τι είναι | footer | 1 |
| /sxetika-me-to-pospal/ | PDA τι είναι | footer | 1 |
| /pda-pos-leitourgei.html | PDA τι είναι | contextual body | 1 |
| /pda-pos-leitourgei.html | PDA τι είναι | footer | 1 |
| /pda-gia-servitoro/ | PDA τι είναι | footer | 1 |
| /times.html | Τι είναι το PDA στην εστίαση → | contextual body | 1 |
| /times.html | PDA τι είναι | footer | 1 |
| /systima-paraggeliolipsias.html | PDA τι είναι | footer | 1 |
| /pda-gia-kafeteries.html | PDA τι είναι | footer | 1 |
| /asyrmati-paraggeliolipsia.html | PDA τι είναι | footer | 1 |

### /pda-pos-leitourgei.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | PDA πώς λειτουργεί | footer | 1 |
| /sxetika-me-to-pospal/ | PDA πώς λειτουργεί | footer | 1 |
| /pda-gia-servitoro/ | PDA πώς λειτουργεί | footer | 1 |

### /pda-gia-servitoro/

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | PDA για σερβιτόρο | footer | 1 |
| /sxetika-me-to-pospal/ | PDA για σερβιτόρο | footer | 1 |
| /pda-pos-leitourgei.html | PDA σερβιτόρου | contextual body | 1 |
| /pda-pos-leitourgei.html | PDA σερβιτόρου | footer | 1 |
| /systima-paraggeliolipsias.html | PDA σερβιτόρου | footer | 1 |
| /pda-gia-kafeteries.html | PDA σερβιτόρου από κινητό ή tablet | contextual body | 1 |
| /pda-gia-kafeteries.html | PDA σερβιτόρου | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | PDA σερβιτόρου | contextual body | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | PDA σερβιτόρου | footer | 1 |
| /asyrmati-paraggeliolipsia.html | PDA σερβιτόρου Η χρήση κινητού ή tablet από το προσωπικό μέσα στη βάρδια. | contextual body | 1 |
| /asyrmati-paraggeliolipsia.html | PDA σερβιτόρου | footer | 1 |

### /times.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Τιμές | footer | 1 |
| /sxetika-me-to-pospal/ | Δες την τιμή και τη δωρεάν δοκιμή | CTA/button | 1 |
| /sxetika-me-to-pospal/ | Τιμές | footer | 1 |
| /pda-ti-einai.html | ΤΙΜΕΣ | navigation | 1 |
| /pda-ti-einai.html | Σύστημα παραγγελιοληψίας: τιμές, κόστος και τι περιλαμβάνεται → | contextual body | 1 |
| /pda-ti-einai.html | Τιμές | footer | 1 |
| /pda-gia-servitoro/ | Δες αναλυτικά την τιμή | contextual body | 1 |
| /systima-paraggeliolipsias.html | Δες αναλυτικά τιμές, χρεώσεις και τι περιλαμβάνεται → | contextual body | 1 |
| /systima-paraggeliolipsias.html | Τιμές | footer | 1 |
| /pda-gia-kafeteries.html | Τιμές | navigation | 1 |
| /pda-gia-kafeteries.html | Δες την τιμή και τη δωρεάν δοκιμή | contextual body | 1 |
| /pda-gia-kafeteries.html | Τιμές | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Τιμές | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Δες την τιμή και τη δωρεάν δοκιμή | contextual body | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Τιμές | footer | 1 |
| /asyrmati-paraggeliolipsia.html | Τιμές | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Τιμή και δωρεάν δοκιμή Το καθαρό μηνιαίο κόστος και οι όροι της δοκιμής. | contextual body | 1 |
| /asyrmati-paraggeliolipsia.html | Τιμές | footer | 1 |

### /systima-paraggeliolipsias.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Σύστημα παραγγελιοληψίας | footer | 1 |
| /sxetika-me-to-pospal/ | Δες τι περιλαμβάνει το POSPal | CTA/button | 1 |
| /sxetika-me-to-pospal/ | Δες το πρόγραμμα παραγγελιοληψίας του POSPal | CTA/button | 1 |
| /sxetika-me-to-pospal/ | Σύστημα παραγγελιοληψίας | footer | 1 |
| /pda-ti-einai.html | Το σύστημα | footer | 1 |
| /pda-pos-leitourgei.html | Δες το σύστημα παραγγελιοληψίας στην πράξη | CTA/button | 1 |
| /pda-pos-leitourgei.html | Σύστημα παραγγελιοληψίας | footer | 1 |
| /pda-gia-servitoro/ | Δες όλη τη ροή του POSPal | contextual body | 1 |
| /pda-gia-servitoro/ | Σύστημα παραγγελιοληψίας | footer | 1 |
| /times.html | Δες πώς λειτουργεί το σύστημα παραγγελιοληψίας → | contextual body | 1 |
| /times.html | Σύστημα παραγγελιοληψίας | footer | 1 |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | navigation | 1 |
| /pda-gia-kafeteries.html | Δες όλη τη ροή του POSPal | CTA/button | 1 |
| /pda-gia-kafeteries.html | Σύστημα παραγγελιοληψίας | footer | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | navigation | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Δες όλη τη ροή του POSPal | CTA/button | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Σύστημα παραγγελιοληψίας | footer | 1 |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | navigation | 1 |
| /asyrmati-paraggeliolipsia.html | Δες όλη τη ροή του POSPal | CTA/button | 1 |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας Λειτουργίες, κουζίνα, εκτυπώσεις, QR μενού και συνολικές απαιτήσεις. | contextual body | 1 |
| /asyrmati-paraggeliolipsia.html | Σύστημα παραγγελιοληψίας | footer | 1 |

### /pda-gia-kafeteries.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | PDA για καφετέριες | footer | 1 |
| /sxetika-me-to-pospal/ | PDA για καφετέριες | footer | 1 |
| /pda-pos-leitourgei.html | PDA για καφετέριες | contextual body | 1 |
| /pda-pos-leitourgei.html | PDA για καφετέριες | footer | 1 |
| /pda-gia-servitoro/ | PDA για καφετέριες | footer | 1 |
| /systima-paraggeliolipsias.html | PDA για καφετέριες | footer | 1 |

### /paraggelio-lipsia-gia-beach-bar.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Παραγγελιοληψία για beach bar | footer | 1 |
| /sxetika-me-to-pospal/ | Παραγγελιοληψία για beach bar | footer | 1 |

### /asyrmati-paraggeliolipsia.html

| Source | Anchor | Placement | Occurrences |
|---|---|---|---|
| / | Ασύρματη παραγγελιοληψία | footer | 1 |
| /sxetika-me-to-pospal/ | Ασύρματη παραγγελιοληψία | footer | 1 |
| /pda-gia-servitoro/ | Δες πώς συνδέονται οι συσκευές. | contextual body | 1 |
| /pda-gia-kafeteries.html | Τι χρειάζεται για την ασύρματη σύνδεση | contextual body | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Ασύρματη παραγγελιοληψία | contextual body | 1 |
| /paraggelio-lipsia-gia-beach-bar.html | Ασύρματη παραγγελιοληψία | footer | 1 |

