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
  ];

  const legacyMap = {
    "0": "/guides/?guide=printer-setup",
    "1": "/guides/?guide=windows-installation",
    "2": "/guides/",
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
    return guides.map((guide) => `
      <li class="${guide.slug === current.slug ? "is-current" : ""}">
        <a href="${guide.url}"${guide.slug === current.slug ? ' aria-current="page"' : ""}>
          <span>${escapeText(guide.shortTitle)}</span>
          <small>Βίντεο · ${escapeText(guide.duration)}</small>
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
          ${next ? `<a class="academy-action-primary" href="${next.url}">Συνέχεια στην εγκατάσταση</a>` : ""}
        </nav>
      </section>
    </div>
  `;
})();
