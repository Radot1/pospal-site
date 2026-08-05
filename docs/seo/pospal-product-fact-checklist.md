# POSPal Product-Fact Checklist

Status: Repository-backed fact register; not a public compatibility statement
Last reviewed: 2026-08-05
Proof process: [POSPal proof system](pospal-proof-system.md)
Parent plan: [POSPal ChatGPT and AI Discovery Work Plan](chatgpt-discovery-work-plan.md)

## Evidence labels

- `Controlled`: consistent across POSPal-owned sources or owner confirmation; not independent proof.
- `Source-verified`: implemented in the current private application source, maintained product documentation, and/or maintained tests; controlled first-party evidence, not an independent compatibility test.
- `Observed`: supported by a dated technical source or artifact.
- `Needs exact evidence`: too broad for publication without an exact environment or reproducible record.
- `Customer needed`: requires a named customer and granular publication permission.
- `Do not claim`: excluded until qualifying evidence changes the boundary.

Marketing copy shows what POSPal says. It does not prove that every device, browser, network, printer, or Windows environment is compatible.

## Source inventory

| Source | What it supports | Limitation |
| --- | --- | --- |
| `PRODUCT.md`, `CONTEXT.md`, and `.agents/product-marketing.md` | Audience, positioning, offer, product boundary, and known proof gaps | Controlled internal context |
| Current public HTML and official guides | Existing claims, offer, Windows host, local network, staff devices, support, and fiscal boundary | Repeated owned copy is not compatibility proof |
| Sibling private application repository reviewed 2026-08-05 | Current implementation, setup copy, operational contracts, packaging configuration, and maintained tests for workflow, LAN access, reconnect behavior, printing, QR publishing, and languages | Private POSPal-controlled source; proves implemented behavior in the reviewed working tree, not broad environmental compatibility or outcomes |
| Official `pospal-artifacts` release and `releases.win.json` | Installer identity, package version, asset size, and checksums | Time-sensitive release evidence, not runtime behavior |
| [`PRF-2026-001`](proof-records/PRF-2026-001.md) | Installer checksum, valid signature, and embedded version | Artifact-only; the installer was not executed |
| `docs/seo/pospal-entity-facts.md` | Approved public identity, profiles, offer, support contact, and fiscal boundary | Entity facts, not operational outcomes |

## Publishable controlled facts

These facts may support public copy when phrased within their recorded scope. They must not be presented as customer outcomes or independent validation.

| ID | Fact | Status and evidence | Public boundary / review trigger |
| --- | --- | --- | --- |
| `FAC-ID-001` | Product name is `POSPal`; `POSPal.gr` is the public disambiguator | Controlled: entity record and live entity page | Review on identity change |
| `FAC-POS-001` | POSPal is an ordering and kitchen-workflow tool for Greek hospitality businesses | Controlled: product context, entity record, current site | Review on positioning change |
| `FAC-BND-001` | POSPal is not a fiscal POS or cash register | Controlled publishable boundary | Keep visible wherever product scope could be misunderstood |
| `FAC-BND-002` | “Runs alongside” does not mean integration with a fiscal system | Do not claim integration | Change only after a specific integration is verified and approved |
| `FAC-CAP-001` | Current product includes table mode, simple mode, kitchen workflow, and a QR customer menu | Source-verified: private routes, setup flow, publisher implementation, and maintained tests | Review on packaging/product change |
| `FAC-OFR-001` | Trial is 30 days with no card or personal information required to start | Controlled: current pages and entity facts | Review on offer change |
| `FAC-OFR-002` | Price after trial is €23.90/month including VAT | Controlled and owner-confirmed | Review on price or tax change |
| `FAC-OFR-003` | Cancellation stops the next renewal and access continues through the paid period | Controlled: product context | Review on billing-policy change |
| `FAC-OFR-004` | No separate installation or maintenance fee is currently charged | Controlled: product context and current pages | Review on commercial-policy change |
| `FAC-SUP-001` | Public help channel is `support@pospal.gr`; support is remote and no public phone is offered | Controlled and owner-confirmed | Do not invent an SLA or channel |
| `FAC-SUP-002` | Guides are the primary setup and troubleshooting route | Controlled | Locked guides page remains unchanged |
| `FAC-SUP-003` | No response-time SLA or done-for-you installation/configuration service is promised | Controlled limitation | Review on support-policy change |
| `FAC-SUP-004` | Application interface supports Greek and English | Source-verified: private locale files and language selection | This is not a promise of bilingual human support |

