const menu = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", ()=>{
    navbar.classList.toggle("change");
    menu.classList.toggle('change');
});
//section 3 cards
var swiper = new Swiper(".myswiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });