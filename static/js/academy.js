(() => {
  const guides = [
    {
      slug: "printer-setup",
      url: "/guides/printer-setup/",
      title: "Σύνδεση θερμικού εκτυπωτή στα Windows για το POSPal",
      shortTitle: "Θερμικός εκτυπωτής",
      duration: "2:52",
      navMeta: "Σύνδεση USB · 2:52",
      video: "https://www.youtube.com/embed/p0FNRfv0vVo",
      youtube: "https://youtu.be/p0FNRfv0vVo",
      intro: "Σύνδεσε τον θερμικό εκτυπωτή στα Windows, εγκατέστησε τον σωστό driver αν χρειάζεται και κάνε δοκιμαστική εκτύπωση.",
    },
    {
      slug: "windows-installation",
      url: "/guides/windows-installation/",
      title: "Εγκατάσταση POSPal σε Windows",
      shortTitle: "Εγκατάσταση σε Windows",
      duration: "9:38",
      navMeta: "Εγκατάσταση · 9:38",
      video: "https://www.youtube.com/embed/2XJvWmfJWwk",
      youtube: "https://youtu.be/2XJvWmfJWwk",
      intro: "Κατέβασε το αρχείο εγκατάστασης, άνοιξέ το στον υπολογιστή της επιχείρησης και έλεγξε ότι το POSPal ξεκινά κανονικά.",
      downloadFocus: true,
    },
    {
      slug: "app-tour",
      url: "/guides/app-tour/",
      title: "Πρώτη χρήση του POSPal",
      shortTitle: "Πρώτη χρήση",
      duration: "8:36",
      navMeta: "Μενού και παραγγελίες · 8:36",
      video: "https://www.youtube.com/embed/POZUAfynPYE",
      youtube: "https://youtu.be/POZUAfynPYE",
      intro: "Σύνδεσε το κινητό, καταχώρισε μια παραγγελία και δες πώς διαχειρίζεσαι προϊόντα, τραπέζια και πληρωμές.",
    },
    {
      slug: "settings",
      url: "/guides/settings/",
      title: "Ρυθμίσεις του POSPal",
      shortTitle: "Ρυθμίσεις POSPal",
      duration: "14:40",
      navMeta: "Εκτυπωτές και συσκευές · 14:40",
      video: "https://www.youtube.com/embed/IY2f3hRGlH8",
      youtube: "https://youtu.be/IY2f3hRGlH8",
      intro: "Δες τις βασικές ρυθμίσεις της εφαρμογής, όπως εκτυπωτές, συσκευή, λειτουργίες, αποδείξεις και επιλογές διαχείρισης.",
    },
    {
      slug: "qr-menu",
      url: "/guides/qr-menu/",
      title: "Δημιουργία και δημοσίευση QR menu στο POSPal",
      shortTitle: "QR menu",
      duration: "13:37",
      navMeta: "Δημιουργία και δημοσίευση · 13:37",
      video: "https://www.youtube.com/embed/AvokJphL4zk",
      youtube: "https://youtu.be/AvokJphL4zk",
      intro: "Ρύθμισε την εμφάνιση και τις πληροφορίες προϊόντων, δημοσίευσε το QR menu και κατέβασε τον κωδικό QR.",
    },
    {
      slug: "account",
      url: "/guides/account/",
      title: "Διαχείριση λογαριασμού, συνδρομής και άδειας POSPal",
      shortTitle: "Λογαριασμός",
      duration: "6:18",
      navMeta: "Συνδρομή, άδεια και πληρωμές · 6:18",
      video: "https://www.youtube.com/embed/TVMczUWJVpk",
      youtube: "https://youtu.be/TVMczUWJVpk",
      intro: "Έλεγξε την άδεια και την επόμενη χρέωση, διαχειρίσου τη συνδρομή και δες πώς μεταφέρεται η άδεια σε άλλον υπολογιστή.",
    },
    {
      slug: "troubleshooting",
      url: "/guides/troubleshooting/",
      title: "Αντιμετώπιση προβλημάτων και σύνδεσης κινητού στο POSPal",
      shortTitle: "Λύση προβλημάτων",
      duration: "5:08",
      navMeta: "Αναφορά και σύνδεση κινητού · 5:08",
      video: "https://www.youtube.com/embed/VaTsP1x8gWk",
      youtube: "https://youtu.be/VaTsP1x8gWk",
      intro: "Στείλε αναφορά προβλήματος, έλεγξε τη διεύθυνση σύνδεσης του κινητού και δες πότε ένα VPN μπορεί να επηρεάζει το τοπικό δίκτυο.",
    },
  ];

  const legacyMap = {
    "0": "/guides/printer-setup/",
    "1": "/guides/windows-installation/",
    "2": "/guides/app-tour/",
    "3": "/guides/settings/",
    "4": "/guides/qr-menu/",
    "5": "/guides/account/",
    "6": "/guides/troubleshooting/",
  };

  const params = new URLSearchParams(window.location.search);
  const legacyLesson = params.get("lesson");
  if (legacyLesson && legacyMap[legacyLesson]) {
    window.location.replace(legacyMap[legacyLesson]);
    return;
  }

  const requestedGuide = params.get("guide");
  if (requestedGuide === "printer-setup") {
    window.location.replace("/guides/printer-setup/");
    return;
  }

  if (requestedGuide === "windows-installation") {
    window.location.replace("/guides/windows-installation/");
    return;
  }

  if (requestedGuide === "app-tour") {
    window.location.replace("/guides/app-tour/");
    return;
  }

  if (requestedGuide === "settings") {
    window.location.replace("/guides/settings/");
    return;
  }

  if (requestedGuide === "qr-menu") {
    window.location.replace("/guides/qr-menu/");
    return;
  }

  if (requestedGuide === "account") {
    window.location.replace("/guides/account/");
    return;
  }

  if (requestedGuide === "troubleshooting") {
    window.location.replace("/guides/troubleshooting/");
    return;
  }

  // The clean /guides/ URL is the static catalogue. Query URLs remain available
  // only as a backwards-compatible bridge until each guide has its own page.
  if (!requestedGuide) return;

  const app = document.getElementById("academy-app");
  if (!app) return;

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
    return guides.map((guide, index) => {
      const position = index + 1;
      const isCurrent = guide.slug === current.slug;
      const navMeta = guide.navMeta || (guide.duration === "Βίντεο" ? "Οδηγός βίντεο" : `Βίντεο · ${guide.duration}`);

      return `
      <li class="${guide.slug === current.slug ? "is-current" : ""}">
        <a href="${guide.url}" aria-label="Βίντεο ${position} από ${guides.length}: ${escapeText(guide.shortTitle)}. ${escapeText(navMeta)}"${isCurrent ? ' aria-current="page"' : ""}>
          <b>${String(position).padStart(2, "0")}</b>
          <span>${escapeText(guide.shortTitle)}</span>
          <small>${escapeText(navMeta)}</small>
        </a>
      </li>
    `;
    }).join("");
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

  requestAnimationFrame(() => {
    const guideList = app.querySelector(".academy-guide-list");
    const currentGuide = guideList?.querySelector(".is-current");
    if (!guideList || !currentGuide) return;

    guideList.scrollLeft =
      currentGuide.offsetLeft - (guideList.clientWidth - currentGuide.clientWidth) / 2;
  });
})();
