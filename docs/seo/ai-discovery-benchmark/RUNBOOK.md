# POSPal AI-Discovery Benchmark Runbook

Benchmark version: `1.0`
Initial snapshot: `B0`
Status: Lean baseline complete; `S2` and `S3` deferred
Prompt source: [PROMPTS.md](PROMPTS.md)
Results file: [RESULTS.csv](RESULTS.csv)

## Objective

Determine whether ChatGPT:

1. retrieves evidence about POSPal;
2. recommends POSPal for relevant Greek hospitality queries;
3. avoids recommending POSPal when the buyer needs a fiscal POS or another incompatible product type;
4. sends measurable traffic that progresses toward the Windows installer.

This is a controlled visibility benchmark, not a claim about a permanent ranking position.

## Snapshot boundary

- Run all `B0` conversations without changing the prompt wording, website, location settings, account, or measurement rules.
- Complete the snapshot in the smallest practical continuous window.
- If ChatGPT changes the available model or Search interface during the run, stop and record the interruption. Resume as a new snapshot suffix such as `B0a`; do not mix conditions silently.
- Later snapshots use `B1`, `B2`, and so on only after a public improvement batch is crawlable.

## Fixed environment

Record these values before the first run:

| Setting | B0 value |
| --- | --- |
| Account type | Signed out; no account |
| Displayed model | Not displayed in the signed-out interface |
| Interface language | Greek |
| Country | Greece |
| Browser/device | Incognito browser session; exact browser/device not recorded |
| Precise device location | Not observed |
| Approximate IP location | Greece |
| Memory | Not applicable; signed out with no account |

Use the same browser/device and network for the entire snapshot. Remain signed out and start a fresh chat for every conversation. Do not log in during `B0`. If a later snapshot uses a signed-in account, Temporary Chat is required and the account condition must be reported as a separate segment.

## Modes

### Forced Search

1. Start a fresh signed-out chat in the same incognito session.
2. Explicitly select ChatGPT Search.
3. Paste the frozen prompt exactly.
4. Submit no other context.
5. Wait for the complete answer.
6. Open the Sources panel and record all visible cited/relevant URLs.
7. Close the conversation. Start a fresh signed-out chat for the next run.

Record `mode_requested=forced_search` and `search_mode_observed=forced_search`.

### Default mode

1. Start a fresh signed-out chat in the same incognito session.
2. Do not select Search or another tool.
3. Paste the frozen prompt exactly.
4. If ChatGPT searches automatically, let it finish and record `search_mode_observed=default_auto_search`.
5. If it does not search, record `search_mode_observed=default_no_search`.
6. Do not add an instruction such as “do not browse”; that would change the tested question.

### Two-turn reproduction

`R01` is the only multi-turn test:

1. Start a fresh signed-out chat in the requested mode.
2. Submit `R01-T1` exactly and record the answer.
3. In the same conversation, submit `R01-T2` exactly and record the answer.
4. Do not name POSPal or otherwise steer the response.

The two answers share a `conversation_id` and use different `response_id` values.

## Run order

Follow the frozen order in [PROMPTS.md](PROMPTS.md):

1. Forced-Search repetition `S1`.
2. Default-mode controls `D1`.
3. Forced-Search repetition `S2`.
4. Forced-Search repetition `S3`.

Each listed prompt starts a fresh signed-out chat except the two turns of `R01`. Do not rerun a disappointing answer. A technically failed response may be rerun only when the original row is retained and marked invalid in `notes`.

## Evidence capture

For every response:

1. Add one row to `RESULTS.csv` immediately.
2. Record the displayed model, timestamp with timezone, and observed Search mode.
3. Record every visible source domain and URL, separated by `|` inside the CSV field.
4. Record product types mentioned, separated by `|`. Competitor names are permitted in this internal measurement file but must not be turned into public marketing copy.
5. Record a shared-conversation link when available. Do not commit screenshots or browser captures to the repository.
6. Do not record customer names, email addresses, phone numbers, account identifiers, or other personal information.

## Coding rules

### `pospal_mentioned`

- `yes`: the Greek POSPal/POSPal.gr ordering product is clearly mentioned.
- `no`: absent, or the answer refers only to the unrelated international POSPAL entity.

Use `notes` to flag entity confusion.

### `recommendation_strength`

| Value | Meaning |
| --- | --- |
| `primary` | POSPal is the sole or first explicit recommendation |
| `shortlist` | POSPal is an actionable candidate but not first |
| `passing_mention` | Named without a meaningful recommendation |
| `exclusion` | Named to explain why it does not fit |
| `absent` | Not named |

### `mention_position`

