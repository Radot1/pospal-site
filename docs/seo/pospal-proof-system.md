# Step 3 Draft: POSPal Proof System

Status: Draft for review; internal evidence process only
Last reviewed: 2026-08-05
Parent plan: [POSPal ChatGPT and AI Discovery Work Plan](chatgpt-discovery-work-plan.md)
Fact register: [POSPal product-fact checklist](pospal-product-fact-checklist.md)
Scope: proof collection, verification, approval, and maintenance; no website changes

## Outcome

Create reusable proof records that a buyer, reviewer, or answer engine can check without relying on a repeated POSPal marketing assertion.

The system must support four different jobs:

1. show that a documented installation and workflow actually occurred;
2. state exactly which environment and equipment were tested;
3. connect every result to a method, evidence owner, limitation, and approval;
4. make it possible for an independent source to reproduce or corroborate the important facts.

It does not turn controlled screenshots, guide videos, or repeated website copy into independent proof by themselves.

## Evidence classes

| Class | Meaning | Suitable use | Not sufficient for |
| --- | --- | --- | --- |
| `C1 — controlled fact` | A current fact published by POSPal or confirmed by the owner, with an identified source | Identity, price, offer, support channel, product boundary | Customer outcomes, broad compatibility, reliability claims |
| `C2 — reproducible observation` | A dated test with environment, procedure, raw evidence, result, and evidence owner | Installation, device, network, printer, and workflow behavior in the tested setup | Claims beyond the tested setup |
| `C3 — customer-approved evidence` | A named customer's factual record with explicit permission for the fields, images, and figures published | Case study, venue workflow, customer result, limitations | General market-wide claims |
| `C4 — independent corroboration` | A source outside POSPal's control publishes or reproduces the fact in its own words | Independent discovery and citation | Facts the source did not actually test or document |

Rules:

- Repetition across POSPal-owned pages does not raise a claim above `C1`.
- A guide video can document a process, but remains controlled evidence unless another party reproduces it.
- A test proves only the recorded product version, environment, equipment, procedure, and result.
- Customer approval does not replace a measurement method for a numerical claim.
- Independent publication does not make an inaccurate claim true. The underlying evidence must still be retained.
- Unsupported, inferred, expired, or contradicted claims are not publishable.

## Claim ledger

Every proposed public claim receives one row before copy is drafted.

| Field | Required entry |
| --- | --- |
| Claim ID | Stable ID such as `CLM-NET-001` |
| Exact claim | One factual sentence, without promotional interpretation |
| Claim type | Identity, commercial, capability, compatibility, workflow, support, result, or limitation |
| Scope | Exact versions, venue, equipment, dates, and conditions covered |
| Evidence class | `C1`, `C2`, `C3`, or `C4` |
| Evidence IDs | One or more retained evidence items |
| Method | How the fact was observed, measured, or confirmed |
| Evidence owner | Person or organization responsible for the source |
| Public approver | POSPal and, where applicable, the named customer |
| Approved wording | Exact wording that may be published |
| Limitations | Conditions and non-fit details that must travel with the claim |
| Review trigger | Product release, equipment change, support-policy change, customer withdrawal, or contradictory evidence |
| Review date | Last date the evidence and public wording were checked |
| Status | Candidate, testing, approved, published, retired, or disputed |

No figure may reach `approved` without units, source, owner, method, date range, and any required customer approval.

## Reusable proof-record template

Copy the following section into a new internal record. Use a stable ID such as `PRF-2026-001`. Do not put private customer contact details in a public draft or commit raw customer correspondence.

### 1. Record control

- **Proof ID:**
- **Working title:**
- **Status:** candidate / collecting / verification / customer review / approved / published / retired
- **Evidence owner:**
- **POSPal reviewer:**
- **Created:**
- **Last reviewed:**
- **Review trigger:**
- **Related product version:**
- **Related claim IDs:**

### 2. Content and buyer job

- **Question this proof answers:**
- **Buyer stage:** consideration / decision / implementation
- **Asset type:** installation record / compatibility result / workflow record / named customer example / independent review pack
- **Search intent, if any:**
- **Distinct job versus existing pages:**
- **Primary next action:** Windows download
- **Secondary next action:** the specific installation or setup guide

One record should answer one primary buyer question. Do not combine unrelated keyword variants or create a new public page merely because a record exists.

### 3. Venue and permission

- **Public venue name:**
- **Venue type and service model:**
- **Location at the approved level of detail:**
- **Relevant operating context:** table service / counter / takeaway / seasonal / other
- **Public customer representative and role:**
- **Private approval contact location:** retained outside the public repository
- **Permission covers:** name / logo / images / equipment / quotations / figures / external links
- **Permission evidence ID and date:**
- **Permission restrictions or expiry:**
- **Customer may review final copy before publication:** yes / no

If the customer is not willing to be named, the record may support internal product learning but does not satisfy the first named public-proof requirement.

### 4. Problem and baseline

- **Problem in the customer's own words:**
- **Existing workflow before POSPal:**
- **Why a change was considered:**
- **Baseline measure, if used:** value, unit, method, sample, and date range
- **What is not being compared:**

Do not convert a general preference into a measurable outcome. Do not name another vendor in public copy.

### 5. Tested environment

