(() => {
  const search = document.querySelector('#article-search');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const posts = [...document.querySelectorAll('[data-category]')];
  const venueSection = document.querySelector('#venue-articles');
  let category = '';
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('el').replace(/ς/g, 'σ');
  function update() {
    const query = normalize(search.value.trim());
    let count = 0;
    posts.forEach(post => {
      const match = (!category || post.dataset.category === category) && normalize(post.textContent).includes(query);
      post.hidden = !match;
      if (match) count++;
    });
    filters.forEach(link => {
      if (link.dataset.filter === category) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    venueSection.hidden = !venueSection.querySelector('[data-category]:not([hidden])');
    document.querySelector('#empty-results').hidden = count > 0;
    document.querySelector('#result-status').textContent = `${count} αποτελέσματα`;
  }

  function restore() {
    const params = new URL(location.href).searchParams;
    category = params.get('category') || '';
    if (!filters.some(link => link.dataset.filter === category)) category = '';
    search.value = params.get('q') || '';
    update();
  }

  function navigate(method) {
    const url = new URL(location.href);
    if (category) url.searchParams.set('category', category);
    else url.searchParams.delete('category');
    if (search.value.trim()) url.searchParams.set('q', search.value.trim());
    else url.searchParams.delete('q');
    if (url.href !== location.href) history[method](null, '', url);
    update();
  }

  filters.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    category = link.dataset.filter;
    navigate('pushState');
  }));
  search.addEventListener('input', () => navigate('replaceState'));
  window.addEventListener('popstate', restore);
  window.addEventListener('pageshow', restore);
  restore();
})();
