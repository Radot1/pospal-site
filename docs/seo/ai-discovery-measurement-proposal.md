# Step 1 Proposal: POSPal AI-Discovery Measurement Baseline

Status: Approved; benchmark version `1.0` frozen
Parent plan: [POSPal ChatGPT and AI Discovery Work Plan](chatgpt-discovery-work-plan.md)
Scope: measurement only; no public website changes
Primary business outcome: downloads of `POSPal-win-Setup.exe`

## Purpose

Create a repeatable baseline that can tell the difference between four outcomes:

1. ChatGPT does not retrieve a source about POSPal.
2. ChatGPT retrieves POSPal but does not recommend it.
3. ChatGPT recommends POSPal accurately for a relevant buyer.
4. A recommendation produces a site visit and installer-download action.

The baseline will be rerun as versioned snapshots (`B0`, `B1`, `B2`), not on an arbitrary day-by-day schedule. A new snapshot is taken only after a released improvement batch is public and crawlable.

## Ground rules

- Measure forced-Search and default-mode answers separately. They are different surfaces.
- Use fresh isolated chats. For signed-in testing, use Temporary Chat with Memory off; for signed-out testing, remain signed out and start a fresh chat for every run.
- Keep model, account type, country, language, device-location setting, and prompt wording fixed within a snapshot.
- Run from Greece. Record approximate location because ChatGPT Search can use it when retrieving results.
- Never introduce POSPal earlier in the conversation.
- Record the answer and its Sources panel, not just whether the brand name appears.
- Do not interpret one flattering or disappointing answer as a trend.
- Store no customer names, contact details, or other personal information in the benchmark.

