/* Arabic localization layer - isolated from the existing FR/EN translator. */
(() => {
'use strict';
const key='om-preferred-language', root=document.documentElement;
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
Object.assign(dictionary,{"Contrôle des marchandises, saisie et suivi des bons de livraison (BL), bons de réception (BR) et demandes internes (BCI).":"مراقبة البضائع وتسجيل وتتبع سندات التسليم BL والاستلام BR والطلبات الداخلية BCI.","Enregistrement des mouvements, bons de sortie (BS), transferts inter-chantiers et traçabilité des articles et pièces.":"تسجيل حركات المخزون وسندات الإخراج BS والتحويلات بين الأوراش وتتبع المواد والقطع.","Inventaires hebdomadaires et mensuels, rapprochement du stock physique avec les données et identification des écarts.":"إجراء الجرد الأسبوعي والشهري ومطابقة المخزون الفعلي مع السجلات وتحديد الفروقات.","Réceptions et inventaires sur SAP, consultation de commandes et demandes d’achat ; tableaux Excel, formules et automatisations VBA.":"تسجيل الاستلام والجرد على SAP ومراجعة الطلبات وطلبات الشراء؛ جداول Excel والصيغ وأتمتة VBA.","Surveillance des niveaux de stock, alertes de stock minimum, anticipation des ruptures et remontée des besoins.":"مراقبة مستويات المخزون والتنبيه للحد الأدنى وتوقع النفاد ورفع الاحتياجات.","Rangement du dépôt, suivi des EPI et consommables, répartition des tâches et échanges avec demandeurs et responsables chantier.":"تنظيم المستودع وتتبع معدات الوقاية والمواد المستهلكة وتوزيع المهام والتنسيق مع مسؤولي الأوراش.","En fonction de vos besoins, je peux concevoir des outils personnalisés pour simplifier vos opérations, centraliser vos données et automatiser les tâches répétitives.":"حسب احتياجاتكم، يمكنني تطوير أدوات مخصصة لتبسيط العمليات وتجميع البيانات وأتمتة المهام المتكررة.","Articles, entrées/sorties, inventaires, alertes, rapports":"المواد والإدخالات والإخراجات والجرد والتنبيهات والتقارير","Demandes, commandes, fournisseurs et suivi":"الطلبات والمشتريات والموردون والتتبع","Affectations, mouvements, états et traçabilité":"التخصيصات والحركات والحالات والتتبع","Documents, formulaires, tableaux de bord et exports":"المستندات والنماذج ولوحات التحكم والتصدير","Automatisation des bons, recherches, calculs et reporting":"أتمتة السندات والبحث والحسابات والتقارير","Solutions adaptées à votre secteur et à vos procédures":"حلول تناسب قطاعكم وإجراءاتكم","Exemples de solutions proposées sur mesure ; leur réalisation et leurs fonctionnalités dépendent du cahier des charges.":"أمثلة لحلول حسب الطلب؛ يعتمد تنفيذها ووظائفها على دفتر التحملات.","Besoin d’un magasinier, d’un gestionnaire de stock ou d’un système de gestion personnalisé ?":"هل تحتاجون إلى أمين مستودع أو مسؤول مخزون أو نظام إدارة مخصص؟","Je peux intervenir sur la gestion quotidienne de votre stock et concevoir des outils de gestion adaptés à votre activité.":"يمكنني المساهمة في الإدارة اليومية للمخزون وتطوير أدوات إدارة تناسب نشاطكم.","Un aperçu concret d’une solution de gestion des articles, des bons de sortie et de retour, des entrées et des mouvements de stock.":"نظرة عملية على حل لإدارة المواد وسندات الإخراج والإرجاع والإدخالات وحركات المخزون.","Présentation du projet. Les fonctionnalités et adaptations sont définies selon les besoins de chaque entreprise.":"عرض للمشروع؛ تحدد الوظائف والتخصيصات حسب احتياجات كل شركة.","Vue d’ensemble des articles, mouvements, entrées et indicateurs de stock.":"نظرة عامة على المواد والحركات والإدخالات ومؤشرات المخزون.","Du développement web à la conception d’outils métiers, un parcours nourri par la pratique.":"من تطوير المواقع إلى تصميم أدوات الأعمال، مسار مبني على الخبرة العملية.","Une application de gestion de flotte : véhicules, chauffeurs, maintenance, carburant et alertes.":"تطبيق لإدارة الأسطول: المركبات والسائقون والصيانة والوقود والتنبيهات.","Pilotez les chantiers, les équipes, les tâches et les ressources depuis un tableau de bord centralisé.":"إدارة الأوراش والفرق والمهام والموارد من لوحة تحكم موحدة.","Une plateforme moderne de recrutement pour les professionnels et les établissements de santé.":"منصة توظيف حديثة للمهنيين والمؤسسات الصحية.","Une solution métier pour les entrées, sorties, inventaires et le suivi des articles en stock.":"حل مهني للإدخالات والإخراجات والجرد وتتبع المواد.","Site d’agence de voyages : catalogue, filtres, favoris et réservation simulée.":"موقع وكالة سفر: عروض وفلاتر ومفضلة وحجز تجريبي.","Vitrine immobilière premium et consultation de biens responsive.":"واجهة عقارية احترافية وعرض متجاوب للعقارات.","Gestion des articles, mouvements de stock, bons de sortie et inventaires.":"إدارة المواد وحركات المخزون وسندات الإخراج والجرد.","Pilotage des chantiers, équipes, stock et finances depuis une interface centralisée.":"إدارة الأوراش والفرق والمخزون والمالية من واجهة موحدة.","Plateforme web dédiée au recrutement et aux candidatures dans le secteur de la santé.":"منصة ويب للتوظيف والترشيحات في القطاع الصحي.","Gestion des véhicules, chauffeurs, carburant et maintenance préventive.":"إدارة المركبات والسائقين والوقود والصيانة الوقائية.","Suivi des clients, produits, devis, factures et paiements.":"تتبع العملاء والمنتجات وعروض الأسعار والفواتير والمدفوعات.","Application de gestion optique : clients, produits et opérations métier.":"تطبيق لإدارة محل البصريات: العملاء والمنتجات والعمليات.","Plateforme institutionnelle dédiée à l’investissement régional.":"منصة مؤسساتية مخصصة للاستثمار الجهوي.","Référence institutionnelle dans le domaine de la sécurité sanitaire.":"مرجع مؤسساتي في مجال السلامة الصحية.","Portail régional d’information et d’accompagnement des investisseurs.":"بوابة جهوية للإعلام ومواكبة المستثمرين.","Référence institutionnelle consacrée à l’efficacité énergétique.":"مرجع مؤسساتي في مجال النجاعة الطاقية."});
Object.assign(dictionary,{"Explorer toutes les réalisations et le slider animé →":"استكشف جميع المشاريع وعارض الصور المتحرك ←","Des projets web auxquels j’ai contribué dans le cadre de mon expérience chez TWINS, pour des organismes publics marocains.":"مشاريع ويب ساهمت في إنجازها خلال عملي لدى TWINS لفائدة مؤسسات عمومية مغربية.","MÉDIAS":"الإعلام","Presse et information":"الصحافة والإعلام","Découvrir les références et leur contexte →":"اكتشف المراجع وتفاصيلها ←","01 / À PROPOS":"01 / نبذة عني","Développement & terrain.":"التطوير والخبرة الميدانية.","Une approche complète.":"مقاربة متكاملة.","Je développe des applications métiers et des sites web pensés pour simplifier le travail quotidien des entreprises.":"أطور تطبيقات أعمال ومواقع إلكترونية لتسهيل العمل اليومي للشركات.","Mon portfolio présente":"يعرض معرض أعمالي","8 projets numériques à la une (6 applications métiers et 2 sites web)":"8 مشاريع رقمية مميزة (6 تطبيقات أعمال وموقعين إلكترونيين)","5 références institutionnelles":"5 مراجع مؤسساتية","et des réalisations web et des projets freelance. J’associe":"وإنجازات ويب ومشاريع مستقلة. أجمع بين","à mon expérience de terrain en gestion de stock chez":"وخبرتي الميدانية في إدارة المخزون لدى","Solutions web sur mesure":"حلول ويب حسب الطلب","Applications React/TypeScript, sites WordPress/Drupal et interfaces professionnelles.":"تطبيقات React/TypeScript ومواقع WordPress/Drupal وواجهات احترافية.","Gestion de stock opérationnelle":"الإدارة العملية للمخزون","Réceptions, sorties, inventaires et traçabilité des mouvements.":"الاستلام والإخراج والجرد وتتبع الحركات.","Digitalisation des processus":"رقمنة العمليات","Projets BTP, santé, commerce, optique et stock ; automatisation Excel/VBA.":"مشاريع البناء والصحة والتجارة والبصريات والمخزون؛ وأتمتة Excel/VBA.","Amélioration continue":"التحسين المستمر","Organisation, fiabilité des données et efficacité au quotidien.":"التنظيم ودقة البيانات والفعالية اليومية.","Découvrir mon parcours":"اكتشف مساري","Voir mes réalisations":"شاهد أعمالي","MON PORTFOLIO EN CHIFFRES":"معرض أعمالي بالأرقام","Des compétences au service de projets concrets.":"مهارات لخدمة مشاريع واقعية.","Développement web, applications desktop et compréhension des processus métiers.":"تطوير الويب وتطبيقات سطح المكتب وفهم عمليات العمل.","Années de pratique web & desktop":"سنوات الخبرة في الويب وتطبيقات سطح المكتب","TECH STACK":"التقنيات المستخدمة","Les technologies que j’utilise.":"التقنيات التي أستخدمها.","Filtrez les compétences par domaine.":"صفِّ المهارات حسب المجال.","Desktop & automatisation":"سطح المكتب والأتمتة","Frontend":"الواجهات الأمامية","Applications web":"تطبيقات الويب","Interfaces interactives":"واجهات تفاعلية","Sites & CMS":"المواقع وأنظمة إدارة المحتوى","Portails institutionnels":"البوابات المؤسساتية","Personnalisation & backend":"التخصيص والواجهات الخلفية","Logiciels desktop":"برامج سطح المكتب","Interfaces desktop":"واجهات سطح المكتب","Bases de données locales":"قواعد بيانات محلية","Automatisation":"الأتمتة","Versioning & déploiement":"إدارة الإصدارات والنشر","MON PARCOURS":"مساري المهني","Une expérience entre digital et terrain.":"خبرة تجمع بين المجال الرقمي والعمل الميداني.","Du développement web à la gestion opérationnelle sur chantier, un parcours qui associe création de solutions digitales et compréhension concrète des besoins métiers.":"من تطوير الويب إلى إدارة العمليات داخل الورش؛ مسار يجمع بين الحلول الرقمية وفهم الاحتياجات المهنية.","Voir mon profil LinkedIn ↗":"شاهد ملفي على LinkedIn ↗","Expériences professionnelles":"الخبرات المهنية","Gestion de stock &amp; logistique chantier":"إدارة المخزون ولوجستيك الورش","Gestion de stock & logistique chantier":"إدارة المخزون ولوجستيك الورش","Gestion des réceptions et sorties, bons BL/BR/BS, transferts inter-chantiers, inventaires et traçabilité du matériel. Suivi sur SAP et Excel/VBA, coordination des besoins et développement d’outils de gestion adaptés au terrain.":"إدارة الاستلام والإخراج وسندات BL/BR/BS والتحويلات بين الأوراش والجرد وتتبع المعدات، باستخدام SAP وExcel/VBA وتطوير أدوات مناسبة للميدان.","Logistique BTP":"لوجستيك البناء","Depuis 2025 · Projets indépendants":"منذ 2025 · مشاريع مستقلة","Développeur web &amp; applications métiers":"مطور ويب وتطبيقات أعمال","Développeur web & applications métiers":"مطور ويب وتطبيقات أعمال","Freelance · Projets personnels":"عمل حر · مشاريع شخصية","Développement de sites WordPress, d’interfaces React/TypeScript et de logiciels Python/SQLite : gestion de stock, chantiers, flotte automobile et outils métier.":"تطوير مواقع WordPress وواجهات React/TypeScript وبرامج Python/SQLite لإدارة المخزون والأوراش والأساطيل وأدوات الأعمال.","Développeur web":"مطور ويب","Conception, intégration et maintenance de sites et portails institutionnels. Développement WordPress et Drupal, personnalisation PHP, optimisation SEO et performance, collaboration sur des projets clients.":"تصميم وتطوير وصيانة مواقع وبوابات مؤسساتية باستخدام WordPress وDrupal وPHP وتحسين SEO والأداء والمشاركة في مشاريع العملاء.","Formation &amp; spécialisation":"التكوين والتخصص","Formation & spécialisation":"التكوين والتخصص","Technicien spécialisé en développement informatique":"تقني متخصص في التنمية المعلوماتية","Développement logiciel, programmation, bases de données et conception d’applications.":"تطوير البرمجيات والبرمجة وقواعد البيانات وتصميم التطبيقات.","Technicien en maintenance et support informatique &amp; réseaux":"تقني في صيانة ودعم المعلوميات والشبكات","Technicien en maintenance et support informatique & réseaux":"تقني في صيانة ودعم المعلوميات والشبكات","Maintenance des systèmes, support informatique et fondamentaux des réseaux.":"صيانة الأنظمة والدعم التقني وأساسيات الشبكات.","Baccalauréat":"البكالوريا","Sciences de la Vie et de la Terre":"علوم الحياة والأرض","Une double expertise":"خبرة مزدوجة","Concevoir des outils numériques tout en comprenant les contraintes réelles des équipes sur le terrain.":"تصميم أدوات رقمية مع فهم التحديات الحقيقية للفرق في الميدان.","Consulter le parcours détaillé →":"الاطلاع على المسار بالتفصيل ←","Télécharger mon CV ↓":"تحميل سيرتي الذاتية ↓","Découvrez 8 projets numériques à la une (6 applications métiers et 2 sites web), ainsi que 5 références institutionnelles et des réalisations freelance. Chaque projet présente un savoir-faire concret, une interface soignée et une approche orientée utilisateur.":"اكتشف 8 مشاريع رقمية مميزة (6 تطبيقات أعمال وموقعين إلكترونيين)، و5 مراجع مؤسساتية وأعمال مستقلة. يعرض كل مشروع خبرة عملية وواجهة متقنة وتجربة موجهة للمستخدم.","Sites web":"المواقع الإلكترونية","Flotte":"الأسطول","Recrutement":"التوظيف","Santé":"الصحة","Desktop":"سطح المكتب","SITE WEB":"موقع إلكتروني","APPLICATION":"تطبيق","INSTITUTIONNEL":"مؤسساتي","Site institutionnel · TWINS":"موقع مؤسساتي · TWINS","Référence institutionnelle dans le domaine de l’information.":"مرجع مؤسساتي في مجال الإعلام.","FREELANCE":"عمل حر","Sites WordPress sur mesure":"مواقع WordPress حسب الطلب","Intégration, personnalisation et maintenance de sites web professionnels.":"تطوير وتخصيص وصيانة المواقع الإلكترونية الاحترافية.","Les références institutionnelles présentées correspondent à des projets réalisés dans le cadre de mon activité professionnelle chez TWINS, et non à des contrats individuels directs.":"المراجع المؤسساتية المعروضة تخص مشاريع أُنجزت ضمن عملي المهني لدى TWINS وليست عقوداً فردية مباشرة.","05 / SERVICES":"05 / الخدمات","Des solutions adaptées":"حلول مناسبة","à vos besoins.":"لاحتياجاتكم.","Du site vitrine au logiciel métier, je vous accompagne dans la création d’outils utiles, évolutifs et faciles à utiliser.":"من المواقع التعريفية إلى برامج الأعمال، أساعدكم على إنشاء أدوات عملية قابلة للتطوير وسهلة الاستخدام.","Sites web professionnels":"مواقع إلكترونية احترافية","Sites vitrines, plateformes WordPress et Drupal, intégration responsive, maintenance et optimisation.":"مواقع تعريفية ومنصات WordPress وDrupal وتطوير متجاوب وصيانة وتحسين.","Discuter de ce service ↗":"ناقش هذه الخدمة ↗","Applications de gestion":"تطبيقات الإدارة","Logiciels sur mesure pour les stocks, les mouvements, les documents métier et les tableaux de bord.":"برامج حسب الطلب للمخزون والحركات والوثائق المهنية ولوحات التحكم.","Automatisation Excel / VBA":"أتمتة Excel / VBA","Formulaires, bons de sortie, inventaires, alertes et rapports pour simplifier les tâches répétitives.":"نماذج وسندات إخراج وجرد وتنبيهات وتقارير لتبسيط المهام المتكررة.","Organisation & suivi de stock":"تنظيم وتتبع المخزون","Structuration des flux, suivi des réceptions et sorties, traçabilité et outils adaptés aux équipes terrain.":"تنظيم الحركات وتتبع الاستلام والإخراج وتوثيقها بأدوات مناسبة للفرق الميدانية.","Parlons de votre projet ↗":"لنتحدث عن مشروعك ↗","Omar Morjani. Tous droits réservés.":"عمر مرجاني. جميع الحقوق محفوظة.","Retour en haut ↑":"العودة للأعلى ↑","Gestion Stock Pro — Démonstration":"Gestion Stock Pro — عرض تجريبي","Organisation du magasin, contrôle des quantités, traçabilité des mouvements, préparation des demandes et coordination avec les équipes chantier. Une approche rigoureuse pour limiter les écarts et anticiper les besoins.":"تنظيم المستودع ومراقبة الكميات وتتبع الحركات وإعداد الطلبات والتنسيق مع فرق الورش، بمنهجية دقيقة لتقليل الفروقات وتوقع الاحتياجات.","Traçabilité":"التتبع","en action.":"قيد العمل.","Rapports":"التقارير","en détail.":"بالتفصيل.","Explorez les principales fonctionnalités de mon logiciel de gestion de stock. La capture du tableau de bord est issue de la démonstration ; les autres vues sont décrites sans reproduire d’écrans non vérifiés.":"اكتشف الوظائف الرئيسية لبرنامج إدارة المخزون. صورة لوحة التحكم مأخوذة من النسخة التجريبية، أما الواجهات الأخرى فهي موصوفة دون عرض لقطات غير موثقة.","Réceptions et contrôle BL/BR, bons de sortie et demandes internes, transferts inter-chantiers, inventaires hebdomadaires et mensuels, suivi des pièces et EPI, gestion sur SAP et Excel/VBA. Conception d’un outil de suivi de stock adapté aux opérations.":"الاستلام ومراقبة BL/BR وسندات الإخراج والطلبات الداخلية والتحويلات بين الأوراش والجرد الأسبوعي والشهري وتتبع القطع ومعدات الوقاية، باستخدام SAP وExcel/VBA.","Développement de fonctionnalités spécifiques, personnalisation, maintenance, hébergement et optimisation.":"تطوير وظائف مخصصة والتخصيص والصيانة والاستضافة والتحسين.","Développeur Web · TWINS":"مطور ويب · TWINS","WordPress, Drupal, PHP, MySQL, intégration, SEO, performance et collaboration en méthodologie Agile.":"WordPress وDrupal وPHP وMySQL وتطوير الواجهات وتحسين SEO والأداء والعمل بمنهجية Agile.","Formation":"التكوين","Technicien en Développement Informatique":"تقني في التنمية المعلوماتية","Technicien en Maintenance & Support Informatique et Réseaux":"تقني في صيانة ودعم المعلوميات والشبكات","Lycée Al Adarissa · Fès":"ثانوية الأدارسة · فاس"});
Object.assign(dictionary,{"08 / CURRICULUM VITAE":"08 / السيرة الذاتية","Mon parcours,":"مساري،","en un coup d’œil.":"في لمحة.","Développement web, applications métiers et gestion de stock : deux domaines complémentaires au service des entreprises.":"تطوير المواقع وتطبيقات الأعمال وإدارة المخزون: مجالان متكاملان لخدمة الشركات.","Sites institutionnels, WordPress, Drupal, intégration et maintenance.":"مواقع مؤسساتية وWordPress وDrupal وتطوير وصيانة.","Personnalisation, fonctionnalités sur mesure, hébergement et optimisation.":"تخصيص ووظائف حسب الطلب واستضافة وتحسين.","Réceptions, bons, inventaires, SAP, Excel/VBA et suivi des flux chantier.":"الاستلام والسندات والجرد وSAP وExcel/VBA وتتبع حركات الورش.","↓ Télécharger CV français (PDF)":"↓ تحميل السيرة الذاتية بالفرنسية (PDF)","↓ Download English CV (PDF)":"↓ تحميل السيرة الذاتية بالإنجليزية (PDF)","CONTACT · COLLABORATION":"التواصل · التعاون","Parlons de votre":"لنتحدث عن","prochain projet.":"مشروعك القادم.","Une idée de site web, une application ou un logiciel de gestion ? Expliquez-moi votre besoin et discutons de la meilleure solution.":"هل لديك فكرة موقع أو تطبيق أو برنامج إدارة؟ اشرح احتياجاتك لنتحدث عن أفضل حل.","TRAVAILLONS ENSEMBLE":"لنعمل معاً","Une idée ?":"عندك فكرة؟","Faisons-la avancer.":"لنحوّلها إلى واقع.","Développement web, applications sur mesure, outils métiers et optimisation de vos solutions digitales.":"تطوير مواقع وتطبيقات حسب الطلب وأدوات أعمال وتحسين حلولكم الرقمية.","Applications":"التطبيقات","ÉCRIVEZ-MOI":"راسلني","DISCUTEZ SUR WHATSAPP":"تواصل عبر واتساب","RÉSEAU PROFESSIONNEL":"الشبكة المهنية","⌖ &nbsp; Basé à Fès, Maroc · Collaboration à distance":"⌖ مقيم في فاس، المغرب · العمل عن بُعد","DEMANDE DE DEVIS":"طلب عرض سعر","Décrivez votre projet":"صف مشروعك","Quelques informations suffisent pour commencer.":"بعض المعلومات تكفي للبدء.","Votre nom":"اسمك","Votre e-mail":"بريدك الإلكتروني","Votre besoin":"نوع طلبك","Création de site web":"إنشاء موقع إلكتروني","Application de gestion":"تطبيق إدارة","Application desktop":"تطبيق سطح المكتب","Site institutionnel / CMS":"موقع مؤسساتي / نظام إدارة محتوى","Site de voyage / tourisme":"موقع سفر / سياحة","Site immobilier":"موقع عقاري","Refonte et optimisation web":"إعادة تصميم وتحسين موقع","Autre collaboration":"تعاون آخر","Budget estimé":"الميزانية المتوقعة","À discuter":"قابلة للنقاش","Moins de 5 000 MAD":"أقل من 5,000 درهم","5 000 – 15 000 MAD":"5,000 – 15,000 درهم","15 000 – 30 000 MAD":"15,000 – 30,000 درهم","Plus de 30 000 MAD":"أكثر من 30,000 درهم","Délai souhaité":"المدة المطلوبة","Flexible":"مرنة","Moins d’un mois":"أقل من شهر","1 à 3 mois":"من شهر إلى 3 أشهر","Plus de 3 mois":"أكثر من 3 أشهر","Entreprise (facultatif)":"الشركة (اختياري)","Votre message":"رسالتك","Demander un devis par e-mail ↗":"طلب عرض سعر عبر البريد ↗","Envoyer la demande sur WhatsApp ↗":"إرسال الطلب عبر واتساب ↗","Formulaire e-mail via FormSubmit. Le bouton WhatsApp prépare votre message avant envoi, sans transmission automatique.":"نموذج البريد عبر FormSubmit. زر واتساب يُعدّ رسالتك قبل الإرسال دون إرسال تلقائي.","sur mesure.":"حسب الطلب.","Maintenance":"الصيانة","✦ PROJET À LA UNE · 01 / 04":"✦ مشروع مميز · 01 / 04","✦ PROJET À LA UNE · 02 / 04":"✦ مشروع مميز · 02 / 04","✦ PROJET À LA UNE · 03 / 04":"✦ مشروع مميز · 03 / 04","✦ PROJET À LA UNE · 04 / 04":"✦ مشروع مميز · 04 / 04","Gestion de stock":"إدارة المخزون"});
Object.assign(dictionary,{"Suivre les réceptions, sorties et mouvements sans disperser les informations dans plusieurs fichiers. Une application Python avec base SQLite, écrans de saisie et historique, pensée pour le travail quotidien d’un magasin.":"تتبع الاستلام والإخراج وحركات المخزون دون توزيع البيانات على ملفات متعددة. تطبيق Python بقاعدة SQLite وشاشات إدخال وسجل تاريخي يناسب العمل اليومي بالمستودع.","LinkedIn · Omar Morjani":"LinkedIn · عمر مرجاني"});
Object.assign(dictionary,{"Navigation principale":"التنقل الرئيسي","Switch to English":"التبديل إلى الإنجليزية","Changer de langue":"تغيير اللغة","Changer le thème":"تغيير المظهر","Ouvrir le menu":"فتح القائمة","Visiter ONSSA":"زيارة ONSSA","Visiter CRI Fès-Meknès":"زيارة CRI فاس مكناس","Visiter CRI Laâyoune":"زيارة CRI العيون","Visiter AMEE":"زيارة AMEE","Visiter MAP":"زيارة MAP","Illustration du développement web et de la gestion des stocks":"رسم توضيحي لتطوير الويب وإدارة المخزون","Filtrer les technologies":"تصفية التقنيات","Nom et prénom":"الاسم الكامل","vous@entreprise.com":"you@company.com","Nom de votre entreprise":"اسم شركتك","Décrivez brièvement votre projet":"صف مشروعك باختصار","Contacter Omar sur WhatsApp":"التواصل مع عمر عبر واتساب","Démonstration Gestion Stock Pro":"عرض تجريبي لبرنامج Gestion Stock Pro","Projets à la une":"مشاريع مميزة","Projet précédent":"المشروع السابق","Projet suivant":"المشروع التالي","Mettre le défilement en pause":"إيقاف التمرير مؤقتاً","Filtrer les projets":"تصفية المشاريع","Mes projets et réalisations":"مشاريعي وإنجازاتي","Cycle de gestion des stocks":"دورة إدارة المخزون","Lire la démonstration Gestion Stock Pro":"مشاهدة عرض Gestion Stock Pro","Galerie Gestion Stock Pro":"معرض Gestion Stock Pro","Fonctionnalités du logiciel":"وظائف البرنامج","Voir Fleet Manager Pro":"عرض Fleet Manager Pro","Voir Chantier Manager Pro":"عرض Chantier Manager Pro","Voir Health Service":"عرض Health Service","Voir Gestion Stock Pro":"عرض Gestion Stock Pro","Afficher Fleet Manager Pro":"إظهار Fleet Manager Pro","Afficher Chantier Manager Pro":"إظهار Chantier Manager Pro","Afficher Health Service":"إظهار Health Service","Afficher Gestion Stock Pro":"إظهار Gestion Stock Pro","Découvrir MD Voyage 2.0":"اكتشف MD Voyage 2.0","Découvrir ImmoVision":"اكتشف ImmoVision","Découvrir Gestion Stock Pro":"اكتشف Gestion Stock Pro","Découvrir Chantier Manager Pro":"اكتشف Chantier Manager Pro","Découvrir Health Service":"اكتشف Health Service","Découvrir Fleet Manager Pro":"اكتشف Fleet Manager Pro","Découvrir Gestion Commerciale Pro":"اكتشف Gestion Commerciale Pro","Découvrir React Optisis":"اكتشف React Optisis","Découvrir CRI Fès-Meknès":"اكتشف CRI فاس مكناس","Découvrir ONSSA":"اكتشف ONSSA","Découvrir Laâyoune Invest":"اكتشف Laâyoune Invest","Découvrir AMEE":"اكتشف AMEE","Découvrir MAP":"اكتشف MAP","Découvrir Sites WordPress sur mesure":"اكتشف مواقع WordPress المخصصة","Aperçu du site MD Voyage 2.0":"معاينة موقع MD Voyage 2.0","Aperçu du site ImmoVision":"معاينة موقع ImmoVision"});
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
toggle.hidden=true;toggle.style.setProperty('display','none','important');toggle.setAttribute('aria-hidden','true');toggle.setAttribute('tabindex','-1');toggle.parentNode.insertBefore(select,toggle);
const style=document.createElement('style');style.textContent=`
#langToggle{display:none!important}#omLanguageSelect{display:inline-block!important;min-width:64px;max-width:90px;cursor:pointer;padding:8px 5px;color:inherit;background:transparent;border:1px solid currentColor;border-radius:8px}
html[dir="rtl"]{direction:rtl}
html[dir="rtl"] .nav,html[dir="rtl"] .nav-links,html[dir="rtl"] .nav-actions{direction:rtl}
html[dir="rtl"] .hero-copy,html[dir="rtl"] .section-heading,html[dir="rtl"] .hero-service,html[dir="rtl"] .portfolio-home-card,html[dir="rtl"] .footer{text-align:right}
html[dir="rtl"] .hero-service-grid,html[dir="rtl"] .portfolio-home-cards{direction:rtl}
html[dir="rtl"] input,html[dir="rtl"] textarea{text-align:right}
html[dir="rtl"] .nav-links,html[dir="rtl"] .nav-actions{flex-direction:row-reverse}
html[dir="rtl"] .hero,html[dir="rtl"] .container,html[dir="rtl"] .section{unicode-bidi:plaintext}
html[dir="rtl"] a,html[dir="rtl"] button{unicode-bidi:plaintext}
html[dir="rtl"] [dir="ltr"],html[dir="rtl"] code{direction:ltr}
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
const basePath='/morjanidev/';
const fileName=location.pathname.split('/').pop()||'index.html';
const routeLanguage=location.pathname.match(/\/morjanidev\/(ar|en)(?:\/|$)/)?.[1]||'fr';
function routeFor(lang,file){
 const suffix=file==='index.html'?'':file;
 return basePath+(lang==='fr'?'':lang+'/')+suffix;
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
select.addEventListener('change',()=>{
 const lang=select.value;
 try{localStorage.setItem(key,lang);localStorage.setItem('om-language',lang==='en'?'en':'fr');}catch(_){}
 location.assign(routeFor(lang,fileName)+location.hash);
});
setLanguage(routeLanguage);
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href]');
 if(!link||event.defaultPrevented||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||link.target&&link.target!=='_self'||link.hasAttribute('download'))return;
 const url=new URL(link.href,location.href);
 if(url.origin!==location.origin||!url.pathname.startsWith(basePath))return;
 const relative=url.pathname.slice(basePath.length).replace(/^(ar|en)\//,'');
 if(relative&&!/^[\w-]+\.html$/.test(relative))return;
 const target=routeFor(root.lang,relative||'index.html')+url.search+url.hash;
 if(target!==url.pathname+url.search+url.hash){event.preventDefault();location.assign(target);}
});
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
