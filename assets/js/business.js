(() => {
  const root = document.documentElement;
  const button = document.querySelector('.md-theme');
  const menuButton = document.querySelector('.md-menu');
  const nav = document.querySelector('#md-nav');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.body.classList.toggle('light', theme === 'light');
    button.textContent = theme === 'dark' ? '☀' : '☾';
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  let theme = 'light';
  try {
    theme = localStorage.getItem('om-theme') === 'dark' ? 'dark' : 'light';
  } catch {}
  applyTheme(theme);
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try {
      localStorage.setItem('om-theme', theme);
    } catch {}
  });

  function setMenu(open) {
    nav.dataset.collapsed = String(!open);
    menuButton.setAttribute('aria-expanded', String(open));
  }
  setMenu(false);
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => setMenu(nav.dataset.collapsed === 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.dataset.collapsed === 'false' && menuButton.offsetWidth) {
      setMenu(false);
      menuButton.focus();
    }
  });

  const serviceField = document.querySelector('#md-service');
  const service = new URLSearchParams(location.search).get('service');
  if (serviceField && Array.from(serviceField.options).some(option => option.value === service)) {
    serviceField.value = service;
  }
})();
