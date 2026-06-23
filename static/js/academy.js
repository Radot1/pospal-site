(() => {
  const lessons = [
    {
      slug: "printer-setup",
      url: "/guides/printer-setup/",
      module: "Ξεκίνα εδώ",
      title: "Τι χρειάζεσαι πριν εγκαταστήσεις το POSPal",
      shortTitle: "Προετοιμασία εξοπλισμού",
      step: "Μάθημα 1 από 4",
      state: "available",
      duration: "6 λεπτά",
      video: "https://www.youtube.com/embed/p0FNRfv0vVo",
      youtube: "https://youtu.be/p0FNRfv0vVo",
      intro: "Δες πρώτα τον υπολογιστή, τον εκτυπωτή, το τοπικό δίκτυο και τις συσκευές που θα χρησιμοποιήσει η ομάδα.",
      checkpoint: "Ο υπολογιστής Windows, ο εκτυπωτής και οι συσκευές προσωπικού είναι έτοιμα για την εγκατάσταση.",
      primaryAction: "Συνέχισε στην εγκατάσταση",
    },
    {
      slug: "windows-installation",
      url: "/guides/windows-installation/",
      module: "Ξεκίνα εδώ",
      title: "Εγκατάσταση POSPal σε Windows",
      shortTitle: "Εγκατάσταση σε Windows",
      step: "Μάθημα 2 από 4",
      state: "available",
      duration: "8 λεπτά",
      video: "https://www.youtube.com/embed/2XJvWmfJWwk",
      youtube: "https://youtu.be/2XJvWmfJWwk",
      intro: "Κατέβασε το αρχείο εγκατάστασης, άνοιξέ το στον υπολογιστή της επιχείρησης και έλεγξε ότι το POSPal ξεκινά κανονικά.",
      checkpoint: "Το POSPal έχει εγκατασταθεί και ανοίγει στον υπολογιστή Windows της επιχείρησης.",
      primaryAction: "Συνέχισε στη σύνδεση συσκευής",
      downloadFocus: true,
    },
    {
      slug: "connect-staff-devices",
      url: "/guides/connect-staff-devices/",
      module: "Ξεκίνα εδώ",
      title: "Σύνδεση κινητού ή tablet προσωπικού",
      shortTitle: "Σύνδεση συσκευών",
      step: "Μάθημα 3 από 4",
      state: "soon",
      duration: "Σύντομα",
      intro: "Αυτό το μάθημα θα καλύψει τη σύνδεση κινητού ή tablet στο ίδιο τοπικό δίκτυο με τον υπολογιστή POSPal.",
      checkpoint: "Η συσκευή προσωπικού θα μπορεί να ανοίξει τη ροή παραγγελιοληψίας.",
      primaryAction: "Πίσω στους οδηγούς",
    },
    {
      slug: "test-order",
      url: "/guides/test-order/",
      module: "Ξεκίνα εδώ",
      title: "Πρώτη δοκιμαστική παραγγελία",
      shortTitle: "Δοκιμαστική παραγγελία",
      step: "Μάθημα 4 από 4",
      state: "soon",
      duration: "Σύντομα",
      intro: "Αυτό το μάθημα θα δείξει την πρώτη ασφαλή δοκιμή πριν χρησιμοποιήσεις το POSPal σε πραγματική βάρδια.",
      checkpoint: "Μία δοκιμαστική παραγγελία περνά σωστά από τη συσκευή προς τη ροή εργασίας.",
      primaryAction: "Πίσω στους οδηγούς",
    },
  ];

  const plannedModules = [
    ["Κατάλογος και προϊόντα", ["Κατηγορίες", "Προϊόντα", "Τιμές", "Αλλαγές πριν τη βάρδια"]],
    ["QR μενού", ["Εμφάνιση QR μενού", "Έλεγχος σε κινητό", "Κοινή χρήση QR", "Συνηθισμένα λάθη"]],
    ["Παραγγελιοληψία στη βάρδια", ["Λειτουργία τραπεζιών", "Απλή λειτουργία", "Χρήση από σερβιτόρο", "Ροή κουζίνας"]],
    ["Εξοπλισμός και σύνδεση", ["Υπολογιστής Windows", "Τοπικό δίκτυο", "Θερμικός εκτυπωτής", "Συσκευές προσωπικού"]],
    ["Λογαριασμός και υποστήριξη", ["Συνδρομή", "Ακύρωση", "Τι να στείλεις στην υποστήριξη", "Τι δεν είναι το POSPal"]],
  ];

  const legacyMap = {
    "0": "/guides/printer-setup/",
    "1": "/guides/windows-installation/",
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

  const liveRegion = document.createElement("div");
  liveRegion.className = "sr-only";
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.setAttribute("aria-atomic", "true");
  app.insertAdjacentElement("beforebegin", liveRegion);

  const currentSlug = app.closest("[data-academy-current]")?.dataset.academyCurrent || lessons[0].slug;
  const currentIndex = Math.max(0, lessons.findIndex((lesson) => lesson.slug === currentSlug));
  const current = lessons[currentIndex] || lessons[0];
  const availableLessons = lessons.filter((lesson) => lesson.state === "available");
  const storagePrefix = "pospal-academy-complete:";

  function isComplete(slug) {
    try {
      return localStorage.getItem(storagePrefix + slug) === "true";
    } catch (error) {
      return false;
    }
  }

  function setComplete(slug, value) {
    try {
      localStorage.setItem(storagePrefix + slug, String(value));
    } catch (error) {
      return;
    }
  }

  function completeCount() {
    return availableLessons.filter((lesson) => isComplete(lesson.slug)).length;
  }

  function escapeText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function lessonRail() {
    return lessons.map((lesson) => {
      const currentClass = lesson.slug === current.slug ? " is-current" : "";
      const done = isComplete(lesson.slug);
      const doneClass = done ? " is-complete" : "";
      const soonClass = lesson.state === "soon" ? " is-soon" : "";
      const meta = lesson.state === "soon"
        ? "Σύντομα"
        : `${done ? "Ολοκληρωμένο · " : ""}Βίντεο · ${lesson.duration}`;
      const content = `
        <span class="academy-video-dot" aria-hidden="true"></span>
        <span class="academy-lesson-copy">
          <strong>${escapeText(lesson.shortTitle)}</strong>
          <small>${escapeText(meta)}</small>
        </span>
      `;

      if (lesson.state === "soon") {
        return `
          <li class="${(currentClass + soonClass).trim()}">
            <span aria-disabled="true"${lesson.slug === current.slug ? ' aria-current="page"' : ""}>
              ${content}
            </span>
          </li>
        `;
      }

      return `
        <li class="${(currentClass + doneClass).trim()}">
          <a href="${lesson.url}"${lesson.slug === current.slug ? ' aria-current="page"' : ""}>
            ${content}
          </a>
        </li>
      `;
    }).join("");
  }

  function plannedModuleRail() {
    return plannedModules.map(([moduleName, items]) => `
      <details class="academy-lesson-group">
        <summary>${escapeText(moduleName)} <span>Σύντομα</span></summary>
        <ol class="academy-lesson-rail academy-compact-rail">
          ${items.map((item) => `
            <li class="is-soon">
              <span>
                <span class="academy-video-dot" aria-hidden="true"></span>
                <span class="academy-lesson-copy">
                  <strong>${escapeText(item)}</strong>
                  <small>Σύντομα</small>
                </span>
              </span>
            </li>
          `).join("")}
        </ol>
      </details>
    `).join("");
  }

  function playerMarkup() {
    if (current.state === "soon") {
      return `
        <div class="academy-soon-panel" role="status">
          <span aria-hidden="true"></span>
          <h2>Το μάθημα ετοιμάζεται.</h2>
          <p>Η διαδρομή φαίνεται από τώρα για να ξέρεις τι ακολουθεί, αλλά αυτή η ενότητα δεν είναι ακόμα διαθέσιμη ως βίντεο.</p>
        </div>
      `;
    }

    return `
      <div class="academy-video-stage">
        <iframe
          src="${current.video}"
          title="${escapeText(current.title)}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `;
  }

  function nextLesson() {
    return lessons[currentIndex + 1] || null;
  }

  function previousLesson() {
    return lessons[currentIndex - 1] || null;
  }

  function render(focusTarget) {
    const done = isComplete(current.slug);
    const progress = completeCount();
    const progressPercent = Math.round((progress / availableLessons.length) * 100);
    const next = nextLesson();
    const previous = previousLesson();

    app.innerHTML = `
      <header class="academy-topbar">
        <a class="academy-brand" href="/" aria-label="POSPal αρχική">
          <img src="/app_icon.ico" width="34" height="34" alt="">
          <span translate="no">POS<b>Pal</b> Academy</span>
        </a>
        <div class="academy-topbar-context" aria-label="Τρέχουσα διαδρομή">
          <span>Οδηγοί</span>
          <strong>Πρώτη εγκατάσταση</strong>
        </div>
        <nav aria-label="Ενέργειες οδηγών">
          <a href="/support.html">Υποστήριξη</a>
          <a class="academy-topbar-primary" href="/download/">Κατέβασε για Windows</a>
        </nav>
      </header>

      <div class="academy-shell">
        <aside class="academy-sidebar" id="academy-lessons" aria-labelledby="academy-course-title">
          <div class="academy-sidebar-heading">
            <p>POSPal Academy</p>
            <h2 id="academy-course-title">Πρώτη εγκατάσταση</h2>
            <div class="academy-course-progress">
              <span
                role="progressbar"
                aria-label="Πρόοδος διαθέσιμων μαθημάτων"
                aria-valuemin="0"
                aria-valuemax="${availableLessons.length}"
                aria-valuenow="${progress}"
                aria-valuetext="${progress} από ${availableLessons.length} διαθέσιμα μαθήματα ολοκληρωμένα"
              ><b style="width:${progressPercent}%"></b></span>
              <small id="academy-progress-text">${progress} από ${availableLessons.length} διαθέσιμα μαθήματα ολοκληρωμένα</small>
            </div>
          </div>
          <nav aria-label="Περιεχόμενα Academy">
            <details class="academy-lesson-group" open>
              <summary>Ξεκίνα εδώ</summary>
              <ol class="academy-lesson-rail">
                ${lessonRail()}
              </ol>
            </details>
            ${plannedModuleRail()}
          </nav>
        </aside>

        <section class="academy-theatre" aria-labelledby="academy-title">
          <div class="academy-title-row">
            <div>
              <p class="academy-kicker">${escapeText(current.step)} · ${escapeText(current.module)}</p>
              <h1 id="academy-title">${escapeText(current.title)}</h1>
              <p class="academy-intro">${escapeText(current.intro)}</p>
            </div>
            <button
              class="academy-mark-button"
              type="button"
              data-academy-complete
              aria-pressed="${done}"
              aria-describedby="academy-completion-status"
              ${current.state === "soon" ? "disabled" : ""}
            >
              ${done ? "Ολοκληρώθηκε" : "Σήμανση ολοκλήρωσης"}
            </button>
          </div>

          <div class="academy-player" aria-label="${current.state === "soon" ? "Κατάσταση μαθήματος" : "Βίντεο μαθήματος"}">
            ${playerMarkup()}
          </div>

          <div class="academy-checkpoint">
            <span aria-hidden="true"></span>
            <div>
              <strong>${current.state === "soon" ? "Θα ολοκληρωθεί όταν" : "Ολοκληρώνεις όταν"}</strong>
              <p>${escapeText(current.checkpoint)}</p>
            </div>
          </div>

          <footer class="academy-underbar">
            <p id="academy-completion-status" data-academy-status>${done ? "Το μάθημα σημειώθηκε ως ολοκληρωμένο σε αυτόν τον browser." : "Η πρόοδος αποθηκεύεται μόνο σε αυτόν τον browser."}</p>
            <nav aria-label="Πλοήγηση μαθήματος">
              ${previous ? `<a href="${previous.url}">Προηγούμενο</a>` : `<a href="/guides/">Αρχή οδηγών</a>`}
              ${current.downloadFocus ? `<a class="academy-underbar-strong" href="/download/">Κατέβασε για Windows</a>` : ""}
              ${current.state === "available" && current.youtube ? `<a href="${current.youtube}" target="_blank" rel="noopener">Άνοιγμα στο YouTube</a>` : ""}
              ${next && next.state === "available" ? `<a class="academy-underbar-strong" href="${next.url}">${escapeText(current.primaryAction)}</a>` : `<a class="academy-underbar-strong" href="/guides/">Πίσω στους οδηγούς</a>`}
            </nav>
          </footer>
        </section>
      </div>
    `;

    const completeButton = app.querySelector("[data-academy-complete]");
    const status = app.querySelector("[data-academy-status]");
    if (completeButton && current.state !== "soon") {
      completeButton.addEventListener("click", () => {
        const nextValue = !isComplete(current.slug);
        setComplete(current.slug, nextValue);
        completeButton.textContent = nextValue ? "Ολοκληρώθηκε" : "Σήμανση ολοκλήρωσης";
        completeButton.setAttribute("aria-pressed", String(nextValue));
        if (status) {
          status.textContent = nextValue
            ? "Το μάθημα σημειώθηκε ως ολοκληρωμένο σε αυτόν τον browser."
            : "Η σήμανση ολοκλήρωσης αφαιρέθηκε.";
        }
        liveRegion.textContent = status ? status.textContent : "";
        render("complete-button");
      });
    }

    if (focusTarget === "complete-button") {
      const nextButton = app.querySelector("[data-academy-complete]");
      if (nextButton) nextButton.focus({ preventScroll: true });
    }
  }

  render();
})();
