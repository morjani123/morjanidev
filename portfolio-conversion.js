(()=>{'use strict';
const form=document.getElementById('contactForm'),button=document.getElementById('quoteWhatsApp');
if(!form||!button)return;
button.addEventListener('click',()=>{
 if(!form.reportValidity())return;
 const val=id=>document.getElementById(id)?.value?.trim()||'';
 const ar=document.documentElement.lang==='ar';
 const en=document.documentElement.lang==='en';
 const labels=ar?['مرحباً، أريد طلب عرض سعر لمشروعي.','الاسم: ','الشركة: ','غير محددة','البريد الإلكتروني: ','نوع المشروع: ','الميزانية: ','المدة: ','التفاصيل: ']:
 en?['Hello, I would like to request a quote for my project.','Name: ','Company: ','Not specified','Email: ','Project type: ','Budget: ','Timeline: ','Description: ']:
 ['Bonjour, je souhaite demander un devis pour mon projet.','Nom : ','Entreprise : ','Non précisée','E-mail : ','Type de projet : ','Budget : ','Délai : ','Description : '];
 const message=[labels[0],'',labels[1]+val('contactName'),labels[2]+(val('contactCompany')||labels[3]),labels[4]+val('contactEmail'),labels[5]+val('contactSubject'),labels[6]+val('contactBudget'),labels[7]+val('contactTimeline'),labels[8]+val('contactMessage')].join('\n');
 window.open('https://wa.me/212654610207?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
});
})();