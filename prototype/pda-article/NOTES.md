# PDA article design prototype

Three content-complete, throwaway directions for the `PDA τι είναι` article. They are switchable with `?variant=` on `/prototype/pda-article/`.

## Design question

Which structure can turn a generic SEO explainer into an authored visual article without outrunning the evidence we actually have?

## Run

From the repository root:

```powershell
python -m http.server 4173
```

Then open:

- `http://localhost:4173/prototype/pda-article/?variant=a`
- `http://localhost:4173/prototype/pda-article/?variant=b`
- `http://localhost:4173/prototype/pda-article/?variant=c`

Use the floating arrows or the keyboard left/right arrows to switch variants.

## Directions

- **A / Equipment Atlas:** a tactile field guide. The equipment plate is the organising idea, with dense practical comparisons and an evidence filmstrip.
- **B / Photo Essay:** an image-led editorial feature. Large visual chapters create rhythm, while the article text stays restrained and readable.
- **C / One Order Route:** a visual systems story. The page teaches the category by following one order from a handheld device to the Windows workflow and toward the kitchen.

## Evidence rules

- The two generated images are explicitly labelled as illustrations. They carry no logos, readable interfaces, customer identities or implied compatibility proof.
- `static/img/pospal-desktop-order.webp` is the only real product-proof image currently used.
- The kitchen/printer evidence is intentionally shown as missing until a genuine kitchen frame or test print exists.
- Robert's portrait is an intentional blank frame in every direction, as requested.
- No fabricated testimonials, performance numbers, device support or operational anecdotes were added.
- The one main in-article handoff is `/times.html`.
- The prototype is `noindex`; no production page was changed.

## Verdict

Pending visual review. The selected direction should be rebuilt against the real production shell and real article evidence, not promoted by copying the prototype unchanged.
