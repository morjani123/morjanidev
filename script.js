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
for (const [fr,en] of Object.entries({
  "Création de sites web, applications et solutions digitales adaptées aux besoins des entreprises.": "Building websites, applications and digital solutions tailored to business needs.",
  "Gestion des stocks, des approvisionnements et des flux de matériels, avec une expérience terrain chez SGTM.": "Inventory, supply and material flow management, with hands-on experience at SGTM.",
  "Découvrir le Développement": "Explore Web Development",
  "Découvrir la Gestion de Stock": "Explore Stock Management",
  "Solutions Digitales sur Mesure": "Custom Digital Solutions",
  "Gestion de Stock & Magasinier": "Inventory Management & Storekeeping",
  "Réception & BL/BR": "Receiving & Delivery Notes",
  "Entrées / Sorties": "Stock In / Out",
  "Inventaires": "Inventory Counts",
  "Organisation": "Organization",
  "Double compétence": "Dual Expertise",
  "Expérience chez TWINS": "Experience at TWINS",
  "Projets institutionnels": "Institutional Projects",
  "Application métier réalisée": "Business Application Developed",
  "Développeur web et professionnel de la gestion de stock, j’associe mes compétences en": "As a web developer and inventory management professional, I combine expertise in",
  "à mon expérience opérationnelle chez": "with my operational experience at",
  "Sites, plateformes et applications adaptées aux besoins réels.": "Websites, platforms and applications tailored to real needs.",
  "Réceptions, sorties, inventaires et traçabilité des mouvements.": "Receiving, stock issues, inventory counts and movement traceability.",
  "Outils de gestion, automatisation et suivi des activités.": "Management tools, automation and operational monitoring.",
  "Organisation, fiabilité des données et efficacité au quotidien.": "Organization, data reliability and day-to-day efficiency.",
  "02 / DÉVELOPPEMENT WEB & LOGICIEL": "02 / WEB & SOFTWARE DEVELOPMENT",
  "Des plateformes institutionnelles aux outils métiers sur mesure : conception, intégration, personnalisation et maintenance.": "From institutional platforms to custom business tools: design, integration, customization and maintenance.",
  "Développement de sites institutionnels, vitrines et sites WordPress ou Drupal, interfaces responsive et fonctionnalités spécifiques.": "Development of institutional and business websites with WordPress or Drupal, responsive interfaces and custom features.",
  "Création d’applications de bureau et d’outils internes adaptés aux processus de chaque entreprise : formulaires, bases de données, historiques et rapports.": "Development of desktop applications and internal tools tailored to business processes: forms, databases, activity logs and reports.",
  "Amélioration des performances et du SEO, corrections, sécurisation, hébergement, gestion des noms de domaine et suivi technique.": "Performance and SEO improvements, troubleshooting, security, hosting, domain management and technical support.",
  "03 / GESTION DE STOCK & MAGASINIER": "03 / INVENTORY MANAGEMENT & STOREKEEPING",
  "Gestion opérationnelle de magasin et dépôt, suivi des articles, documents de stock, inventaires, outils SAP et Excel, et organisation des flux sur chantier.": "Hands-on warehouse and store management, item tracking, stock documentation, inventory counts, SAP and Excel tools, and on-site material flow coordination.",
  "EXPÉRIENCE TERRAIN · SGTM · CHANTIER": "FIELD EXPERIENCE · SGTM · CONSTRUCTION SITE",
  "Organisation du magasin, contrôle des quantités, traçabilité des mouvements, préparation des demandes et coordination avec les équipes chantier. Une approche rigoureuse pour limiter les écarts et anticiper les besoins.": "Warehouse organization, quantity checks, movement tracking, request preparation and coordination with site teams. A structured approach to reduce discrepancies and anticipate requirements.",
  "Traçabilité": "Traceability",
  "Gestion des EPI": "PPE Management",
  "Réception & contrôle": "Receiving & Inspection",
  "Stockage & suivi": "Storage & Tracking",
  "Sorties & transferts": "Issues & Transfers",
  "Inventaires & reporting": "Inventory & Reporting",
  "Contrôle des marchandises, saisie et suivi des bons de livraison (BL), bons de réception (BR) et demandes internes (BCI).": "Goods inspection, recording and tracking delivery notes (BL), receiving notes (BR) and internal requests (BCI).",
  "Enregistrement des mouvements, bons de sortie (BS), transferts inter-chantiers et traçabilité des articles et pièces.": "Recording stock movements, issue slips (BS), transfers between sites and tracking materials and spare parts.",
  "Inventaires hebdomadaires et mensuels, rapprochement du stock physique avec les données et identification des écarts.": "Weekly and monthly stock counts, reconciliation of physical and recorded stock, and discrepancy identification.",
  "Réceptions et inventaires sur SAP, consultation de commandes et demandes d’achat ; tableaux Excel, formules et automatisations VBA.": "SAP receiving and inventory operations, purchase order and requisition review; Excel spreadsheets, formulas and VBA automation.",
  "Surveillance des niveaux de stock, alertes de stock minimum, anticipation des ruptures et remontée des besoins.": "Monitoring stock levels, minimum-stock alerts, shortage prevention and reporting replenishment needs.",
  "Rangement du dépôt, suivi des EPI et coordination avec les demandeurs et responsables chantier.": "Warehouse organization, PPE tracking and coordination with requesters and site managers.",
  "04 / PORTFOLIO": "04 / PORTFOLIO",
  "Une sélection de réalisations web et de solutions logicielles, développées en entreprise et en projet personnel.": "A selection of web projects and software solutions developed professionally and independently.",
  "APPLICATION MÉTIER": "BUSINESS APPLICATION",
  "PROJET LOGICIEL · GESTION DE STOCK": "SOFTWARE PROJECT · INVENTORY MANAGEMENT",
  "TWINS · DÉVELOPPEMENT WEB": "TWINS · WEB DEVELOPMENT",
  "Projet institutionnel · TWINS": "Institutional Project · TWINS",
  "Solution de gestion de stock conçue pour le suivi des articles, des entrées et sorties, des bons, des mouvements et des alertes de réapprovisionnement.": "Inventory management software for tracking items, stock receipts and issues, documents, movements and replenishment alerts.",
  "Projet de plateforme institutionnelle réalisé dans le cadre de mon expérience chez TWINS.": "Institutional platform project delivered as part of my work at TWINS.",
  "Contribution au développement du site institutionnel dans le cadre de mes missions chez TWINS.": "Contributed to the institutional website as part of my role at TWINS.",
  "Réalisation web institutionnelle à laquelle j’ai participé au sein de TWINS.": "Institutional web project I contributed to while working at TWINS.",
  "Projet de site web développé dans un contexte professionnel au sein de TWINS.": "Website project developed professionally at TWINS.",
  "Participation à un projet de développement web pour une plateforme d’information institutionnelle.": "Contributed to the development of an institutional information platform.",
  "05 / SERVICES": "05 / SERVICES",
  "Du site vitrine au logiciel métier, je vous accompagne dans la création d’outils utiles, évolutifs et faciles à utiliser.": "From business websites to custom software, I help create practical, scalable and user-friendly tools.",
  "Sites vitrines, plateformes WordPress et Drupal, intégration responsive, maintenance et optimisation.": "Business websites, WordPress and Drupal platforms, responsive integration, maintenance and optimization.",
  "Logiciels sur mesure pour les stocks, les mouvements, les documents métier et les tableaux de bord.": "Custom software for inventory, stock movements, business documents and dashboards.",
  "Formulaires, bons de sortie, inventaires, alertes et rapports pour simplifier les tâches répétitives.": "Forms, issue slips, inventory counts, alerts and reports to streamline repetitive tasks.",
  "Structuration des flux, suivi des réceptions et sorties, traçabilité et outils adaptés aux équipes terrain.": "Workflow organization, stock receipt and issue tracking, traceability and tools tailored to operational teams.",
  "06 / DÉMONSTRATION": "06 / DEMONSTRATION",
  "Un aperçu concret d’une solution de gestion des articles, des bons de sortie et de retour, des entrées et des mouvements de stock.": "A practical look at software for managing items, issue and return slips, receipts and inventory movements.",
  "Suivi des mouvements": "Movement Tracking",
  "Alertes de stock": "Stock Alerts",
  "Historique": "History",
  "Rapports": "Reports",
  "Voir la vidéo": "Watch Video",
  "Présentation du projet. Les fonctionnalités et adaptations sont définies selon les besoins de chaque entreprise.": "Project preview. Features and customization are defined according to each company’s requirements.",
  "05 / PARCOURS": "07 / BACKGROUND",
  "Du développement web à la conception d’outils métiers, un parcours nourri par la pratique.": "From web development to business software, a career shaped by practical experience.",
  "Gestion de stock · SGTM": "Inventory Management · SGTM",
  "Safi · Environnement chantier": "Safi · Construction Site",
  "Réceptions et contrôle BL/BR, bons de sortie et demandes internes, transferts inter-chantiers, inventaires hebdomadaires et mensuels, suivi des pièces et EPI, gestion sur SAP et Excel/VBA. Conception d’un outil de suivi de stock adapté aux opérations.": "Goods receiving and BL/BR checks, issue slips and internal requests, transfers between sites, weekly and monthly stock counts, spare parts and PPE tracking, SAP and Excel/VBA operations. Developed an inventory tracking tool for operational needs.",
  "Développeur WordPress · Freelance": "WordPress Developer · Freelance",
  "Développement de fonctionnalités spécifiques, personnalisation, maintenance, hébergement et optimisation.": "Custom feature development, customization, maintenance, hosting and optimization.",
  "Développeur Web · TWINS": "Web Developer · TWINS",
  "WordPress, Drupal, PHP, MySQL, intégration, SEO, performance et collaboration en méthodologie Agile.": "WordPress, Drupal, PHP, MySQL, integration, SEO, performance and Agile collaboration.",
  "Technicien en Développement Informatique": "IT Development Technician",
  "Technicien en Maintenance & Support Informatique et Réseaux": "IT & Network Maintenance and Support Technician",
  "Baccalauréat Sciences de la Vie et de la Terre": "High School Diploma in Life and Earth Sciences",
  "06 / CONTACT": "08 / CONTACT",
  "Vous recherchez un développeur web, un magasinier / gestionnaire de stock ou un système de gestion sur mesure ? Échangeons sur vos objectifs et trouvons une solution adaptée.": "Looking for a web developer, storekeeper / inventory manager or a custom management system? Let’s discuss your goals and find the right solution.",
  "Envoi sécurisé via FormSubmit. La première utilisation nécessite une confirmation de l’adresse de réception.": "Messages are sent through FormSubmit. The recipient email must be confirmed before the service can be used.",
  "Nom et prénom": "Full name",
  "Décrivez brièvement votre projet": "Briefly describe your project",
  "Réception & documents": "Receiving & Documentation",
  "Entrées, sorties & transferts": "Receipts, Issues & Transfers",
  "Inventaires & fiabilité": "Inventory & Accuracy",
  "SAP & Excel avancé": "SAP & Advanced Excel",
  "Seuils & réapprovisionnement": "Stock Thresholds & Replenishment",
  "Organisation & coordination": "Organization & Coordination",
  "Développement Web & Applications": "Web Development & Applications",
  "Développement de solutions sur mesure": "Custom Solution Development",
  "Votre projet": "Your Project",
  "E-MAIL": "EMAIL"
})) translations.set(fr,en);
for (const [fr,en] of Object.entries({"Tous droits réservés.":"All rights reserved.","Votre navigateur ne prend pas en charge cette vidéo.":"Your browser does not support this video.","Fermer la vidéo":"Close video","PROJET EN DÉTAIL":"PROJECT DETAILS","Contexte : besoins opérationnels de gestion des stocks sur le terrain.":"Context: operational inventory management needs.","Fonctions : bons de sortie et de retour, réceptions, historique, inventaires et alertes.":"Features: issue and return slips, receipts, history, inventory counts and alerts.","Technologies : Python, Tkinter et SQLite.":"Technologies: Python, Tkinter and SQLite.","Approche : solution personnalisable selon les procédures de chaque structure.":"Approach: customizable solution tailored to each organization.","Cadre : projet institutionnel réalisé au sein de TWINS.":"Context: institutional project carried out at TWINS.","Contribution : travaux de développement, intégration et maintenance web selon les missions confiées.":"Contribution: web development, integration and maintenance tasks as assigned.","Présentation : consulter le site public pour découvrir le résultat.":"Preview: visit the public website to explore the result.","Les technologies et le périmètre exact varient selon le projet.":"Technologies and scope vary by project.","Discuter du projet":"Discuss the project","Application métier développée pour faciliter le suivi quotidien des articles et des mouvements de stock.":"Business application developed to simplify daily item and stock movement tracking.","Contribution au développement web dans le cadre de mon expérience professionnelle chez TWINS.":"Web development contribution during my professional experience at TWINS."})) translations.set(fr,en);
const langToggle = document.querySelector('#langToggle');
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  if (textNode.parentElement?.closest('script,style,textarea,select,option')) continue;
  const original = textNode.nodeValue;
  const trimmed = original.trim();
  if (!trimmed) continue;
  let translated = original;
  if (translations.has(trimmed)) {
    translated = original.replace(trimmed, translations.get(trimmed));
  } else {
    const entries = [...translations.entries()].filter(([fr]) => fr.length > 6).sort((a,b) => b[0].length-a[0].length);
    for (const [fr,en] of entries) translated = translated.split(fr).join(en);
  }
  if (translated !== original) translatedNodes.push({node:textNode, original, translated});
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
