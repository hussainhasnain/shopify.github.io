/* ==================== JS File =================== */

/* ==================== Make mobile navigation work =================== */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
});

/* ==================== Sticky Navigation =================== */
const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/* ==================== Scroll Reveal =================== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.hero__textbox,.heading-secondary, .face__para')
sr.reveal('.products__content--item, .partners__img, .testimonials__content--item, .footer__item', {interval:100})
sr.reveal('.face__arrow, .about__photo, .form__content--input, .form__content--icon-arrow', {origin: 'left'})
sr.reveal('.hero__photo, .about__textbox--text', {origin:'right'})

/* ==================== Smooth Scroll =================== */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});