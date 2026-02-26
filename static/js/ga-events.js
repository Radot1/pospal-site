(function () {
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

  function sendEvent(name, params) {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", name, params);
  }

  function getBaseCtaPayload(element, href, url, text) {
    return {
      page_path: window.location.pathname,
      cta_text: text,
      cta_href: url ? url.href : href,
      cta_id: element.id || "",
      cta_classes: normalizeText(
        typeof element.className === "string" ? element.className : ""
      ).slice(0, 200),
    };
  }

  function setupCtaClickTracking() {
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
        var pathname = url && url.pathname ? url.pathname.toLowerCase() : "";
        var elementId = element.id || "";
        var ctaText = normalizeText(element.innerText || element.textContent || "");
        var textMatch = normalizeForMatch(ctaText);
        var classMatch = normalizeForMatch(
          typeof element.className === "string" ? element.className : ""
        );

        var downloadVariant = classifyDownload(pathname, elementId);
        var trialVariant = classifyTrialStart(
          pathname,
          elementId,
          textMatch,
          classMatch
        );
        var demoVariant = classifyDemo(pathname, textMatch, classMatch);

        if (!downloadVariant && !trialVariant && !demoVariant) {
          return;
        }

        var payload = getBaseCtaPayload(element, href, url, ctaText);

        if (downloadVariant) {
          sendEvent("download_click", {
            page_path: payload.page_path,
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
            cta_variant: demoVariant,
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
        headingMatch.indexOf("τιμε") === -1 &&
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
    if (typeof window.IntersectionObserver !== "function") {
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
          if (sent) {
            return;
          }

          if (!entries[i].isIntersecting) {
            continue;
          }

          sent = true;
          observer.disconnect();

          var heading = target.querySelector("h1, h2, h3");
          sendEvent("pricing_view", {
            page_path: window.location.pathname,
            section_id: target.id || "",
            section_heading: normalizeText(
              heading ? heading.textContent || "" : ""
            ).slice(0, 200),
          });
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
    document.addEventListener("click", function (event) {
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

        sendEvent("faq_expand", {
          page_path: window.location.pathname,
          faq_id: faqId,
          faq_question: questionText.slice(0, 200),
        });
      }, 0);
    },
    false);
  }

  setupCtaClickTracking();
  setupPricingViewTracking();
  setupFaqExpandTracking();
})();
