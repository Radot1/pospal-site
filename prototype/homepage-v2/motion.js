(() => {
  const stage = document.querySelector('[data-route-stage]');
  const toggle = document.querySelector('[data-motion-toggle]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!stage || !toggle || reduceMotion.matches) return;

  stage.classList.add('is-running');

  toggle.addEventListener('click', () => {
    const paused = stage.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Συνέχιση κίνησης' : 'Παύση κίνησης';
  });
})();
