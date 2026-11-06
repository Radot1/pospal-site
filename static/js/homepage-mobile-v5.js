/* Image links and disclosure navigation also work without this enhancement. */
(() => {
  const root = document.querySelector('.homepage-mobile') || document;
  const dialog = root.querySelector('.image-dialog');
  const image = dialog?.querySelector('.dialog-image');
  const title = dialog?.querySelector('#image-title');
  const zoomButton = dialog?.querySelector('.zoom-button');
  const imageViewport = dialog?.querySelector('.image-viewport');
  let opener;

  if (dialog && typeof dialog.showModal === 'function') {
    root.querySelectorAll('[data-enlarge]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        const original = link.querySelector('img');
        image.src = link.href;
        image.alt = original.alt;
        image.width = Number(original.getAttribute('width'));
        image.height = Number(original.getAttribute('height'));
        title.textContent = link.dataset.enlarge;
        dialog.dataset.portrait = String(image.width < image.height);
        dialog.dataset.zoomed = 'false';
        dialog.style.setProperty('--image-width', image.width + 'px');
        zoomButton.setAttribute('aria-pressed', 'false');
        zoomButton.textContent = 'Μεγέθυνση';
        imageViewport.scrollTo(0, 0);
        dialog.showModal();
        dialog.querySelector('.close-button').focus();
      });
    });
    dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
    zoomButton.addEventListener('click', () => {
      const zoomed = dialog.dataset.zoomed !== 'true';
      dialog.dataset.zoomed = String(zoomed);
      zoomButton.setAttribute('aria-pressed', String(zoomed));
      zoomButton.textContent = zoomed ? 'Σμίκρυνση' : 'Μεγέθυνση';
      imageViewport.scrollTo(0, 0);
    });
    dialog.addEventListener('close', () => opener?.focus());
    if (dialog.closest('.homepage-mobile')) {
      matchMedia('(max-width:720px)').addEventListener('change', event => {
        if (!event.matches && dialog.open) dialog.close();
      });
    }
  }

  const menu = root.querySelector('.menu');
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open && !dialog?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && !menu.contains(event.target)) menu.open = false;
  });
})();