## Windows and release facts

| ID | Fact | Status and evidence | Public boundary / next action |
| --- | --- | --- | --- |
| `FAC-REL-001` | Approved public filename is `POSPal-win-Setup.exe` | Controlled and observed | Recheck every release |
| `FAC-REL-002` | Latest release observed during this review was `v0.6.1`, published 2026-07-16 | Observed on 2026-08-05 | Time-sensitive; not evergreen marketing copy |
| `FAC-REL-003` | Installer checksum and valid signature were recorded | Observed in `PRF-2026-001` | Revalidate each release; do not publish private certificate identity |
| `FAC-WIN-001` | Main application installs on a Windows computer | Source-verified: Windows packaging configuration | Generic `Windows` claim only |
| `FAC-WIN-002` | Current packaged runtime target is Windows x64 | Source-verified: Velopack `win-x64` build configuration | Do not infer supported Windows editions/builds |
| `FAC-WIN-003` | The LAN service uses a selectable local TCP port and a POSPal-owned `LocalSubnet` firewall rule | Source-verified: private network/firewall implementation | Public copy should say local-network permission may be needed; keep port mechanics in setup material |
| `FAC-WIN-004` | Packaged application checks for and applies updates | Source-verified: updater implementation and package configuration | Internet is needed for update checks/downloads; do not generalize to all offline behavior |
| `FAC-WIN-005` | Customer data is stored separately from application files and designed to persist across updates | Source-verified: private storage/update contracts | Do not claim backup, migration, or zero-loss guarantees |
| `FAC-WIN-006` | Supported Windows editions/builds and minimum CPU, RAM, storage, and display | Needs exact evidence | Do not publish a minimum specification yet |
| `FAC-WIN-007` | Clean install, upgrade, rollback, uninstall, administrator-rights, and restart behavior | Needs exact execution evidence | The owner has chosen not to install the app for this SEO phase |

## Staff device, network, and reconnect facts

| ID | Fact | Status and evidence | Public boundary / next action |
| --- | --- | --- | --- |
| `FAC-DEV-001` | Staff can use a phone or tablet that can reach the Windows host on the local network | Source-verified: local routes, setup flow, and maintained tests | Do not infer model, OS-version, or browser-version compatibility |
| `FAC-DEV-002` | A native mobile app is not required for the staff connection flow | Source-verified: Windows host serves the staff interface at a local link; setup provides a link/QR code | Describe the local-link flow; do not promise untested browsers |
| `FAC-DEV-003` | Exact Android, iOS/iPadOS, browser versions, and practical device concurrency | Needs exact evidence | Do not publish a compatibility matrix or concurrency figure |
| `FAC-NET-001` | Staff devices and Windows host communicate through a reachable local network | Source-verified: LAN service, connection setup, and tests | Do not broaden into router compatibility |
| `FAC-NET-002` | The same Wi-Fi name alone is not sufficient when guest isolation or routing prevents reachability | Source-verified boundary: setup guidance warns about guest Wi-Fi isolation | Say `ίδιο προσβάσιμο τοπικό δίκτυο`, not `ίδιο Wi-Fi` as a guarantee |
| `FAC-NET-003` | POSPal provides the current local connection link and handles current LAN-address changes | Source-verified narrow behavior | Do not publish a static-IP guarantee or router-specific setup claim |
| `FAC-NET-004` | Supported actions on an already-open staff device are queued locally during a temporary loss of contact and replayed after reconnection | Source-verified: offline recovery contract and maintained tests | Pending work belongs to that device; it is not a shared cloud/network-wide queue |
| `FAC-NET-005` | Queued actions replay chronologically; unresolved/conflicting work is held for operator review | Source-verified: recovery contract and tests | No zero-loss, zero-duplicate, or reliability guarantee |
| `FAC-NET-006` | The staff recovery queue is stored on that device and returns to the Windows host when reachable | Source-verified with strict scope | Scope only to supported staff-order actions; QR publishing, licensing, and updates have separate internet dependencies |
| `FAC-NET-007` | Some cached-license and local workflows have degraded offline behavior; QR publishing, licensing, and updates can require internet | Source-verified boundary; no publishable duration | Do not claim indefinite internet-free operation or publish a grace period |
| `FAC-NET-008` | Exact router, VLAN, restart, power-loss, and uncommon topology behavior | Needs exact evidence | Keep outside acquisition copy unless specifically verified |