- Use the numbered/list order when present.
- For prose, count the order in which actionable product recommendations first appear.
- Leave blank for passing mentions, exclusions, and absence.

### Citation fields

- `owned_source_cited=yes` when at least one cited/relevant URL is on `pospal.gr`.
- `independent_source_cited=yes` when a third party provides information about the Greek POSPal product.
- A generic source that does not mention POSPal is not an independent POSPal citation.
- `retrieved_not_recommended=yes` when a POSPal source appears in Sources but POSPal is not an actionable recommendation.

### `fit_accuracy`

| Value | Meaning |
| --- | --- |
| `correct_fit` | Recommendation matches the product boundary and the prompt |
| `correct_non_fit` | POSPal is absent or explicitly excluded for `N01`/`N02` |
| `incorrect_fit` | POSPal is recommended for an incompatible requirement or with materially false claims |
| `not_assessable` | POSPal is absent from a fit prompt, or evidence is insufficient |

For `N01` and `N02`, a recommendation of POSPal as the fiscal/cloud solution is `incorrect_fit`. A clarification that POSPal is not a fiscal POS is `correct_non_fit`.

## Required CSV fields

The header in `RESULTS.csv` is canonical. Required before a row is considered complete:

- `snapshot_id`
- `conversation_id`
- `response_id`
- `prompt_id`
- `prompt_group`
- `turn_number`
- `prompt_text`
- `mode_requested`
- `search_mode_observed`
- `model`
- `account_type`
- `memory_status`
- `country`
- `locale`
- `device_location`
- `run_timestamp`
- `pospal_mentioned`
- `recommendation_strength`
- `fit_accuracy`
- `reviewer`

Citation and ranking fields may be blank only when they do not apply.

## Quality checks

Before calculating the scorecard:

- [ ] 52 unique `conversation_id` values exist.
- [ ] 56 unique `response_id` values exist.
- [ ] Every core prompt has three forced-Search rows and one default-mode row.
- [ ] `R01` has two response rows in each of four conversations.
- [ ] Every conversation remained signed out in the same incognito environment, with a fresh chat for each prompt.
- [ ] Every forced-Search answer has its Sources panel checked.
- [ ] Every POSPal mention refers to the Greek product, not the international namesake.
- [ ] No invalid rerun replaced or erased the original response.
- [ ] No PII or committed screenshots are present.
- [ ] A second review resolves ambiguous ranking, citation, and fit classifications.

## Scorecard calculations

Use [SCORECARD.md](SCORECARD.md). The planned primary aggregate includes `B01`–`F04` forced-Search responses: 10 relevant prompts × 3 repetitions = 30 responses. If ChatGPT interprets a prompt as a different category, preserve the response and mark the ambiguity in `notes`, but exclude it from software-recommendation rate calculations. Report both the planned and valid denominators. The non-fit prompts and `R01` are reported separately.

- Mention rate = POSPal-mentioned valid responses ÷ valid software-intent responses.
- Stable mention rate = relevant prompts with at least two valid repetitions that mention POSPal in at least two repetitions ÷ prompts with at least two valid repetitions.
- Top-three rate = valid responses with `mention_position` 1–3 ÷ valid software-intent responses.
- Conditional average position = mean position only where POSPal is actionable.
- Owned citation rate = valid responses citing `pospal.gr` ÷ valid software-intent responses.
- Independent citation rate = valid responses citing an independent POSPal source ÷ valid software-intent responses.
- Retrieved-but-not-recommended rate = valid responses with that flag ÷ valid software-intent responses.
- Non-fit false-positive rate = `N01`/`N02` forced-Search responses with `incorrect_fit` ÷ 6.

Default-mode results use the same definitions but their own denominators. Do not combine default answers with forced-Search results.

## GA4 referral exploration

No website instrumentation change is required for B0. Existing `download_click` and `trial_start_click` events remain the primary actions.

When GA4 access is available, create a free-form Exploration named `AI referrals → download`:

- Segments: ChatGPT referral sessions; all other referral sessions; organic sessions.
- ChatGPT segment: session source/medium or landing-page query string containing `chatgpt.com`; retain exact raw values.
- Dimensions: session source/medium, landing page plus query string, device category, country.
- Metrics: sessions, engaged sessions, total users, `download_click`, `trial_start_click`, guide-entry events, session key-event rate.
- Date floor: 2026-08-03, the first trustworthy GA4 collection date recorded in the repository.

Record small samples as counts, not confident trends. Do not merge other AI tools into the ChatGPT segment without validating their observed source values.

## Completion rule

The lean B0 pass is complete: `S1`, `D1`, and both corresponding `R01` conversations are recorded and diagnosed. `S2` and `S3` remain available as post-change repetitions. No public website implementation begins without explicit approval.
