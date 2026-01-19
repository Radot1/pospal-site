// Simple i18n helper for in-app UI and receipt preview text
const I18N_STORAGE_KEY = 'pospal_language_cache';
let I18N = { lang: 'en', dict: {} };
let languageChangeInFlight = false;
let queuedLanguageUpdate = null;

async function fetchCurrentLanguage() {
    try {
        const res = await fetch('/api/settings/general');
        if (!res.ok) throw new Error('Failed to load general settings');
        const data = await res.json();
        return (data && (data.language === 'el' || data.language === 'en')) ? data.language : 'el';
    } catch (e) {
        try {
            const cached = localStorage.getItem(I18N_STORAGE_KEY);
            if (cached) return cached;
        } catch {}
        return 'el';
    }
}

function normalizeLanguage(lang) {
    return (lang === 'el' || lang === 'en') ? lang : 'en';
}

async function loadLanguage(lang) {
    const normalized = normalizeLanguage(lang);
    const url = `locales/${normalized}.json`;
    const res = await fetch(url);
    I18N.dict = await res.json();
    I18N.lang = normalized;
    try { localStorage.setItem(I18N_STORAGE_KEY, normalized); } catch {}
    applyTranslations();
}

function t(key, fallback) {
    const parts = String(key || '').split('.');
    let cur = I18N.dict;
    for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
        else return fallback ?? key;
    }
    return (cur === undefined || cur === null) ? (fallback ?? key) : cur;
}

function applyTranslations(root = document) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = t(key);
        if (txt !== undefined) el.textContent = txt;
    });
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
        try {
            const mapping = JSON.parse(el.getAttribute('data-i18n-attr'));
            Object.entries(mapping).forEach(([attr, key]) => el.setAttribute(attr, t(key)));
        } catch {}
    });
}

function updateLanguageSelectElements(lang) {
    const select = document.getElementById('languageSelect');
    if (select) {
        select.value = lang;
        select.dataset.currentLanguage = lang;
    }
}

function refreshReceiptPreviewSafely() {
    if (typeof window.updateReceiptPreview === 'function') {
        try {
            window.updateReceiptPreview();
        } catch (error) {
            console.warn('Failed to refresh receipt preview after language change:', error);
        }
    }
}

function isLanguageDictionaryReady(lang) {
    if (!I18N || !I18N.dict) return false;
    if (I18N.lang !== lang) return false;
    try {
        return Object.keys(I18N.dict).length > 0;
    } catch {
        return false;
    }
}

async function syncLanguageFromServer(lang, { showToast = true } = {}) {
    const normalized = normalizeLanguage(lang);
    if (languageChangeInFlight) {
        queuedLanguageUpdate = normalized;
        return;
    }
    const previousLang = I18N.lang;
    const needsLoad = !isLanguageDictionaryReady(normalized);
    if (needsLoad) {
        await loadLanguage(normalized);
    }
    updateLanguageSelectElements(normalized);
    refreshReceiptPreviewSafely();
    if (showToast && previousLang !== normalized) {
        showI18nToast(normalized);
    }
}

async function setLanguage(lang, options = {}) {
    const normalized = normalizeLanguage(lang);
    const { silentToast = true } = options;
    let persistedLanguage = normalized;
    languageChangeInFlight = true;
    try {
        const resp = await fetch('/api/settings/general', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ language: normalized })
        });
        if (!resp.ok) {
            throw new Error(`Language save failed: ${resp.status}`);
        }
        let body = {};
        try {
            body = await resp.json();
        } catch {}
        if (body && (body.language === 'el' || body.language === 'en')) {
            persistedLanguage = body.language;
        }
        await loadLanguage(persistedLanguage);
        updateLanguageSelectElements(persistedLanguage);
        refreshReceiptPreviewSafely();
        if (!silentToast) {
            showI18nToast(persistedLanguage);
        }
        return { success: true, language: persistedLanguage };
    } catch (error) {
        console.error('Language update failed:', error);
        throw error;
    } finally {
        languageChangeInFlight = false;
        if (queuedLanguageUpdate) {
            const queued = queuedLanguageUpdate;
            queuedLanguageUpdate = null;
            if (queued !== persistedLanguage) {
                await syncLanguageFromServer(queued, { showToast: true });
            } else {
                updateLanguageSelectElements(queued);
                refreshReceiptPreviewSafely();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const lang = await fetchCurrentLanguage();
    await syncLanguageFromServer(lang, { showToast: false });
    try {
        window.evtSource = new EventSource('/api/events');
        const es = window.evtSource;  // Keep local reference for this file
        es.addEventListener('settings', async (e) => {
            try {
                const payload = JSON.parse(e.data || '{}');
                if (payload && (payload.language === 'en' || payload.language === 'el')) {
                    const incoming = payload.language;
                    await syncLanguageFromServer(incoming, { showToast: incoming !== I18N.lang });
                }
            } catch (error) {
                console.warn('Failed to process settings event:', error);
            }
        });
        es.addEventListener('license_status_update', (event) => {
            try {
                if (typeof window.handleLicenseStatusSSE === 'function') {
                    window.handleLicenseStatusSSE(event);
                }
            } catch (error) {
                console.error('License status SSE handler error:', error);
            }
        });
    } catch {}
    // Poll fallback every 30s in case SSE is blocked by network/proxy
    try {
        let last = lang;
        let isPolling = false; // Prevent concurrent polling
        setInterval(async () => {
            if (isPolling) return; // Skip if already polling
            isPolling = true;
            try {
                const r = await fetch('/api/settings/general', { cache: 'no-store' });
                if (!r.ok) {
                    console.warn('Settings fetch failed:', r.status);
                    return;
                }
                const d = await r.json();
                const newLang = (d && (d.language === 'en' || d.language === 'el')) ? d.language : 'el';
                if (newLang !== last) {
                    last = newLang;
                    await syncLanguageFromServer(newLang);
                }
            } catch (e) {
                console.warn('Settings polling error:', e.message);
            } finally {
                isPolling = false;
            }
        }, 30000); // Increased to 30 seconds to reduce API calls
    } catch {}
});

// Expose helpers
window.t = t;
window.applyTranslations = applyTranslations;
window.setLanguage = setLanguage;
window.loadLanguage = loadLanguage;
window.syncLanguageFromServer = syncLanguageFromServer;
window.isLanguageChangePending = () => languageChangeInFlight;
window.getCurrentLanguage = () => I18N.lang;

function showI18nToast(lang){
    const msg = lang === 'el' ? 'Η γλώσσα ορίστηκε σε Ελληνικά' : 'Language set to English';
    try {
        if (typeof window.showToast === 'function') {
            window.showToast(msg, 'success', 1800, { dedupeKey: 'language-change' });
            return;
        }
        if (window.NotificationManager && typeof window.NotificationManager.showToast === 'function') {
            window.NotificationManager.showToast(msg, 'success', 1800, { dedupeKey: 'language-change' });
            return;
        }
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        if (!toast || !msgEl) return;
        msgEl.textContent = msg;
        toast.classList.remove('hidden');
        toast.style.opacity = 0;
        setTimeout(()=> toast.style.opacity = 1, 10);
        setTimeout(()=> { toast.style.opacity = 0; setTimeout(()=> toast.classList.add('hidden'), 300); }, 1800);
    } catch {}
}


