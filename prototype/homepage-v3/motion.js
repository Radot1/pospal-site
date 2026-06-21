const stage = document.querySelector('[data-route-theatre]');
const toggle = document.querySelector('[data-motion-toggle]');
const replay = document.querySelector('[data-motion-replay]');

if (stage && toggle) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = 8000;
  let completionTimer;
  let startedAt = 0;
  let remaining = duration;

  const finishRoute = () => {
    clearTimeout(completionTimer);
    stage.classList.remove('is-running', 'is-paused');
    stage.classList.add('is-complete');
    toggle.hidden = true;
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = 'Παύση';
    if (replay) replay.hidden = false;
  };

  const scheduleFinish = () => {
    startedAt = performance.now();
    completionTimer = window.setTimeout(finishRoute, remaining);
  };

  const startRoute = () => {
    clearTimeout(completionTimer);
    stage.classList.remove('is-running', 'is-paused', 'is-complete');
    toggle.hidden = false;
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = 'Παύση';
    if (replay) replay.hidden = true;
    remaining = duration;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        stage.classList.add('is-running');
        scheduleFinish();
      });
    });
  };

  if (reduced) {
    stage.classList.add('is-complete');
    toggle.hidden = true;
    if (replay) replay.hidden = true;
  } else {
    toggle.hidden = true;
    toggle.addEventListener('click', () => {
      const paused = stage.classList.contains('is-paused');
      if (paused) {
        stage.classList.remove('is-paused');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.textContent = 'Παύση';
        scheduleFinish();
      } else {
        remaining = Math.max(0, remaining - (performance.now() - startedAt));
        clearTimeout(completionTimer);
        stage.classList.add('is-paused');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.textContent = 'Συνέχεια';
      }
    });
    if (replay) replay.addEventListener('click', startRoute);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        startRoute();
      }, { threshold: 0.25 });
      observer.observe(stage);
    } else {
      startRoute();
    }
  }
}
