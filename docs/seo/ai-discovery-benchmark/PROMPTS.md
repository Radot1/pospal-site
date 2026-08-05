# POSPal AI-Discovery Prompt Bank

Version: `1.0`
Status: Frozen for snapshot `B0`
Language: Greek
Brand rule: POSPal is never introduced by the tester

Do not correct spelling, add context, translate, or append follow-up questions. A future wording change creates a new prompt-bank version.

## Core prompts

### Broad category

#### `B01`

> Θέλω οικονομικό πρόγραμμα παραγγελιοληψίας για καφέ ή μικρό εστιατόριο. Τι προτείνεις;

#### `B02`

> Ποιο είναι ένα καλό και απλό σύστημα παραγγελιοληψίας για μικρή καφετέρια στην Ελλάδα;

#### `B03`

> Πρότεινέ μου πρόγραμμα παραγγελιοληψίας για εστίαση με ξεκάθαρη μηνιαία τιμή.

### Commercial constraints

#### `C01`

> Θέλω παραγγελιοληψία με QR μενού και χωρίς ακριβό ειδικό εξοπλισμό.

#### `C02`

> Ψάχνω πρόγραμμα παραγγελιοληψίας με δωρεάν δοκιμή χωρίς κάρτα.

#### `C03`

> Θέλω μία οικονομική λύση για τραπέζια, πάγκο και κουζίνα.

### Exact product fit

#### `F01`

> Έχω ήδη ταμειακή και θέλω μόνο παραγγελιοληψία και ροή κουζίνας σε Windows.

#### `F02`

> Θέλω οι σερβιτόροι να παίρνουν παραγγελίες από τα κινητά τους και να φτάνουν σε υπολογιστή Windows.

#### `F03`

> Υπάρχει πρόγραμμα παραγγελιοληψίας που μπορώ να κατεβάσω και να εγκαταστήσω μόνος μου;

#### `F04`

> Θέλω πρόγραμμα για μικρό beach bar με κινητά, τοπικό Wi-Fi και θερμικό εκτυπωτή.

### Deliberate non-fit controls

#### `N01`

> Χρειάζομαι φορολογικό POS που εκδίδει αποδείξεις και συνδέεται με myDATA.

#### `N02`

> Θέλω πλήρες cloud POS που να λειτουργεί χωρίς υπολογιστή Windows και να αναλαμβάνει το φορολογικό κομμάτι.

## Exact two-turn reproduction

The original spelling and punctuation are preserved.

#### `R01-T1`

> θέλω οικονομικό πρόγραμμα παραγγελιοληψίας για καφέ/εστιατόριο

#### `R01-T2`

> κατι φθηνο; πιο απλο δεν θελω να ειναι τοσο ακριβο.

`R01-T2` must be sent in the same conversation immediately after the answer to `R01-T1`.

## Frozen run order

For `B0`, every item below starts a fresh signed-out chat in the same incognito environment except `R01-T2`.

### Forced Search `S1`

`B01 → B02 → B03 → C01 → C02 → C03 → F01 → F02 → F03 → F04 → N01 → N02 → R01-T1 → R01-T2`

### Default mode `D1`

`F01 → F02 → F03 → F04 → N01 → N02 → B01 → B02 → B03 → C01 → C02 → C03 → R01-T1 → R01-T2`

### Forced Search `S2`

`C01 → C02 → C03 → F01 → F02 → F03 → F04 → N01 → N02 → B01 → B02 → B03 → R01-T1 → R01-T2`

### Forced Search `S3`

`N02 → N01 → F04 → F03 → F02 → F01 → C03 → C02 → C01 → B03 → B02 → B01 → R01-T1 → R01-T2`

Changing the order requires a new prompt-bank version unless a documented interface failure makes continuation impossible.

## Planned counts

| Segment | Conversations | Response records |
| --- | ---: | ---: |
| Core prompts, forced Search | 36 | 36 |
| Core prompts, default mode | 12 | 12 |
| `R01`, forced Search | 3 | 6 |
| `R01`, default mode | 1 | 2 |
| **Total** | **52** | **56** |

## Version history

| Version | Snapshot | Change |
| --- | --- | --- |
| `1.0` | `B0` | Initial frozen bank, including exact reproduction and non-fit controls |

## Known issues for version `1.1`

- `C03` was interpreted as physical furniture and kitchen equipment in both forced Search and default mode. Proposed replacement: «Θέλω οικονομικό πρόγραμμα παραγγελιοληψίας για καφέ, με τραπέζια, πάγκο και αποστολή παραγγελιών στην κουζίνα.»
- Forced-Search `F03` was interpreted as general ERP/order management, although default mode understood the hospitality context. Proposed replacement: «Υπάρχει πρόγραμμα παραγγελιοληψίας για καφέ ή εστιατόριο σε Windows που μπορώ να κατεβάσω και να εγκαταστήσω μόνος μου;»

Version `1.0` remains unchanged. The proposed replacements apply only to a future snapshot.
