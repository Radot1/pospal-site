(function () {
  var DEFAULT_COOKIEBOT_ID = "ca0565fc-355d-4699-91f8-5d332abfb5d8";
  var MEASUREMENT_ID = "G-F851JG8PL6";
  var configuredId = (window.POSPAL_COOKIEBOT_ID || DEFAULT_COOKIEBOT_ID || "").trim();
  var cookiebotId = configuredId;

  function normalizePathname(pathname) {
    var path = String(pathname || "/").trim().toLowerCase();
    return path || "/";
  }

  function isDemoOrAppPath(pathname) {
    return (
      /^\/pospal_demo(?:_desktop|_index)?\.html$/.test(pathname) ||
      pathname === "/pospaldesktop.html" ||
      /^\/pospal-demo-[^/]+\.html$/.test(pathname) ||
      /^\/pospal-demo-coffee-[^/]+\.html$/.test(pathname) ||
      pathname === "/qr-menu-demo.html" ||
      pathname === "/managementcomponent.html"
    );
  }

  function isEmbeddedContext() {
    try {
      return window.self !== window.top;
    } catch (error) {
      return true;
    }
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  var pathname = normalizePathname(window.location.pathname || "/");
  var disableTracking = isDemoOrAppPath(pathname) || isEmbeddedContext();
  if (disableTracking) {
    window["ga-disable-" + MEASUREMENT_ID] = true;
    return;
  }

  // Consent Mode v2 defaults: denied until user consent is known.
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  function getConsentState(value) {
    return value ? "granted" : "denied";
  }

  function updateFromCookiebot() {
    if (!window.Cookiebot || !window.Cookiebot.consent) {
      return;
    }

    var consent = window.Cookiebot.consent;
    var analyticsGranted = !!consent.statistics || !!consent.preferences;
    var marketingGranted = !!consent.marketing;

    window.gtag("consent", "update", {
      analytics_storage: getConsentState(analyticsGranted),
      ad_storage: getConsentState(marketingGranted),
      ad_user_data: getConsentState(marketingGranted),
      ad_personalization: getConsentState(marketingGranted),
    });
  }

  function loadCookiebotScript() {
    if (!cookiebotId) {
      return;
    }

    if (document.getElementById("Cookiebot")) {
      return;
    }

    var script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("data-cbid", cookiebotId);
    script.setAttribute("data-blockingmode", "auto");
    document.head.appendChild(script);
  }

  window.addEventListener("CookiebotOnConsentReady", updateFromCookiebot);
  window.addEventListener("CookiebotOnAccept", updateFromCookiebot);
  window.addEventListener("CookiebotOnDecline", updateFromCookiebot);

  loadCookiebotScript();
  updateFromCookiebot();
})();
