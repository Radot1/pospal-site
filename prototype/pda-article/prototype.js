(() => {
  const variants = [
    { key: "a", label: "A / Equipment Atlas" },
    { key: "b", label: "B / Photo Essay" },
    { key: "c", label: "C / One Order Route" }
  ];

  const pages = [...document.querySelectorAll("[data-prototype-variant]")];
  const label = document.querySelector("#variant-label");
  const controls = [...document.querySelectorAll("[data-direction]")];
  const routeSteps = [...document.querySelectorAll("[data-route-step]")];
  const routePanels = [...document.querySelectorAll("[data-route-panel]")];

  const requested = new URLSearchParams(window.location.search).get("variant")?.toLowerCase();
  let currentIndex = Math.max(0, variants.findIndex((variant) => variant.key === requested));

  function activateRoute(route) {
    routeSteps.forEach((step) => step.classList.toggle("is-active", step.dataset.routeStep === route));
    routePanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.routePanel === route));
  }

  function showVariant(index, updateUrl = true) {
    currentIndex = (index + variants.length) % variants.length;
    const current = variants[currentIndex];

    document.body.dataset.variant = current.key;
    pages.forEach((page) => {
      page.hidden = page.dataset.prototypeVariant !== current.key;
    });
    label.textContent = current.label;
    document.title = `PROTOTYPE ${current.key.toUpperCase()} / PDA τι είναι / POSPal`;

    if (current.key === "c") activateRoute("device");

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("variant", current.key);
      window.history.replaceState({}, "", url);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      showVariant(currentIndex + (control.dataset.direction === "next" ? 1 : -1));
    });
  });

  routeSteps.forEach((step) => {
    step.addEventListener("click", () => activateRoute(step.dataset.routeStep));
  });

  if ("IntersectionObserver" in window) {
    const routeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        if (visible) activateRoute(visible.target.dataset.routeStep);
      },
      { rootMargin: "-28% 0px -48%", threshold: [0.2, 0.55, 0.8] }
    );

    routeSteps.forEach((step) => routeObserver.observe(step));
  }

  window.addEventListener("keydown", (event) => {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.matches("input, textarea, [contenteditable='true']") ||
        target.closest("input, textarea, [contenteditable='true']"))
    ) {
      return;
    }
    if (event.key === "ArrowLeft") showVariant(currentIndex - 1);
    if (event.key === "ArrowRight") showVariant(currentIndex + 1);
  });

  showVariant(currentIndex, false);
})();