| Item | Exact recorded value | Evidence ID |
| --- | --- | --- |
| POSPal version/build | | |
| Installer filename | | |
| Installer checksum | | |
| Windows edition/version/build | | |
| Computer architecture | | |
| Computer hardware relevant to the test | | |
| Installation privilege used | | |
| Staff device make/model | | |
| Staff device OS/version | | |
| Browser/app and version | | |
| Router/access point | | |
| Network topology and isolation settings | | |
| Windows firewall state/rules | | |
| Internet state during each step | | |
| Printer make/model | | |
| Printer interface, paper width, driver, and firmware | | |
| Existing fiscal system | Record only if relevant and approved; do not imply integration | |

### 6. Setup record

- **Starting state:** clean install / upgrade / existing configuration
- **Start and finish timestamps:**
- **Steps performed:**
- **Configuration choices:**
- **Restarts or updates required:**
- **Support intervention:** who, channel, and exact help provided
- **Failures, warnings, and recovery:**
- **Setup-time claim allowed:** yes / no; if yes, state start/stop rule and exclusions
- **Raw evidence IDs:** screen recording, screenshots, logs, installer metadata, or checklist

### 7. Workflow trace

Record one traceable test order without real guest personal data.

| Checkpoint | Timestamp | Expected state | Observed state | Evidence ID |
| --- | --- | --- | --- | --- |
| Order entered on staff device | | | | |
| Device leaves local Wi-Fi, if tested | | | | |
| Order remains on device, if tested | | | | |
| Device returns and synchronizes, if tested | | | | |
| Order appears in POSPal on Windows | | | | |
| Order reaches kitchen workflow | | | | |
| Printed ticket produced, if tested | | | | |
| Internet is removed/restored, if tested | | | | |

Record failed checkpoints. A clean narrative assembled after the fact is not a test record.

### 8. Results

| Result ID | Exact result | Unit | Method | Sample and period | Evidence ID | Customer approved? |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

Allowed results include a binary pass/fail for a defined workflow. Time, error-rate, throughput, cost, or operational-outcome claims require a documented baseline and collection method.

### 9. Limitations and non-fit

- **What was not tested:**
- **What failed or required a workaround:**
- **What depends on internet:**
- **What works only on the local network:**
- **Equipment or versions outside scope:**
- **Support not provided:**
- **Fiscal boundary:** POSPal is not a fiscal POS or cash register and no integration is implied unless separately verified.
- **Conditions that would invalidate the result:**

### 10. Evidence index

| Evidence ID | Description | Date | Source/control | Storage location | Integrity check | Public use allowed? |
| --- | --- | --- | --- | --- | --- | --- |
| | | | POSPal / customer / independent | | checksum or immutable URL | |

Raw captures and customer correspondence should live in an approved private evidence store, not in this public repository. Public website assets, once approved, must live under `static/`.

### 11. Approval

- **Customer-approved facts:**
- **Customer-approved quotation, verbatim:**
- **Customer-approved images and captions:**
- **Customer approval evidence ID/date:**
- **POSPal factual review:**
- **Privacy review:**
- **Final limitations included:**
- **Public copy language:** Greek-only, monotonic, factual, non-comparative

Approval must be granular. Permission to use a business name does not imply permission to publish a representative's name, images, equipment, or figures.

### 12. Independent verification route

- **Reproduction steps available to a reviewer:**
- **Software/version access supplied:**
- **Test data supplied:**
- **Expected observable checkpoints:**
- **Known limitations disclosed before the test:**
- **Reviewer controls its own conclusion:** yes / no
- **Independent publication URL and date, when available:**
- **Differences between the independent result and POSPal's record:**

### 13. Publication gate

- [ ] Every public sentence maps to an approved claim ID.
- [ ] Every number has units, source, owner, method, date range, and approval.
- [ ] The tested version and environment are visible.
- [ ] Failures, workarounds, and untested areas are visible.
- [ ] Customer permission covers every published identity, image, quotation, and figure.
- [ ] No private contact or guest data is present.
- [ ] No competitor is named in public copy.
- [ ] No fiscal, compliance, integration, compatibility, uptime, support-time, or outcome claim is inferred.
- [ ] The proof has one distinct buyer/search job and does not duplicate an existing page.
- [ ] Download remains primary and the relevant guide remains secondary.
- [ ] Any structured data is limited to visible facts and is reviewed separately at implementation time.

## Evidence-pack structure

The public repository should contain the approved record and public assets only. Raw evidence should use this logical structure in a private, access-controlled store:

```text
PRF-YYYY-NNN/
  00-record/
  01-permission/
  02-environment/
  03-installation/
  04-workflow/
  05-results/
  06-approval/
  07-publication/
```

Use the proof ID and evidence ID in filenames. Preserve original files. Store a checksum for mutable or downloaded evidence.

## First proof batch

The first batch should create evidence before public copy:

1. complete the fact checklist's release, Windows, device, network, printer, internet, and support tests;
2. record one clean installation and first test order using this template;
3. retain an authentic kitchen/printer output if printing is part of the claim;
4. select one willing customer only after the method is ready;
5. run the same record in that customer's actual environment;
6. obtain granular approval and an independently checkable customer or reviewer reference;
7. only then draft a public proof asset or generic-hub improvement specification.

No website change is proposed by this draft.
