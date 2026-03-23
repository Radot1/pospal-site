(function () {
  var STORAGE_KEY = "pospal_academy_progress_v2";

  function safeParse(value, fallback) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function defaultState() {
    return {
      started: {},
      completed: {},
      checks: {},
      last_lesson_id: "",
      updated_at: "",
    };
  }

  function loadState() {
    var raw = "";
    try {
      raw = window.localStorage.getItem(STORAGE_KEY) || "";
    } catch (error) {
      return defaultState();
    }

    if (!raw) {
      return defaultState();
    }

    var parsed = safeParse(raw, null);
    if (!parsed || typeof parsed !== "object") {
      return defaultState();
    }

    return {
      started:
        parsed.started && typeof parsed.started === "object" ? parsed.started : {},
      completed:
        parsed.completed && typeof parsed.completed === "object"
          ? parsed.completed
          : {},
      checks: parsed.checks && typeof parsed.checks === "object" ? parsed.checks : {},
      last_lesson_id:
        typeof parsed.last_lesson_id === "string" ? parsed.last_lesson_id : "",
      updated_at: typeof parsed.updated_at === "string" ? parsed.updated_at : "",
    };
  }

  function saveState(state) {
    state.updated_at = nowIso();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      // Ignore write errors.
    }
  }

  function markStarted(state, lessonId) {
    if (!lessonId) {
      return;
    }
    state.started[lessonId] = true;
    state.last_lesson_id = lessonId;
    saveState(state);
  }

  function markCompleted(state, lessonId, completed) {
    if (!lessonId) {
      return;
    }
    if (completed) {
      state.completed[lessonId] = true;
      state.started[lessonId] = true;
      state.last_lesson_id = lessonId;
    } else {
      delete state.completed[lessonId];
    }
    saveState(state);
  }

  function getLessonStatus(state, lessonId) {
    if (!lessonId) {
      return "new";
    }
    if (state.completed[lessonId]) {
      return "completed";
    }
    if (state.started[lessonId]) {
      return "started";
    }
    return "new";
  }

  function setLessonChecks(state, lessonId, checks) {
    if (!lessonId || !checks || typeof checks !== "object") {
      return;
    }
    state.checks[lessonId] = checks;
    saveState(state);
  }

  function getLessonChecks(state, lessonId) {
    if (!lessonId || !state.checks[lessonId]) {
      return {};
    }
    return state.checks[lessonId];
  }

  function resetState() {
    var state = defaultState();
    saveState(state);
    return state;
  }

  window.POSPAL_ACADEMY = {
    loadState: loadState,
    saveState: saveState,
    markStarted: markStarted,
    markCompleted: markCompleted,
    getLessonStatus: getLessonStatus,
    setLessonChecks: setLessonChecks,
    getLessonChecks: getLessonChecks,
    resetState: resetState,
  };
})();
