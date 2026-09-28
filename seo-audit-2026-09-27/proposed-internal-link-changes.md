# Proposed internal-link changes — review only

28 September 2026. **Nothing implemented.** Based on the [targeted internal-link audit](internal-link-audit.md), fresh live HTML, existing audit records and Git history. All relative paths below use `https://pospal.gr`.

The minimal proposal is **one new contextual link and five href-only corrections on the system page**. No page redesign, SEO block, new page, redirect change, canonical change, title/H1 change or commercial-page merger. The other three PDA pages already have relevant system links and need no additions.

## Compact review table

| Source | Current → proposed anchor | Destination | Priority |
|---|---|---|---|
| `/pda-ti-einai.html` | No body link → `Δες πώς δουλεύει όλο το σύστημα του POSPal` | `/systima-paraggeliolipsias.html` | HIGH |
| `/systima-paraggeliolipsias.html` | `Οδηγός εγκατάστασης →` → unchanged | `/guides/windows-installation/` (replace query href) | MEDIUM |
| `/systima-paraggeliolipsias.html` | `Δες τον οδηγό προετοιμασίας εξοπλισμού →` → unchanged | `/guides/printer-setup/` (replace query href) | MEDIUM |
| `/systima-paraggeliolipsias.html` | `Δες τη βιντεοξενάγηση του POSPal →` → unchanged | `/guides/app-tour/` (replace query href) | LOW |
| `/systima-paraggeliolipsias.html` | `Οδηγός ρυθμίσεων →` → unchanged | `/guides/settings/` (replace query href) | LOW |
| `/systima-paraggeliolipsias.html` | `αντιμετώπιση προβλημάτων` → unchanged | `/guides/troubleshooting/` (replace query href) | LOW |

## 1. Definition article → complete system

**SOURCE:** https://pospal.gr/pda-ti-einai.html

**CURRENT CONTEXT:** Near the beginning, the article explains that a PDA is the input point rather than the complete system, then names the software, Windows computer, local network and kitchen workflow. The only present system link is `Το σύστημα` in the footer. The article's later pricing link is useful and should stay.

**PROPOSED CHANGE:** Immediately after the opening paragraph ending `τη ροή προς την κουζίνα.`, before `Η σύντομη απάντηση`, add one short sentence: `Δες πώς δουλεύει όλο το σύστημα του POSPal.` Link the sentence excluding its final full stop. Use an ordinary contextual text link consistent with the article, not a banner/card/button block. Leave the paragraph, footer and later pricing link unchanged. Do not add a second system link elsewhere in the body.

**PROPOSED ANCHOR:** `Δες πώς δουλεύει όλο το σύστημα του POSPal`

**DESTINATION:** https://pospal.gr/systima-paraggeliolipsias.html

**REASON:** Readers who have understood the device's role can see the complete workflow before evaluating cost or downloading. It also gives the commercial page a relevant body connection from a well-performing informational page. Ranking improvement is not guaranteed.

**PRIORITY:** HIGH

## 2. Direct installation guide

**SOURCE:** https://pospal.gr/systima-paraggeliolipsias.html

**CURRENT CONTEXT:** In `Κάνε την πρώτη δοκιμή με τη δική σου παραγγελία.`, the installation link currently points to `/guides/?guide=windows-installation`.

**PROPOSED CHANGE:** Replace only that anchor's href with `/guides/windows-installation/`. Preserve visible text, arrow, classes, placement and surrounding copy.

**PROPOSED ANCHOR:** `Οδηγός εγκατάστασης →` (existing; unchanged)

**DESTINATION:** https://pospal.gr/guides/windows-installation/

**REASON:** A visitor preparing the first installation should land directly on the relevant instructions. This removes a JavaScript-routing dependency and gives crawlers the final URL without an intermediary.

**PRIORITY:** MEDIUM

## 3. Direct equipment/printer guide

**SOURCE:** https://pospal.gr/systima-paraggeliolipsias.html

**CURRENT CONTEXT:** In `Τι χρειάζεται στο κατάστημα.`, equipment preparation points to `/guides/?guide=printer-setup`.

**PROPOSED CHANGE:** Replace only the href with `/guides/printer-setup/`. No anchor or product-copy rewrite.

