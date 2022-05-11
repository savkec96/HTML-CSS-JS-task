'use strict';

const headerEl = document.querySelector('.header');

function initHeaderNavIconOpen() {
  const btnNavbar = document.querySelector('.menu-btn');
  btnNavbar.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });
}

initHeaderNavIconOpen();

//Smooth scrolling animation
document.querySelector('.nav-list').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// For sticky navigation
function initStickyNav() {
  window.addEventListener('scroll', () => {
    const sectionHero = document.querySelector('.section-hero');
    headerEl.classList.toggle(
      'shadow',
      window.scrollY > `${sectionHero.clientHeight}` // 0
    );
    if (window.scrollY > `${sectionHero.clientHeight}`) {
      headerEl.style.position = 'fixed';
    } else {
      headerEl.style.position = 'relative';
    }
  });
}

initStickyNav();

function initAccordion() {
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', function (e) {
    const itemPanel = document.querySelectorAll('.item');
    const clicked = e.target.closest('.item');
    if (!clicked) return;
    itemPanel.forEach(i => i.classList.remove('open'));
    clicked.classList.add('open');
  });
}

initAccordion();

// Slider animation
const slides = document.querySelectorAll('.slide-quote');
const slides2 = document.querySelectorAll('.slide-quote2');
const btnLeft = document.querySelector('.left-arrow');
const btnRight = document.querySelector('.right-arrow');
const btnLeft2 = document.querySelector('.left-arrow2');
const btnRight2 = document.querySelector('.right-arrow2');
let curSlide = 0;

function goToSlide(slide, slideNumber) {
  slideNumber.forEach(
    (s, i) => (s.style.transform = `translateX(${130 * (i - slide)}%)`)
  );
}

goToSlide(0, slides);
goToSlide(0, slides2);

function nextSlide(slideNumber) {
  const maxSlides = slideNumber.length;
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide, slideNumber);
}

function prevSlide(slideNumber) {
  const maxSlides = slideNumber.length;
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide, slideNumber);
}

btnLeft.addEventListener('click', function () {
  prevSlide(slides);
});
btnRight.addEventListener('click', function () {
  nextSlide(slides);
});
btnLeft2.addEventListener('click', function () {
  prevSlide(slides2);
});
btnRight2.addEventListener('click', function () {
  nextSlide(slides2);
});

// Swiper animation

let slider = document.querySelector('.sliders');
let innerSlider = document.querySelector('.slide-track');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', e => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = `grabbing`;
});

slider.addEventListener('mouseenter', () => {
  slider.style.cursor = `grab`;
});

slider.addEventListener('mouseup', () => {
  slider.style.cursor = `grab`;
});

window.addEventListener('mouseup', () => {
  pressed = false;
});

slider.addEventListener('mousemove', e => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;

  checkboundary();
});

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = '0px';
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}

// Modal animation
// const modal = document.querySelectorAll('.modal');
// const btnCloseModal = document.querySelector('.close-modal');
// const overlay = document.querySelector('.overlay');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openingModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const openingModal = function (e) {
//   e.preventDefault();
//   for (let i = 0; i < modal.length; i++) {
//     if (modal[i].getAttribute('data-name') == 'matthew') {
//       modal[i].classList.remove('hidden');
//     } else if (modal[i].getAttribute('data-name') == 'cristopher') {
//       modal[i].classList.remove('hidden');
//     } else if (modal[i].getAttribute('data-name') == 'michael') {
//       modal[i].classList.remove('hidden');
//     }
//     overlay.classList.remove('hidden');
//   }
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.addEventListener('click', openingModal);

// btnCloseModal.addEventListener('click', closeModal);

/////////////////////////////////// OVAKO RADI ALI NIJE CISTO!!!! ///////////////////////////////////////////

// const modal1 = document.querySelector('.modal1');
// const modal2 = document.querySelector('.modal2');
// const modal3 = document.querySelector('.modal3');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal1 = document.querySelector('.close-modal1');
// const btnCloseModal2 = document.querySelector('.close-modal2');
// const btnCloseModal3 = document.querySelector('.close-modal3');
// const openModal1 = document.querySelector('.show-modal1');
// const openModal2 = document.querySelector('.show-modal2');
// const openModal3 = document.querySelector('.show-modal3');

// const openingModal1 = function () {
//   modal1.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const openingModal2 = function () {
//   modal2.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const openingModal3 = function () {
//   modal3.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closingModal1 = function () {
//   modal1.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// const closingModal2 = function () {
//   modal2.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// const closingModal3 = function () {
//   modal3.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// openModal1.addEventListener('click', openingModal1);
// openModal2.addEventListener('click', openingModal2);
// openModal3.addEventListener('click', openingModal3);

// btnCloseModal1.addEventListener('click', closingModal1);
// btnCloseModal2.addEventListener('click', closingModal2);
// btnCloseModal3.addEventListener('click', closingModal3);
