const stage = document.querySelector('[data-route-theatre]');
const toggle = document.querySelector('[data-motion-replay]');

if (stage && toggle) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setPaused = (paused) => {
    stage.classList.toggle('is-paused', paused);
    toggle.setAttribute('aria-pressed', paused ? 'true' : 'false');
    toggle.textContent = paused ? 'Συνέχεια' : 'Παύση';
    toggle.setAttribute(
      'aria-label',
      paused ? 'Συνέχεια κίνησης διαδρομής' : 'Παύση κίνησης διαδρομής',
    );
  };

  const startRoute = () => {
    stage.classList.remove('is-running', 'is-paused', 'is-complete');
    toggle.hidden = false;
    setPaused(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        stage.classList.add('is-running');
      });
    });
  };

  if (reduced) {
    stage.classList.add('is-complete');
    toggle.hidden = true;
  } else {
    toggle.hidden = true;
    toggle.addEventListener('click', () => {
      const paused = stage.classList.contains('is-paused');
      setPaused(!paused);
    });

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
