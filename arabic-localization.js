/* Arabic localization layer - isolated from the existing FR/EN translator. */
(() => {
'use strict';
const key='om-language', root=document.documentElement;
const dictionary={
'Accueil':'الرئيسية','Développement':'التطوير','Gestion de Stock':'إدارة المخزون','Projets':'المشاريع','Contact':'تواصل معي',
'Portfolio Professionnel':'الملف المهني','Parlons projet':'لنتحدث عن مشروعك',
'Bienvenue sur mon Portfolio':'مرحباً بكم في معرض أعمالي',
'Développeur Web & Applications Desktop · Gestionnaire de Stock':'مطور مواقع وتطبيقات سطح المكتب · مسؤول إدارة المخزون',
'Me contacter':'تواصل معي','Télécharger mon CV':'تحميل سيرتي الذاتية',
'Développement Web & Applications':'تطوير المواقع والتطبيقات',
'Gestion de Stock & Magasinier':'إدارة المخزون وأمين المستودع',
'Solutions Digitales':'حلول رقمية','sur Mesure':'حسب الطلب',
'Création de sites web, applications et solutions digitales adaptées aux besoins des entreprises.':'إنشاء مواقع وتطبيقات وحلول رقمية تناسب احتياجات الشركات.',
'Gestion des stocks, des approvisionnements et des flux de matériels, avec une expérience terrain chez SGTM.':'إدارة المخزون والتوريد وحركة المعدات، بخبرة ميدانية في SGTM.',
'Découvrir le Développement':'اكتشف خدمات التطوير','Découvrir la Gestion de Stock':'اكتشف إدارة المخزون',
'Réception & BL/BR':'الاستلام وسندات التسليم والإرجاع','Entrées / Sorties':'الإدخالات والإخراجات','Inventaires':'الجرد','Organisation':'التنظيم',
'Développement web & applications desktop':'تطوير المواقع وتطبيقات سطح المكتب',
'Références institutionnelles':'مراجع مؤسساتية','Projets numériques à la une':'مشاريع رقمية مميزة',
'Développement & gestion de stock':'التطوير وإدارة المخزون',
'Des solutions concrètes.':'حلول عملية.','8 projets numériques.':'8 مشاريع رقمية.',
'PROJETS À LA UNE · 08 PROJETS NUMÉRIQUES':'مشاريع مميزة · 08 مشاريع رقمية',
'RÉFÉRENCES INSTITUTIONNELLES':'مراجع مؤسساتية',
'5 références.':'5 مراجع.','5 secteurs d’activité.':'5 قطاعات نشاط.',
'PROJET EN DÉTAIL':'تفاصيل المشروع',
'Parlons de votre projet':'لنتحدث عن مشروعك','Retour en haut':'العودة إلى الأعلى',
'Tous droits réservés.':'جميع الحقوق محفوظة.',
'APPLICATION WEB':'تطبيق ويب','APPLICATION DESKTOP':'تطبيق سطح المكتب','SITE WEB · REACT':'موقع إلكتروني · React',
'APERÇU DU SITE EN DIRECT':'معاينة مباشرة للموقع',
'TOURISME · REACT / TYPESCRIPT':'السياحة · React / TypeScript',
'IMMOBILIER · REACT / TYPESCRIPT':'العقارات · React / TypeScript',
'GESTION DE FLOTTE · REACT':'إدارة الأسطول · React',
'GESTION BTP · REACT':'إدارة أوراش البناء · React',
'RECRUTEMENT SANTÉ · REACT':'التوظيف الصحي · React',
'GESTION COMMERCIALE · REACT':'الإدارة التجارية · React',
'GESTION OPTIQUE · REACT':'إدارة البصريات · React',
'LOGICIEL DE STOCK · PYTHON':'برنامج إدارة المخزون · Python',
'Voyages internationaux, circuits, recherche, favoris et réservation simulée.':'رحلات دولية وجولات سياحية وبحث ومفضلة ومحاكاة للحجز.',
'Présentation immobilière premium et navigation responsive.':'عرض عقاري احترافي وتصفح متجاوب مع الأجهزة.',
'Véhicules, chauffeurs, maintenance, carburant, coûts et alertes.':'المركبات والسائقون والصيانة والوقود والتكاليف والتنبيهات.',
'Tableau de bord, chantiers, stock, bons, personnel et finances.':'لوحة التحكم والأوراش والمخزون والسندات والموظفون والمالية.',
'Portail de recrutement médical vers l’Allemagne, en démonstration.':'بوابة تجريبية للتوظيف الطبي في ألمانيا.',
'Clients, produits, devis, factures et suivi des paiements.':'العملاء والمنتجات وعروض الأسعار والفواتير وتتبع المدفوعات.',
'Application métier de gestion pour l’activité d’opticien.':'تطبيق متخصص لتسيير نشاط محلات البصريات.',
'Réceptions, sorties, bons, inventaires et suivi des mouvements.':'الاستلام والإخراج والسندات والجرد وتتبع الحركات.',
'SÉCURITÉ SANITAIRE':'السلامة الصحية','INVESTISSEMENT':'الاستثمار','DÉVELOPPEMENT RÉGIONAL':'التنمية الجهوية',
'ÉNERGIE':'الطاقة','Sécurité sanitaire alimentaire':'السلامة الصحية للمواد الغذائية',
'Investissement régional':'الاستثمار الجهوي','Développement territorial':'التنمية الترابية','Efficacité énergétique':'النجاعة الطاقية',
'Fermer la vidéo':'إغلاق الفيديو','Votre navigateur ne prend pas en charge cette vidéo.':'متصفحك لا يدعم تشغيل هذا الفيديو.',
'Fermer':'إغلاق','Envoyer':'إرسال','Nom':'الاسم','Message':'الرسالة','Email':'البريد الإلكتروني',
'Voir le projet':'عرض المشروع','Voir les projets':'عرض المشاريع','En savoir plus':'اعرف المزيد',
'Expérience':'الخبرة','Compétences':'المهارات','Services':'الخدمات','À propos':'نبذة عني',
'Tableau de bord':'لوحة التحكم','Historique':'السجل','Bons de sortie':'سندات الإخراج','Réceptions BL':'استلامات التسليم'
};
Object.assign(dictionary,{
"← Tous les projets":"← جميع المشاريع",
"Site web · Tourisme":"موقع إلكتروني · السياحة",
"Site web · Immobilier":"موقع إلكتروني · العقارات",
"Application web · Gestion de flotte":"تطبيق ويب · إدارة الأسطول",
"Application web · Gestion BTP":"تطبيق ويب · إدارة أوراش البناء",
"Application web · Recrutement santé":"تطبيق ويب · التوظيف الصحي",
"Application web · Gestion commerciale":"تطبيق ويب · الإدارة التجارية",
"Application web · Optique":"تطبيق ويب · البصريات",
"Application desktop · Gestion de stock":"تطبيق سطح المكتب · إدارة المخزون",
"Technologies :":"التقنيات:",
"Voir la démonstration ↗":"مشاهدة النسخة التجريبية ↗",
"Code source GitHub ↗":"الكود المصدري على GitHub ↗",
"PROJET WEB":"مشروع ويب",
"VOIR LE PROJET":"عرض المشروع",
"SITE WEB · DÉMO":"موقع إلكتروني · تجريبي",
"ÉTUDE DE PROJET":"دراسة المشروع",
"Du besoin à la solution":"من الحاجة إلى الحل",
"Discuter d’un projet similaire →":"ناقش مشروعاً مماثلاً ←",
"Portfolio professionnel · 2026":"معرض الأعمال المهني · 2026",
"Retour aux projets ↑":"العودة إلى المشاريع ↑",
"APPLICATION WEB":"تطبيق ويب",
"APPLICATION DESKTOP":"تطبيق سطح المكتب",
"Voyages & destinations":"السفر والوجهات",
"Immobilier & architecture":"العقارات والهندسة المعمارية",
"Plateforme de voyages et séjours : destinations internationales, circuits au Maroc, filtres, favoris et demandes de réservation de démonstration.":"منصة للسفر والإقامات: وجهات دولية وجولات في المغرب وفلاتر ومفضلة وطلبات حجز تجريبية.",
"01 · Destinations & inspirations":"01 · الوجهات والإلهام",
"Découvrir des voyages internationaux, des circuits marocains et des séjours spirituels.":"اكتشاف الرحلات الدولية والجولات المغربية والرحلات الروحية.",
"02 · Recherche & filtres":"02 · البحث والتصفية",
"Explorer le catalogue par destination, type de voyage, transport et budget.":"تصفح العروض حسب الوجهة ونوع الرحلة ووسيلة النقل والميزانية.",
"03 · Expérience utilisateur":"03 · تجربة المستخدم",
"Slider animé, fiches détaillées, favoris et parcours de réservation simulé.":"عارض صور متحرك وبطاقات تفصيلية ومفضلة ومسار حجز تجريبي.",
"Projet de démonstration : offres, tarifs et réservations indicatifs, sans paiement réel. Visuel de présentation illustratif, non issu d’une capture d’écran.":"مشروع تجريبي: العروض والأسعار والحجوزات توضيحية، دون دفع حقيقي. الصورة توضيحية وليست لقطة شاشة.",
"Vitrine immobilière moderne conçue pour mettre en valeur les biens et proposer une expérience de découverte simple et responsive.":"واجهة عقارية عصرية لعرض العقارات وتجربة تصفح سهلة ومتجاوبة.",
"01 · Présentation immobilière":"01 · عرض العقارات",
"Valoriser les annonces et la présentation visuelle des biens.":"إبراز الإعلانات والعرض المرئي للعقارات.",
"02 · Navigation responsive":"02 · تصفح متجاوب",
"Parcours adapté aux ordinateurs, tablettes et smartphones.":"تجربة مناسبة للحواسيب والأجهزة اللوحية والهواتف.",
"03 · Démonstration web":"03 · نسخة ويب تجريبية",
"Expérience front-end accessible directement depuis GitHub Pages.":"واجهة أمامية متاحة مباشرة عبر GitHub Pages.",
"Projet de démonstration : aucune transaction immobilière réelle n’est proposée. Visuel de présentation illustratif, non issu d’une capture d’écran.":"مشروع تجريبي لا يقدم معاملات عقارية حقيقية. الصورة توضيحية وليست لقطة شاشة.",
"Démonstration V1 d’un outil de gestion de flotte pour les petites structures.":"نسخة تجريبية أولى لأداة إدارة الأسطول للمؤسسات الصغيرة.",
"Suivre clients, catalogue, devis et factures dans un environnement cohérent. Application métier avec tableau de bord et parcours de gestion de flotte.":"تتبع العملاء والكتالوج وعروض الأسعار والفواتير في بيئة موحدة، مع لوحة تحكم لإدارة الأسطول.",
"01 · Véhicules et chauffeurs":"01 · المركبات والسائقون",
"Répertoire des véhicules et engins, immatriculations, statuts, kilométrage et affectations.":"سجل المركبات والآليات وأرقام التسجيل والحالات والمسافات والتعيينات.",
"02 · Devis et factures":"02 · عروض الأسعار والفواتير",
"Application métier avec tableau de bord et parcours de gestion de flotte.":"تطبيق أعمال بلوحة تحكم ومسار لإدارة الأسطول.",
"03 · Reporting et démonstration":"03 · التقارير والعرض التجريبي",
"Indicateurs, graphiques, exports CSV et sauvegarde locale des données de démonstration.":"مؤشرات ورسوم بيانية وتصدير CSV وحفظ محلي للبيانات التجريبية.",
"Version de démonstration locale : sans authentification ni synchronisation serveur. Les modules Documents et Missions restent à développer.":"نسخة تجريبية محلية دون تسجيل دخول أو مزامنة مع الخادم. وحدتا المستندات والمهام قيد التطوير.",
"Tableau de bord métier pour centraliser le pilotage d’un chantier.":"لوحة تحكم مهنية لتوحيد إدارة ورش البناء.",
"Regrouper des informations dispersées sur les chantiers, le matériel, les équipes et les finances. Une démonstration React avec modules de gestion et données locales pour explorer les flux métiers.":"جمع بيانات الأوراش والمعدات والفرق والمالية في مكان واحد. عرض React تجريبي بوحدات إدارة وبيانات محلية.",
"01 · Chantiers, personnel et engins":"01 · الأوراش والعمال والآليات",
"Regrouper des informations dispersées sur les chantiers, le matériel, les équipes et les finances.":"جمع بيانات الأوراش والمعدات والفرق والمالية في مكان واحد.",
"02 · Stocks, bons et fournisseurs":"02 · المخزون والسندات والموردون",
"Une démonstration React avec modules de gestion et données locales pour explorer les flux métiers.":"عرض React تجريبي بوحدات إدارة وبيانات محلية لاستكشاف سير العمل.",
"03 · Tableau de bord et finances":"03 · لوحة التحكم والمالية",
"Un module intégré dans la présentation du projet.":"وحدة مدمجة في عرض المشروع.",
"Démonstration utilisant des données locales ; illustration de chantier non contractuelle.":"عرض تجريبي ببيانات محلية؛ صورة الورش توضيحية.",
"Portail de recrutement pour les professionnels de santé intéressés par l’Allemagne.":"بوابة توظيف للمهنيين الصحيين المهتمين بالعمل في ألمانيا.",
"Présenter les opportunités et organiser le parcours des candidats sur une interface claire. Interface web React avec parcours candidat et administration ; certaines fonctions nécessitent une configuration Supabase.":"عرض الفرص وتنظيم مسار المرشحين بواجهة واضحة. تطبيق React للمرشحين والإدارة؛ بعض الوظائف تتطلب إعداد Supabase.",
"01 · Présentation des opportunités":"01 · عرض الفرص",
"Présenter les opportunités et organiser le parcours des candidats sur une interface claire.":"عرض الفرص وتنظيم مسار المرشحين بواجهة واضحة.",
"02 · Parcours de candidature":"02 · مسار الترشيح",
"Interface web React avec parcours candidat et administration ; certaines fonctions nécessitent une configuration Supabase.":"واجهة React للمرشحين والإدارة؛ بعض الوظائف تتطلب إعداد Supabase.",
"03 · Interface d’administration prévue":"03 · واجهة الإدارة المخطط لها",
"La collecte réelle de candidatures requiert la configuration Supabase et les garanties de confidentialité appropriées.":"جمع الترشيحات الحقيقية يتطلب إعداد Supabase وضمانات الخصوصية المناسبة.",
"Démonstration V1 d’un outil de gestion commerciale pour les petites structures.":"نسخة تجريبية أولى لأداة إدارة تجارية للمؤسسات الصغيرة.",
"Suivre clients, catalogue, devis et factures dans un environnement cohérent. Application métier avec tableau de bord et parcours de gestion commerciale.":"تتبع العملاء والمنتجات وعروض الأسعار والفواتير في بيئة موحدة مع لوحة تحكم للإدارة التجارية.",
"01 · Clients et produits":"01 · العملاء والمنتجات",
"Suivre clients, catalogue, devis et factures dans un environnement cohérent.":"تتبع العملاء والمنتجات وعروض الأسعار والفواتير في بيئة موحدة.",
"Application métier avec tableau de bord et parcours de gestion commerciale.":"تطبيق أعمال بلوحة تحكم ومسار للإدارة التجارية.",
"03 · Suivi des paiements":"03 · تتبع المدفوعات",
"Version de démonstration V1 ; les fonctions ne doivent pas être considérées comme un logiciel de facturation certifié.":"نسخة تجريبية أولى، وليست برنامج فوترة معتمداً.",
"Projet de gestion d’activité pour un opticien.":"مشروع لتسيير نشاط محل بصريات.",
"Faciliter le suivi des informations métier et l’organisation quotidienne d’une activité d’optique. Interface d’administration React pour centraliser les tâches et visualiser les données.":"تسهيل تتبع بيانات العمل والتنظيم اليومي لمحل البصريات. واجهة إدارة React لتجميع المهام وعرض البيانات.",
"01 · Interface de gestion métier":"01 · واجهة الإدارة المهنية",
"Faciliter le suivi des informations métier et l’organisation quotidienne d’une activité d’optique.":"تسهيل تتبع بيانات العمل والتنظيم اليومي لمحل البصريات.",
"02 · Tableaux de bord":"02 · لوحات التحكم",
"Interface d’administration React pour centraliser les tâches et visualiser les données.":"واجهة إدارة React لتجميع المهام وعرض البيانات.",
"03 · Organisation des informations":"03 · تنظيم المعلومات",
"Projet de démonstration ; les fonctionnalités disponibles peuvent varier selon la version publiée.":"مشروع تجريبي؛ قد تختلف الوظائف حسب النسخة المنشورة.",
"Logiciel desktop conçu pour structurer le suivi des stocks et les documents de magasin.":"برنامج سطح مكتب لتنظيم تتبع المخزون ووثائق المستودع.",
"01 · Réceptions et sorties de stock":"01 · استلام وإخراج المخزون",
"Suivre les réceptions, sorties et mouvements sans disperser les informations dans plusieurs fichiers.":"تتبع الاستلام والإخراج والحركات دون تشتيت البيانات بين ملفات متعددة.",
"02 · Bons et historique des mouvements":"02 · السندات وسجل الحركات",
"Une application Python avec base SQLite, écrans de saisie et historique, pensée pour le travail quotidien d’un magasin.":"تطبيق Python بقاعدة SQLite وشاشات إدخال وسجل حركات مصمم للعمل اليومي بالمستودع.",
"03 · Inventaires et suivi des seuils":"03 · الجرد وتتبع الحدود الدنيا",
"Projet personnel ; les fonctions présentées dépendent de la version de démonstration.":"مشروع شخصي؛ الوظائف المعروضة تختلف حسب النسخة التجريبية."
});
Object.assign(dictionary,{"👋 Bienvenue sur mon Portfolio":"👋 مرحباً بكم في معرض أعمالي","✉ Me contacter":"✉ تواصل معي","↓ Télécharger mon CV":"↓ تحميل سيرتي الذاتية","Développement Web":"تطوير المواقع","& Applications":"والتطبيقات","& Magasinier":"وأمين المستودع","Web + Terrain":"التطوير والخبرة الميدانية","6 applications métiers et 2 sites web à découvrir : tourisme, immobilier, gestion BTP, flotte automobile, recrutement médical, commerce, optique et stock.":"اكتشف 6 تطبيقات أعمال وموقعين إلكترونيين في السياحة والعقارات والبناء وإدارة الأساطيل والتوظيف الصحي والتجارة والبصريات والمخزون.","DÉVELOPPEMENT WEB & APPLICATIONS":"تطوير المواقع والتطبيقات","Des solutions digitales":"حلول رقمية","Sites web, applications, plateformes institutionnelles et outils métiers adaptés à vos besoins.":"مواقع وتطبيقات ومنصات مؤسساتية وأدوات مهنية تناسب احتياجاتكم.","Discuter de votre projet ↗":"لنتحدث عن مشروعك ↗","02 / DÉVELOPPEMENT WEB & LOGICIEL":"02 / تطوير المواقع والبرمجيات","Web & Applications.":"المواقع والتطبيقات.","Des plateformes institutionnelles aux outils métiers sur mesure : conception, intégration, personnalisation et maintenance.":"من المنصات المؤسساتية إلى أدوات الأعمال المخصصة: التصميم والتطوير والتخصيص والصيانة.","Sites web & plateformes":"المواقع والمنصات","Développement de sites institutionnels, vitrines et sites WordPress ou Drupal, interfaces responsive et fonctionnalités spécifiques.":"تطوير مواقع المؤسسات والمواقع التعريفية باستخدام WordPress أو Drupal بواجهات متجاوبة ووظائف مخصصة.","Applications & automatisation":"التطبيقات والأتمتة","Création d’applications de bureau et d’outils internes adaptés aux processus de chaque entreprise : formulaires, bases de données, historiques et rapports.":"إنشاء تطبيقات سطح المكتب والأدوات الداخلية المناسبة لعمليات كل شركة: نماذج وقواعد بيانات وسجلات وتقارير.","Maintenance & optimisation":"الصيانة والتحسين","Amélioration des performances et du SEO, corrections, sécurisation, hébergement, gestion des noms de domaine et suivi technique.":"تحسين الأداء وSEO والإصلاحات والأمان والاستضافة وإدارة النطاقات والمتابعة التقنية.","PORTFOLIO / RÉALISATIONS 2026":"معرض الأعمال / إنجازات 2026","Des projets qui":"مشاريع","répondent à des besoins réels.":"تلبي احتياجات حقيقية.","Projets numériques":"المشاريع الرقمية","Applications métiers ·":"تطبيقات الأعمال ·","Tous les projets":"جميع المشاريع","Filtrez par domaine pour découvrir les réalisations":"اختر المجال لاكتشاف المشاريع","Applications métiers":"تطبيقات الأعمال","Sites institutionnels":"المواقع المؤسساتية","Web & freelance":"الويب والعمل الحر","EXPLOREZ MON TRAVAIL":"اكتشف أعمالي","Découvrir le projet ↗":"اكتشف المشروع ↗","Tester la démo ↗":"جرب النسخة التجريبية ↗","Voir les détails ↗":"عرض التفاصيل ↗","Découvrir le projet":"اكتشف المشروع","Visiter le site":"زيارة الموقع","GESTION DE STOCK & MAGASINIER":"إدارة المخزون وأمين المستودع","La gestion des stocks":"إدارة المخزون","au service du terrain.":"في خدمة العمل الميداني.","Réceptions, sorties, inventaires, SAP, Excel/VBA et solutions de suivi des stocks.":"الاستلام والإخراج والجرد وSAP وExcel/VBA وحلول تتبع المخزون.","Me contacter ↗":"تواصل معي ↗","03 / GESTION DE STOCK & MAGASINIER":"03 / إدارة المخزون وأمين المستودع","Magasinier &":"أمين المستودع و","Gestionnaire de Stock.":"مسؤول إدارة المخزون.","Gestion opérationnelle de magasin et dépôt, suivi des articles, documents de stock, inventaires, outils SAP et Excel, et organisation des flux sur chantier.":"الإدارة اليومية للمستودع وتتبع المواد ووثائق المخزون والجرد باستخدام SAP وExcel وتنظيم الحركة داخل الورش.","EXPÉRIENCE TERRAIN · SGTM · CHANTIER":"خبرة ميدانية · SGTM · ورش البناء","De la réception à l’inventaire, je maîtrise le cycle du stock.":"من الاستلام إلى الجرد، أتابع دورة المخزون كاملة.","Gestion des EPI":"إدارة معدات الوقاية","Réception & contrôle":"الاستلام والمراقبة","Stockage & suivi":"التخزين والتتبع","Sorties & transferts":"الإخراج والتحويلات","Inventaires & reporting":"الجرد والتقارير","Réception & documents":"الاستلام والوثائق","Entrées, sorties & transferts":"الإدخالات والإخراجات والتحويلات","Inventaires & fiabilité":"الجرد ودقة المخزون","SAP & Excel avancé":"SAP وExcel المتقدم","Seuils & réapprovisionnement":"الحدود الدنيا وإعادة التزويد","Organisation & coordination":"التنظيم والتنسيق","SOLUTIONS NUMÉRIQUES SUR MESURE":"حلول رقمية حسب الطلب","Je développe aussi d’autres systèmes de gestion, pas seulement Gestion Stock Pro.":"أطور أنظمة إدارة أخرى، وليس فقط Gestion Stock Pro.","Gestion de stock & magasin":"إدارة المخزون والمستودع","Gestion des achats & commandes":"إدارة المشتريات والطلبات","Suivi des équipements & matériel":"تتبع المعدات والآليات","Gestion administrative":"الإدارة الإدارية","Outils Excel / VBA personnalisés":"أدوات Excel / VBA مخصصة","Applications métier sur demande":"تطبيقات أعمال حسب الطلب","06 / DÉMONSTRATION":"06 / عرض تجريبي","07 / GALERIE LOGICIEL":"07 / معرض البرنامج","Suivi des mouvements":"تتبع الحركات","Alertes de stock":"تنبيهات المخزون","▶ Voir la vidéo":"▶ مشاهدة الفيديو","Demander une démonstration ↗":"طلب عرض تجريبي ↗","Demander une présentation ↗":"طلب تقديم توضيحي ↗","05 / PARCOURS":"05 / المسار المهني","Une expérience":"خبرة","complémentaire.":"متكاملة.","Expérience professionnelle":"الخبرة المهنية","Gestion de stock · SGTM":"إدارة المخزون · SGTM","Safi · Environnement chantier":"آسفي · بيئة أوراش البناء","Développeur WordPress · Freelance":"مطور WordPress · عمل حر"});
const phrases=[
['Développeur web avec','مطور ويب بخبرة'],['plus de 7 ans de pratique en développement web et applications desktop','تزيد عن 7 سنوات في تطوير المواقع وتطبيقات سطح المكتب'],
['spécialisé dans les','ومتخصص في'],['applications métiers','تطبيقات الأعمال'],['les sites professionnels et la digitalisation des processus','المواقع الاحترافية ورقمنة العمليات'],
['Je conçois des solutions avec','أطور حلولاً باستخدام'],['en m’appuyant sur une expérience concrète en','بالاعتماد على خبرة عملية في'],
['gestion de stock et logistique BTP','إدارة المخزون ولوجستيك البناء'],
['6 applications métiers et 2 sites web à découvrir','اكتشف 6 تطبيقات أعمال وموقعين إلكترونيين'],
['Des projets web auxquels j’ai contribué dans le cadre de mon expérience chez TWINS, pour des organismes publics marocains.','مشاريع ويب ساهمت في إنجازها خلال عملي لدى TWINS لصالح مؤسسات عمومية مغربية.'],
['Explorer toutes les réalisations et le slider animé','استكشف جميع الأعمال ومعرض المشاريع المتحرك']
];
const original=new WeakMap();
const attrOriginal=new WeakMap();
const ignore=new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','SVG','IFRAME']);
function translate(value){const trimmed=value.trim();if(!trimmed)return value;
 let result=dictionary[trimmed];
 if(!result){result=trimmed;for(const [fr,ar] of phrases)result=result.split(fr).join(ar);}
 return value.replace(trimmed,result);
}
function paint(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let node;while((node=walker.nextNode())){if(node.parentElement?.closest('[data-translate-skip],script,style,noscript,code,pre,svg,iframe,#om-chat-panel'))continue;
 if(!original.has(node))original.set(node,node.nodeValue);
 const base=original.get(node);if(root.lang==='ar')node.nodeValue=translate(base);
 }
 document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
 if(el.closest('#om-chat-panel'))return;
 if(!attrOriginal.has(el))attrOriginal.set(el,{});
 const record=attrOriginal.get(el);
 for(const attr of ['placeholder','aria-label','title']){if(!el.hasAttribute(attr))continue;
 if(!(attr in record))record[attr]=el.getAttribute(attr);
 if(root.lang==='ar')el.setAttribute(attr,translate(record[attr]));}
 });
}
const originalTitle=document.title;
const pageTitles={
'index.html':'عمر مرجاني — تطوير المواقع وإدارة المخزون',
'developpement.html':'عمر مرجاني — تطوير المواقع والتطبيقات',
'gestion-stock.html':'عمر مرجاني — إدارة المخزون',
'projet-md-voyage.html':'MD Voyage 2.0 — تفاصيل المشروع',
'projet-immovision.html':'ImmoVision — تفاصيل المشروع',
'projet-fleet-manager-pro.html':'Fleet Manager Pro — تفاصيل المشروع',
'projet-chantier-manager-pro.html':'Chantier Manager Pro — تفاصيل المشروع',
'projet-health-service.html':'Health Service — تفاصيل المشروع',
'projet-gestion-commerciale-pro.html':'Gestion Commerciale Pro — تفاصيل المشروع',
'projet-react-optisis.html':'React Optisis — تفاصيل المشروع',
'projet-gestion-stock-pro.html':'Gestion Stock Pro — تفاصيل المشروع'
};
const toggle=document.getElementById('langToggle');
if(!toggle)return;
const select=document.createElement('select');select.id='omLanguageSelect';select.className='lang-toggle';
select.setAttribute('aria-label','Choisir la langue / اختر اللغة');
select.innerHTML='<option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option>';
toggle.hidden=true;toggle.setAttribute('aria-hidden','true');toggle.parentNode.insertBefore(select,toggle);
const style=document.createElement('style');style.textContent=`
#omLanguageSelect{min-width:64px;cursor:pointer;padding:8px 5px}
html[dir="rtl"]{direction:rtl}
html[dir="rtl"] .nav,html[dir="rtl"] .nav-links,html[dir="rtl"] .nav-actions{direction:rtl}
html[dir="rtl"] .hero-copy,html[dir="rtl"] .section-heading,html[dir="rtl"] .hero-service,html[dir="rtl"] .portfolio-home-card,html[dir="rtl"] .footer{text-align:right}
html[dir="rtl"] .hero-service-grid,html[dir="rtl"] .portfolio-home-cards{direction:rtl}
html[dir="rtl"] input,html[dir="rtl"] textarea{text-align:right}
html[dir="rtl"] .laptop-mockup,html[dir="rtl"] .live-preview{direction:ltr}
`;document.head.append(style);
function restoreArabic(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let node;while((node=walker.nextNode()))if(original.has(node))node.nodeValue=original.get(node);
 document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
  const record=attrOriginal.get(el);if(!record)return;
  for(const [attr,value] of Object.entries(record))el.setAttribute(attr,value);
 });
}
function setLanguage(lang){
 if(!['fr','en','ar'].includes(lang))lang='fr';
 const previous=root.lang;
 if(lang==='ar'){
  if(previous==='en')toggle.click();
  root.lang='ar';root.dir='rtl';paint();document.title=pageTitles[location.pathname.split('/').pop()]||originalTitle;
 }else{
  if(previous==='ar'){restoreArabic();root.lang='fr';document.title=originalTitle;}
  root.dir='ltr';
  if(root.lang!==lang)toggle.click();
 }
 select.value=lang;
 try{localStorage.setItem(key,lang);}catch(_){}
 window.dispatchEvent(new Event('om-language-changed'));
}
select.addEventListener('change',()=>setLanguage(select.value));
let saved='fr';try{saved=localStorage.getItem(key)||'fr';}catch(_){}
setLanguage(saved);
document.addEventListener('click',e=>{if(root.lang==='ar'&&e.target.closest('[data-open-demo],.case-study-trigger,[data-gsp]'))setTimeout(paint,0);});
let scheduled=false;
const observer=new MutationObserver(records=>{
 if(root.lang!=='ar'||scheduled)return;
 if(!records.some(r=>r.type==='childList'&&r.addedNodes.length))return;
 scheduled=true;
 requestAnimationFrame(()=>{scheduled=false;paint();});
});
observer.observe(document.body,{childList:true,subtree:true});
})();
