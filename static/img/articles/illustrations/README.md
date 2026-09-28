# Approved Article Cover Illustrations

## Locked decision â€” 2026-09-27

The user approved all six `polished-v1.png` images. These are the locked visual masters: do not redesign, regenerate, recolour or overwrite them without explicit user approval. Locking is a documented design decision, not an operating-system read-only flag.

The article hub (`arthra/index.html`) uses optimized `cover-320.webp` and `cover-640.webp` exports generated from these masters. The pricing article now uses the approved equipment-and-price illustration.

## Folder map

- `pda-ti-einai/`: Paper order pad to phone
- `pda-pos-leitourgei/`: Phone to order ticket to kitchen
- `pda-gia-servitoro/`: Three staff phones to one laptop
- `asyrmati-paraggeliolipsia/`: Phone to Wi-Fi to laptop
- `systima-paraggeliolipsias/`: Phone plus laptop plus printer

## Files in each folder

- `source.png`: untouched original supplied by the user.
- `polished-v1.png`: approved, locked raster master (not a layered vector).
- `cover-320.webp` and `cover-640.webp`: 2:1 web exports, Lanczos resizing, WebP quality 90.

`manifest.json` records the source provenance, original and approved-master SHA-256 hashes, approval date and export paths.

## Future maintenance

Find the article by URL slug. Generate resized/compressed exports only from its approved master. For a user-approved visual revision, save a new version alongside the existing master and update the manifest and hub references; never silently overwrite the locked version. Existing older covers in the parent directory are superseded for these five hub cards. The pricing/equipment photograph is superseded in the hub.

The approved illustrations were polished with the built-in image tool: preserve each simple diagram, improve balance and edge clarity, normalize green/off-white colours, shorten staff-phone arrows and slightly reduce the cooking pot. Faint texture and some arrow differences were visible when the user approved this set.

- `times/`: approved equipment plus euro price-tag illustration, locked 2026-09-27 and integrated into the hub.
