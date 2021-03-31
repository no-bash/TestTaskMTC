const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});