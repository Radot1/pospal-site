(function () {
  document.body.classList.add("motion-active");

  var route = document.getElementById("productRoute");
  var replay = document.getElementById("routeReplay");
  var routeStatus = document.getElementById("routeStatus");
  var stages = route ? Array.prototype.slice.call(route.querySelectorAll("[data-route-stage]")) : [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var routeTimers = [];

  function clearRouteTimers() {
    while (routeTimers.length) window.clearTimeout(routeTimers.pop());
  }

  function setStage(index) {
    stages.forEach(function (stage, stageIndex) {
      stage.classList.toggle("is-active", stageIndex <= index);
      stage.classList.toggle("is-current", stageIndex === index);
    });
  }

  function finishRoute(announce) {
    setStage(stages.length - 1);
    if (route) route.classList.add("route-complete");
    if (announce && routeStatus) routeStatus.textContent = "Η ενδεικτική διαδρομή ολοκληρώθηκε: σερβιτόρος, POSPal, κουζίνα.";
  }

  function runRoute(announce) {
    if (!route) return;
    clearRouteTimers();
    route.classList.remove("route-running", "route-complete");
    setStage(-1);

    if (reduceMotion.matches) {
      finishRoute(announce);
      return;
    }

    void route.offsetWidth;
    route.classList.add("route-running");
    setStage(0);
    routeTimers.push(window.setTimeout(function () { setStage(1); }, 650));
    routeTimers.push(window.setTimeout(function () { setStage(2); }, 1350));
    routeTimers.push(window.setTimeout(function () { finishRoute(announce); }, 2050));
  }

  if (replay) {
    replay.addEventListener("click", function () {
      runRoute(true);
    });
  }

  if (route) {
    window.requestAnimationFrame(function () {
      runRoute(false);
    });
  }

  var shiftClock = document.getElementById("shiftClock");
  function updateClock() {
    if (!shiftClock) return;
    shiftClock.textContent = new Intl.DateTimeFormat("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(new Date());
  }
  updateClock();
  window.setInterval(updateClock, 60000);

  var shiftSteps = Array.prototype.slice.call(document.querySelectorAll("[data-shift-step]"));
  var shiftLabel = document.getElementById("shiftLabel");
  var shiftCount = document.getElementById("shiftCount");
  var shiftProgress = document.getElementById("shiftProgress");

  function activateShiftStep(step) {
    var index = shiftSteps.indexOf(step);
    if (index < 0) return;
    if (shiftLabel) shiftLabel.textContent = step.getAttribute("data-shift-label") || "POSPAL";
    if (shiftCount) shiftCount.textContent = String(index + 1).padStart(2, "0") + " / " + String(shiftSteps.length).padStart(2, "0");
    if (shiftProgress) shiftProgress.style.setProperty("--shift-progress", String((index + 1) / shiftSteps.length));
  }

  if ("IntersectionObserver" in window && shiftSteps.length) {
    var shiftObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activateShiftStep(entry.target);
      });
    }, { rootMargin: "-38% 0px -52% 0px", threshold: 0 });
    shiftSteps.forEach(function (step) { shiftObserver.observe(step); });
  }

  var motionTargets = Array.prototype.slice.call(document.querySelectorAll("[data-motion-target]"));
  if ("IntersectionObserver" in window && motionTargets.length && !reduceMotion.matches) {
    var motionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in-view");
        motionObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -18% 0px", threshold: 0.2 });
    motionTargets.forEach(function (target) { motionObserver.observe(target); });
  }

  function handleMotionPreferenceChange() {
    runRoute(false);
  }

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", handleMotionPreferenceChange);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(handleMotionPreferenceChange);
  }
})();