These controls follow current [OpenAI guidance for ChatGPT Search](https://help.openai.com/en/articles/9237897-connectors-in-chatgpt): Search may rewrite a prompt into several targeted queries, may use approximate location, may incorporate Memory, and exposes citations plus a Sources panel. This means all four variables must be controlled or recorded.

`B0` environment decision: the user selected the common signed-out experience in an incognito browser. No account Memory applies. This condition stays fixed for all of `B0`; it is not mixed with signed-in results.

## Proposed benchmark

### Run design

- 12 fixed Greek prompts.
- 3 independent Search-enabled runs per prompt: 36 runs.
- 1 default-mode control per prompt: 12 runs.
- 1 exact two-turn reproduction scenario, repeated in the same 3-plus-1 pattern: 4 conversations and 8 response records.
- Total initial snapshot: 52 conversations and 56 response records.
- Search runs must explicitly use ChatGPT Search rather than relying on automatic tool selection.
- The three repetitions measure instability; they are not three turns in one conversation.
- Default-mode controls do not select Search. If ChatGPT searches automatically, record `default_auto_search`; do not alter the prompt to prevent browsing.

### Prompt bank

The wording below is frozen after approval. Prompts intentionally do not contain the POSPal name.

#### A. Broad category discovery

`B01`
«Θέλω οικονομικό πρόγραμμα παραγγελιοληψίας για καφέ ή μικρό εστιατόριο. Τι προτείνεις;»

`B02`
«Ποιο είναι ένα καλό και απλό σύστημα παραγγελιοληψίας για μικρή καφετέρια στην Ελλάδα;»

`B03`
«Πρότεινέ μου πρόγραμμα παραγγελιοληψίας για εστίαση με ξεκάθαρη μηνιαία τιμή.»

#### B. Commercial constraints

`C01`
«Θέλω παραγγελιοληψία με QR μενού και χωρίς ακριβό ειδικό εξοπλισμό.»

`C02`
«Ψάχνω πρόγραμμα παραγγελιοληψίας με δωρεάν δοκιμή χωρίς κάρτα.»

`C03`
«Θέλω μία οικονομική λύση για τραπέζια, πάγκο και κουζίνα.»

#### C. Exact product fit

`F01`
«Έχω ήδη ταμειακή και θέλω μόνο παραγγελιοληψία και ροή κουζίνας σε Windows.»

`F02`
«Θέλω οι σερβιτόροι να παίρνουν παραγγελίες από τα κινητά τους και να φτάνουν σε υπολογιστή Windows.»

`F03`
«Υπάρχει πρόγραμμα παραγγελιοληψίας που μπορώ να κατεβάσω και να εγκαταστήσω μόνος μου;»

`F04`
«Θέλω πρόγραμμα για μικρό beach bar με κινητά, τοπικό Wi-Fi και θερμικό εκτυπωτή.»

#### D. Deliberate non-fit controls

`N01`
«Χρειάζομαι φορολογικό POS που εκδίδει αποδείξεις και συνδέεται με myDATA.»

`N02`
«Θέλω πλήρες cloud POS που να λειτουργεί χωρίς υπολογιστή Windows και να αναλαμβάνει το φορολογικό κομμάτι.»

POSPal should not be recommended as the solution to the two non-fit prompts. A correct answer may mention it only to explain that it is not a fiscal POS or cash register. These controls prevent us from improving the headline mention rate at the cost of recommendation accuracy.

### Exact reproduction of the reported failure

`R01`, turn 1
«θέλω οικονομικό πρόγραμμα παραγγελιοληψίας για καφέ/εστιατόριο»

`R01`, turn 2
«κατι φθηνο; πιο απλο δεν θελω να ειναι τοσο ακριβο.»

The spelling and punctuation stay exactly as submitted in the dummy-account test. Turn 2 is sent as a follow-up in the same conversation, without naming POSPal. The two turns are scored separately and reported outside the 12-prompt aggregate so this longer scenario does not receive extra weight.

## Result capture

One row will be stored for every response with these fields:

| Field | Purpose |
| --- | --- |
| `snapshot_id` | Baseline version, beginning with `B0` |
| `run_id` | Unique response identifier |
| `prompt_id` and `prompt_text` | Frozen question and its group |
| `search_mode` | `forced_search`, `default_no_search`, or `default_auto_search` |
| `turn_number` and `parent_run_id` | Connect the two `R01` answers without mixing conversations |
| `model` and `account_type` | Reproducibility context |
| `memory_status` | Must be `off` for controlled runs |
| `country`, `locale`, `device_location` | Location and language context |
| `run_timestamp` | When the response was generated |
| `pospal_mentioned` | Yes/no |
| `recommendation_strength` | Primary, shortlist, passing mention, exclusion, absent |
| `mention_position` | Position within a recommendation list, if present |
| `cited_domains` and `cited_urls` | Sources used to support the answer |
| `owned_source_cited` | Whether a `pospal.gr` page was cited |
| `independent_source_cited` | Whether a third party cited or described POSPal |
| `retrieved_not_recommended` | POSPal is in Sources but absent from the recommendation |
| `other_product_types` | Types of alternatives mentioned; no public competitor content is created |
| `exclusion_reason` | Requirement or evidence gap that kept POSPal out |
| `fit_accuracy` | Correct fit, incorrect fit, or not assessable |
| `evidence_file` | Saved screenshot or shared-response reference |
| `notes` | Short factual observation |

## Scorecard

The scorecard will report forced-Search and default-mode results separately. If default mode searches automatically, those answers form a third segment. `R01` is a separate reproduction result, not part of the 12-prompt aggregate.

### Discovery metrics

- Mention rate: responses that mention POSPal ÷ eligible responses.
- Stable mention rate: prompts where POSPal appears in at least two of three Search runs.
- Top-three rate: Search responses where POSPal appears in the first three recommendations.
- Conditional average position: average position only when POSPal is recommended.
- Exact-fit coverage: performance across `F01`–`F04`.
- Broad-category coverage: performance across `B01`–`B03`.

### Citation metrics

- `pospal.gr` citation rate.
- Independent-source citation rate.
- Retrieved-but-not-recommended rate.
- Cited-domain share, showing which domains repeatedly influence the result.

### Accuracy metric

- Non-fit false-positive rate: `N01` or `N02` responses that incorrectly recommend POSPal as the requested fiscal/cloud product.

The accuracy result is a guardrail. A higher mention rate is not an improvement if the non-fit false-positive rate rises.

## Diagnostic rules

| Observation | Most likely constraint | Next work to prioritize |
| --- | --- | --- |
| No POSPal source is retrieved | Discovery or external-authority gap | Entity clarity, crawlable evidence, independent references |
| A POSPal page appears in Sources but POSPal is not recommended | Weak fit evidence or insufficient comparative clarity | Product-fit facts, limitations, compatibility, proof |
| POSPal appears for exact-fit prompts but not broad prompts | Category-authority gap | Strengthen the existing generic category hub and external corroboration |
| POSPal appears broadly but is recommended for non-fit prompts | Product-boundary ambiguity | Clarify that POSPal is not a fiscal POS or cash register |
| Recommendations and referral visits rise but downloads do not | Conversion or expectation gap | Inspect landing page, offer clarity, device mix, and download events |
| Independent pages are repeatedly cited | Valuable external source channel | Strengthen accurate relationships with those source types |

These rules are hypotheses for investigation, not automatic proof of causation.

## GA4 AI-referral view

Existing `download_click` and `trial_start_click` events are already verified. The baseline therefore does not require a website tracking change.

Create one GA4 Exploration with:

- Filter: session source or source/medium matching ChatGPT/OpenAI traffic.
- Required direct signal: `utm_source=chatgpt.com`.
- Dimensions: session source/medium, landing page plus query string, device category, and country.
- Metrics: sessions, engaged sessions, users, `download_click`, `trial_start_click`, guide-entry events, and session key-event rate.
- Comparison: AI-referral sessions versus all other referral and organic sessions, while keeping small samples clearly labelled.

[OpenAI states](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) that ChatGPT Search referral URLs automatically include `utm_source=chatgpt.com`. The Exploration should use that parameter as the clean first-party definition and retain raw source/medium values for unexpected variants. Do not combine all AI tools into one channel until each observed source is validated.

The trustworthy GA4 comparison begins on 2026-08-03, when collection and primary events were repaired and verified. Earlier GA4 data must not be mixed into conversion conclusions.

## Customer-discovery intake

When a customer says they found POSPal through ChatGPT, request any one of:

- the exact original prompt;
- a shared conversation link;
- a screenshot that includes the answer and Sources panel.

Record the material in a separate intake log, with permission, and redact personal information. Customer-reported conversations inform new prompt candidates but do not silently change the frozen benchmark. A new prompt enters only in a later benchmark version and remains identifiable as a new series.

## Proposed deliverables after approval

```text
docs/seo/ai-discovery-benchmark/
├── RUNBOOK.md
├── PROMPTS.md
├── RESULTS.csv
├── SCORECARD.md
└── CUSTOMER_DISCOVERY_INTAKE.md
```

- `RUNBOOK.md`: exact test procedure and quality checks.
- `PROMPTS.md`: frozen Greek prompt bank and version history.
- `RESULTS.csv`: one row per response using the capture schema above.
- `SCORECARD.md`: calculated snapshot results and evidence-led interpretation.
- `CUSTOMER_DISCOVERY_INTAKE.md`: redacted reports from real customers.

The five execution artifacts were created after approval. Snapshot `B0` is ready to run.

## Skill decision

Skills used for this proposal:

- `find-skills`: searched the available skill ecosystem and checked source-repository quality.
- `analytics`: defined the decision-first GA4 view, event linkage, naming, and privacy requirements.
- `openai-docs`: grounded the protocol in current official ChatGPT Search and referral guidance.

Optional skill found for the execution stage:

- `kostja94/marketing-skills@ai-traffic-tracking`
  - [Skills directory](https://skills.sh/kostja94/marketing-skills/ai-traffic-tracking)
  - Observed installs during review: 811
  - [Source repository](https://github.com/kostja94/marketing-skills): active, not archived, approximately 848 GitHub stars at review time
  - Install: `npx skills add kostja94/marketing-skills@ai-traffic-tracking -g -y`

Recommendation: do not install it yet. The existing analytics skill and verified GA4 events cover the baseline. Install the optional skill only if a reusable multi-platform AI-referral channel/report is wanted after `B0`.

An automated AI-visibility tracker is also intentionally deferred. The first benchmark should be manual and auditable because account state, Search mode, location, query rewriting, and repeated-run variability are part of what we are measuring.

## Approval gate

Approval means:

1. Freeze the 12 prompts and the exact `R01` reproduction above as benchmark version `1.0`.
2. Create the five proposed benchmark artifacts.
3. Run and record snapshot `B0`.
4. Create the GA4 Exploration when account access is available.
5. Return with the scorecard and a diagnosis before proposing any Step 2 implementation.
