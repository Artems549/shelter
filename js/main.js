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
let position = 0;
let slidesShow = 3;
let slidesScroll = 1;
let slidesMarginRight = 90;
let slideWidth = 270
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
    console.log(position)
    setPosition();
    checkPrevBtn();
    checkNextBtn();
  }
  function prevSlide() {
    position += moveSlide;
    console.log(moveSlide)
    setPosition();
    checkPrevBtn();
    checkNextBtn();
  }
  function setPosition() {
    sliderLine.style.transform = `translateX(${position}px)`
  }
  function checkPrevBtn() {
    if(position === 0) {
      buttonPrev.removeEventListener('click', prevSlide)
    } else {
      buttonPrev.addEventListener('click', prevSlide);
    }
    buttonPrev.disabled = false;
  }
  function checkNextBtn() {
    console.log(position)
    if(position <= -(slide.length - slidesShow) * (slideWidth + slidesMarginRight)) {
      buttonNext.removeEventListener('click', nextSlide)
    } else {
      buttonNext.addEventListener('click', nextSlide)
    }
  }
  checkPrevBtn()
  checkNextBtn()
})





























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


