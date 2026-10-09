const sl=[...document.querySelectorAll('.sl')],dots=[...document.querySelectorAll('.dot')],hc=document.getElementById('hcap'),hp=document.getElementById('hp'),nm=["Squares in Grid", "Lines in Nature", "Geometry in Low Relief", "Composition with Planes", "Space and Flow by Subtracting Volumes", "Seasonscape"];let cur=0,play=!matchMedia('(prefers-reduced-motion:reduce)').matches,tm;
function slide(i){cur=(i+sl.length)%sl.length;sl.forEach((e,j)=>e.classList.toggle('on',j===cur));dots.forEach((e,j)=>e.classList.toggle('on',j===cur));hc.textContent='Project '+(cur+1)+': '+nm[cur];hc.href='#p'+(cur+1)}
function sched(){clearInterval(tm);if(play)tm=setInterval(()=>slide(cur+1),4500)}
dots.forEach((d,j)=>d.onclick=()=>{slide(j);sched()});
hp.onclick=()=>{play=!play;hp.textContent=play?'Pause':'Play';hp.setAttribute('aria-label',play?'Pause slideshow':'Play slideshow');sched()};
hp.textContent=play?'Pause':'Play';slide(0);sched();
const lb=document.getElementById('lb'),li=lb.querySelector('img'),cp=document.getElementById('cap');let grp=[],k=0;
function show(){const i=grp[k].querySelector('img');li.src=i.src;li.alt=i.alt;cp.textContent=i.alt}
document.querySelectorAll('.zoom').forEach(b=>b.addEventListener('click',()=>{grp=[...b.closest('section,header').querySelectorAll('.zoom')];k=grp.indexOf(b);show();lb.showModal()}));
const go=d=>{k=(k+d+grp.length)%grp.length;show()};
document.getElementById('prev').onclick=()=>go(-1);document.getElementById('next').onclick=()=>go(1);document.getElementById('close').onclick=()=>lb.close();
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('stage'))lb.close()});
let tx=0;lb.addEventListener('touchstart',e=>{tx=e.changedTouches[0].clientX},{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)go(d<0?1:-1)});
lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});
