(function () {
  var STORAGE_KEY = "pospal_guides_curriculum_v1";
  var ROOT_SELECTOR = "[data-curriculum-root]";
  var STEP_SELECTOR = "[data-step-id][data-step-order]";
  var DEV_LOCK_ATTR = "data-ui-state";
  var DEV_LOCK_VALUE = "dev-lock";
  var DEV_LOCK_LABEL = "\u03a3\u03b5 \u03b1\u03bd\u03ac\u03c0\u03c4\u03c5\u03be\u03b7";

  var EVENT_VERSION =
    (window.POSPAL_GA_CONTEXT && window.POSPAL_GA_CONTEXT.event_version) || "v1.1";
  var PAGE_TYPE =
    (window.POSPAL_GA_CONTEXT && window.POSPAL_GA_CONTEXT.page_type) || "guides";

  function canUseStorage() {
    try {
      var key = "__pospal_curriculum_storage_test__";
      window.localStorage.setItem(key, "1");
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  function isDevLockEnabled() {
    var body = document.body;
    return !!(body && body.getAttribute(DEV_LOCK_ATTR) === DEV_LOCK_VALUE);
  }

  function lockAnchor(anchor, label) {
    if (!anchor) {
      return;
    }

    if (!anchor.hasAttribute("data-dev-original-href")) {
      anchor.setAttribute("data-dev-original-href", anchor.getAttribute("href") || "");
    }

    anchor.removeAttribute("href");
    anchor.setAttribute("aria-disabled", "true");
    anchor.setAttribute("tabindex", "-1");
    anchor.classList.add("is-dev-disabled");
    if (label) {
      anchor.textContent = label;
    }

    anchor.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );
  }

  function lockButton(button, label) {
    if (!button) {
      return;
    }

    button.disabled = true;
    button.setAttribute("aria-disabled", "true");
    button.classList.add("is-dev-disabled");
    if (label) {
      button.textContent = label;
    }
  }

  function shouldKeepOriginalLabel(element) {
    return element && element.getAttribute("data-dev-lock-keep-label") === "true";
  }

  function lockStepItems(label) {
    var steps = document.querySelectorAll(".step-item");
    steps.forEach(function (step) {
      step.classList.add("is-dev-step-locked");
      step.setAttribute("data-dev-label", label || DEV_LOCK_LABEL);
      step.setAttribute("aria-disabled", "true");
    });
  }

  function applyDevLockUi() {
    var controls = document.querySelectorAll("a.btn, button.btn, button.step-toggle");
    controls.forEach(function (control) {
      var label = shouldKeepOriginalLabel(control) ? "" : DEV_LOCK_LABEL;
      var tagName = (control.tagName || "").toLowerCase();
      if (tagName === "a") {
        lockAnchor(control, label);
        return;
      }
      lockButton(control, label);
    });
    lockStepItems(DEV_LOCK_LABEL);
  }

  var storageEnabled = canUseStorage();
  var state = loadState();

  function parseJson(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function loadState() {
    if (!storageEnabled) {
      return { completed: {}, updated_at: "" };
    }

    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { completed: {}, updated_at: "" };
    }

    var parsed = parseJson(raw);
    if (!parsed || typeof parsed !== "object") {
      return { completed: {}, updated_at: "" };
    }

    return {
      completed:
        parsed.completed && typeof parsed.completed === "object"
          ? parsed.completed
          : {},
      updated_at: typeof parsed.updated_at === "string" ? parsed.updated_at : "",
    };
  }

  function saveState() {
    state.updated_at = new Date().toISOString();

    if (!storageEnabled) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      // Ignore storage write failures and keep in-memory state.
    }
  }

  function getSteps() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll(STEP_SELECTOR));

    return nodes
      .map(function (node) {
        var id = node.getAttribute("data-step-id") || "";
        var level = node.getAttribute("data-step-level") || "";
        var order = Number(node.getAttribute("data-step-order") || "0");
        var href = node.getAttribute("data-step-link") || "";
        var time = node.getAttribute("data-step-time") || "";

        return {
          id: id,
          level: level,
          order: Number.isFinite(order) ? order : 0,
          href: href,
          time: time,
          node: node,
        };
      })
      .filter(function (step) {
        return !!step.id && step.order >= 0;
      })
      .sort(function (a, b) {
        return a.order - b.order;
      });
  }

  function sendEvent(name, payload) {
    if (typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", name, payload);
  }

  function basePayload(source) {
    return {
      page_path: window.location.pathname,
      page_type: PAGE_TYPE,
      event_version: EVENT_VERSION,
      source: source || "unknown",
    };
  }

  function sendStepEvent(eventName, step, source) {
    var payload = basePayload(source);
    payload.step_id = step.id;
    payload.journey_level = step.level;
    payload.step_order = step.order;
    sendEvent(eventName, payload);
  }

  function sendResetEvent(source) {
    var payload = basePayload(source);
    payload.step_id = "";
    payload.journey_level = "";
    payload.step_order = "";
    sendEvent("guide_progress_reset", payload);
  }

  function isComplete(step) {
    return !!state.completed[step.id];
  }

  function levelComplete(steps, level) {
    var levelSteps = steps.filter(function (step) {
      return step.level === level;
    });
    if (!levelSteps.length) {
      return false;
    }

    return levelSteps.every(function (step) {
      return isComplete(step);
    });
  }

  function nextStep(steps) {
    for (var i = 0; i < steps.length; i += 1) {
      if (!isComplete(steps[i])) {
        return steps[i];
      }
    }
    return null;
  }

  function moduleStatus(level, beginnerDone, advancedDone, complete) {
    if (complete) {
      return "Ολοκληρώθηκε";
    }

    if (level === "advanced" && !beginnerDone) {
      return "Προτείνεται αργότερα";
    }

    if (level === "expert" && !advancedDone) {
      return "Προτείνεται αργότερα";
    }

    return "Σε εξέλιξη";
  }

  function levelLabel(level) {
    if (level === "beginner") {
      return "Αρχή";
    }
    if (level === "advanced") {
      return "Προχωρημένο";
    }
    return "Εξειδικευμένο";
  }

  function updateProgress(steps) {
    var completed = steps.filter(function (step) {
      return isComplete(step);
    }).length;
    var percent = steps.length ? Math.round((completed / steps.length) * 100) : 0;

    var countEls = document.querySelectorAll("[data-progress-count]");
    countEls.forEach(function (el) {
      el.textContent = String(completed) + "/" + String(steps.length) + " ολοκληρωμένα";
    });

    var fillEls = document.querySelectorAll("[data-progress-percent]");
    fillEls.forEach(function (el) {
      el.style.width = String(percent) + "%";
    });
  }

  function updateStepUi(steps, next, unlocked) {
    steps.forEach(function (step) {
      var complete = isComplete(step);
      var isNext = next && next.id === step.id;
      var dimmed = !complete && !unlocked[step.level];

      step.node.classList.toggle("is-complete", complete);
      step.node.classList.toggle("is-next", !!isNext);
      step.node.classList.toggle("is-dimmed", dimmed);

      var stateEl = step.node.querySelector("[data-step-state]");
      if (stateEl) {
        if (complete) {
          stateEl.textContent = "Ολοκληρώθηκε";
        } else if (isNext) {
          stateEl.textContent = "Επόμενο";
        } else if (dimmed) {
          stateEl.textContent = "Προτείνεται αργότερα";
        } else {
          stateEl.textContent = "Εκκρεμεί";
        }
      }

      var toggle = step.node.querySelector("[data-step-toggle]");
      if (toggle) {
        toggle.setAttribute("aria-pressed", complete ? "true" : "false");
        toggle.textContent = complete ? "Αναίρεση" : "Ολοκληρώθηκε";
      }
    });
  }

  function updateModuleUi(steps) {
    var beginnerDone = levelComplete(steps, "beginner");
    var advancedDone = levelComplete(steps, "advanced");
    var expertDone = levelComplete(steps, "expert");

    var unlocked = {
      beginner: true,
      advanced: beginnerDone,
      expert: advancedDone,
    };

    var modules = document.querySelectorAll("[data-module]");
    modules.forEach(function (moduleEl) {
      var level = moduleEl.getAttribute("data-module") || "";
      var complete =
        level === "beginner"
          ? beginnerDone
          : level === "advanced"
            ? advancedDone
            : level === "expert"
              ? expertDone
              : false;
      var dimmed = !complete && !unlocked[level];

      moduleEl.setAttribute("data-module-complete", complete ? "true" : "false");
      moduleEl.setAttribute("data-module-dimmed", dimmed ? "true" : "false");

      var statusEl = moduleEl.querySelector("[data-module-status]");
      if (statusEl) {
        statusEl.textContent = moduleStatus(level, beginnerDone, advancedDone, complete);
      }
    });

    return unlocked;
  }

  function updateMission(next, totalSteps) {
    var total = Number.isFinite(totalSteps) ? totalSteps : 0;
    var levelEl = document.querySelector("[data-mission-level]");
    var titleEl = document.querySelector("[data-mission-title]");
    var timeEl = document.querySelector("[data-mission-time]");
    var completeEl = document.querySelector("[data-mission-complete]");
    var ctaEls = document.querySelectorAll("[data-curriculum-next-cta]");

    if (!next) {
      if (completeEl) {
        completeEl.classList.remove("hidden");
      }
      if (levelEl) {
        levelEl.textContent = "Ολοκλήρωση";
      }
      if (titleEl) {
        titleEl.textContent =
          "Ολοκλήρωσες και τα " + String(total) + " βήματα";
      }
      if (timeEl) {
        timeEl.textContent = "Κάνε επαναφορά προόδου για νέο πέρασμα.";
      }

      ctaEls.forEach(function (cta) {
        cta.setAttribute("href", "#curriculum-root");
        cta.textContent = "Όλα ολοκληρώθηκαν";
        cta.removeAttribute("data-journey-start");
      });
      return;
    }

    if (completeEl) {
      completeEl.classList.add("hidden");
    }
    if (levelEl) {
      levelEl.textContent = levelLabel(next.level);
    }

    if (titleEl) {
      var linkEl = next.node.querySelector("[data-step-link]");
      titleEl.textContent = linkEl ? linkEl.textContent.trim() : "Επόμενο βήμα";
    }

    if (timeEl) {
      timeEl.textContent = "Εκτιμώμενος χρόνος: " + (next.time || "10-15 λεπτά") + ".";
    }

    ctaEls.forEach(function (cta) {
      var label = cta.getAttribute("data-next-label") || "Συνέχισε";
      cta.setAttribute("href", next.href);
      cta.textContent = label;
      cta.setAttribute("data-journey-start", next.level);
    });
  }

  function render() {
    var steps = getSteps();
    var next = nextStep(steps);
    var unlocked = updateModuleUi(steps);
    updateStepUi(steps, next, unlocked);
    updateProgress(steps);
    updateMission(next, steps.length);
  }

  function setComplete(step, complete, source) {
    if (!step || !step.id) {
      return;
    }

    if (complete) {
      state.completed[step.id] = true;
      sendStepEvent("guide_step_complete", step, source);
    } else {
      delete state.completed[step.id];
      sendStepEvent("guide_step_uncomplete", step, source);
    }

    saveState();
    render();
  }

  function bindStepInteractions() {
    var steps = getSteps();

    steps.forEach(function (step) {
      var link = step.node.querySelector("[data-step-link]");
      if (link) {
        link.addEventListener("click", function () {
          if (!isComplete(step)) {
            state.completed[step.id] = true;
            saveState();
            sendStepEvent("guide_step_complete", step, "step_link");
          }
        });
      }

      var toggle = step.node.querySelector("[data-step-toggle]");
      if (toggle) {
        toggle.addEventListener("click", function () {
          setComplete(step, !isComplete(step), "step_toggle");
        });
      }
    });
  }

  function bindReset() {
    var resetBtn = document.querySelector("[data-progress-reset]");
    if (!resetBtn) {
      return;
    }

    resetBtn.addEventListener("click", function () {
      state = {
        completed: {},
        updated_at: new Date().toISOString(),
      };
      saveState();
      sendResetEvent("reset_button");
      render();
    });
  }

  function init() {
    if (!document.querySelector(ROOT_SELECTOR)) {
      return;
    }

    if (isDevLockEnabled()) {
      applyDevLockUi();
      return;
    }

    bindStepInteractions();
    bindReset();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
