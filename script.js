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
const closeVideo = $('#closeVideo');
if (dialog && video) {
  document.querySelectorAll('[data-open-demo], #openVideo').forEach(button => button.addEventListener('click', () => {
    if (!dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
    video.play().catch(() => {});
  }));
  closeVideo?.addEventListener('click', () => dialog.close());
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
    : ['Contexte : réalisation institutionnelle menée au sein de TWINS pour ' + name + '.', 'Rôle : contribution aux travaux de développement web dans le cadre des missions chez TWINS.', 'Résultat : un site public consultable via le lien du projet.', 'Périmètre précis et technologies : non détaillés ici faute de documentation projet vérifiée.'];
  caseBody.replaceChildren();
  const ul = document.createElement('ul');
  details.forEach(detail => { const li = document.createElement('li'); li.textContent = detail; ul.append(li); });
  caseBody.append(ul);
  const publicLink = card?.querySelector('a.project-link');
  caseLink.href = !stock && publicLink ? publicLink.href : '#contact';
  caseLink.textContent = !stock && publicLink ? 'Visiter le site ↗' : 'Discuter du projet ↗';
  caseLink.target = !stock && publicLink ? '_blank' : '_self';
  if (!stock && publicLink) caseLink.rel = 'noopener noreferrer'; else caseLink.removeAttribute('rel');
  if (document.documentElement.lang === "en") {
    const nodes = document.createTreeWalker(caseDialog, NodeFilter.SHOW_TEXT);
    let node; while ((node=nodes.nextNode())) {const raw=node.nodeValue;const trimmed=raw.trim();if(translations.has(trimmed)) node.nodeValue=raw.replace(trimmed,translations.get(trimmed));else for(const [fr,en] of translations) if(fr.length>12 && node.nodeValue.includes(fr)) node.nodeValue=node.nodeValue.split(fr).join(en);}
  }
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
"Portfolio Professionnel":"Professional Portfolio",
"Développeur Web & Applications Desktop · Gestionnaire de Stock":"Web & Desktop App Developer · Stock Manager",
"👋 Bienvenue sur mon Portfolio":"👋 Welcome to My Portfolio",
"Développeur web avec":"Web developer with",
"plus de 7 ans de pratique en développement web et applications desktop":"over 7 years of experience in web and desktop application development",
", spécialisé dans les":", specializing in",
"applications métiers":"business applications",
", les sites professionnels et la digitalisation des processus. Je conçois des solutions avec":", professional websites and process digitization. I build solutions using",
", en m’appuyant sur une expérience concrète en":", drawing on hands-on experience in",
"gestion de stock et logistique BTP":"inventory management and construction logistics",
"Développement Web":"Web Development",
"& Applications":"& Applications",
"& Magasinier":"& Storekeeping",
"Solutions Digitales":"Digital Solutions",
"Développement Web & Applications":"Web & Application Development",
"Création de sites web, applications et solutions digitales adaptées aux besoins des entreprises.":"Websites, applications and digital solutions tailored to business needs.",
"Découvrir le Développement":"Explore Development",
"Gestion de Stock & Magasinier":"Inventory Management & Storekeeping",
"Gestion des stocks, des approvisionnements et des flux de matériels, avec une expérience terrain chez SGTM.":"Stock, supply and equipment flow management, backed by on-site experience at SGTM.",
"Découvrir la Gestion de Stock":"Explore Stock Management",
"Références institutionnelles":"Institutional References",
"Projets numériques à la une":"Featured Digital Projects",
"8 projets numériques.":"8 digital projects.",
"Des solutions concrètes.":"Practical solutions.",
"6 applications métiers et 2 sites web à découvrir : tourisme, immobilier, gestion BTP, flotte automobile, recrutement médical, commerce, optique et stock.":"Explore six business applications and two websites covering travel, real estate, construction, fleet management, healthcare recruitment, commerce, optics and inventory.",
"Explorer toutes les réalisations et le slider animé →":"Explore all projects and the animated slider →",
"Des projets web auxquels j’ai contribué dans le cadre de mon expérience chez TWINS, pour des organismes publics marocains.":"Web projects I contributed to while working at TWINS for Moroccan public organizations.",
"Développement & terrain.":"Digital and Field Experience.",
"Une approche complète.":"An End-to-End Approach.",
"Je développe des applications métiers et des sites web pensés pour simplifier le travail quotidien des entreprises.":"I build business applications and websites that simplify everyday operations.",
"Mon portfolio présente":"My portfolio features",
"8 projets numériques à la une (6 applications métiers et 2 sites web)":"8 featured digital projects (6 business applications and 2 websites)",
"5 références institutionnelles":"5 institutional references",
"et des réalisations web et des projets freelance. J’associe":"alongside web and freelance projects. I combine",
"à mon expérience de terrain en gestion de stock chez":"with my on-site inventory management experience at",
"Gestion de stock opérationnelle":"Operational Stock Management",
"Réceptions, sorties, inventaires et traçabilité des mouvements.":"Receiving, dispatch, stocktakes and movement tracking.",
"Digitalisation des processus":"Process Digitization",
"Projets BTP, santé, commerce, optique et stock ; automatisation Excel/VBA.":"Projects across construction, healthcare, commerce, optics and inventory, plus Excel/VBA automation.",
"Organisation, fiabilité des données et efficacité au quotidien.":"Organization, data reliability and everyday efficiency.",
"MON PORTFOLIO EN CHIFFRES":"MY PORTFOLIO IN NUMBERS",
"Des compétences au service de projets concrets.":"Skills Applied to Real Projects.",
"Développement web, applications desktop et compréhension des processus métiers.":"Web development, desktop applications and business process understanding.",
"Les technologies que j’utilise.":"Technologies I Use.",
"Filtrez les compétences par domaine.":"Filter skills by category.",
"MON PARCOURS":"MY BACKGROUND",
"Une expérience entre digital et terrain.":"Experience Across Digital and Field Operations.",
"Du développement web à la gestion opérationnelle sur chantier, un parcours qui associe création de solutions digitales et compréhension concrète des besoins métiers.":"From web development to on-site operations, combining digital solutions with a practical understanding of business needs.",
"Voir mon profil LinkedIn ↗":"View My LinkedIn Profile ↗",
"Expériences professionnelles":"Professional Experience",
"Formation & spécialisation":"Education & Specialization",
"Technicien spécialisé en développement informatique":"Specialized Technician in Software Development",
"Technicien en maintenance et support informatique & réseaux":"IT Maintenance and Network Support Technician",
"Sciences de la Vie et de la Terre":"Life and Earth Sciences",
"Une double expertise":"Two Complementary Areas of Expertise",
"Concevoir des outils numériques tout en comprenant les contraintes réelles des équipes sur le terrain.":"Building digital tools while understanding real-world constraints facing field teams.",
"08 / CURRICULUM VITAE":"08 / CURRICULUM VITAE",
"Mon parcours,":"My background,",
"en un coup d’œil.":"at a glance.",
"Développement web, applications métiers et gestion de stock : deux domaines complémentaires au service des entreprises.":"Web development, business applications and inventory management: complementary skills for companies.",
"Télécharger mon CV ↓":"Download My CV ↓",
"CONTACT · COLLABORATION":"CONTACT · COLLABORATION",
"Parlons de votre":"Let’s discuss your",
"prochain projet.":"next project.",
"Une idée de site web, une application ou un logiciel de gestion ? Expliquez-moi votre besoin et discutons de la meilleure solution.":"Have a website, application or management software idea? Tell me what you need and we can discuss the best solution.",
"TRAVAILLONS ENSEMBLE":"LET’S WORK TOGETHER",
"Une idée ?":"Have an idea?",
"Faisons-la avancer.":"Let’s bring it to life.",
"DEMANDE DE DEVIS":"REQUEST A QUOTE",
"Décrivez votre projet":"Describe Your Project",
"Quelques informations suffisent pour commencer.":"A few details are enough to get started.",
"Votre nom":"Your Name",
"Votre e-mail":"Your Email",
"Votre besoin":"What You Need",
"Budget estimé":"Estimated Budget",
"Délai souhaité":"Desired Timeline",
"Entreprise (facultatif)":"Company (Optional)",
"Votre message":"Your Message",
"Demander un devis par e-mail ↗":"Request a Quote by Email ↗",
"Envoyer la demande sur WhatsApp ↗":"Send Request on WhatsApp ↗",
"Retour en haut ↑":"Back to Top ↑",
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
for (const [fr,en] of Object.entries({"Portfolio Professionnel":"Professional Portfolio","👋 Bienvenue sur mon Portfolio":"👋 Welcome to my Portfolio","✉ Me contacter":"✉ Contact me","↓ Télécharger mon CV":"↓ Download my CV","Développement Web":"Web Development","Solutions Digitales":"Digital Solutions","sur Mesure":"Custom Built","Développement & Gestion de Stock":"Development & Inventory Management","Web & Applications.":"Web & Applications.","Magasinier &":"Storekeeper &","Gestionnaire de Stock.":"Inventory Manager.","Rangement du dépôt, suivi des EPI et consommables, répartition des tâches et échanges avec demandeurs et responsables chantier.":"Warehouse organization, PPE and consumables tracking, task allocation and coordination with requesters and site managers.","SOLUTIONS NUMÉRIQUES SUR MESURE":"CUSTOM DIGITAL SOLUTIONS","En fonction de vos besoins, je peux concevoir des outils personnalisés pour simplifier vos opérations, centraliser vos données et automatiser les tâches répétitives.":"Depending on your needs, I can develop custom tools to simplify operations, centralize information and automate repetitive tasks.","Gestion de stock & magasin":"Inventory & Warehouse Management","Articles, entrées/sorties, inventaires, alertes, rapports":"Items, receipts/issues, inventory counts, alerts and reports","Gestion des achats & commandes":"Purchasing & Order Management","Demandes, commandes, fournisseurs et suivi":"Requests, orders, suppliers and tracking","Suivi des équipements & matériel":"Equipment & Materials Tracking","Affectations, mouvements, états et traçabilité":"Assignments, movements, condition and traceability","Gestion administrative":"Administrative Management","Documents, formulaires, tableaux de bord et exports":"Documents, forms, dashboards and exports","Outils Excel / VBA personnalisés":"Custom Excel / VBA Tools","Automatisation des bons, recherches, calculs et reporting":"Automated documents, searches, calculations and reporting","Applications métier sur demande":"On-Demand Business Applications","Solutions adaptées à votre secteur et à vos procédures":"Solutions tailored to your industry and workflows","Exemples de solutions proposées sur mesure ; leur réalisation et leurs fonctionnalités dépendent du cahier des charges.":"Examples of custom solutions; delivery and features depend on the agreed project specifications.","Besoin d’un magasinier, d’un gestionnaire de stock ou d’un système de gestion personnalisé ?":"Need a storekeeper, inventory manager or custom management system?","Je peux intervenir sur la gestion quotidienne de votre stock et concevoir des outils de gestion adaptés à votre activité.":"I can support daily inventory operations and develop management tools tailored to your business.","Me contacter ↗":"Contact me ↗","Découvrir le projet ↗":"Explore the project ↗","Détails du projet ↗":"Project details ↗","FREELANCE · WORDPRESS":"FREELANCE · WORDPRESS","Sites & développements sur mesure":"Websites & Custom Development","Personnalisation de thèmes, intégration de fonctionnalités, hooks PHP, optimisation et maintenance de sites WordPress.":"Theme customization, feature integration, PHP hooks, optimization and maintenance of WordPress websites.","Missions freelance · 2025":"Freelance Projects · 2025","Les références institutionnelles présentées correspondent à des projets réalisés dans le cadre de mon activité professionnelle chez TWINS, et non à des contrats individuels directs.":"The institutional references shown are projects I worked on during my employment at TWINS, not direct individual client contracts.","Discuter de ce service ↗":"Discuss this service ↗","▶ Voir la vidéo":"▶ Watch video","Demander une démonstration ↗":"Request a demo ↗","Sciences de la Vie et de la Terre":"Life and Earth Sciences","Envoyer un e-mail ↗":"Send an email ↗","Gestion de stock":"Inventory management","Envoyer mon message ↗":"Send my message ↗","Parlons de votre projet ↗":"Let's discuss your project ↗","Retour en haut ↑":"Back to top ↑","4 ans":"4 years","Projets institutionnels":"Institutional projects","Réception & BL/BR":"Receiving & BL/BR","Entrées / Sorties":"Receipts / Issues","Inventaires":"Inventory counts","Organisation":"Organization","Gestion Stock Pro":"Gestion Stock Pro","Formation":"Education","Baccalauréat":"High School Diploma","Fès, Maroc":"Fez, Morocco","TÉLÉPHONE":"PHONE","LOCALISATION":"LOCATION","Votre besoin":"Your needs","Création de site web":"Website development","Application de gestion":"Management application","Autre collaboration":"Other collaboration","Tous les projets":"All projects","Sites institutionnels":"Institutional websites","Logiciel métier":"Business software","Web & freelance":"Web & freelance","Fermer":"Close","Ouvrir le menu":"Open menu","Changer le thème":"Change theme","Changer de langue":"Change language","Filtrer les projets":"Filter projects","Cycle de gestion des stocks":"Inventory management cycle","Lire la démonstration Gestion Stock Pro":"Play Gestion Stock Pro demo"})) translations.set(fr,en);
translations.set('& Applications','& Applications');translations.set('& Magasinier','& Storekeeping');
for (const [fr,en] of Object.entries({"WordPress, Drupal et développement d’applications":"WordPress, Drupal and application development","SGTM — Projet WAVE II à Safi":"SGTM — WAVE II Project in Safi","ISMOTICA · Fès":"ISMOTICA · Fez","ISTA Gestion · Fès":"ISTA Gestion · Fez","Lycée Al Adarissa · Fès":"Al Adarissa High School · Fez","Omar Morjani. Tous droits réservés.":"Omar Morjani. All rights reserved.","LINKEDIN":"LINKEDIN","WhatsApp ↗":"WhatsApp ↗","Solutions Digitales sur Mesure":"Custom Digital Solutions","Développement Web & Applications":"Web Development & Applications","Gestion de Stock & Magasinier":"Inventory Management & Storekeeping","Professionnel polyvalent, alliant le":"Versatile professional combining","de solutions web et logicielles à une solide expérience en":"of web and software solutions with solid experience in",". J’apporte des solutions concrètes, digitales et opérationnelles pour optimiser l’organisation et la performance des entreprises.":". I deliver practical digital and operational solutions to improve business organization and performance.","Visiter le site ↗":"Visit website ↗","Projet web":"Web project","Mode sombre":"Dark mode","Mode clair":"Light mode","Activer le mode sombre":"Enable dark mode","Activer le mode clair":"Enable light mode","Changer le thème":"Change theme","Demander une démonstration ↗":"Request a demo ↗","Expérience chez TWINS":"Experience at TWINS"})) translations.set(fr,en);
for(const [fr,en] of Object.entries({"07 / GALERIE LOGICIEL":"07 / SOFTWARE GALLERY","Gestion Stock Pro ":"Gestion Stock Pro ","en détail.":"in detail.","Explorez les principales fonctionnalités de mon logiciel de gestion de stock. La capture du tableau de bord est issue de la démonstration ; les autres vues sont décrites sans reproduire d’écrans non vérifiés.":"Explore the main features of my inventory software. The dashboard screenshot comes from the demo; other features are described without presenting unverified screens.","Tableau de bord":"Dashboard","Bons de sortie":"Stock issue slips","Réceptions BL":"Delivery receipts","Historique":"History","Vue d’ensemble des articles, mouvements, entrées et indicateurs de stock.":"Overview of items, movements, receipts and inventory indicators.","Demander une présentation ↗":"Request a presentation ↗","08 / CURRICULUM VITAE":"08 / RESUME","Mon parcours, ":"My experience, ","en un coup d’œil.":"at a glance.","Développement web, applications métiers et gestion de stock : deux domaines complémentaires au service des entreprises.":"Web development, business applications and inventory management: complementary skills supporting businesses.","Sites institutionnels, WordPress, Drupal, intégration et maintenance.":"Institutional websites, WordPress, Drupal, integration and maintenance.","Personnalisation, fonctionnalités sur mesure, hébergement et optimisation.":"Customization, tailored features, hosting and optimization.","Réceptions, bons, inventaires, SAP, Excel/VBA et suivi des flux chantier.":"Receiving, stock slips, inventory counts, SAP, Excel/VBA and site material tracking.","↓ Télécharger CV français (PDF)":"↓ Download French CV (PDF)","↓ Download English CV (PDF)":"↓ Download English CV (PDF)","Contacter Omar sur WhatsApp":"Contact Omar on WhatsApp","Fonctionnalités du logiciel":"Software features","Galerie Gestion Stock Pro":"Gestion Stock Pro gallery","Capture du tableau de bord Gestion Stock Pro":"Gestion Stock Pro dashboard screenshot"})) translations.set(fr,en);
for(const [fr,en] of Object.entries({"Contexte : réalisation institutionnelle menée au sein de TWINS pour ":"Context: institutional project carried out at TWINS for ","Rôle : contribution aux travaux de développement web dans le cadre des missions chez TWINS.":"Role: contributed to web development as part of my responsibilities at TWINS.","Résultat : un site public consultable via le lien du projet.":"Outcome: a public website accessible via the project link.","Périmètre précis et technologies : non détaillés ici faute de documentation projet vérifiée.":"Exact scope and technologies are not listed without verified project documentation."})) translations.set(fr,en);
for(const [fr,en] of Object.entries({"DÉVELOPPEMENT WEB & APPLICATIONS":"WEB DEVELOPMENT & APPLICATIONS","Des solutions digitales ":"Custom digital ","sur mesure.":"solutions.","Sites web, applications, plateformes institutionnelles et outils métiers adaptés à vos besoins.":"Websites, applications, institutional platforms and business tools tailored to your needs.","Discuter de votre projet ↗":"Discuss your project ↗","GESTION DE STOCK & MAGASINIER":"INVENTORY MANAGEMENT & STOREKEEPING","La gestion des stocks ":"Inventory management ","au service du terrain.":"for real-world operations.","Réceptions, sorties, inventaires, SAP, Excel/VBA et solutions de suivi des stocks.":"Receiving, issues, inventory counts, SAP, Excel/VBA and inventory tracking solutions.","Me contacter ↗":"Contact me ↗"})) translations.set(fr,en);
for(const [fr,en] of Object.entries({"Ouvrir React Optisis":"Open React Optisis","Application métier · Optique":"Business application · Optical practice","PROJET PERSONNEL · REACT":"PERSONAL PROJECT · REACT","React Optisis — Gestion d'opticien":"React Optisis — Optical Practice Management","Application web de gestion pour opticien, développée avec React. Un exemple de solution métier personnalisée, au-delà de la gestion de stock.":"React-based web management application for an optical practice. An example of custom business software beyond inventory management.","Application Web":"Web Application","Optique":"Optical Practice","Découvrir l'application ↗":"Explore the application ↗"})) translations.set(fr,en);
// Complete homepage translations for recently added portfolio sections.
for (const [fr,en] of Object.entries({"Développeur Web & Applications Desktop · Gestionnaire de Stock":"Web & Desktop Application Developer · Inventory Manager","Développeur web avec":"Web developer with","plus de 7 ans de pratique en développement web et applications desktop":"over 7 years of experience in web and desktop application development",", spécialisé dans les":", specializing in","applications métiers":"business applications",", les sites professionnels et la digitalisation des processus. Je conçois des solutions avec":", professional websites and process digitalization. I build solutions with",", en m’appuyant sur une expérience concrète en":", drawing on practical experience in","gestion de stock et logistique BTP":"inventory management and construction logistics","Développement web & applications desktop":"Web development & desktop applications","Références institutionnelles":"Institutional references","Applications métiers présentées":"Business applications showcased","Développement & gestion de stock":"Development & inventory management","PROJETS À LA UNE · 06 APPLICATIONS":"FEATURED PROJECTS · 06 APPLICATIONS","6 applications.":"6 applications.","6 applications logicielles":"6 software applications","GESTION DE FLOTTE · REACT":"FLEET MANAGEMENT · REACT","Fleet Manager Pro":"Fleet Manager Pro","Véhicules, chauffeurs, maintenance, carburant, coûts et alertes.":"Vehicles, drivers, maintenance, fuel, costs and alerts.","GESTION DE FLOTTE · DÉMO":"FLEET MANAGEMENT · DEMO","Véhicules, chauffeurs, maintenance et carburant":"Vehicles, drivers, maintenance and fuel","Application web de gestion de flotte automobile et d’engins : tableau de bord, suivi des véhicules, maintenance préventive, carburant, dépenses, alertes d’échéance et export CSV. Démo interactive avec données locales.":"Web app for fleet and heavy equipment management: dashboards, vehicle tracking, preventive maintenance, fuel, expenses, due-date alerts and CSV exports. Interactive demo with local data.","Des solutions concrètes.":"Practical solutions.","Découvrez mes projets personnels de développement logiciel : gestion BTP, recrutement médical, commerce, optique et gestion des stocks.":"Explore my software development projects: construction management, healthcare recruitment, commerce, optical services and inventory management.","Tableau de bord, chantiers, stock, bons, personnel et finances.":"Dashboard, worksites, inventory, documents, staff and finances.","RECRUTEMENT SANTÉ · REACT":"HEALTHCARE RECRUITMENT · REACT","Portail de recrutement médical vers l’Allemagne, en démonstration.":"Demo healthcare recruitment portal for Germany.","Clients, produits, devis, factures et suivi des paiements.":"Customers, products, quotes, invoices and payment tracking.","Application métier de gestion pour l’activité d’opticien.":"Business management application for optical practices.","LOGICIEL DE STOCK · PYTHON":"INVENTORY SOFTWARE · PYTHON","Réceptions, sorties, bons, inventaires et suivi des mouvements.":"Receipts, stock issues, documents, inventory counts and movement tracking.","Explorer toutes les réalisations et le slider animé →":"Explore all projects and the animated carousel →","RÉFÉRENCES INSTITUTIONNELLES":"INSTITUTIONAL REFERENCES","5 références.":"5 references.","5 secteurs d’activité.":"5 industries.","Des projets web auxquels j’ai contribué dans le cadre de mon expérience chez TWINS, pour des organismes publics marocains.":"Web projects I contributed to while working at TWINS for Moroccan public institutions.","SÉCURITÉ SANITAIRE":"FOOD SAFETY","Sécurité sanitaire alimentaire":"Food safety","Investissement régional":"Regional investment","DÉVELOPPEMENT RÉGIONAL":"REGIONAL DEVELOPMENT","Développement territorial":"Territorial development","ÉNERGIE":"ENERGY","Efficacité énergétique":"Energy efficiency","MÉDIAS":"MEDIA","Découvrir les références et leur contexte →":"Explore the references and their context →","Développement & terrain.":"Development & field experience.","Une approche complète.":"A comprehensive approach.","Je développe des applications métiers et des sites web pensés pour simplifier le travail quotidien des entreprises.":"I build business applications and websites designed to simplify companies' daily operations.","Mon portfolio présente":"My portfolio features","5 références institutionnelles":"5 institutional references","et des réalisations web et des projets freelance. J’associe":"alongside web work and freelance projects. I combine","à mon expérience de terrain en gestion de stock chez":"with hands-on inventory management experience at","Projets BTP, santé, commerce, optique et stock ; automatisation Excel/VBA.":"Construction, healthcare, commerce, optical and inventory projects; Excel/VBA automation.","Des compétences au service de projets concrets.":"Skills applied to real-world projects.","Développement web, applications desktop et compréhension des processus métiers.":"Web development, desktop applications and understanding of business processes.","Années de pratique web & desktop":"Years of web & desktop experience","Les technologies que j’utilise.":"Technologies I work with.","Filtrez les compétences par domaine.":"Filter skills by area.","Bases de données locales":"Local databases","Versioning & déploiement":"Version control & deployment","Une expérience entre digital et terrain.":"Experience bridging digital and field operations.","Contribution à des sites et portails institutionnels, intégration web, WordPress, Drupal et maintenance.":"Contributed to institutional websites and portals, web integration, WordPress, Drupal and maintenance.","Développement Web · Freelance & projets personnels":"Web Development · Freelance & personal projects","Sites WordPress, applications React/TypeScript et logiciels Python, de la conception à la démonstration.":"WordPress sites, React/TypeScript apps and Python software, from design to demo.","Gestion de stock · SGTM, WAVE II Safi":"Inventory management · SGTM, WAVE II Safi","Réceptions, bons, inventaires, SAP et suivi des flux ; expérience terrain utilisée pour concevoir des outils métier.":"Receipts, documents, inventory counts, SAP and movement tracking; field experience applied to building business tools.","Budget estimé":"Estimated budget","À discuter":"To discuss","Moins de 5 000 MAD":"Under 5,000 MAD","Plus de 30 000 MAD":"Over 30,000 MAD","Délai souhaité":"Preferred timeline","1 à 3 mois":"1 to 3 months","Plus de 3 mois":"Over 3 months"})) translations.set(fr,en);
// Additional development and inventory page translations.
for (const [fr,en] of Object.entries({"Des solutions digitales":"Digital solutions","Mes projets défilent automatiquement · survolez pour explorer à votre rythme":"Projects scroll automatically · hover to explore at your own pace","Voir l’étude détaillée du projet →":"View the detailed case study →","APPLICATION BTP · DÉMO":"CONSTRUCTION APP · DEMO","Gestion des chantiers, stock, bons et équipes":"Manage worksites, inventory, documents and teams","Une interface moderne de gestion BTP : suivi des chantiers, des stocks, des bons, du personnel, des engins et des finances. Démonstration interactive avec données locales.":"A modern construction management interface: track worksites, inventory, documents, staff, equipment and finances. Interactive demo with local data.","Explorer la démo ↗":"Explore the demo ↗","PLATEFORME SANTÉ · RECRUTEMENT":"HEALTHCARE PLATFORM · RECRUITMENT","Recrutement médical vers l’Allemagne":"Healthcare recruitment for Germany","Plateforme de recrutement dédiée aux professionnels de santé intéressés par l’Allemagne, avec espace candidats et administration. Les fonctions de collecte nécessitent Supabase.":"Recruitment platform for healthcare professionals interested in Germany, with candidate and administration areas. Data collection features require Supabase.","Découvrir le site ↗":"Visit the website ↗","Application métier · React":"Business application · React","Application de gestion commerciale avec tableau de bord, clients, produits, devis, factures et suivi des paiements. Démonstration V1.":"Business management application with dashboard, customers, products, quotes, invoices and payment tracking. Version 1 demo.","Voir la démonstration ↗":"View the demo ↗","Le Centre Régional d’Investissement Fès-Meknès accompagne les investisseurs et les entreprises : guichet unique, démarches administratives, opportunités d’investissement et promotion économique de la région.":"The Fès-Meknès Regional Investment Center supports investors and businesses through a one-stop shop, administrative procedures, investment opportunities and regional economic promotion.","L’Office National de Sécurité Sanitaire des Produits Alimentaires veille à la sécurité sanitaire des aliments, à la santé animale et végétale, aux contrôles, à la réglementation et aux autorisations sanitaires.":"The National Office for Food Safety oversees food safety, animal and plant health, inspections, regulations and health authorizations.","Portail du Centre Régional d’Investissement Laâyoune-Sakia El Hamra : accompagnement des porteurs de projets, opportunités d’investissement, informations territoriales et services aux entreprises.":"Laâyoune-Sakia El Hamra Regional Investment Center portal: support for entrepreneurs, investment opportunities, regional information and business services.","L’Agence Marocaine pour l’Efficacité Énergétique promeut les économies d’énergie à travers des programmes, audits, formations, conseils techniques et actions de sensibilisation.":"The Moroccan Agency for Energy Efficiency promotes energy savings through programs, audits, training, technical guidance and awareness campaigns.","L’Agence Maghreb Arabe Presse est l’agence nationale marocaine de presse. Elle diffuse l’actualité nationale et internationale sous forme de textes, photos, vidéos et contenus multimédias.":"Maghreb Arab Press is Morocco's national news agency. It publishes domestic and international news in text, photos, videos and multimedia.","La gestion des stocks":"Inventory management","Excel avancé / VBA":"Advanced Excel / VBA"})) translations.set(fr,en);
// Project case study translations, including descriptions and disclaimers.
for (const [fr,en] of Object.entries({"Tous les projets":"All projects","← Tous les projets":"← All projects","Portfolio Professionnel":"Professional Portfolio","Portfolio professionnel · 2026":"Professional portfolio · 2026","Retour aux projets ↑":"Back to projects ↑","Discuter d’un projet similaire →":"Discuss a similar project →","Application web · Gestion BTP":"Web application · Construction management","Application web · Recrutement santé":"Web application · Healthcare recruitment","Application web · Gestion commerciale":"Web application · Sales management","Application web · Optique":"Web application · Optical practice","Application desktop · Gestion de stock":"Desktop application · Inventory management","Technologies :":"Technologies:","Voir la démonstration ↗":"View live demo ↗","Code source GitHub ↗":"GitHub source code ↗","APPLICATION WEB":"WEB APPLICATION","APPLICATION DESKTOP":"DESKTOP APPLICATION","ÉTUDE DE PROJET":"PROJECT CASE STUDY","Du besoin à la solution":"From challenge to solution","Tableau de bord métier pour centraliser le pilotage d’un chantier.":"Business dashboard for centralized construction site management.","Regrouper des informations dispersées sur les chantiers, le matériel, les équipes et les finances. Une démonstration React avec modules de gestion et données locales pour explorer les flux métiers.":"Bring together scattered information about worksites, equipment, teams and finances. A React demo with management modules and local data to explore business workflows.","Regrouper des informations dispersées sur les chantiers, le matériel, les équipes et les finances.":"Bring together scattered information about worksites, equipment, teams and finances.","Une démonstration React avec modules de gestion et données locales pour explorer les flux métiers.":"A React demo with management modules and local data to explore business workflows.","01 · Chantiers, personnel et engins":"01 · Worksites, staff and equipment","02 · Stocks, bons et fournisseurs":"02 · Inventory, documents and suppliers","03 · Tableau de bord et finances":"03 · Dashboard and finances","Portail de recrutement pour les professionnels de santé intéressés par l’Allemagne.":"Recruitment portal for healthcare professionals interested in Germany.","Présenter les opportunités et organiser le parcours des candidats sur une interface claire. Interface web React avec parcours candidat et administration ; certaines fonctions nécessitent une configuration Supabase.":"Present opportunities and organize the candidate journey in a clear interface. A React website with candidate and administration areas; some features require Supabase configuration.","Présenter les opportunités et organiser le parcours des candidats sur une interface claire.":"Present opportunities and organize the candidate journey in a clear interface.","Interface web React avec parcours candidat et administration ; certaines fonctions nécessitent une configuration Supabase.":"React web interface with candidate and administration areas; some features require Supabase configuration.","01 · Présentation des opportunités":"01 · Opportunities overview","02 · Parcours de candidature":"02 · Application process","03 · Interface d’administration prévue":"03 · Planned admin interface","Démonstration V1 d’un outil de gestion commerciale pour les petites structures.":"Version 1 demo of a sales management tool for small businesses.","Suivre clients, catalogue, devis et factures dans un environnement cohérent. Application métier avec tableau de bord et parcours de gestion commerciale.":"Manage customers, catalog, quotes and invoices in a unified environment. A business application with a dashboard and sales workflows.","Suivre clients, catalogue, devis et factures dans un environnement cohérent.":"Manage customers, catalog, quotes and invoices in a unified environment.","Application métier avec tableau de bord et parcours de gestion commerciale.":"Business application with a dashboard and sales workflows.","01 · Clients et produits":"01 · Customers and products","02 · Devis et factures":"02 · Quotes and invoices","03 · Suivi des paiements":"03 · Payment tracking","Projet de gestion d’activité pour un opticien.":"Business management project for an optical practice.","Faciliter le suivi des informations métier et l’organisation quotidienne d’une activité d’optique. Interface d’administration React pour centraliser les tâches et visualiser les données.":"Simplify business information tracking and daily organization for an optical practice. A React admin interface to centralize tasks and visualize data.","Faciliter le suivi des informations métier et l’organisation quotidienne d’une activité d’optique.":"Simplify business information tracking and daily organization for an optical practice.","Interface d’administration React pour centraliser les tâches et visualiser les données.":"React admin interface to centralize tasks and visualize data.","01 · Interface de gestion métier":"01 · Business management interface","02 · Tableaux de bord":"02 · Dashboards","03 · Organisation des informations":"03 · Information organization","Logiciel desktop conçu pour structurer le suivi des stocks et les documents de magasin.":"Desktop software designed to organize inventory tracking and warehouse documents.","Suivre les réceptions, sorties et mouvements sans disperser les informations dans plusieurs fichiers. Une application Python avec base SQLite, écrans de saisie et historique, pensée pour le travail quotidien d’un magasin.":"Track receipts, issues and inventory movements without scattering information across files. A Python application with SQLite, entry forms and history, designed for daily warehouse operations.","Suivre les réceptions, sorties et mouvements sans disperser les informations dans plusieurs fichiers.":"Track receipts, issues and inventory movements without scattering information across files.","Une application Python avec base SQLite, écrans de saisie et historique, pensée pour le travail quotidien d’un magasin.":"A Python application with SQLite, entry forms and history, designed for daily warehouse operations.","01 · Réceptions et sorties de stock":"01 · Inventory receipts and issues","02 · Bons et historique des mouvements":"02 · Documents and movement history","03 · Inventaires et suivi des seuils":"03 · Inventory counts and threshold monitoring","Un module intégré dans la présentation du projet.":"A module included in the project showcase.","Démonstration utilisant des données locales ; illustration de chantier non contractuelle.":"Demo using local data; construction imagery is illustrative only.","La collecte réelle de candidatures requiert la configuration Supabase et les garanties de confidentialité appropriées.":"Collecting real applications requires Supabase configuration and appropriate privacy safeguards.","Version de démonstration V1 ; les fonctions ne doivent pas être considérées comme un logiciel de facturation certifié.":"Version 1 demo; its features should not be considered certified invoicing software.","Projet de démonstration ; les fonctionnalités disponibles peuvent varier selon la version publiée.":"Demo project; available features may vary by published version.","Projet personnel ; les fonctions présentées dépendent de la version de démonstration.":"Personal project; the features shown depend on the demo version."})) translations.set(fr,en);
const langToggle = document.querySelector('#langToggle');
const cvDownloadLink = document.querySelector('a[href="assets/CV_Omar_Morjani.pdf"]');

for (const [fr,en] of Object.entries({"Web + Terrain":"Digital + Field","PROJETS À LA UNE · 08 PROJETS NUMÉRIQUES":"FEATURED WORK · 08 DIGITAL PROJECTS","APERÇU DU SITE EN DIRECT":"LIVE WEBSITE PREVIEW","SITE WEB · REACT":"WEBSITE · REACT","TOURISME · REACT / TYPESCRIPT":"TRAVEL · REACT / TYPESCRIPT","Voyages internationaux, circuits, recherche, favoris et réservation simulée.":"International travel, tours, search, favorites and simulated booking.","IMMOBILIER · REACT / TYPESCRIPT":"REAL ESTATE · REACT / TYPESCRIPT","Présentation immobilière premium et navigation responsive.":"Premium real estate presentation and responsive navigation.","GESTION BTP · REACT":"CONSTRUCTION MANAGEMENT · REACT","GESTION OPTIQUE · REACT":"OPTICAL MANAGEMENT · REACT","INVESTISSEMENT":"INVESTMENT","Presse et information":"Press and Information","Applications React/TypeScript, sites WordPress/Drupal et interfaces professionnelles.":"React/TypeScript applications, WordPress/Drupal sites and professional interfaces.","TECH STACK":"TECH STACK","Desktop & automatisation":"Desktop & Automation","Applications web":"Web Applications","Interfaces interactives":"Interactive Interfaces","Sites & CMS":"Websites & CMS","Portails institutionnels":"Institutional Portals","Personnalisation & backend":"Customization & Backend","Logiciels desktop":"Desktop Software","Interfaces desktop":"Desktop Interfaces","Automatisation":"Automation","Gestion de stock & logistique chantier":"Inventory & Construction Site Logistics","Gestion des réceptions et sorties, bons BL/BR/BS, transferts inter-chantiers, inventaires et traçabilité du matériel. Suivi sur SAP et Excel/VBA, coordination des besoins et développement d’outils de gestion adaptés au terrain.":"Managing receipts, dispatches, BL/BR/BS documents, inter-site transfers, stocktakes and equipment traceability. SAP and Excel/VBA reporting, coordination and custom management tools.","Logistique BTP":"Construction Logistics","Depuis 2025 · Projets indépendants":"Since 2025 · Independent Projects","Développeur web & applications métiers":"Web & Business Application Developer","Freelance · Projets personnels":"Freelance · Personal Projects","Développement de sites WordPress, d’interfaces React/TypeScript et de logiciels Python/SQLite : gestion de stock, chantiers, flotte automobile et outils métier.":"Developing WordPress websites, React/TypeScript interfaces and Python/SQLite software for inventory, construction sites, fleets and business tools.","Développeur web":"Web Developer","Conception, intégration et maintenance de sites et portails institutionnels. Développement WordPress et Drupal, personnalisation PHP, optimisation SEO et performance, collaboration sur des projets clients.":"Designing, developing and maintaining institutional sites and portals with WordPress, Drupal and PHP, SEO optimization and client collaboration.","Développement logiciel, programmation, bases de données et conception d’applications.":"Software development, programming, databases and application design.","Maintenance des systèmes, support informatique et fondamentaux des réseaux.":"Systems maintenance, IT support and networking fundamentals.","Consulter le parcours détaillé →":"View Detailed Background →","Développement web, applications sur mesure, outils métiers et optimisation de vos solutions digitales.":"Web development, custom applications, business tools and digital solution optimization.","Sites web":"Websites","Applications":"Applications","ÉCRIVEZ-MOI":"EMAIL ME","DISCUTEZ SUR WHATSAPP":"CHAT ON WHATSAPP","RÉSEAU PROFESSIONNEL":"PROFESSIONAL NETWORK","⌖ &nbsp; Basé à Fès, Maroc · Collaboration à distance":"⌖ Based in Fez, Morocco · Remote Collaboration","Application desktop":"Desktop Application","Site institutionnel / CMS":"Institutional Website / CMS","Site de voyage / tourisme":"Travel / Tourism Website","Site immobilier":"Real Estate Website","Refonte et optimisation web":"Website Redesign & Optimization","Moins d’un mois":"Less than One Month","Formulaire e-mail via FormSubmit. Le bouton WhatsApp prépare votre message avant envoi, sans transmission automatique.":"Email form powered by FormSubmit. The WhatsApp button prepares your message without sending it automatically.","Maintenance":"Maintenance","PORTFOLIO / RÉALISATIONS 2026":"PORTFOLIO / PROJECTS 2026","Des projets qui":"Projects that","répondent à des besoins réels.":"solve real needs.","Découvrez 8 projets numériques à la une (6 applications métiers et 2 sites web), ainsi que 5 références institutionnelles et des réalisations freelance. Chaque projet présente un savoir-faire concret, une interface soignée et une approche orientée utilisateur.":"Explore eight featured digital projects (six business apps and two websites), five institutional references and freelance work. Each project demonstrates practical skills and a user-focused approach.","Projets numériques":"Digital Projects","Applications métiers ·":"Business Applications ·","Parlons de votre projet":"Let’s Discuss Your Project","✦ PROJET À LA UNE · 01 / 04":"✦ FEATURED PROJECT · 01 / 04","Une application de gestion de flotte : véhicules, chauffeurs, maintenance, carburant et alertes.":"A fleet management app covering vehicles, drivers, maintenance, fuel and alerts.","Tester la démo ↗":"Try the Demo ↗","✦ PROJET À LA UNE · 02 / 04":"✦ FEATURED PROJECT · 02 / 04","Pilotez les chantiers, les équipes, les tâches et les ressources depuis un tableau de bord centralisé.":"Manage construction sites, teams, tasks and resources from a centralized dashboard.","✦ PROJET À LA UNE · 03 / 04":"✦ FEATURED PROJECT · 03 / 04","Une plateforme moderne de recrutement pour les professionnels et les établissements de santé.":"A modern recruitment platform for healthcare professionals and organizations.","Recrutement":"Recruitment","Voir les détails ↗":"View Details ↗","✦ PROJET À LA UNE · 04 / 04":"✦ FEATURED PROJECT · 04 / 04","Une solution métier pour les entrées, sorties, inventaires et le suivi des articles en stock.":"A business solution for receipts, dispatches, stocktakes and inventory tracking.","EXPLOREZ MON TRAVAIL":"EXPLORE MY WORK","Filtrez par domaine pour découvrir les réalisations":"Filter projects by category","Applications métiers":"Business Applications","Site d’agence de voyages : catalogue, filtres, favoris et réservation simulée.":"Travel agency website: catalog, filters, favorites and simulated booking.","Vitrine immobilière premium et consultation de biens responsive.":"Premium real estate website with responsive property browsing.","APPLICATION":"APPLICATION","Gestion des articles, mouvements de stock, bons de sortie et inventaires.":"Manage inventory items, movements, issue slips and stocktakes.","Pilotage des chantiers, équipes, stock et finances depuis une interface centralisée.":"Manage sites, teams, stock and finances from one interface.","Plateforme web dédiée au recrutement et aux candidatures dans le secteur de la santé.":"Web platform for healthcare recruitment and applications.","Gestion des véhicules, chauffeurs, carburant et maintenance préventive.":"Vehicle, driver, fuel and preventive maintenance management.","Suivi des clients, produits, devis, factures et paiements.":"Track customers, products, quotes, invoices and payments.","Application de gestion optique : clients, produits et opérations métier.":"Optical business management: customers, products and operations.","INSTITUTIONNEL":"INSTITUTIONAL","Site institutionnel · TWINS":"Institutional Website · TWINS","Plateforme institutionnelle dédiée à l’investissement régional.":"Institutional platform for regional investment.","Référence institutionnelle dans le domaine de la sécurité sanitaire.":"Institutional reference in health and food safety.","Portail régional d’information et d’accompagnement des investisseurs.":"Regional information and investor support portal.","Référence institutionnelle consacrée à l’efficacité énergétique.":"Institutional reference focused on energy efficiency.","Référence institutionnelle dans le domaine de l’information.":"Institutional reference in the information sector.","FREELANCE":"FREELANCE","Sites WordPress sur mesure":"Custom WordPress Websites","Intégration, personnalisation et maintenance de sites web professionnels.":"Development, customization and maintenance of professional websites."})) translations.set(fr,en);
for (const [fr,en] of Object.entries({"Site web · Tourisme":"Website · Travel","Plateforme de voyages et séjours : destinations internationales, circuits au Maroc, filtres, favoris et demandes de réservation de démonstration.":"Travel and holiday platform featuring international destinations, Morocco tours, filters, favorites and demo booking requests.","PROJET WEB":"WEB PROJECT","Voyages & destinations":"Travel & Destinations","VOIR LE PROJET":"VIEW PROJECT","SITE WEB · DÉMO":"WEBSITE · DEMO","01 · Destinations & inspirations":"01 · Destinations & Inspiration","Découvrir des voyages internationaux, des circuits marocains et des séjours spirituels.":"Discover international travel, Morocco tours and spiritual journeys.","02 · Recherche & filtres":"02 · Search & Filters","Explorer le catalogue par destination, type de voyage, transport et budget.":"Browse by destination, trip type, transportation and budget.","03 · Expérience utilisateur":"03 · User Experience","Slider animé, fiches détaillées, favoris et parcours de réservation simulé.":"Animated slider, detailed listings, favorites and simulated booking flow.","Projet de démonstration : offres, tarifs et réservations indicatifs, sans paiement réel. Visuel de présentation illustratif, non issu d’une capture d’écran.":"Demo project: illustrative offers, prices and bookings, with no real payments. Presentation artwork is illustrative, not a screenshot.","Site web · Immobilier":"Website · Real Estate","Vitrine immobilière moderne conçue pour mettre en valeur les biens et proposer une expérience de découverte simple et responsive.":"Modern real estate showcase designed to highlight properties with an intuitive, responsive browsing experience.","Immobilier & architecture":"Real Estate & Architecture","01 · Présentation immobilière":"01 · Real Estate Showcase","Valoriser les annonces et la présentation visuelle des biens.":"Highlight listings and visual property presentation.","02 · Navigation responsive":"02 · Responsive Navigation","Parcours adapté aux ordinateurs, tablettes et smartphones.":"Experience adapted to desktop, tablet and mobile devices.","03 · Démonstration web":"03 · Website Demo","Expérience front-end accessible directement depuis GitHub Pages.":"Front-end demo available directly through GitHub Pages.","Projet de démonstration : aucune transaction immobilière réelle n’est proposée. Visuel de présentation illustratif, non issu d’une capture d’écran.":"Demo project: no real property transactions are offered. Presentation artwork is illustrative, not a screenshot.","Application web · Gestion de flotte":"Web Application · Fleet Management","Démonstration V1 d’un outil de gestion de flotte pour les petites structures.":"V1 demo of a fleet management tool for small organizations.","Suivre clients, catalogue, devis et factures dans un environnement cohérent. Application métier avec tableau de bord et parcours de gestion de flotte.":"Manage fleet-related records in a consistent interface with a dashboard and fleet workflows.","01 · Véhicules et chauffeurs":"01 · Vehicles & Drivers","Répertoire des véhicules et engins, immatriculations, statuts, kilométrage et affectations.":"Vehicle and equipment register, plates, status, mileage and assignments.","Application métier avec tableau de bord et parcours de gestion de flotte.":"Business application with a dashboard and fleet management workflows.","03 · Reporting et démonstration":"03 · Reporting & Demo","Indicateurs, graphiques, exports CSV et sauvegarde locale des données de démonstration.":"KPIs, charts, CSV exports and local storage of demo data.","Version de démonstration locale : sans authentification ni synchronisation serveur. Les modules Documents et Missions restent à développer.":"Local demo without authentication or server synchronization. Documents and Missions modules remain under development."})) translations.set(fr,en);
for (const [fr,en] of Object.entries({"Navigation principale":"Main navigation","Switch to English":"Switch to English","Aperçu du site MD Voyage 2.0":"MD Voyage 2.0 website preview","Aperçu du site ImmoVision":"ImmoVision website preview","Visiter ONSSA":"Visit ONSSA","Visiter CRI Fès-Meknès":"Visit CRI Fez-Meknes","Visiter CRI Laâyoune":"Visit CRI Laayoune","Visiter AMEE":"Visit AMEE","Visiter MAP":"Visit MAP","Illustration du développement web et de la gestion des stocks":"Web development and inventory management illustration","Filtrer les technologies":"Filter technologies","vous@entreprise.com":"you@company.com","Nom de votre entreprise":"Your company name","Démonstration Gestion Stock Pro":"Gestion Stock Pro demonstration","Projets à la une":"Featured projects","Voir Fleet Manager Pro":"View Fleet Manager Pro","Voir Chantier Manager Pro":"View Chantier Manager Pro","Voir Health Service":"View Health Service","Voir Gestion Stock Pro":"View Gestion Stock Pro","Projet précédent":"Previous project","Projet suivant":"Next project","Afficher Fleet Manager Pro":"Show Fleet Manager Pro","Afficher Chantier Manager Pro":"Show Chantier Manager Pro","Afficher Health Service":"Show Health Service","Afficher Gestion Stock Pro":"Show Gestion Stock Pro","Mettre le défilement en pause":"Pause carousel","Mes projets et réalisations":"My projects and work","Découvrir MD Voyage 2.0":"Explore MD Voyage 2.0","Découvrir ImmoVision":"Explore ImmoVision","Découvrir Gestion Stock Pro":"Explore Gestion Stock Pro","Découvrir Chantier Manager Pro":"Explore Chantier Manager Pro","Découvrir Health Service":"Explore Health Service","Découvrir Fleet Manager Pro":"Explore Fleet Manager Pro","Découvrir Gestion Commerciale Pro":"Explore Gestion Commerciale Pro","Découvrir React Optisis":"Explore React Optisis","Découvrir CRI Fès-Meknès":"Explore CRI Fez-Meknes","Découvrir ONSSA":"Explore ONSSA","Découvrir Laâyoune Invest":"Explore Laayoune Invest","Découvrir AMEE":"Explore AMEE","Découvrir MAP":"Explore MAP","Découvrir Sites WordPress sur mesure":"Explore Custom WordPress Websites","Illustration du projet MD VOYAGE":"MD Voyage project illustration","Illustration du projet IMMOVISION":"ImmoVision project illustration","Choisir la langue":"Choose language","Fermer le menu":"Close menu","Ouvrir le menu":"Open menu"})) translations.set(fr,en);
translations.set("Développement web & applications desktop","Web & desktop application development");
const translatedNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  if (textNode.parentElement?.closest('script,style,textarea')) continue;
  const original = textNode.nodeValue;
  if (!original.trim()) continue;
  const trimmed = original.trim();
  let translated = original;
  if (translations.has(trimmed)) {
    translated = original.replace(trimmed, translations.get(trimmed));
  } else {
    // Longest-first replacement handles paragraphs with inline <strong>/<span> tags.
    for (const [fr,en] of [...translations.entries()].filter(([fr]) => fr.length > 7).sort((a,b)=>b[0].length-a[0].length)) {
      if (translated.includes(fr)) translated = translated.split(fr).join(en);
    }
  }
  translatedNodes.push({node:textNode,original,translated});
}
const placeholders = [['#contactName','Nom et prénom','Full name'],['#contactEmail','vous@entreprise.com','you@company.com'],['#contactMessage','Décrivez brièvement votre projet','Briefly describe your project']];
const attributes = [];
document.querySelectorAll('[aria-label],[title],[alt]').forEach(el => {
  for (const attr of ['aria-label','title','alt']) {
    const original=el.getAttribute(attr);
    if (!original) continue;
    let translated=translations.get(original) || original;
    if (translated===original) {
      for (const [fr,en] of [...translations.entries()].sort((a,b)=>b[0].length-a[0].length)) {
        if(fr.length>7 && translated.includes(fr)) translated=translated.split(fr).join(en);
      }
    }
    attributes.push({el,attr,original,translated});
  }
});
const originalTitle=document.title;
const englishTitle=originalTitle.replace('Étude de projet','Project case study').replace('Développement Web & Applications','Web Development & Applications').replace('Gestion de Stock & Magasinier','Inventory Management & Warehouse Operations').replace('Développeur Web | Gestionnaire de Stock & Solutions Digitales','Web Developer | Inventory Manager & Digital Solutions');
const originalDescription=document.querySelector('meta[name="description"]')?.content || '';
const englishDescription=translations.get(originalDescription) || (originalDescription.includes('Omar Morjani') ? 'Omar Morjani — Web developer and inventory management professional. WordPress, Drupal, SAP, Excel and custom business software.' : originalDescription);
function applyLanguage(language) {
  document.documentElement.lang=language;
  translatedNodes.forEach(({node,original,translated})=>{node.nodeValue=language==='en'?translated:original;});
  attributes.forEach(({el,attr,original,translated})=>el.setAttribute(attr,language==='en'?translated:original));
  placeholders.forEach(([selector,fr,en])=>{const el=document.querySelector(selector);if(el)el.placeholder=language==='en'?en:fr;});
  document.title=language==='en'?englishTitle:originalTitle;
  if(cvDownloadLink) cvDownloadLink.href=language==='en'?'assets/CV_Omar_Morjani_EN.pdf':'assets/CV_Omar_Morjani.pdf';
  const description=document.querySelector('meta[name="description"]');
  if(description) description.content=language==='en'?englishDescription:originalDescription;
  if(langToggle){langToggle.textContent=language==='en'?'FR':'EN';langToggle.setAttribute('aria-label',language==='en'?'Passer en français':'Switch to English');}
  refreshTheme();
  try{localStorage.setItem('om-language',language);}catch(_){}
}
let savedLanguage='fr';
try {savedLanguage=localStorage.getItem('om-language')==='en'?'en':'fr';} catch (_) {}
applyLanguage(savedLanguage);
langToggle?.addEventListener('click',()=>applyLanguage(document.documentElement.lang==='fr'?'en':'fr'));

/* Feature gallery: only a verified dashboard screenshot is displayed; other tabs are descriptive. */
const galleryContent = {
 dashboard:{fr:['Tableau de bord','Vue d’ensemble des articles, mouvements, entrées et indicateurs de stock.'],en:['Dashboard','Overview of items, movements, receipts and inventory indicators.']},
 sortie:{fr:['Bons de sortie','Création et suivi des bons de sortie et des retours, avec traçabilité des quantités.'],en:['Stock issue slips','Create and track issue and return slips with quantity traceability.']},
 reception:{fr:['Réceptions BL','Enregistrement des livraisons, quantités reçues et mouvements d’entrée en stock.'],en:['Delivery receipts','Record deliveries, received quantities and incoming stock movements.']},
 historique:{fr:['Historique','Consultation des opérations enregistrées et suivi chronologique des mouvements.'],en:['History','Review recorded operations and chronological stock movements.']}
};
document.querySelectorAll('[data-gsp]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.gsp, data=galleryContent[key]; if(!data)return;
 document.querySelectorAll('[data-gsp]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const en=document.documentElement.lang==='en', lang=en?'en':'fr';
 const image=document.querySelector('#gspImage'),detail=document.querySelector('#gspDetail');
 if(image)image.hidden=key!=='dashboard';
 if(detail){detail.hidden=key==='dashboard';detail.replaceChildren();if(key!=='dashboard'){const icon=document.createElement('span');icon.className='gsp-detail-icon';icon.textContent={sortie:'▤',reception:'▣',historique:'◷'}[key];const heading=document.createElement('strong');heading.textContent=data[lang][0];const p=document.createElement('p');p.textContent=data[lang][1];detail.append(icon,heading,p);}}
 const heading=document.querySelector('#gspHeading'),desc=document.querySelector('#gspDescription');
 if(heading)heading.textContent=data[lang][0];if(desc)desc.textContent=data[lang][1];
}));
document.querySelector('#langToggle')?.addEventListener('click',()=>{
 const active=document.querySelector('[data-gsp].active');if(active)active.click();
});
