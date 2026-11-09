const $ = s => document.querySelector(s);
$('#year').textContent = new Date().getFullYear();
const themeToggle=$('#themeToggle');
const storedTheme=localStorage.getItem('om-theme');
if(storedTheme==='light') document.body.classList.add('light');
function refreshTheme(){themeToggle.textContent=document.body.classList.contains('light')?'☀':'☾';}
refreshTheme();
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('om-theme',document.body.classList.contains('light')?'light':'dark');refreshTheme();});
$('#menuToggle').addEventListener('click',()=>{const open=$('#navLinks').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{$('#navLinks').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});button.classList.add('active');button.setAttribute('aria-pressed','true');const filter=button.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});}));
const dialog=$('#videoDialog'),video=$('#demoVideo');$('#openVideo').addEventListener('click',()=>{dialog.showModal();video.play().catch(()=>{});});$('#closeVideo').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>video.pause());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
