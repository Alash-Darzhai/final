// import Swiper from 'swiper';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".brand-swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  width: 240,
  // spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".technique-swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  width: 240,
  // spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper3 = new Swiper(".services-swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  width: 240,
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



// let init = false;
// function swiperMode() {
//   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

//   if (mobile.matches) {
//     if (!init) {
//       init = true;
//       swiper = new Swiper('.brand-swiper', {
//         // slidesPerView: 1.2,
//         // watchOverflow: true,
//         slidesPerView: "auto",
//         loop: true,
//         // spaceBetween: 20,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//       });
//     }

//   }
//   else if (init) {
//     // выше просто оставить else
//     swiper.destroy();
//     init = false;
//   }

// }

// window.addEventListener('load', function () {
//   swiperMode();
// });

// window.addEventListener('resize', function () {
//   swiperMode();
// });



// const btnShowMoreBrand = document.querySelector('.button-show-more--brand');
// const sliderBrands = document.querySelector('.brand__list');

// btnShowMoreBrand.addEventListener('click', function () {
//   if (btnShowMoreBrand.textContent != 'Скрыть') {
//     btnShowMoreBrand.textContent = 'Скрыть';
//   } else {
//     btnShowMoreBrand.textContent = 'Показать всё'
//     // через тернарный оператор
//   }
//   sliderBrands.classList.toggle('brand__list--big-height')
//   btnShowMoreBrand.classList.toggle('button-show-rotate')
//   // выше можно все сделать все в одном свойсте
// })

// js разбить на Swiper, show-more
// Потом сделать общий импорт в js

