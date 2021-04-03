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
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let hamburger = document.getElementById('openMenu');
  hamburger.addEventListener('click', function() {
    let menu = document.getElementById('adaptiveMenu');
    menu.style.width = "100vw";
  })

  let closeIcon = document.getElementById('closeIcon');

  closeIcon.addEventListener('click', function() {
    let menu = document.getElementById('adaptiveMenu');
    menu.style.width = "0";
  });
})