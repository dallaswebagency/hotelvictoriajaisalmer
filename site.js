(function(){
  var B='https://hotelvictoriajaisalmer.com/files/';
  var items=[
   ['assets/images/heritage-corridor.jpg','Heritage corridor'],
   ['assets/images/thali-meal.jpg','Home-style thali'],
   ['assets/images/terrace-dinner.jpg','Terrace dinner'],
   ['assets/images/fort-golden-hour.jpg','Jaisalmer Fort at golden hour'],
   ['assets/images/sunset-sky.jpg','Sunset over the rooftops'],
   ['assets/images/rooftop-night-wicker.jpg','Rooftop seating at night'],
   ['assets/images/rooftop-wicker-night.jpg','Rooftop seating and city lights'],
   ['assets/images/rooftop-swing-dusk.jpg','Rooftop swing at dusk'],
   ['assets/images/terrace-night-fort-view.jpg','Terrace facing the lit fort'],
   ['assets/images/dining-terrace-night.jpg','Terrace dining with fort view'],
   ['assets/images/courtyard-night.jpg','Courtyard restaurant at night'],
   ['assets/images/lantern-terrace-dusk.jpg','Lantern-lit terrace'],
   ['assets/images/terrace-plants-day.jpg','Sunlit terrace'],
   ['assets/images/terrace-day-wicker.jpg','Terrace with wicker chairs'],
   ['assets/images/city-night-view.jpg','Jaisalmer city at night'],
   ['assets/images/fort-wall-night.jpg','Fort wall at night'],
   ['assets/images/room-wood-window-seat.jpg','Heritage window seat room'],
   ['assets/images/room-yellow-curtains.jpg','Arched window room'],
   ['assets/images/room-mural.jpg','Mural room'],
   ['assets/images/room-stone-arch.jpg','Stone vault room'],
   ['assets/images/window-view.jpg','Window with desert view'],
   ['assets/images/carved-door.jpg','Carved wooden door'],
   ['hotel-in-jaisalmer-gallery-001.jpg','Hotel Victoria and the fort city view'],
   ['hotel-in-jaisalmer-gallery-002.jpg','Main gate'],
   ['hotel-in-jaisalmer-gallery-003.jpg','Main gate'],
   ['hotel-in-jaisalmer-gallery-004.jpg','Gate'],
   ['hotel-in-jaisalmer-gallery-005.jpg','Balcony'],
   ['hotel-in-jaisalmer-gallery-006.jpg','Entrance lobby'],
   ['hotel-in-jaisalmer-gallery-007.jpg','Family'],
   ['hotel-in-jaisalmer-gallery-008.jpg','Balcony'],
   ['hotel-in-jaisalmer-gallery-009.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-011.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-012.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-013.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-014.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-015.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-016.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-017.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-018.jpg','Fountain'],
   ['hotel-in-jaisalmer-gallery-019.jpg','Front'],
   ['hotel-in-jaisalmer-gallery-020.jpg','Temple'],
   ['hotel-in-jaisalmer-gallery-021.jpg','Step'],
   ['hotel-in-jaisalmer-gallery-022.jpg','Room 1'],
   ['hotel-in-jaisalmer-gallery-023.jpg','Room 1'],
   ['hotel-in-jaisalmer-gallery-024.jpg','Room 2'],
   ['hotel-in-jaisalmer-gallery-025.jpg','Room 2'],
   ['hotel-in-jaisalmer-gallery-026.jpg','Victoria Suite, Room 2'],
   ['hotel-in-jaisalmer-gallery-027.jpg','Room 2'],
   ['hotel-in-jaisalmer-gallery-028.jpg','Room 2 balcony view'],
   ['hotel-in-jaisalmer-gallery-029.jpg','Room 2 balcony view'],
   ['hotel-in-jaisalmer-gallery-031.jpg','Room 3'],
   ['hotel-in-jaisalmer-gallery-032.jpg','Room 3'],
   ['hotel-in-jaisalmer-gallery-034.jpg','Room 5'],
   ['hotel-in-jaisalmer-gallery-035.jpg','Kohinoor Suite, Room 5'],
   ['hotel-in-jaisalmer-gallery-036.jpg','Room 5 bathroom'],
   ['hotel-in-jaisalmer-gallery-037.jpg','Room 6'],
   ['hotel-in-jaisalmer-gallery-038.jpg','Room 7'],
   ['hotel-in-jaisalmer-gallery-040.jpg','Room 7'],
   ['hotel-in-jaisalmer-gallery-042.jpg','Room 7 bathroom'],
   ['hotel-in-jaisalmer-gallery-043.jpg','Hotel view'],
   ['hotel-in-jaisalmer-gallery-044.jpg','Every room view'],
   ['hotel-in-jaisalmer-gallery-045.jpg','Lobby'],
   ['hotel-in-jaisalmer-gallery-046.jpg','Room 2 balcony view'],
   ['hotel-in-jaisalmer-gallery-047.jpg','Room 4'],
   ['hvroom_no_8.jpg','Room 8'],
   ['hvroom_no_10.jpg','Room 10'],
   ['hvroom_no_11.jpg','Room 11']
  ];
  var $=function(id){return document.getElementById(id)};
  var grid=$('grid'),lb=$('lb');
  if(grid&&lb){
    var lbi=lb.querySelector('img'),cap=lb.querySelector('.cap'),cur=0;
    items.forEach(function(it,i){
      var a=document.createElement('a');var src=it[0].indexOf('assets/images/')===0?it[0]:B+it[0];a.href=src;a.dataset.cap=it[1];
      var im=new Image();im.loading='lazy';im.alt=it[1];im.src=src;im.onerror=function(){a.remove();};
      a.appendChild(im);grid.appendChild(a);
    });
    var vis=function(){return Array.prototype.slice.call(grid.querySelectorAll('a'));};
    var show=function(n){var v=vis();cur=(n+v.length)%v.length;lbi.src=v[cur].href;cap.textContent=v[cur].dataset.cap;lb.classList.add('open');};
    grid.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;e.preventDefault();show(vis().indexOf(a));});
    lb.querySelector('.x').onclick=function(){lb.classList.remove('open')};
    lb.querySelector('.p').onclick=function(){show(cur-1)};
    lb.querySelector('.n').onclick=function(){show(cur+1)};
    lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open')});
    document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
  }

  var slides=document.querySelectorAll('.hero-slide'),copy=document.querySelectorAll('.hero-copy .c'),dots=document.querySelectorAll('.hero-dots button'),si=0,timer;
  if(slides.length){
    var go=function(n){si=(n+slides.length)%slides.length;[slides,copy,dots].forEach(function(l){Array.prototype.forEach.call(l,function(el,i){el.classList.toggle('on',i===si)})});};
    var start=function(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;clearInterval(timer);timer=setInterval(function(){go(si+1)},6500);};
    Array.prototype.forEach.call(dots,function(d,i){d.onclick=function(){go(i);start();};});
    start();
  }
  var rt=$('rvTrack');
  if(rt){
    var step=function(d){var c=rt.querySelector('.rv-card');var w=c?c.getBoundingClientRect().width+22:300;var n=Math.max(1,Math.round(rt.clientWidth/w));rt.scrollBy({left:d*w*n,behavior:'smooth'});};
    $('rvPrev').onclick=function(){step(-1)};$('rvNext').onclick=function(){step(1)};
    rt.querySelectorAll('.rv-card').forEach(function(c){
      var t=c.querySelector('.rv-text');
      if(t.scrollHeight>t.clientHeight+2){
        var b=document.createElement('button');b.className='rv-more';b.type='button';b.textContent='Read more';
        b.onclick=function(){var o=c.classList.toggle('open');b.textContent=o?'Show less':'Read more'};
        c.appendChild(b);
      }
    });
  }

  var burger=document.querySelector('.burger'),nav=$('nav');
  burger.onclick=function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)};

  var today=new Date().toISOString().slice(0,10);
  ['q-in','f-arr','f-dep'].forEach(function(id){var el=$(id);if(el)el.min=today;});
  $('yr').textContent=new Date().getFullYear();

  var q=$('quick');
  if(q){q.addEventListener('submit',function(e){
    e.preventDefault();
    var p=new URLSearchParams({arr:$('q-in').value,nights:$('q-n').value,guests:$('q-g').value});
    location.href='make-enquiry.html?'+p.toString();
  });}

  var enq=$('enq');
  if(enq){
    var P=new URLSearchParams(location.search);
    if(P.get('arr')){
      $('f-arr').value=P.get('arr');
      var d=new Date(P.get('arr'));
      if(!isNaN(d)){d.setDate(d.getDate()+(parseInt(P.get('nights'),10)||1));$('f-dep').value=d.toISOString().slice(0,10);}
      var g=(P.get('guests')||'').replace('+','');var sel=$('f-pers');
      for(var i=0;i<sel.options.length;i++){if(g&&sel.options[i].text.indexOf(g)===0){sel.selectedIndex=i;break;}}
    }
    enq.addEventListener('submit',function(e){
      e.preventDefault();
      var v=function(id){return $(id).value;};
      var body=['Name: '+v('f-name'),'Country: '+v('f-country'),'Email: '+v('f-email'),'Mobile: '+v('f-mob'),'Arrival: '+v('f-arr'),'Departure: '+v('f-dep'),'Rooms: '+v('f-rooms'),'Persons: '+v('f-pers'),'Other requirement: '+v('f-req')].join('\n');
      location.href='mailto:hotelvictoria@rediffmail.com?subject='+encodeURIComponent('Room enquiry from '+v('f-name'))+'&body='+encodeURIComponent(body);
    });
  }

  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px 12% 0px'});
  var rv=document.querySelectorAll('.reveal'),scrolled=false;
  rv.forEach(function(el){io.observe(el)});
  function sweep(){rv.forEach(function(el){if(!el.classList.contains('in')&&el.getBoundingClientRect().top<innerHeight*1.1){el.classList.add('in');}});}
  addEventListener('scroll',function(){scrolled=true;sweep();},{passive:true});addEventListener('resize',sweep);addEventListener('load',sweep);
  setTimeout(sweep,300);
  setTimeout(function(){if(!scrolled)rv.forEach(function(el){el.classList.add('in')});},3500);
})();
