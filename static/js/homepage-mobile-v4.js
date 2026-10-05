/* Progressive enhancement only: every image remains a normal link without JS. */
(() => {
  const dialog = document.querySelector('.image-dialog');
  const image = dialog?.querySelector('.dialog-image');
  const title = dialog?.querySelector('#image-title');
  let opener;
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-enlarge]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        const original = link.querySelector('img');
        image.src = link.href;
        image.alt = original.alt;
        title.textContent = link.dataset.enlarge;
        dialog.dataset.portrait = String(Number(original.width) < Number(original.height));
        dialog.showModal();
        dialog.querySelector('button').focus();
      });
    });
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', event => {
      // The close button is the only interactive element in this image viewer.
      if (event.key === 'Tab') {
        event.preventDefault();
        dialog.querySelector('button').focus();
      }
    });
    dialog.addEventListener('close', () => opener?.focus());
  }
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    document.addEventListener('click', event => {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
  }
})();

// Keep the cookie-policy link usable when consent enhancement is unavailable.
document.querySelector('[data-pospal-cookie-settings]')?.addEventListener('click', event => {
  if (typeof window.POSPALConsent?.openSettings === 'function') {
    event.preventDefault();
    window.POSPALConsent.openSettings();
  }
});
