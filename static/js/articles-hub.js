(() => {
  const search = document.querySelector('#article-search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const posts = [...document.querySelectorAll('.post')];
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
    document.querySelector('#empty-results').hidden = count > 0;
    document.querySelector('#result-status').textContent = `${count} άρθρα`;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));
  search.addEventListener('input', update);
})();
