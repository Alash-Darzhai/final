import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const brandSwiper = document.querySelector('.brand-swiper');
const techniqueSwiper = document.querySelector('.technique-swiper');
const servicesSwiper = document.querySelector('.services-swiper');
const sliders = [brandSwiper, techniqueSwiper, servicesSwiper];

sliders.forEach(el => {
  const swiper = new Swiper(el, {
    modules: [Navigation, Pagination],
    loop: true,
    width: 240,
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
});