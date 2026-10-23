(function(){
var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var bar=document.createElement('div');bar.className='progress';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
function pg(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%';}
addEventListener('scroll',pg,{passive:true});pg();
var hero=document.querySelector('.hero');
if(hero&&!rm){for(var i=0;i<22;i++){var s=document.createElement('span');s.className='spark';s.style.left=(Math.random()*100)+'%';var d=6+Math.random()*8;s.style.animationDuration=d+'s';s.style.animationDelay=(-Math.random()*d)+'s';var z=3+Math.random()*6;s.style.width=s.style.height=z+'px';hero.appendChild(s);}}
var nums=document.querySelectorAll('.stats b');
if(nums.length&&'IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,end=parseInt(el.getAttribute('data-n'),10);if(rm||isNaN(end))return;var t0=null,dur=1600;function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/dur),v=Math.round(end*(1-Math.pow(1-k,3)));el.textContent=v;if(k<1)requestAnimationFrame(f);}requestAnimationFrame(f);});},{threshold:.6});
 nums.forEach(function(n){var v=parseInt(n.textContent,10);if(!isNaN(v)){n.setAttribute('data-n',v);io.observe(n);}});
}
})();