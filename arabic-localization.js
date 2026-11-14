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
  root.lang='ar';root.dir='rtl';paint();
 }else{
  if(previous==='ar'){restoreArabic();root.lang='fr';}
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
})();
