(function () {
    const ENDPOINT = '/api/pricing';
    const pricingState = {
        promise: null,
        data: null,
    };
    let domReady = document.readyState !== 'loading';
    let pendingDataset = null;

    if (!domReady) {
        document.addEventListener('DOMContentLoaded', () => {
            domReady = true;
            if (pendingDataset) {
                applyPricingToDom(pendingDataset);
                pendingDataset = null;
            }
        });
    }

    function guessCurrencySymbol(currency) {
        const lookup = {
            EUR: '€',
            USD: '$',
            GBP: '£',
            CAD: '$',
            AUD: '$'
        };
        return lookup[currency] || currency;
    }

    function normalizePricingPayload(raw) {
        if (!raw || typeof raw !== 'object') {
            return null;
        }
        const parsedPrice = typeof raw.price === 'number' ? raw.price : parseFloat(raw.price);
        if (!Number.isFinite(parsedPrice)) {
            return null;
        }
        const currency = (raw.currency || 'EUR').toUpperCase();
        const currencySymbol = raw.currency_symbol || guessCurrencySymbol(currency);
        const longFormat = raw.formatted || `${currencySymbol}${parsedPrice.toFixed(2)}`;
        let shortFormat = raw.formatted_short;
        if (!shortFormat) {
            const isWhole = Math.abs(parsedPrice - Math.round(parsedPrice)) < 0.01;
            shortFormat = `${currencySymbol}${isWhole ? Math.round(parsedPrice) : parsedPrice.toFixed(2)}`;
        }

        return {
            price: parsedPrice,
            currency,
            currency_symbol: currencySymbol,
            formatted: longFormat,
            formatted_short: shortFormat,
            source: raw.source || 'unknown',
            cache_state: raw.cache_state || 'unknown',
            fallback_used: !!raw.fallback_used,
            last_updated: raw.last_updated || null
        };
    }

    function applyPricingToDom(pricing) {
        if (!pricing) {
            return;
        }
        const { formatted, formatted_short: formattedShort, currency } = pricing;

        document.querySelectorAll('[data-pricing-amount]').forEach((element) => {
            const format = element.getAttribute('data-pricing-format');
            element.textContent = format === 'short' ? formattedShort : formatted;
        });

        document.querySelectorAll('[data-pricing-template]').forEach((element) => {
            const template = element.getAttribute('data-pricing-template');
            if (!template) {
                return;
            }
            const updated = template
                .replace(/\{price_short\}/gi, formattedShort)
                .replace(/\{price\}/gi, formatted)
                .replace(/\{currency\}/gi, currency);
            element.textContent = updated;
        });
    }

    async function fetchPricing() {
        const response = await fetch(ENDPOINT, { credentials: 'same-origin' });
        if (!response.ok) {
            throw new Error(`Pricing request failed (${response.status})`);
        }
        const payload = await response.json();
        return normalizePricingPayload(payload);
    }

    function ensurePricingLoaded() {
        if (pricingState.promise) {
            return pricingState.promise;
        }
        pricingState.promise = fetchPricing()
            .then((pricing) => {
                pricingState.data = pricing || null;
                if (pricingState.data) {
                    window.__POSPAL_PRICING = pricingState.data;
                    document.dispatchEvent(new CustomEvent('pospalPricingReady', { detail: pricingState.data }));
                    if (domReady) {
                        applyPricingToDom(pricingState.data);
                    } else {
                        pendingDataset = pricingState.data;
                    }
                }
                return pricingState.data;
            })
            .catch((error) => {
                console.error('Failed to load subscription pricing:', error);
                pricingState.data = null;
                return null;
            });
        return pricingState.promise;
    }

    ensurePricingLoaded();

    window.getPospalPricing = function () {
        if (pricingState.data) {
            return Promise.resolve(pricingState.data);
        }
        return ensurePricingLoaded();
    };
})();
