(() => {
  const guides = [
    {
      slug: "printer-setup",
      url: "/guides/?guide=printer-setup",
      title: "Τι χρειάζεσαι πριν εγκαταστήσεις το POSPal",
      shortTitle: "Πριν την εγκατάσταση",
      duration: "6 λεπτά",
      video: "https://www.youtube.com/embed/p0FNRfv0vVo",
      youtube: "https://youtu.be/p0FNRfv0vVo",
      intro: "Έλεγξε πρώτα τον υπολογιστή, τον εκτυπωτή, το τοπικό δίκτυο και τις συσκευές που θα χρησιμοποιεί η ομάδα.",
    },
    {
      slug: "windows-installation",
      url: "/guides/?guide=windows-installation",
      title: "Εγκατάσταση POSPal σε Windows",
      shortTitle: "Εγκατάσταση σε Windows",
      duration: "8 λεπτά",
      video: "https://www.youtube.com/embed/2XJvWmfJWwk",
      youtube: "https://youtu.be/2XJvWmfJWwk",
      intro: "Κατέβασε το αρχείο εγκατάστασης, άνοιξέ το στον υπολογιστή της επιχείρησης και έλεγξε ότι το POSPal ξεκινά κανονικά.",
      downloadFocus: true,
    },
    {
      slug: "app-tour",
      url: "/guides/?guide=app-tour",
      title: "Περιήγηση στο POSPal",
      shortTitle: "Περιήγηση",
      duration: "Βίντεο",
      video: "https://www.youtube.com/embed/POZUAfynPYE",
      youtube: "https://youtu.be/POZUAfynPYE",
      intro: "Δες το βασικό περιβάλλον του POSPal, πώς είναι οργανωμένες οι λειτουργίες και πώς κινείται ο χρήστης μέσα στην εφαρμογή.",
    },
    {
      slug: "settings",
      url: "/guides/?guide=settings",
      title: "Ρυθμίσεις του POSPal",
      shortTitle: "Ρυθμίσεις",
      duration: "Βίντεο",
      video: "https://www.youtube.com/embed/IY2f3hRGlH8",
      youtube: "https://youtu.be/IY2f3hRGlH8",
      intro: "Δες τις βασικές ρυθμίσεις της εφαρμογής, όπως εκτυπωτές, συσκευή, λειτουργίες, αποδείξεις και επιλογές διαχείρισης.",
    },
    {
      slug: "qr-menu",
      url: "/guides/?guide=qr-menu",
      title: "QR menu POSPal",
      shortTitle: "QR menu",
      duration: "Βίντεο",
      video: "https://www.youtube.com/embed/AvokJphL4zk",
      youtube: "https://youtu.be/AvokJphL4zk",
      intro: "Δες το QR menu του POSPal, τι εμφανίζεται στον πελάτη και ποιες λειτουργίες προσφέρει χωρίς επιπλέον κόστος.",
    },
    {
      slug: "account",
      url: "/guides/?guide=account",
      title: "Διαχείριση λογαριασμού POSPal",
      shortTitle: "Λογαριασμός",
      duration: "Βίντεο",
      video: "https://www.youtube.com/embed/TVMczUWJVpk",
      youtube: "https://youtu.be/TVMczUWJVpk",
      intro: "Δες πού βρίσκονται οι πληροφορίες άδειας, η κατάσταση της συνδρομής και το portal χρέωσης για αλλαγές ή ακύρωση.",
    },
    {
      slug: "troubleshooting",
      url: "/guides/?guide=troubleshooting",
      title: "Αντιμετώπιση προβλημάτων POSPal",
      shortTitle: "Προβλήματα",
      duration: "Βίντεο",
      video: "https://www.youtube.com/embed/VaTsP1x8gWk",
      youtube: "https://youtu.be/VaTsP1x8gWk",
      intro: "Δες βασικές λύσεις για συνηθισμένα θέματα, όπως σύνδεση κινητού ή tablet, αλλαγή θύρας, πρόσβαση και αναφορά προβλήματος.",
    },
  ];

  const legacyMap = {
    "0": "/guides/?guide=printer-setup",
    "1": "/guides/?guide=windows-installation",
    "2": "/guides/?guide=app-tour",
    "3": "/guides/?guide=settings",
    "4": "/guides/?guide=qr-menu",
    "5": "/guides/?guide=account",
    "6": "/guides/?guide=troubleshooting",
  };

  const params = new URLSearchParams(window.location.search);
  const legacyLesson = params.get("lesson");
  if (legacyLesson && legacyMap[legacyLesson]) {
    window.location.replace(legacyMap[legacyLesson]);
    return;
  }

  const app = document.getElementById("academy-app");
  if (!app) return;

  const requestedGuide = params.get("guide");
  const currentSlug = requestedGuide || app.closest("[data-academy-current]")?.dataset.academyCurrent || guides[0].slug;
  const foundIndex = guides.findIndex((guide) => guide.slug === currentSlug);
  if (foundIndex === -1) {
    window.location.replace("/guides/");
    return;
  }

  const currentIndex = foundIndex;
  const current = guides[currentIndex] || guides[0];
  const next = guides[currentIndex + 1] || null;

  function escapeText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function guideNav() {
    return guides.map((guide, index) => `
      <li class="${guide.slug === current.slug ? "is-current" : ""}">
        <a href="${guide.url}"${guide.slug === current.slug ? ' aria-current="page"' : ""}>
          <b>${String(index + 1).padStart(2, "0")}</b>
          <span>${escapeText(guide.shortTitle)}</span>
          <small>${guide.duration === "Βίντεο" ? "Οδηγός βίντεο" : `Βίντεο · ${escapeText(guide.duration)}`}</small>
        </a>
      </li>
    `).join("");
  }

  app.innerHTML = `
    <header class="academy-topbar">
      <a class="academy-brand" href="/" aria-label="POSPal αρχική">
        <img src="/app_icon.ico" width="34" height="34" alt="">
        <span translate="no">POS<b>Pal</b></span>
      </a>
      <nav aria-label="Κύρια πλοήγηση οδηγών">
        <a href="/">Αρχική</a>
        <a class="academy-topbar-primary" href="/download/">Κατέβασε για Windows</a>
      </nav>
    </header>

    <div class="academy-shell">
      <section class="academy-theatre" aria-labelledby="academy-title">
        <div class="academy-title-row">
          <p class="academy-kicker">Βίντεο οδηγός · ${escapeText(current.duration)}</p>
          <h1 id="academy-title">${escapeText(current.title)}</h1>
          <p class="academy-intro">${escapeText(current.intro)}</p>
        </div>

        <nav class="academy-video-nav" aria-label="Διαθέσιμα βίντεο">
          <ol class="academy-guide-list">
            ${guideNav()}
          </ol>
        </nav>

        <div class="academy-video-stage" aria-label="Βίντεο οδηγού">
          <iframe
            src="${current.video}"
            title="${escapeText(current.title)}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <nav class="academy-actions" aria-label="Ενέργειες οδηγού">
          <a href="${current.youtube}" target="_blank" rel="noopener">Άνοιγμα στο YouTube</a>
          ${current.downloadFocus ? `<a class="academy-action-primary" href="/download/">Κατέβασε για Windows</a>` : ""}
          ${next ? `<a class="academy-action-primary" href="${next.url}">Επόμενο βίντεο</a>` : ""}
        </nav>
      </section>
    </div>

    <footer class="academy-footer">
      <div class="academy-footer-inner">
        <div>
          <strong translate="no">POSPal</strong>
          <span>Οδηγοί εγκατάστασης και πρώτης χρήσης.</span>
        </div>
        <nav aria-label="Σύνδεσμοι οδηγών">
          <a href="/">Αρχική</a>
          <a href="/download/">Κατέβασε για Windows</a>
          <a href="#academy-title">Πίσω στον οδηγό</a>
        </nav>
      </div>
    </footer>
  `;
})();
