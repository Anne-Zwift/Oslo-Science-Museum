// Mobile navigation toggle
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');
  menuIcon.classList.toggle('open');

});

navBar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    menuIcon.classList.remove('open');
  });
});



// Swiper slider initialization
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
    slidesPerView: 2
    },
     1024: {
    slidesPerView: 3
    },
  }

});