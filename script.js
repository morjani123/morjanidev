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

/* New project case studies — distinguish personal software from TWINS contributions */
const caseDialog = document.querySelector('#caseDialog');
const caseTitle = document.querySelector('#caseTitle');
const caseIntro = document.querySelector('#caseIntro');
const caseBody = document.querySelector('#caseBody');
const caseLink = document.querySelector('#caseLink');
document.querySelectorAll('.case-study-trigger').forEach(button => button.addEventListener('click', () => {
  if (!caseDialog) return;
  const card = button.closest('.project-card');
  const stock = button.dataset.case === 'stock';
  const name = card?.querySelector('h3')?.textContent?.trim() || 'Projet web';
  caseTitle.textContent = name;
  caseIntro.textContent = stock
    ? 'Application métier développée pour faciliter le suivi quotidien des articles et des mouvements de stock.'
    : 'Contribution au développement web dans le cadre de mon expérience professionnelle chez TWINS.';
  const details = stock
    ? ['Contexte : besoins opérationnels de gestion des stocks sur le terrain.', 'Fonctions : bons de sortie et de retour, réceptions, historique, inventaires et alertes.', 'Technologies : Python, Tkinter et SQLite.', 'Approche : solution personnalisable selon les procédures de chaque structure.']
    : ['Cadre : projet institutionnel réalisé au sein de TWINS.', 'Contribution : travaux de développement, intégration et maintenance web selon les missions confiées.', 'Présentation : consulter le site public pour découvrir le résultat.', 'Les technologies et le périmètre exact varient selon le projet.'];
  caseBody.replaceChildren();
  const ul = document.createElement('ul');
  details.forEach(detail => { const li = document.createElement('li'); li.textContent = detail; ul.append(li); });
  caseBody.append(ul);
  const publicLink = card?.querySelector('a.project-link');
  caseLink.href = !stock && publicLink ? publicLink.href : '#contact';
  caseLink.textContent = !stock && publicLink ? 'Visiter le site ↗' : 'Discuter du projet ↗';
  caseLink.target = !stock && publicLink ? '_blank' : '_self';
  if (!stock && publicLink) caseLink.rel = 'noopener noreferrer'; else caseLink.removeAttribute('rel');
  caseDialog.showModal();
}));
document.querySelector('#caseClose')?.addEventListener('click', () => caseDialog?.close());
caseDialog?.addEventListener('click', event => { if (event.target === caseDialog) caseDialog.close(); });

/* Reuse the existing video dialog, no duplicate playback logic */
document.querySelectorAll('[data-open-demo]').forEach(button => button.addEventListener('click', () => {
  const opener = document.querySelector('#openVideo');
  if (opener) opener.click();
}));

/* GitHub Pages is static: compose an email, do not pretend to submit data to a server */
document.querySelector('#contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.querySelector('#contactName').value.trim();
  const email = form.querySelector('#contactEmail').value.trim();
  const subject = form.querySelector('#contactSubject').value;
  const message = form.querySelector('#contactMessage').value.trim();
  const body = ['Bonjour,', '', message, '', 'Nom : ' + name, 'E-mail : ' + email].join('\n');
  window.location.href = 'mailto:morjaniomar@gmail.com?subject=' + encodeURIComponent('Portfolio — ' + subject) + '&body=' + encodeURIComponent(body);
});
