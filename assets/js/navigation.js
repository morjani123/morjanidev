/* Shared accessible navigation */
(()=>{'use strict';
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
if(!menuToggle||!navLinks)return;
const close=()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Ouvrir le menu')};
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu')});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navLinks.classList.contains('open')){close();menuToggle.focus()}});
document.addEventListener('click',e=>{if(!navLinks.contains(e.target)&&!menuToggle.contains(e.target))close()});
const desktop=window.matchMedia('(min-width: 1051px)');
const sync=()=>{if(desktop.matches)close()};
desktop.addEventListener?.('change',sync);
})();
