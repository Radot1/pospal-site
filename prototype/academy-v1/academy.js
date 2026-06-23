(() => {
  const storageKey = "pospal-academy-v1-complete";
  const availableLessons = ["printer-setup", "windows-installation"];

  const readCompleted = () => {
    try {
      return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
    } catch (_error) {
      return new Set();
    }
  };

  const writeCompleted = (completed) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify([...completed]));
    } catch (_error) {
      return false;
    }
    return true;
  };

  const completed = readCompleted();
  const completionButtons = document.querySelectorAll("[data-complete-lesson]");
  const status = document.querySelector("[data-completion-status]");

  const updateProgress = () => {
    document.querySelectorAll("[data-lesson-card]").forEach((card) => {
      const lesson = card.getAttribute("data-lesson-card");
      card.classList.toggle("is-complete", completed.has(lesson));
    });

    const completeCount = availableLessons.filter((lesson) => completed.has(lesson)).length;
    const percent = Math.round((completeCount / availableLessons.length) * 100);
    const bar = document.querySelector("[data-progress-bar]");
    const summary = document.querySelector("[data-progress-summary]");
    if (bar) bar.style.transform = `scaleX(${percent / 100})`;
    if (summary) {
      summary.textContent = completeCount === 0
        ? "Η πρόοδος αποθηκεύεται σε αυτόν τον browser."
        : `${completeCount} από ${availableLessons.length} διαθέσιμα μαθήματα ολοκληρώθηκαν.`;
    }

    completionButtons.forEach((button) => {
      const lesson = button.getAttribute("data-complete-lesson");
      const isComplete = completed.has(lesson);
      button.textContent = isComplete ? "Ολοκληρώθηκε" : "Σήμανση ως ολοκληρωμένο";
      button.setAttribute("aria-pressed", String(isComplete));
    });

    if (status) {
      const current = document.querySelector("[data-current-lesson]")?.getAttribute("data-current-lesson");
      status.textContent = current && completed.has(current)
        ? "Το μάθημα έχει σημειωθεί ως ολοκληρωμένο σε αυτόν τον browser."
        : "";
    }
  };

  completionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lesson = button.getAttribute("data-complete-lesson");
      if (completed.has(lesson)) completed.delete(lesson);
      else completed.add(lesson);
      writeCompleted(completed);
      updateProgress();
    });
  });

  updateProgress();
})();
