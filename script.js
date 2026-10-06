const progress=document.querySelector('.progress');
const nav=document.querySelector('.nav');
const reveals=document.querySelectorAll('.reveal');
const cursorDot=document.querySelector('.cursor-dot');
const cursorRing=document.querySelector('.cursor-ring');

function updateScroll(){
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/Math.max(h,1))*100+'%';
  nav.classList.toggle('scrolled',window.scrollY>20);
}
window.addEventListener('scroll',updateScroll,{passive:true}); updateScroll();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{
    cursorDot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
    cursorRing.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  });
  document.querySelectorAll('a,.project').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'));
  });
}
/* =========================================================
   CARRUSEL — PROYECTO
   ========================================================= */

document.querySelectorAll('.carousel-project').forEach(carousel => {

  const track = carousel.querySelector('.carousel-project-track');
  const slides = carousel.querySelectorAll('.carousel-project-slide');
  const prev = carousel.querySelector('.carousel-project-prev');
  const next = carousel.querySelector('.carousel-project-next');

  let current = 0;

  function updateCarousel(){

    track.style.transform = `translateX(-${current * 100}%)`;

  }

  next.addEventListener('click', () => {

    current++;

    if(current >= slides.length){
      current = 0;
    }

    updateCarousel();

  });

  prev.addEventListener('click', () => {

    current--;

    if(current < 0){
      current = slides.length - 1;
    }

    updateCarousel();

  });

});