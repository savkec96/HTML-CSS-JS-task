'use strict';

const headerEl = document.querySelector('.header');

function initHeaderNavIconOpen() {
  const btnNavbar = document.querySelector('.menu-btn');
  btnNavbar.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });
}

function initNavBarClose() {
  const linkNavBar = document.querySelectorAll('.nav-link');
  linkNavBar.forEach(link =>
    link.addEventListener('click', function () {
      headerEl.classList.toggle('nav-open');
    })
  );
}

initHeaderNavIconOpen();
initNavBarClose();

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
const matthew = document.querySelector('.matthew');
const cristopher = document.querySelector('.cristopher');
const michael = document.querySelector('.michael');
const btnCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openingModal = function (mod) {
  if (mod.getAttribute('data-name') === 'matthew') {
    matthew.classList.remove('hidden');
  } else if (mod.getAttribute('data-name') === 'cristopher') {
    cristopher.classList.remove('hidden');
  } else if (mod.getAttribute('data-name') === 'michael') {
    michael.classList.remove('hidden');
  }
  overlay.classList.remove('hidden');
};

const closeModal = function (mod) {
  const people = [matthew, cristopher, michael];
  for (mod = 0; mod < people.length; mod++) {
    if (!people[mod].classList.contains('hidden')) {
      people[mod].classList.add('hidden');
    }
  }
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(item => {
  item.addEventListener('click', function () {
    openingModal(item);
  });
});

btnCloseModal.forEach(item => {
  item.addEventListener('click', function () {
    closeModal(item);
  });
});
