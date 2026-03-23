(function () {
  var STORAGE_KEY = "pospal_guides_journey_v1";
  var ROOT_SELECTOR = "[data-journey-root]";
  var STEP_SELECTOR = "[data-step-node][data-step-id]";

  var GA_EVENT_VERSION =
    (window.POSPAL_GA_CONTEXT && window.POSPAL_GA_CONTEXT.event_version) || "v1.1";
  var PAGE_TYPE =
    (window.POSPAL_GA_CONTEXT && window.POSPAL_GA_CONTEXT.page_type) || "guides";

  var storageEnabled = canUseStorage();
  var state = loadState();

  function safeJsonParse(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function canUseStorage() {
    try {
      var testKey = "__pospal_storage_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  function loadState() {
    if (!storageEnabled) {
      return {
        completed: {},
        updated_at: "",
      };
    }

    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        completed: {},
        updated_at: "",
      };
    }

    var parsed = safeJsonParse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {
        completed: {},
        updated_at: "",
      };
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
      // Fail quietly: page should still work without storage persistence.
    }
  }

  function getSteps() {
    var nodes = Array.prototype.slice.call(
      document.querySelectorAll(STEP_SELECTOR)
    );

    return nodes
      .map(function (node) {
        var order = Number(node.getAttribute("data-step-order") || "0");
        var id = node.getAttribute("data-step-id") || "";
        var level = node.getAttribute("data-step-level") || "";
        var href = node.getAttribute("data-step-link") || "";

        return {
          id: id,
          order: Number.isFinite(order) ? order : 0,
          level: level,
          href: href,
          node: node,
        };
      })
      .filter(function (step) {
        return step.id && step.order > 0;
      })
      .sort(function (a, b) {
        return a.order - b.order;
      });
  }

  function getLevelBuckets(steps) {
    return {
      beginner: steps.filter(function (step) {
        return step.level === "beginner";
      }),
      advanced: steps.filter(function (step) {
        return step.level === "advanced";
      }),
      expert: steps.filter(function (step) {
        return step.level === "expert";
      }),
    };
  }

  function levelComplete(steps) {
    return (
      steps.length > 0 &&
      steps.every(function (step) {
        return !!state.completed[step.id];
      })
    );
  }

  function getNextStep(steps) {
    for (var i = 0; i < steps.length; i += 1) {
      if (!state.completed[steps[i].id]) {
        return steps[i];
      }
    }
    return null;
  }

  function updateProgress(steps) {
    var completedCount = steps.filter(function (step) {
      return !!state.completed[step.id];
    }).length;

    var total = steps.length || 1;
    var percent = Math.round((completedCount / total) * 100);

    var countTargets = document.querySelectorAll("[data-progress-count]");
    countTargets.forEach(function (el) {
      el.textContent =
        String(completedCount) + "/" + String(steps.length) + " βήματα ολοκληρωμένα";
    });

    var fillTargets = document.querySelectorAll("[data-progress-percent]");
    fillTargets.forEach(function (el) {
      el.style.width = String(percent) + "%";
      el.setAttribute("aria-valuenow", String(percent));
    });

    var ringTargets = document.querySelectorAll("[data-progress-ring]");
    ringTargets.forEach(function (el) {
      el.style.setProperty("--progress", String(percent));
    });

    var percentTextTargets = document.querySelectorAll("[data-progress-text]");
    percentTextTargets.forEach(function (el) {
      el.textContent = String(percent) + "%";
    });
  }

  function updateLevelStates(steps) {
    var buckets = getLevelBuckets(steps);

    var beginnerDone = levelComplete(buckets.beginner);
    var advancedDone = levelComplete(buckets.advanced);
    var expertDone = levelComplete(buckets.expert);

    var unlocked = {
      beginner: true,
      advanced: beginnerDone,
      expert: advancedDone,
    };

    var columns = document.querySelectorAll("[data-level-container]");
    columns.forEach(function (column) {
      var level = column.getAttribute("data-level") || "";
      var complete =
        level === "beginner"
          ? beginnerDone
          : level === "advanced"
            ? advancedDone
            : level === "expert"
              ? expertDone
              : false;

      column.setAttribute("data-level-complete", complete ? "true" : "false");
      column.setAttribute(
        "data-level-dimmed",
        !complete && !unlocked[level] ? "true" : "false"
      );
    });

    return unlocked;
  }

  function updateStepStates(steps, unlocked, nextStep) {
    steps.forEach(function (step) {
      var isComplete = !!state.completed[step.id];
      var isNext = !!nextStep && nextStep.id === step.id;
      var isDimmed = !isComplete && !unlocked[step.level];

      step.node.classList.toggle("is-complete", isComplete);
      step.node.classList.toggle("is-next", isNext);
      step.node.classList.toggle("is-dimmed", isDimmed);

      var stateEl = step.node.querySelector("[data-step-state]");
      if (stateEl) {
        if (isComplete) {
          stateEl.textContent = "Ολοκληρώθηκε";
        } else if (isNext) {
          stateEl.textContent = "Επόμενο";
        } else if (isDimmed) {
          stateEl.textContent = "Κλειδωμένο";
        } else {
          stateEl.textContent = "Εκκρεμεί";
        }
      }

      var toggleEl = step.node.querySelector("[data-step-toggle]");
      if (toggleEl) {
        toggleEl.setAttribute("aria-pressed", isComplete ? "true" : "false");
        toggleEl.textContent = isComplete ? "Αναίρεση" : "Ολοκληρώθηκε";
      }
    });
  }

  function updateMission(nextStep, allComplete) {
    var levelEl = document.querySelector("[data-mission-level]");
    var titleEl = document.querySelector("[data-mission-title]");
    var timeEl = document.querySelector("[data-mission-time]");
    var completeEl = document.querySelector("[data-mission-complete]");

    if (allComplete) {
      if (completeEl) {
        completeEl.classList.remove("hidden");
      }
      if (levelEl) {
        levelEl.textContent = "Ολοκλήρωση";
      }
      if (titleEl) {
        titleEl.textContent = "Κέρδισες όλη τη διαδρομή";
      }
      if (timeEl) {
        timeEl.textContent = "Μπορείς να ξαναδείς οποιοδήποτε βήμα ή να κάνεις reset.";
      }
      return;
    }

    if (completeEl) {
      completeEl.classList.add("hidden");
    }

    if (!nextStep) {
      return;
    }

    if (levelEl) {
      levelEl.textContent =
        nextStep.level === "beginner"
          ? "Αρχή"
          : nextStep.level === "advanced"
            ? "Προχωρημένο"
            : "Εξειδικευμένο";
    }

    if (titleEl) {
      var linkEl = nextStep.node.querySelector("[data-step-link]");
      titleEl.textContent = linkEl ? linkEl.textContent.trim() : "Επόμενο βήμα";
    }

    if (timeEl) {
      var timeText =
        nextStep.level === "beginner"
          ? "Εκτιμώμενος χρόνος: 10-15 λεπτά."
          : nextStep.level === "advanced"
            ? "Εκτιμώμενος χρόνος: 7-12 λεπτά."
            : "Εκτιμώμενος χρόνος: 10-20 λεπτά.";
      timeEl.textContent = timeText;
    }
  }

  function updateNextCtas(nextStep, allComplete) {
    var ctas = document.querySelectorAll("[data-journey-next-cta]");

    ctas.forEach(function (cta) {
      var label = cta.getAttribute("data-next-label") || "Συνέχισε";

      if (allComplete || !nextStep) {
        cta.setAttribute("href", "#journey-tree");
        cta.textContent = "Όλα ολοκληρώθηκαν";
        cta.removeAttribute("data-journey-start");
        return;
      }

      cta.setAttribute("href", nextStep.href);
      cta.textContent = label;
      cta.setAttribute("data-journey-start", nextStep.level);
    });
  }

  function sendEvent(name, payload) {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", name, payload);
  }

  function buildBasePayload(source) {
    return {
      page_path: window.location.pathname,
      page_type: PAGE_TYPE,
      event_version: GA_EVENT_VERSION,
      source: source || "unknown",
    };
  }

  function sendStepEvent(eventName, step, source) {
    var payload = buildBasePayload(source);
    payload.step_id = step.id;
    payload.journey_level = step.level;
    payload.step_order = step.order;
    sendEvent(eventName, payload);
  }

  function sendResetEvent(source) {
    var payload = buildBasePayload(source);
    payload.step_id = "";
    payload.journey_level = "";
    payload.step_order = "";
    sendEvent("guide_progress_reset", payload);
  }

  function render() {
    var steps = getSteps();
    if (!steps.length) {
      return;
    }

    var nextStep = getNextStep(steps);
    var unlocked = updateLevelStates(steps);
    updateStepStates(steps, unlocked, nextStep);
    updateProgress(steps);
    updateNextCtas(nextStep, !nextStep);
    updateMission(nextStep, !nextStep);
  }

  function setStepComplete(step, complete, source) {
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
      var linkEl = step.node.querySelector("[data-step-link]");
      if (linkEl) {
        linkEl.addEventListener("click", function () {
          if (!state.completed[step.id]) {
            state.completed[step.id] = true;
            saveState();
            sendStepEvent("guide_step_complete", step, "step_link");
          }
        });
      }

      var toggleEl = step.node.querySelector("[data-step-toggle]");
      if (toggleEl) {
        toggleEl.addEventListener("click", function () {
          var complete = !state.completed[step.id];
          setStepComplete(step, complete, "step_toggle");
        });
      }
    });
  }

  function bindReset() {
    var resetEl = document.querySelector("[data-progress-reset]");
    if (!resetEl) {
      return;
    }

    resetEl.addEventListener("click", function () {
      var confirmed = window.confirm(
        "Θέλεις να καθαρίσεις την πρόοδο και να ξεκινήσεις από την αρχή;"
      );

      if (!confirmed) {
        return;
      }

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
    var root = document.querySelector(ROOT_SELECTOR);
    if (!root) {
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