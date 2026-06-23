# POSPal Academy Odoo-Inspired Prototype Lab

Question: which teaching-environment shape should replace the current card-like Academy prototype?

Route: `prototype/academy-odoo-lab/index.html`

Variants:

- `?variant=classroom`: closest to Odoo, with a dark lesson sidebar and full video theatre.
- `?variant=workbench`: POSPal-specific setup workbench with module dock, video, and readiness checklist.
- `?variant=shift`: operational training board for owners preparing the first shift.

Decision update: `classroom` is the preferred direction. It has been polished into the strongest candidate with persistent course chrome, progress, grouped lesson navigation, a single dominant video surface, and lesson-first mobile behavior. Supporting or companion panels are intentionally excluded.

All variants are throwaway. Once a direction wins, fold the chosen structure into the real `/guides/` implementation and delete this lab.