## Printer facts

| ID | Fact | Status and evidence | Public boundary / next action |
| --- | --- | --- | --- |
| `FAC-PRN-001` | POSPal lists thermal printers already installed in Windows | Source-verified: setup interface and printer enumeration | Do not infer compatibility from model or interface alone |
| `FAC-PRN-002` | POSPal supports kitchen, customer, and table printer roles | Source-verified: setup UI and printing implementation | Printed output is optional unless the venue wants paper tickets/bills |
| `FAC-PRN-003` | Menu categories can be routed to different preparation printers | Source-verified: routing implementation and maintained Python/JavaScript tests | Do not name unverified printer hardware |
| `FAC-PRN-004` | Setup requires a real test print and user confirmation of readable paper output | Source-verified: setup contract | A Windows “sent” status alone is not physical-output proof |
| `FAC-PRN-005` | POSPal has durable local print queues and printer incident/recovery controls | Source-verified: spool implementation, recovery UI, and tests | Do not promise recovery from every hardware failure |
| `FAC-PRN-006` | Tested makes/models, USB/Ethernet/Wi-Fi/Bluetooth/serial interfaces, widths, drivers, cutters, drawers, and Greek output | Needs authentic model-specific evidence | Do not publish broad printer compatibility |
| `FAC-PRN-007` | Authentic physical ticket output tied to a public proof record | Missing | Do not use an HTML representation as physical-printer evidence |

## Workflow and QR-menu facts

| ID | Fact | Status and evidence | Public boundary / next action |
| --- | --- | --- | --- |
| `FAC-WRK-001` | Staff-device order entry and Windows-host handling form one local workflow | Source-verified: local routes, implementation, browser tests, and controlled route inventory | Not a named-customer or broad compatibility result |
| `FAC-WRK-002` | Orders reach the kitchen workflow and can route by preparation category | Source-verified: workflow/routing implementation and tests | Physical output is a separate evidence question |
| `FAC-WRK-003` | Simple mode provides ordering without table management; table mode adds tables and live service handling | Source-verified: setup and workflow implementation | Avoid fiscal/payment-processing implications |
| `FAC-QR-001` | QR Customer Menu supports preview and explicit publish, brand colours/logo, item descriptions, dietary/allergen information, highlighted items, search, filters, and larger text | Source-verified: publisher, payload, and public-menu implementation | Do not imply that every publishing action works without internet |

## Customer, independent, and outcome proof

| ID | Fact or question | Status | Required evidence |
| --- | --- | --- | --- |
| `FAC-CUS-001` | First named venue using POSPal | Customer needed | Willing customer plus granular publication permission |
| `FAC-CUS-002` | Customer problem, workflow, quotation, and assets | Customer needed | Verbatim record and exact approval; no fabrication |
| `FAC-CUS-003` | Installation and first live order at a venue | Customer needed | Reproducible venue record with limitations |
| `FAC-OUT-001` | Setup time, time saved, fewer errors, faster service, cost/revenue, reliability, or other outcome | Do not claim | Defined method, units, sample/period, limitations, and approval |
| `FAC-OUT-002` | Customer count, order count, uptime, success rate, or aggregate usage | Do not claim | Reproducible collection method, exclusions, privacy review, and owner |
| `FAC-IND-001` | Independent source reproduces or describes the POSPal workflow | Missing | Customer/reviewer controls its own method and conclusion |

## Repository-evidence decision

On 2026-08-05 the owner explicitly directed that POSPal not be installed for this SEO work. The website proposal therefore uses the current private application source, maintained product contracts, and maintained tests as controlled first-party evidence. `PRF-2026-001` remains an artifact-integrity record only.

This is sufficient for narrow architectural and capability copy. It is not sufficient for broad compatibility statements, physical-printer claims, customer outcomes, or independent corroboration. Those remain excluded unless a future customer, reviewer, or exact environment supplies qualifying evidence.

## Remaining claim boundaries

The repositories still cannot support these broader public claims:

1. specific supported Windows editions/builds or minimum hardware;
2. exact phone/tablet operating-system and browser versions;
3. router-model compatibility or every unusual network topology;
4. a universal duration for internet-free operation;
5. authentic compatibility for named printer models, interfaces, widths, and drivers;
6. support response times or done-for-you setup services;
7. named customers, testimonials, figures, outcomes, or independent validation.

These gaps do not block the repository-backed website proposal because it excludes those claims.
