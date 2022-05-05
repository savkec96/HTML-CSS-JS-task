'use strict';
// MENU ICON
const btnNavbar = document.querySelector('.menu-btn');
const headerEl = document.querySelector('.header');
btnNavbar.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (link.classList.contains('nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// For sticky navigation
let headerNav = document.querySelector('.header');
const sectionHero = document.querySelector('.section-hero');

window.addEventListener('scroll', () => {
  headerNav.classList.toggle(
    'shadow',
    window.scrollY > `${sectionHero.clientHeight}` // 0
  );
  if (window.scrollY > `${sectionHero.clientHeight}`) {
    headerNav.style.position = 'fixed';
  } else {
    headerNav.style.position = 'relative';
  }
});

const accordion = document.querySelector('.accordion');
const arrowPanel = document.querySelectorAll('.arrow');
const itemPanel = document.querySelectorAll('.item');
// const box = document.querySelectorAll('.hidden-box');
let i;

// Accordion animation
// for (i = 0; i < itemPanel.length; i++) {
//   itemPanel[i].addEventListener('click', function () {
//     // console.log(e.target);
//     this.classList.toggle('open');
//   });
// }
accordion.addEventListener('click', function (e) {
  const clicked = e.target.closest('.item');
  if (!clicked) return;
  itemPanel.forEach(i => i.classList.remove('open'));
  clicked.classList.add('open');
});

// Slider animation
const slides = document.querySelectorAll('.slide-quote');
const btnLeft = document.querySelector('.left-arrow');
const btnRight = document.querySelector('.right-arrow');
let curSlide = 0;
const maxSlides = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${130 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

// Slider animation 2
const slides2 = document.querySelectorAll('.slide-quote2');
const btnLeft2 = document.querySelector('.left-arrow2');
const btnRight2 = document.querySelector('.right-arrow2');
const maxSlides2 = slides2.length;

const goToSlide2 = function (slide2) {
  slides2.forEach(
    (s, i) => (s.style.transform = `translateX(${130 * (i - slide2)}%)`)
  );
};

goToSlide2(0);

const nextSlide2 = function () {
  if (curSlide === maxSlides2 - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide2(curSlide);
};

const prevSlide2 = function () {
  if (curSlide === 0) {
    curSlide = maxSlides2 - 1;
  } else {
    curSlide--;
  }
  goToSlide2(curSlide);
};

btnLeft2.addEventListener('click', prevSlide2);
btnRight2.addEventListener('click', nextSlide2);

// Modal animation
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const openModal1 = document.querySelector('.show-modal1');
const openModal2 = document.querySelector('.show-modal2');
const openModal3 = document.querySelector('.show-modal3');

const openingModal1 = function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openingModal2 = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openingModal3 = function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closingModal1 = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closingModal2 = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closingModal3 = function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModal1.addEventListener('click', openingModal1);
openModal2.addEventListener('click', openingModal2);
openModal3.addEventListener('click', openingModal3);

btnCloseModal1.addEventListener('click', closingModal1);
btnCloseModal2.addEventListener('click', closingModal2);
btnCloseModal3.addEventListener('click', closingModal3);

// SWIPER
let swiper = new Swiper('.logos', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 6,
    },
  },
});
