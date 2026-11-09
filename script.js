const $ = selector => document.querySelector(selector);
const year = $('#year');
if (year) year.textContent = String(new Date().getFullYear());

const themeToggle = $('#themeToggle');
let storedTheme = null;
try { storedTheme = localStorage.getItem('om-theme'); } catch (_) {}
if (storedTheme === 'light') document.body.classList.add('light');
function refreshTheme() {
  if (!themeToggle) return;
  const light = document.body.classList.contains('light');
  themeToggle.textContent = light ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', light ? 'Activer le mode sombre' : 'Activer le mode clair');
  themeToggle.setAttribute('title', light ? 'Mode sombre' : 'Mode clair');
  themeToggle.setAttribute('aria-pressed', String(light));
}
refreshTheme();
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  try { localStorage.setItem('om-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch (_) {}
  refreshTheme();
});

const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');
menuToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const filters = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  const category = button.dataset.filter;
  projectCards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));

const dialog = $('#videoDialog');
const video = $('#demoVideo');
const openVideo = $('#openVideo');
const closeVideo = $('#closeVideo');
if (dialog && video && openVideo && closeVideo) {
  openVideo.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    video.play().catch(() => {});
  });
  closeVideo.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => video.pause());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
