(()=>{"use strict";
const paths={
folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
landmark:'<path d="m3 10 9-7 9 7M4 10h16M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18"/>',
code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-12-2 16"/>',
briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a18 18 0 0 0 18 0"/>',
chart:'<path d="M3 3v18h18M7 16v-4m5 4V7m5 9v-7"/>',
layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
graduation:'<path d="m2 10 10-6 10 6-10 6-10-6Zm4 3v5c4 3 8 3 12 0v-5M22 10v7"/>',
send:'<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
sparkles:'<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM5 18l.7 1.3L7 20l-1.3.7L5 22l-.7-1.3L3 20l1.3-.7L5 18Z"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
building:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-5h6v5M8 7h2m4 0h2M8 11h2m4 0h2"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>'
};
const svg=name=>'<svg class="om-section-icon" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name]||paths.layers)+'</svg>';
const guess=t=>{t=(t||"").toLowerCase();if(/référence|institution|organisme/.test(t))return "landmark";if(/projet|réalisation|portfolio/.test(t))return "folder";if(/technolog|stack|compétence|développement|logiciel/.test(t))return "code";if(/expérience|parcours|profession|terrain/.test(t))return "briefcase";if(/formation|curriculum|diplôme/.test(t))return "graduation";if(/chiffre|statistique/.test(t))return "chart";if(/contact|devis|collaboration/.test(t))return "send";if(/service/.test(t))return "layers";if(/voyage|tourisme/.test(t))return "globe";if(/immo/.test(t))return "building";return "sparkles"};
document.querySelectorAll('.section-kicker,.premium-kicker,.projects-eyebrow,.contact-v3-eyebrow').forEach(el=>{if(el.querySelector('svg'))return;el.classList.add('om-kicker-with-icon');el.insertAdjacentHTML('afterbegin',svg(guess(el.textContent)))});
document.querySelectorAll('.premium-title,.section-heading h2,.projects-intro h2,.contact-v3-heading h2,.premium-case .premium-section>h2').forEach(h=>{h.classList.add('om-clear-title')});
document.querySelectorAll('.contact-v3-link-icon').forEach((el,i)=>{const name=i===0?'mail':i===1?'send':'briefcase';el.innerHTML=svg(name)});
})();