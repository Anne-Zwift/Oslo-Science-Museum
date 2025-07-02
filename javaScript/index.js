// Set footer year
import { setFooterYear } from './footer.js';

setFooterYear();

// Mobile navigation toggle
import { setupMobileNav } from './nav.js';

setupMobileNav();

// Back to top button functionality
import { setupBackToTop } from './backToTop.js';

setupBackToTop();



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
