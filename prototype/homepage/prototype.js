(function () {
  var variants = [
    { key: "A", name: "Η διαδρομή της παραγγελίας" },
    { key: "B", name: "Η καθοδηγούμενη εγκατάσταση" },
    { key: "C", name: "Η άμεση προσφορά" }
  ];

  var params = new URLSearchParams(window.location.search);
  var requested = (params.get("variant") || "A").toUpperCase();
  var currentIndex = Math.max(0, variants.findIndex(function (item) { return item.key === requested; }));
  var label = document.getElementById("variant-label");
  var switcher = document.getElementById("prototype-switcher");
  var skipLink = document.querySelector(".skip-link");

  function loadFrames(panel) {
    panel.querySelectorAll("iframe[data-src]").forEach(function (frame) {
      if (!frame.getAttribute("src")) {
        frame.setAttribute("src", frame.dataset.src);
      }
    });
  }

  function renderVariant(replaceHistory) {
    var current = variants[currentIndex];
    document.body.dataset.variant = current.key;

    document.querySelectorAll("[data-variant-panel]").forEach(function (panel) {
      var active = panel.dataset.variantPanel === current.key;
      panel.hidden = !active;
      if (active) {
        loadFrames(panel);
        panel.setAttribute("tabindex", "-1");
      }
    });

    label.textContent = current.key + " — " + current.name;
    skipLink.setAttribute("href", "#variant-" + current.key.toLowerCase());
    document.title = "POSPal Prototype " + current.key + " | " + current.name;

    var nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("variant", current.key);
    if (replaceHistory) {
      window.history.replaceState({ variant: current.key }, "", nextUrl);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function cycle(direction) {
    currentIndex = (currentIndex + direction + variants.length) % variants.length;
    renderVariant(true);
  }

  document.getElementById("variant-prev").addEventListener("click", function () { cycle(-1); });
  document.getElementById("variant-next").addEventListener("click", function () { cycle(1); });

  document.addEventListener("keydown", function (event) {
    var tag = event.target && event.target.tagName;
    var editing = tag === "INPUT" || tag === "TEXTAREA" || (event.target && event.target.isContentEditable);
    if (editing) return;
    if (event.key === "ArrowLeft") cycle(-1);
    if (event.key === "ArrowRight") cycle(1);
  });

  window.addEventListener("popstate", function () {
    var next = new URLSearchParams(window.location.search).get("variant") || "A";
    var index = variants.findIndex(function (item) { return item.key === next.toUpperCase(); });
    currentIndex = index < 0 ? 0 : index;
    renderVariant(false);
  });

  if (window.location.hostname === "pospal.gr" || window.location.hostname === "www.pospal.gr") {
    switcher.hidden = true;
  }

  renderVariant(true);
})();