**PROPOSED ANCHOR:** `Δες τον οδηγό προετοιμασίας εξοπλισμού →` (existing; unchanged)

**DESTINATION:** https://pospal.gr/guides/printer-setup/

**REASON:** The equipment check should open the existing printer/setup instructions immediately. The destination is already what the current query router selects, so this is navigation cleanup, not a change of topic or redirect policy.

**PRIORITY:** MEDIUM

## 4. Direct product tour

**SOURCE:** https://pospal.gr/systima-paraggeliolipsias.html

**CURRENT CONTEXT:** `Από την παραγγελία στην προετοιμασία.` links to `/guides/?guide=app-tour` for the video tour.

**PROPOSED CHANGE:** Replace only that href with `/guides/app-tour/`.

**PROPOSED ANCHOR:** `Δες τη βιντεοξενάγηση του POSPal →` (existing; unchanged)

**DESTINATION:** https://pospal.gr/guides/app-tour/

**REASON:** Interested readers reach the promised tour directly. The final URL is clearer for crawling, without adding another commercial anchor or changing the funnel.

**PRIORITY:** LOW

## 5. Direct settings guide

**SOURCE:** https://pospal.gr/systima-paraggeliolipsias.html

**CURRENT CONTEXT:** The first-trial section points to `/guides/?guide=settings`.

**PROPOSED CHANGE:** Replace only that href with `/guides/settings/`.

**PROPOSED ANCHOR:** `Οδηγός ρυθμίσεων →` (existing; unchanged)

**DESTINATION:** https://pospal.gr/guides/settings/

**REASON:** Readers configuring the trial go straight to the relevant guide, avoiding client routing. This is a minor usability/crawl improvement, not an authority-building tactic.

**PRIORITY:** LOW

## 6. Direct troubleshooting guide

**SOURCE:** https://pospal.gr/systima-paraggeliolipsias.html

**CURRENT CONTEXT:** The first-trial explanation contains an inline link to `/guides/?guide=troubleshooting`.

**PROPOSED CHANGE:** Replace only that href with `/guides/troubleshooting/`.

**PROPOSED ANCHOR:** `αντιμετώπιση προβλημάτων` (existing; unchanged)

**DESTINATION:** https://pospal.gr/guides/troubleshooting/

**REASON:** A reader who needs help reaches the intended support task directly. Preserve the existing descriptive wording and avoid an unnecessary client-side navigation step.

**PRIORITY:** LOW

## Retain / excluded from implementation scope

- `/pda-pos-leitourgei.html`: retain its hero system CTA; no extra system link.
- `/pda-gia-servitoro/`: retain the body system link next to pricing; no extra link.
- `/pda-gia-kafeteries.html`: retain the hero system CTA; no extra link.
- System → pricing/download, pricing → system/download, wireless → system/pricing/download already work as useful contextual progressions. No additions are needed.
- `/download/` has one installation query link that could eventually use `/guides/windows-installation/`, but `download/index.html` is permanently locked. This is a documented exception, **not part of the proposed changes**. Homepage and guide hub are also locked.
- No current HTML anchor relies on the approved static Cloudflare legacy redirects. Leave those redirects and intentional 404s alone.
- Do not publish `/arthra/` or existing unrelated working-tree edits as part of this plan.
- Do not replace every anchor with `σύστημα παραγγελιοληψίας`, change working footer labels just for keyword density, add reciprocal SEO blocks, or reroute ready-to-download visitors through extra pages.

## Decision and later verification

The best three work items are: (1) definition → system contextual progression; (2) direct installation/equipment guide links; (3) direct tour/settings/troubleshooting links. Only item 1 addresses the commercial contextual-link gap. There is no evidence to justify three to five new commercial links just to fill a quota.

June reduced body/CTA support, but later edits both restored and removed links; the current definition-page gap is specifically corroborated by September history. Internal linking is a plausible contributor, not a proven primary cause. Commercial relevance and external authority may also matter; their relative weight remains unmeasured.

After approval and implementation, verify the six intended anchors in the changed files and rendered pages, final destination status/canonicals, and preservation of unrelated work. No new automated test suite is needed. After an explicitly authorised deployment, track the same commercial query/page pairs and definition → system navigation events if existing analytics measures them. Account for ongoing recrawling of the repaired redirects; do not attribute a short-term change solely to these links.
