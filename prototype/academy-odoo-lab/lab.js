(() => {
  const variants = [
    ["classroom", "A — Αίθουσα μαθήματος"],
    ["workbench", "B — Πάγκος εκκίνησης"],
    ["shift", "C — Πίνακας βάρδιας"],
  ];
  const storageKey = "pospal-academy-odoo-lab-complete";
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("variant");
  const variantKeys = variants.map(([key]) => key);
  let current = variantKeys.includes(requested) ? requested : variants[0][0];

  const render = () => {
    document.querySelectorAll("[data-variant]").forEach((section) => {
      section.classList.toggle("is-active", section.getAttribute("data-variant") === current);
    });

    const label = variants.find(([key]) => key === current)?.[1] || current;
    document.querySelector("[data-variant-label]").textContent = label;

    const url = new URL(window.location.href);
    url.searchParams.set("variant", current);
    window.history.replaceState({}, "", url);
  };

  const move = (direction) => {
    const index = variantKeys.indexOf(current);
    current = variantKeys[(index + direction + variantKeys.length) % variantKeys.length];
    render();
  };

  document.querySelector("[data-prev]").addEventListener("click", () => move(-1));
  document.querySelector("[data-next]").addEventListener("click", () => move(1));

  window.addEventListener("keydown", (event) => {
    const target = event.target;
    const isEditing = target instanceof HTMLElement
      && (target.matches("input, textarea") || target.isContentEditable);
    if (isEditing) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });

  const isComplete = () => localStorage.getItem(storageKey) === "true";
  const writeComplete = (value) => localStorage.setItem(storageKey, String(value));

  const updateCompletion = () => {
    const done = isComplete();
    document.querySelectorAll("[data-complete-button]").forEach((button) => {
      button.textContent = done ? "Ολοκληρώθηκε" : button.dataset.defaultText || button.textContent;
      button.setAttribute("aria-pressed", String(done));
    });
    document.querySelectorAll("[data-complete-status]").forEach((status) => {
      status.textContent = done
        ? "Το μάθημα σημειώθηκε ως ολοκληρωμένο σε αυτόν τον browser."
        : status.dataset.defaultText || status.textContent;
    });
  };

  document.querySelectorAll("[data-complete-button]").forEach((button) => {
    button.dataset.defaultText = button.textContent;
    button.addEventListener("click", () => {
      writeComplete(!isComplete());
      updateCompletion();
    });
  });
  document.querySelectorAll("[data-complete-status]").forEach((status) => {
    status.dataset.defaultText = status.textContent;
  });

  render();
  updateCompletion();
})();
