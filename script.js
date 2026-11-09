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


/* FR / EN bilingual mode. Keeps DOM structure, layout and hero styling unchanged. */
const translations = new Map(Object.entries({
'Accueil':'Home','Développement':'Development','Gestion de Stock':'Stock Management','Projets':'Projects','Expérience':'Experience','Compétences':'Skills','Contact':'Contact','Parlons projet':'Discuss a project',
'Bienvenue sur mon Portfolio':'Welcome to my Portfolio',
'Développeur Web & Gestionnaire de Stock':'Web Developer & Inventory Manager',
'Professionnel polyvalent, alliant le':'Versatile professional combining',
'développement':'development','de solutions web et logicielles à une solide expérience en':'of web and software solutions with hands-on experience in',
'gestion de stock et logistique':'inventory management and logistics',
'. J’apporte des solutions concrètes, digitales et opérationnelles pour optimiser l’organisation et la performance des entreprises.':'. I deliver practical digital and operational solutions to improve business organization and performance.',
'Me contacter':'Contact me','Télécharger mon CV':'Download my CV',
'01 / À PROPOS':'01 / ABOUT','Deux expertises.':'Two areas of expertise.','Une même vision.':'One vision.',
'Je crée des solutions digitales utiles, avec une connaissance concrète des besoins du terrain.':'I build useful digital solutions grounded in real operational needs.',
'Solutions web sur mesure':'Custom web solutions','Gestion de stock opérationnelle':'Hands-on stock management','Digitalisation des processus':'Process digitalization','Amélioration continue':'Continuous improvement',
'Découvrir mon parcours':'Explore my background','Voir mes réalisations':'See my work',
'Développement Web & Applications.':'Web Development & Applications.',
'Sites web & plateformes':'Websites & platforms','Applications & automatisation':'Applications & automation','Maintenance & optimisation':'Maintenance & optimization',
'Magasinier & Gestionnaire de Stock.':'Storekeeper & Inventory Manager.',
'De la réception à l’inventaire, je maîtrise le cycle du stock.':'From receiving to inventory counts, I manage the stock lifecycle.',
'Réception & documents':'Receiving & documentation','Entrées, sorties & transferts':'Stock entries, issues & transfers',
'Inventaires & fiabilité':'Inventory counts & accuracy','Seuils & réapprovisionnement':'Thresholds & replenishment',
'Organisation & coordination':'Organization & coordination',
'Je développe aussi d’autres systèmes de gestion, pas seulement Gestion Stock Pro.':'I also develop other management systems, not only Gestion Stock Pro.',
'Projets &':'Projects &','références.':'references.',
'Tous les projets':'All projects','Sites institutionnels':'Institutional websites','Logiciel métier':'Business software','Web & freelance':'Web & freelance',
'Voir la démonstration':'Watch demo','Découvrir le projet':'Explore project','Détails du projet':'Project details','Visiter le site':'Visit website',
'Des solutions adaptées':'Solutions tailored','à vos besoins.':'to your needs.',
'Sites web professionnels':'Professional websites','Applications de gestion':'Management applications',
'Automatisation Excel / VBA':'Excel / VBA automation','Organisation & suivi de stock':'Stock organization & tracking',
'Discuter de ce service':'Discuss this service',
'en action.':'in action.','Demander une démonstration':'Request a demo',
'Une expérience':'A complementary','complémentaire.':'professional background.',
'Expérience professionnelle':'Professional experience','Formation':'Education',
'Un projet en tête ?':'Have a project in mind?','Construisons-le.':'Let’s build it.',
'Envoyer un e-mail':'Send an email','Votre nom':'Your name','Votre e-mail':'Your email','Votre besoin':'Your project',
'Votre message':'Your message','Envoyer mon message':'Send my message',
'Création de site web':'Website development','Application de gestion':'Management application',
'Autre collaboration':'Other collaboration','LOCALISATION':'LOCATION','TÉLÉPHONE':'PHONE',
'Retour en haut':'Back to top','PROJET EN DÉTAIL':'PROJECT DETAILS',
'Gestion Stock Pro — Démonstration':'Gestion Stock Pro — Demo'
}));
const langToggle = document.querySelector('#langToggle');
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  if (textNode.parentElement?.closest('script,style,textarea,select,option')) continue;
  const original = textNode.nodeValue;
  const trimmed = original.trim();
  if (translations.has(trimmed)) translatedNodes.push({node:textNode, original, translated:original.replace(trimmed, translations.get(trimmed))});
}
const placeholders = [['#contactName','Nom et prénom','Full name'],['#contactEmail','vous@entreprise.com','you@company.com'],['#contactMessage','Décrivez brièvement votre projet','Briefly describe your project']];
function applyLanguage(language) {
  document.documentElement.lang = language;
  translatedNodes.forEach(({node,original,translated}) => {node.nodeValue = language === 'en' ? translated : original;});
  placeholders.forEach(([selector,fr,en]) => {const el=document.querySelector(selector);if(el)el.placeholder=language==='en'?en:fr;});
  if (langToggle) {langToggle.textContent = language === 'en' ? 'FR' : 'EN';langToggle.setAttribute('aria-label',language==='en'?'Passer en français':'Switch to English');}
  try {localStorage.setItem('om-language',language);} catch (_) {}
}
let savedLanguage='fr';
try {savedLanguage=localStorage.getItem('om-language')==='en'?'en':'fr';} catch (_) {}
applyLanguage(savedLanguage);
langToggle?.addEventListener('click',()=>applyLanguage(document.documentElement.lang==='fr'?'en':'fr'));
