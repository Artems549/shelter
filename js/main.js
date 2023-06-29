// Smooth scrolling

const linksGet = document.querySelectorAll('a[href^="#"]');

linksGet.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const linkScrool = this.getAttribute('href');
    document.querySelector(linkScrool).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Our friends slider

const sliderWrapper = document.querySelector('.our-friends__cards');
const sliderLine = document.querySelector('.our-friends__cards-slider');
const buttonPrev = document.querySelector('.arrow__block span:nth-child(1)');
const buttonNext = document.querySelector('.arrow__block span:nth-child(2)');
const windowWidth = window.innerWidth

let position = 0;
let slidesScroll = 1;
let slideWidth = 270

if(windowWidth > 1200) {
  var slidesShow = 3;
  var slidesMarginRight = 90;
} else if(windowWidth <= 1200 && windowWidth > 600) {
  var slidesShow = 2;
  var slidesMarginRight = 40;
} else {
  var slidesShow = 1;
  var slidesMarginRight = 40;
}
let moveSlide = slidesScroll * slideWidth + slidesMarginRight * slidesScroll;
fetch('./cards.json')
.then(response => response.json())
.then(data => {
  for(let i = 0; i < data.length; i++) {
    let card = document.createElement('div');
    card.className = 'our-friends__cards-card';
    let cardPic = document.createElement('div');
    cardPic.className = 'our-friends__cards-card-pic';
    let cardPicImg = document.createElement('img');
    cardPicImg.alt = 'animal';
    cardPicImg.src = data[i].img;
    let cardText = document.createElement('div');
    cardText.className = 'our-friends__cards-card-text';
    let cardTextH2 = document.createElement('h2');
    cardTextH2.innerHTML = data[i].name;
    let cardTextA = document.createElement('a');
    cardTextA.innerHTML = 'Learn more';
    sliderLine.append(card);
    card.append(cardPic);
    cardPic.append(cardPicImg);
    card.append(cardText);
    cardText.append(cardTextH2);
    cardText.append(cardTextA);
  }

  let slide = document.querySelectorAll('.our-friends__cards-card');
  for(let i = 0; i < slide.length - 1; i++) {
    slide[i].style.marginRight = `${slidesMarginRight}px`
  }
  buttonPrev.addEventListener('click', prevSlide);
  buttonNext.addEventListener('click', nextSlide);
  function nextSlide() {
    position -= moveSlide;
    setPosition();
    checkPrevBtn();
    checkNextBtn();
  }
  function prevSlide() {
    position += moveSlide;
    setPosition();
    checkPrevBtn();
    checkNextBtn();
  }
  function setPosition() {
    sliderLine.style.transform = `translateX(${position}px)`
  }
  function checkPrevBtn() {
    if(position === 0) {
      buttonPrev.removeEventListener('click', prevSlide);
      buttonPrev.classList.add('remove');
      buttonPrev.style.pointerEvents = 'none';
    } else {
      buttonPrev.addEventListener('click', prevSlide);
      buttonPrev.classList.remove('remove');
      buttonPrev.style.pointerEvents = 'auto';
    }
  }
  function checkNextBtn() {
    if(position <= -(slide.length - slidesShow) * (slideWidth + slidesMarginRight)) {
      buttonNext.removeEventListener('click', nextSlide);
      buttonNext.classList.add('remove');
      buttonNext.style.pointerEvents = 'none';

    } else {
      buttonNext.addEventListener('click', nextSlide);
      buttonNext.classList.remove('remove');
      buttonNext.style.pointerEvents = 'auto';
    }
  }
  checkPrevBtn()
  checkNextBtn()
})

// Burger

const navMenu = document.querySelector('.header__nav');
const burgerIcon = document.querySelector('.header__lines');
const overlay = document.querySelector('.overlay');
const navMenuItem = document.querySelectorAll('.header__nav-items-item')
const body = document.querySelector('.body')

navMenu.addEventListener('click', addOrRemove)
burgerIcon.addEventListener('click', addOrRemove)
overlay.addEventListener('click', addOrRemove)




function addOrRemove() {
  if(navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    burgerIcon.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('active');
  } else if (!navMenu.classList.contains('active')) {
    navMenu.classList.add('active');
    burgerIcon.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('active');
  }
}

function addActive() {

}
function removeActive() {

}



























// Burger menu

// (function () {
//   const burgerIcon = document.querySelector('.burger');
//   const menu = document.querySelector('.header__nav');
//   const shadow = document.querySelector('.shadow')
//   const links = document.querySelector('.header__nav-items');
//   const body = document.querySelector('.body');
//   let turn = 0;

// burgerIcon.addEventListener('click', () => {
//   menu.classList.toggle('header__nav-active');
//   if(turn === 0) {
//     turn = 90;
//     burgerIcon.style.transform = `rotate(${turn}deg)`;
//     body.style.overflow = 'hidden';
//     shadow.style.display = 'block';
//   } else {
//     turn = 0;
//     burgerIcon.style.transform = `rotate(${turn}deg)`;
//     body.style.overflow = 'visible';
//     shadow.style.display = 'none';
//   }
//   links.addEventListener('click', () => {
//     turn = 90;
//     menu.classList.remove('header__nav-active')
//     if(turn === 90) {
//       turn = 0;
//       burgerIcon.style.transform = `rotate(${turn}deg)`;
//       body.style.overflow = 'visible';
//       shadow.style.display = 'none';
//     }
//   })
// })
// }());


