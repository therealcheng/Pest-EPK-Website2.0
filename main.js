import anime from './node_modules/animejs/lib/anime.es.js';
import Swiper from './node_modules/swiper';

const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const navLogo = document.getElementById('#logo');

const init = () => {
  anime({
    targets: '.hero',
    translateY: 60,
    duration: 2000,
  });
  anime({
    targets: '.hero-p',
    translateY: 60,
    duration: 2000,
  });
  anime({
    targets: '.hero-p2',
    translateY: 60,
    duration: 2000,
  });
};

init();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
