(function () {
  var MEASUREMENT_ID = "G-F851JG8PL6";
  var ADS_ID = "AW-17981190399";
  var CLARITY_ID = "vnzrn7y23s";
  var C15T_ESM_URL = "https://esm.sh/c15t@1.8.3?target=es2020";
  var CONSENT_STORAGE_KEY = "pospal-consent-v1";

  var GA_SCRIPT_ID = "pospal-ga-script";
  var CLARITY_SCRIPT_ID = "pospal-clarity-script";
  var CONSENT_STYLE_ID = "pospal-consent-style";
  var CONSENT_ROOT_ID = "pospal-consent-root";

  var consentStore = null;
  var ui = null;
  var gaLoaded = false;
  var gaConfigured = false;
  var clarityLoaded = false;
  var settingsInjected = false;
  var initializationPromise = null;
  var keydownBound = false;
  var previousBodyOverflow = "";
  var previousFocusedElement = null;

  var consentState = {
    necessary: true,
    measurement: false,
    marketing: false,
  };

  function normalizePathname(pathname) {
    var path = String(pathname || "/").trim().toLowerCase();
    return path || "/";
  }

  function isDemoOrAppPath(pathname) {
    return (
      pathname === "/qr-menu-demo.html"
    );
  }

  function isEmbeddedContext() {
    try {
      return window.self !== window.top;
    } catch (error) {
      return true;
    }
  }

  function getConsentValue(value) {
    return value ? "granted" : "denied";
  }

  function ensureDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        var args = Array.prototype.slice.call(arguments);
        if (args[0] === "event" && !isAnyTrackingAllowed()) {
          return;
        }
        window.dataLayer.push(args);
      };
  }

  function applyConsentDefaults() {
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
  }

  function isAnyTrackingAllowed() {
    return !!consentState.measurement || !!consentState.marketing;
  }

  function onDomReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  }

  function isElementVisible(element) {
    return !!element && !element.classList.contains("pospal-consent-hidden");
  }

  function lockBodyScroll(locked) {
    if (!document.body) {
      return;
    }

    if (locked) {
      if (previousBodyOverflow === "") {
        previousBodyOverflow = document.body.style.overflow || "";
      }
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = previousBodyOverflow;
    previousBodyOverflow = "";
  }

  function getFocusableElements(container) {
    if (!container) {
      return [];
    }
    return Array.prototype.slice
      .call(
        container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      )
      .filter(function (element) {
        return !element.disabled && element.getAttribute("aria-hidden") !== "true";
      });
  }

  function trapFocus(event, container) {
    if (event.key !== "Tab") {
      return;
    }

    var focusable = getFocusableElements(container);
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    var active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function rememberCurrentFocus() {
    previousFocusedElement =
      document.activeElement && typeof document.activeElement.focus === "function"
        ? document.activeElement
        : null;
  }

  function restorePreviousFocus() {
    var target = previousFocusedElement;
    previousFocusedElement = null;
    if (!target || typeof target.focus !== "function") {
      return;
    }
    if (!document.contains(target)) {
      return;
    }
    try {
      target.focus();
    } catch (error) {
      // no-op
    }
  }

  function focusFirstElement(container) {
    var focusable = getFocusableElements(container);
    if (focusable.length) {
      focusable[0].focus();
      return;
    }
    if (container && typeof container.focus === "function") {
      container.focus();
    }
  }

  function setGADisableFlags() {
    window["ga-disable-" + MEASUREMENT_ID] = !consentState.measurement;
    window["ga-disable-" + ADS_ID] = !consentState.marketing;
  }

  function updateGoogleConsentMode() {
    window.gtag("consent", "update", {
      analytics_storage: getConsentValue(consentState.measurement),
      ad_storage: getConsentValue(consentState.marketing),
      ad_user_data: getConsentValue(consentState.marketing),
      ad_personalization: getConsentValue(consentState.marketing),
    });
    setGADisableFlags();
  }

  function ensureGAScriptLoaded() {
    if (gaLoaded) {
      return;
    }

    var existing = document.getElementById(GA_SCRIPT_ID);
    if (existing) {
      gaLoaded = true;
      return;
    }

    var script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(script);
    gaLoaded = true;
  }

  function ensureGAConfigured() {
    if (gaConfigured) {
      return;
    }
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);
    window.gtag("config", ADS_ID);
    gaConfigured = true;
  }

  function ensureClarityLoaded() {
    if (clarityLoaded) {
      return;
    }

    var existing = document.getElementById(CLARITY_SCRIPT_ID);
    if (existing) {
      clarityLoaded = true;
      return;
    }

    window.clarity =
      window.clarity ||
      function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };

    var script = document.createElement("script");
    script.id = CLARITY_SCRIPT_ID;
    script.async = true;
    script.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
    document.head.appendChild(script);
    clarityLoaded = true;
  }

  function stopClarityIfPossible() {
    if (typeof window.clarity !== "function") {
      return;
    }

    try {
      window.clarity("consent", false);
    } catch (error) {
      // no-op
    }

    try {
      window.clarity("stop");
    } catch (error) {
      // no-op
    }
  }

  function applyTrackerGating() {
    updateGoogleConsentMode();

    if (consentState.measurement || consentState.marketing) {
      ensureGAScriptLoaded();
      ensureGAConfigured();
    }

    if (consentState.measurement) {
      ensureClarityLoaded();
    } else {
      stopClarityIfPossible();
    }
  }

  function normalizeConsentState(rawState) {
    return {
      necessary: true,
      measurement: !!(rawState && rawState.measurement),
      marketing: !!(rawState && rawState.marketing),
    };
  }

  function hasConsentDecision() {
    if (!consentStore) {
      return false;
    }

    var state = consentStore.getState();
    if (state && typeof state.hasConsented === "function") {
      try {
        return !!state.hasConsented();
      } catch (error) {
        return !!state.consentInfo;
      }
    }
    return !!(state && state.consentInfo);
  }

  function isConsentStateEqual(left, right) {
    return (
      !!left &&
      !!right &&
      !!left.measurement === !!right.measurement &&
      !!left.marketing === !!right.marketing
    );
  }

  function ensureConsentStyles() {
    if (document.getElementById(CONSENT_STYLE_ID)) {
      return;
    }

    var style = document.createElement("style");
    style.id = CONSENT_STYLE_ID;
    style.textContent =
      "" +
      ".pospal-consent-hidden{display:none!important}" +
      ".pospal-consent-overlay{position:fixed;inset:0;background:rgba(15,23,42,.45);z-index:2147483000}" +
      ".pospal-consent-banner{position:fixed;right:16px;bottom:16px;width:min(520px,calc(100% - 32px));background:#fff;border:1px solid rgba(148,163,184,.35);box-shadow:0 12px 30px rgba(15,23,42,.25);border-radius:14px;padding:14px;z-index:2147483001}" +
      ".pospal-consent-title{margin:0 0 8px;font-size:1rem;font-weight:700;color:#0f172a}" +
      ".pospal-consent-text{margin:0;font-size:.92rem;line-height:1.4;color:#334155}" +
      ".pospal-consent-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}" +
      ".pospal-consent-btn{border:1px solid #cbd5e1;border-radius:999px;padding:8px 14px;font-size:.85rem;font-weight:600;cursor:pointer;background:#fff;color:#0f172a}" +
      ".pospal-consent-btn:hover{background:#f8fafc}" +
      ".pospal-consent-btn-primary{background:#15803d;border-color:#15803d;color:#fff}" +
      ".pospal-consent-btn-primary:hover{background:#166534}" +
      ".pospal-consent-panel{position:fixed;left:16px;right:16px;top:50%;transform:translateY(-50%);max-width:560px;margin:0 auto;background:#fff;border:1px solid rgba(148,163,184,.35);box-shadow:0 14px 32px rgba(15,23,42,.25);border-radius:16px;padding:16px;z-index:2147483002}" +
      ".pospal-consent-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px solid #e2e8f0}" +
      ".pospal-consent-row:last-of-type{border-bottom:0}" +
      ".pospal-consent-row strong{display:block;font-size:.92rem;color:#0f172a}" +
      ".pospal-consent-row span{display:block;margin-top:2px;font-size:.8rem;color:#475569}" +
      ".pospal-consent-switch{width:18px;height:18px;margin-top:2px}" +
      ".pospal-consent-panel-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;margin-top:12px}" +
      ".pospal-cookie-settings-float{position:fixed;left:12px;left:calc(12px + env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:2147482999;border:1px solid #cbd5e1;border-radius:999px;background:#fff;padding:0;width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:#0f172a;cursor:pointer;box-shadow:0 8px 20px rgba(15,23,42,.16)}" +
      ".pospal-cookie-settings-float:hover{background:#f8fafc}" +
      ".pospal-cookie-settings-icon{display:block;width:20px;height:20px}" +
      "@media (max-width:640px){.pospal-consent-banner{left:8px;right:8px;bottom:8px;width:auto;padding:10px;border-radius:12px}.pospal-consent-panel{left:10px;right:10px}.pospal-consent-title{margin-bottom:4px;font-size:.92rem}.pospal-consent-text{font-size:.78rem;line-height:1.32}.pospal-consent-actions{gap:6px;margin-top:10px}.pospal-consent-btn{min-height:38px;padding:7px 10px;font-size:.78rem}.pospal-cookie-settings-float{width:44px;height:44px;bottom:calc(10px + env(safe-area-inset-bottom,0px))}.pospal-cookie-settings-icon{width:18px;height:18px}}";
    document.head.appendChild(style);
  }

  function updateFloatingTriggerVisibility() {
    if (!ui || !ui.floatingTrigger) {
      return;
    }
    var shouldHide = isElementVisible(ui.banner) || isElementVisible(ui.panel);
    ui.floatingTrigger.classList.toggle("pospal-consent-hidden", shouldHide);
  }

  function handleGlobalKeydown(event) {
    if (!ui || !isElementVisible(ui.panel)) {
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closePanel();
      return;
    }
    trapFocus(event, ui.panel);
  }

  function bindGlobalKeyboardHandler() {
    if (keydownBound) {
      return;
    }
    document.addEventListener("keydown", handleGlobalKeydown);
    keydownBound = true;
  }

  function buildConsentUI() {
    if (ui) {
      return ui;
    }

    ensureConsentStyles();

    var root = document.getElementById(CONSENT_ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = CONSENT_ROOT_ID;
      document.body.appendChild(root);
    }

    var overlay = document.createElement("div");
    overlay.className = "pospal-consent-overlay pospal-consent-hidden";

    var banner = document.createElement("section");
    banner.className = "pospal-consent-banner pospal-consent-hidden";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Ρυθμίσεις cookies");
    banner.innerHTML =
      '<h2 class="pospal-consent-title">Χρησιμοποιούμε cookies</h2>' +
      '<p class="pospal-consent-text">Χρησιμοποιούμε cookies για στατιστικά και marketing. Μπορείς να αλλάξεις επιλογές οποιαδήποτε στιγμή.</p>' +
      '<div class="pospal-consent-actions">' +
      '<button type="button" class="pospal-consent-btn pospal-consent-btn-primary" data-pospal-consent-accept>Αποδοχή όλων</button>' +
      '<button type="button" class="pospal-consent-btn" data-pospal-consent-reject>Απόρριψη</button>' +
      '<button type="button" class="pospal-consent-btn" data-pospal-consent-settings>Ρυθμίσεις</button>' +
      "</div>";

    var panel = document.createElement("section");
    panel.className = "pospal-consent-panel pospal-consent-hidden";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", "Ρυθμίσεις cookies");
    panel.setAttribute("tabindex", "-1");
    panel.innerHTML =
      '<h2 class="pospal-consent-title">Ρυθμίσεις cookies</h2>' +
      '<div class="pospal-consent-row">' +
      '<div><strong>Απαραίτητα</strong><span>Απαιτούνται για τη βασική λειτουργία του site.</span></div>' +
      '<input class="pospal-consent-switch" type="checkbox" checked disabled />' +
      "</div>" +
      '<div class="pospal-consent-row">' +
      '<div><strong>Στατιστικά</strong><span>Μέτρηση επισκεψιμότητας και χρήσης.</span></div>' +
      '<input class="pospal-consent-switch" type="checkbox" data-pospal-consent-measurement />' +
      "</div>" +
      '<div class="pospal-consent-row">' +
      '<div><strong>Marketing</strong><span>Διαφημιστικά cookies και δεδομένα διαφήμισης.</span></div>' +
      '<input class="pospal-consent-switch" type="checkbox" data-pospal-consent-marketing />' +
      "</div>" +
      '<div class="pospal-consent-panel-actions">' +
      '<button type="button" class="pospal-consent-btn" data-pospal-consent-cancel>Ακύρωση</button>' +
      '<button type="button" class="pospal-consent-btn pospal-consent-btn-primary" data-pospal-consent-save>Αποθήκευση επιλογών</button>' +
      "</div>";

    root.appendChild(overlay);
    root.appendChild(banner);
    root.appendChild(panel);

    ui = {
      root: root,
      overlay: overlay,
      banner: banner,
      panel: panel,
      measurementInput: panel.querySelector("[data-pospal-consent-measurement]"),
      marketingInput: panel.querySelector("[data-pospal-consent-marketing]"),
      floatingTrigger: null,
    };

    overlay.addEventListener("click", function () {
      closePanel();
    });

    banner
      .querySelector("[data-pospal-consent-accept]")
      .addEventListener("click", function () {
        acceptAllConsents();
      });
    banner
      .querySelector("[data-pospal-consent-reject]")
      .addEventListener("click", function () {
        rejectAllConsents();
      });
    banner
      .querySelector("[data-pospal-consent-settings]")
      .addEventListener("click", function () {
        openSettingsPanel();
      });

    panel
      .querySelector("[data-pospal-consent-cancel]")
      .addEventListener("click", function () {
        closePanel();
      });
    panel
      .querySelector("[data-pospal-consent-save]")
      .addEventListener("click", function () {
        saveCustomConsents();
      });

    bindGlobalKeyboardHandler();
    updateFloatingTriggerVisibility();

    return ui;
  }

  function syncPanelInputs() {
    var built = buildConsentUI();
    built.measurementInput.checked = !!consentState.measurement;
    built.marketingInput.checked = !!consentState.marketing;
  }

  function showBanner(shouldFocus) {
    var built = buildConsentUI();
    syncPanelInputs();
    built.overlay.classList.add("pospal-consent-hidden");
    built.panel.classList.add("pospal-consent-hidden");
    built.banner.classList.remove("pospal-consent-hidden");
    lockBodyScroll(false);
    updateFloatingTriggerVisibility();
    if (shouldFocus) {
      focusFirstElement(built.banner);
    }
  }

  function hideBanner() {
    var built = buildConsentUI();
    built.banner.classList.add("pospal-consent-hidden");
    updateFloatingTriggerVisibility();
  }

  function openSettingsPanel() {
    var built = buildConsentUI();
    if (!isElementVisible(built.panel)) {
      rememberCurrentFocus();
    }
    syncPanelInputs();
    built.banner.classList.add("pospal-consent-hidden");
    built.overlay.classList.remove("pospal-consent-hidden");
    built.panel.classList.remove("pospal-consent-hidden");
    lockBodyScroll(true);
    updateFloatingTriggerVisibility();
    focusFirstElement(built.panel);
  }

  function closePanel(skipBannerFallback) {
    var built = buildConsentUI();
    var wasPanelVisible = isElementVisible(built.panel);
    built.overlay.classList.add("pospal-consent-hidden");
    built.panel.classList.add("pospal-consent-hidden");
    lockBodyScroll(false);
    if (!skipBannerFallback && !hasConsentDecision()) {
      showBanner(true);
      return;
    }
    updateFloatingTriggerVisibility();
    if (wasPanelVisible) {
      restorePreviousFocus();
    }
  }

  function closeConsentUI() {
    hideBanner();
    closePanel(true);
  }

  function acceptAllConsents() {
    if (!consentStore) {
      return;
    }
    consentStore.getState().saveConsents("all");
    closeConsentUI();
  }

  function rejectAllConsents() {
    if (!consentStore) {
      return;
    }
    consentStore.getState().saveConsents("necessary");
    closeConsentUI();
  }

  function saveCustomConsents() {
    if (!consentStore) {
      return;
    }

    var built = buildConsentUI();
    consentStore.getState().setSelectedConsent("measurement", !!built.measurementInput.checked);
    consentStore.getState().setSelectedConsent("marketing", !!built.marketingInput.checked);
    consentStore.getState().saveConsents("custom");
    closeConsentUI();
  }

  function injectSettingsLinkInFooter() {
    if (settingsInjected) {
      return true;
    }

    var footer = document.querySelector("footer");
    if (!footer) {
      return false;
    }

    var existing = footer.querySelector("[data-pospal-cookie-settings]");
    if (existing) {
      settingsInjected = true;
      return true;
    }

    var container =
      footer.querySelector("nav") ||
      footer.querySelector(".flex.flex-wrap") ||
      footer.querySelector(".flex") ||
      footer;

    var link = document.createElement("a");
    link.href = "#cookie-settings";
    link.setAttribute("data-pospal-cookie-settings", "true");
    link.className = "hover:text-slate-900";
    link.textContent = "Ρυθμίσεις cookies";
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.POSPALConsent.openSettings();
    });

    container.appendChild(link);
    settingsInjected = true;
    return true;
  }

  function injectFloatingSettingsButton() {
    var built = buildConsentUI();
    if (built.floatingTrigger || document.querySelector("[data-pospal-cookie-settings-floating]")) {
      return;
    }

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "pospal-cookie-settings-float";
    trigger.setAttribute("data-pospal-cookie-settings-floating", "true");
    trigger.setAttribute("aria-label", "Ρυθμίσεις cookies");
    trigger.setAttribute("title", "Ρυθμίσεις cookies");
    trigger.innerHTML =
      '<svg class="pospal-cookie-settings-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M7.5 3A1.5 1.5 0 0 0 6 4.5c0 .38.14.73.37 1.01A1.5 1.5 0 0 0 5.25 8.4a1.5 1.5 0 0 0-.7 2.68A1.5 1.5 0 0 0 5.5 13.8 1.5 1.5 0 0 0 6.75 16.7 1.5 1.5 0 0 0 9 18.5h.2c.64 0 1.2-.4 1.41-.99.27.16.58.24.89.24h1.2c.31 0 .62-.08.89-.24.21.59.77.99 1.41.99h.2a1.5 1.5 0 0 0 2.25-1.8 1.5 1.5 0 0 0 1.25-2.9 1.5 1.5 0 0 0 .95-2.72 1.5 1.5 0 0 0-.7-2.68 1.5 1.5 0 0 0-1.12-2.89c.23-.28.37-.63.37-1.01A1.5 1.5 0 0 0 16.5 3h-9zM9.75 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>' +
      "</svg>";
    trigger.addEventListener("click", function () {
      window.POSPALConsent.openSettings();
    });

    document.body.appendChild(trigger);
    built.floatingTrigger = trigger;
    updateFloatingTriggerVisibility();
  }

  function ensureSettingsEntryPoint() {
    injectSettingsLinkInFooter();
    injectFloatingSettingsButton();
  }

  function applyConsentState(nextState) {
    consentState = normalizeConsentState(nextState);
    applyTrackerGating();
    syncPanelInputs();
  }

  function exposeGlobalController() {
    window.POSPALConsent = {
      openSettings: function () {
        onDomReady(function () {
          ensureInitialized().then(function () {
            openSettingsPanel();
          });
        });
      },
      openBanner: function () {
        onDomReady(function () {
          ensureInitialized().then(function () {
            showBanner(true);
          });
        });
      },
    };
  }

  function initializeConsentStore(c15t) {
    var manager = c15t.configureConsentManager({
      mode: "offline",
      storageConfig: {
        storageKey: CONSENT_STORAGE_KEY,
      },
    });

    consentStore = c15t.createConsentManagerStore(manager, {
      storageConfig: {
        storageKey: CONSENT_STORAGE_KEY,
      },
      initialGdprTypes: ["necessary", "measurement", "marketing"],
      trackingBlockerConfig: {
        disableAutomaticBlocking: true,
      },
      ignoreGeoLocation: true,
    });

    var initialState = consentStore.getState();
    applyConsentState(initialState.consents);

    if (hasConsentDecision()) {
      closeConsentUI();
    } else {
      showBanner();
    }

    consentStore.subscribe(function (nextStoreState) {
      var nextConsentState = normalizeConsentState(nextStoreState.consents);
      if (!isConsentStateEqual(nextConsentState, consentState)) {
        applyConsentState(nextConsentState);
      }

      if (hasConsentDecision()) {
        closeConsentUI();
      }
    });
  }

  function ensureInitialized() {
    if (initializationPromise) {
      return initializationPromise;
    }

    initializationPromise = import(C15T_ESM_URL)
      .then(function (module) {
        initializeConsentStore(module);
      })
      .catch(function (error) {
        console.error("POSPal consent initialization failed:", error);
      });

    return initializationPromise;
  }

  ensureDataLayer();
  exposeGlobalController();
  applyConsentDefaults();

  var pathname = normalizePathname(window.location.pathname || "/");
  var disableTracking = isDemoOrAppPath(pathname) || isEmbeddedContext();
  if (disableTracking) {
    window["ga-disable-" + MEASUREMENT_ID] = true;
    window["ga-disable-" + ADS_ID] = true;
    return;
  }

  onDomReady(function () {
    buildConsentUI();
    ensureSettingsEntryPoint();
    ensureInitialized();
  });
})();
