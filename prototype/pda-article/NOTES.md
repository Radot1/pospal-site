# PDA article prototype

One deliberately simple editorial article layout based on the supplied Bon Appetit reference:

- deep-forest POSPal publication header and footer;
- bright green used only for brand accents and the next action;
- centered category, headline, standfirst and byline;
- blank Robert portrait;
- one dominant hero image;
- narrow serif reading column;
- plain rules, contents and section headings;
- one final handoff to `/times.html`.

No variants, animation, JavaScript, cards or scrollytelling.

The approved direction has been promoted to `/pda-ti-einai.html`. Its production
styles live in `/static/css/pda-editorial.css`.

Run from the repository root:

```powershell
python -m http.server 4173
```

Open `http://localhost:4173/prototype/pda-article/`.
