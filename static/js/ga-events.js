(function () {
  var EVENT_VERSION = "v1.1";
  var SEO_ARTICLE_PATHS = [
    "/asyrmati-paraggeliolipsia.html",
    "/menu-estiatoriou.html",
    "/paraggelies-gia-estiash.html",
    "/paraggelio-lipsia-gia-beach-bar.html",
    "/pda-gia-kafeteries.html",
    "/pda-pos-leitourgei.html",
    "/pda-ti-einai.html",
    "/qr-menu-gia-estiash.html",
    "/systima-paraggeliolipsias.html",
  ];

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function normalizeForMatch(value) {
    var text = normalizeText(value).toLocaleLowerCase();
    if (typeof text.normalize === "function") {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return text;
  }

  function toUrl(href) {
    try {
      return new URL(href, window.location.href);
    } catch (error) {
      return null;
    }
  }

  function normalizePathname(pathname) {
    var path = normalizeText(pathname || "/").toLocaleLowerCase();
    if (!path) {
      return "/";
    }
    return path;
  }

  function isDemoOrAppPath(pathname) {
    return (
      pathname === "/qr-menu-demo.html"
    );
  }

  function isMarketingPage(pathname) {
    return !isDemoOrAppPath(pathname);
  }

  function resolvePageType(pathname) {
    if (pathname === "/" || pathname === "/index.html") {
      return "home";
    }

    if (pathname === "/times.html") {
      return "pricing";
    }

    if (
      pathname === "/download" ||
      pathname === "/download/" ||
      pathname.indexOf("/download/") === 0
    ) {
      return "download";
    }

    if (pathname === "/buy-license.html") {
      return "buy";
    }

    if (
      pathname === "/guides/stisimo-ektypoti" ||
      pathname === "/guides/stisimo-ektypoti/"
    ) {
      return "install_guide";
    }

    if (pathname === "/guides" || pathname.indexOf("/guides/") === 0) {
      return "guides";
    }

    if (SEO_ARTICLE_PATHS.indexOf(pathname) !== -1) {
      return "seo_article";
    }

    return "other";
  }

  function buildBasePayload() {
    return {
      page_path: window.location.pathname,
      page_type: PAGE_TYPE,
      event_version: EVENT_VERSION,
    };
  }

  function sendEvent(name, params) {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", name, params);
  }

  function classifyDownload(pathname, elementId) {
    if (elementId === "copy-link-btn") {
      return "copy_link_mobile";
    }

    if (elementId === "manual-download") {
      return "installer_manual";
    }

    if (!pathname) {
      return "";
    }

    if (
      pathname === "/download" ||
      pathname === "/download/" ||
      pathname.indexOf("/download/") !== -1
    ) {
      return "download_page";
    }

    if (pathname.indexOf("pospal-win-setup.exe") !== -1) {
      return "installer_file";
    }

    return "";
  }

  function classifyDemo(pathname, textMatch, classMatch) {
    if (pathname && pathname.indexOf("demo") !== -1) {
      return "demo_page";
    }

    if (
      textMatch.indexOf("demo") !== -1 &&
      (classMatch.indexOf("btn") !== -1 || classMatch.indexOf("button") !== -1)
    ) {
      return "demo_button";
    }

    return "";
  }

  function normalizeJourneyLevel(value) {
    var level = normalizeForMatch(value);
    if (level === "beginner" || level === "advanced" || level === "expert") {
      return level;
    }
    return "";
  }

  function classifyTrialStart(pathname, elementId, textMatch, classMatch) {
    var isDownloadTarget =
      elementId === "copy-link-btn" ||
      elementId === "manual-download" ||
      (pathname &&
        (pathname === "/download" ||
          pathname === "/download/" ||
          pathname.indexOf("/download/") !== -1 ||
          pathname.indexOf("pospal-win-setup.exe") !== -1));

    if (!isDownloadTarget) {
      return "";
    }

    if (elementId === "copy-link-btn") {
      return "copy_link_mobile";
    }

    if (elementId === "manual-download") {
      return "installer_manual";
    }

    if (textMatch.indexOf("δοκιμ") !== -1 || textMatch.indexOf("trial") !== -1) {
      return "trial_copy_cta";
    }

    if (
      classMatch.indexOf("btn-primary") !== -1 ||
      classMatch.indexOf("header-download") !== -1
    ) {
      return "download_primary_cta";
    }

    if (classMatch.indexOf("btn") !== -1) {
      return "download_button_cta";
    }

    return "download_link_cta";
  }

  function setupCtaClickTracking() {
    if (!IS_MARKETING_PAGE) {
      return;
    }

    document.addEventListener(
      "click",
      function (event) {
        var target = event.target;
        if (!target || typeof target.closest !== "function") {
          return;
        }

        var element = target.closest("a, button");
        if (!element) {
          return;
        }

        var tagName = (element.tagName || "").toLowerCase();
        var href = tagName === "a" ? element.getAttribute("href") || "" : "";
        var url = href ? toUrl(href) : null;
        var pathname = normalizePathname(url && url.pathname ? url.pathname : "");
        var elementId = element.id || "";
        var ctaText = normalizeText(element.innerText || element.textContent || "");
        var textMatch = normalizeForMatch(ctaText);
        var classMatch = normalizeForMatch(
          typeof element.className === "string" ? element.className : ""
        );
        var journeyLevel = normalizeJourneyLevel(
          element.getAttribute("data-journey-start") || ""
        );

        var downloadVariant = classifyDownload(pathname, elementId);
        var trialVariant = classifyTrialStart(
          pathname,
          elementId,
          textMatch,
          classMatch
        );
        var demoVariant = classifyDemo(pathname, textMatch, classMatch);

        if (!downloadVariant && !trialVariant && !demoVariant && !journeyLevel) {
          return;
        }

        var payload = buildBasePayload();
        payload.cta_text = ctaText;
        payload.cta_href = url ? url.href : href;
        payload.cta_id = elementId;
        payload.cta_classes = normalizeText(
          typeof element.className === "string" ? element.className : ""
        ).slice(0, 200);

        if (downloadVariant) {
          sendEvent("download_click", {
            page_path: payload.page_path,
            page_type: payload.page_type,
            event_version: payload.event_version,
            cta_variant: downloadVariant,
            cta_text: payload.cta_text,
            cta_href: payload.cta_href,
            cta_id: payload.cta_id,
            cta_classes: payload.cta_classes,
          });
        }

        if (trialVariant) {
          sendEvent("trial_start_click", {
            page_path: payload.page_path,
            page_type: payload.page_type,
            event_version: payload.event_version,
            cta_variant: trialVariant,
            cta_text: payload.cta_text,
            cta_href: payload.cta_href,
            cta_id: payload.cta_id,
            cta_classes: payload.cta_classes,
          });
        }

        if (demoVariant) {
          sendEvent("demo_click", {
            page_path: payload.page_path,
            page_type: payload.page_type,
            event_version: payload.event_version,
            cta_variant: demoVariant,
            cta_text: payload.cta_text,
            cta_href: payload.cta_href,
            cta_id: payload.cta_id,
            cta_classes: payload.cta_classes,
          });
        }

        if (journeyLevel) {
          sendEvent("guide_journey_start", {
            page_path: payload.page_path,
            page_type: payload.page_type,
            event_version: payload.event_version,
            journey_level: journeyLevel,
            cta_text: payload.cta_text,
            cta_href: payload.cta_href,
            cta_id: payload.cta_id,
            cta_classes: payload.cta_classes,
          });
        }
      },
      true
    );
  }

  function findPricingTarget() {
    var directSelectors = [
      "#pricing-table",
      "#pricing",
      "section[id*='pricing']",
      "div[id*='pricing']",
    ];
    var i;
    var el;

    for (i = 0; i < directSelectors.length; i += 1) {
      el = document.querySelector(directSelectors[i]);
      if (el) {
        return el;
      }
    }

    var headings = document.querySelectorAll("h1, h2, h3");
    for (i = 0; i < headings.length; i += 1) {
      var heading = headings[i];
      var headingMatch = normalizeForMatch(heading.textContent || "");
      if (
        headingMatch.indexOf("τιμ") === -1 &&
        headingMatch.indexOf("pricing") === -1
      ) {
        continue;
      }

      el = heading.closest("section, article, main, div");
      if (el) {
        return el;
      }
    }

    return null;
  }

  function setupPricingViewTracking() {
    if (!IS_MARKETING_PAGE || typeof window.IntersectionObserver !== "function") {
      return;
    }

    var target = findPricingTarget();
    if (!target) {
      return;
    }

    var sent = false;
    var observer = new IntersectionObserver(
      function (entries) {
        var i;
        for (i = 0; i < entries.length; i += 1) {
          if (sent || !entries[i].isIntersecting) {
            continue;
          }

          sent = true;
          observer.disconnect();

          var heading = target.querySelector("h1, h2, h3");
          var payload = buildBasePayload();
          payload.section_id = target.id || "";
          payload.section_heading = normalizeText(
            heading ? heading.textContent || "" : ""
          ).slice(0, 200);
          sendEvent("pricing_view", payload);
          return;
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);
  }

  function setupFaqExpandTracking() {
    if (!IS_MARKETING_PAGE) {
      return;
    }

    document.addEventListener(
      "click",
      function (event) {
        var target = event.target;
        if (!target || typeof target.closest !== "function") {
          return;
        }

        var trigger = target.closest("[data-faq-trigger], summary");
        if (!trigger) {
          return;
        }

        window.setTimeout(function () {
          var isOpen = false;
          var questionText = "";
          var faqId = "";

          if ((trigger.tagName || "").toLowerCase() === "summary") {
            var details = trigger.closest("details");
            isOpen = !!(details && details.open);
            faqId = details && details.id ? details.id : "";
            questionText = normalizeText(trigger.textContent || "");
          } else {
            var ariaExpanded = trigger.getAttribute("aria-expanded");
            var faqItem = trigger.closest("[data-faq-item]");
            isOpen =
              ariaExpanded === "true" ||
              !!(faqItem && faqItem.classList.contains("is-open"));
            faqId =
              trigger.getAttribute("aria-controls") ||
              (faqItem && faqItem.id ? faqItem.id : "");
            questionText = normalizeText(trigger.textContent || "");
          }

          if (!isOpen || !questionText) {
            return;
          }

          var payload = buildBasePayload();
          payload.faq_id = faqId;
          payload.faq_question = questionText.slice(0, 200);
          sendEvent("faq_expand", payload);
        }, 0);
      },
      false
    );
  }

  var CURRENT_PATHNAME = normalizePathname(window.location.pathname || "/");
  var PAGE_TYPE = resolvePageType(CURRENT_PATHNAME);
  var IS_MARKETING_PAGE = isMarketingPage(CURRENT_PATHNAME);

  window.POSPAL_GA_CONTEXT = window.POSPAL_GA_CONTEXT || {};
  window.POSPAL_GA_CONTEXT.event_version = EVENT_VERSION;
  window.POSPAL_GA_CONTEXT.page_type = PAGE_TYPE;
  window.POSPAL_GA_CONTEXT.is_marketing_page = IS_MARKETING_PAGE;

  setupCtaClickTracking();
  setupPricingViewTracking();
  setupFaqExpandTracking();
})();
