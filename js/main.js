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
var windowWidth = window.innerWidth

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

  // Modal window

  const modalClose = document.querySelector('.our-friends__modal-close');
  const modal = document.querySelector('.our-friends__modal');
  const shadow = document.querySelector('.shadow');
  const modalPic = document.querySelector('.our-friends__modal-pic img');
  const modalTitleH2 = document.querySelector('.our-friends__modal-title h2')
  const modalTitleP = document.querySelector('.our-friends__modal-title p');
  const modalDescP = document.querySelector('.our-friends__modal-desc p');
  const modalDescAge = document.querySelector('.our-friends__modal-desc ul li:nth-child(1) span');
  const modalDescIno = document.querySelector('.our-friends__modal-desc ul li:nth-child(2) span');
  const modalDescDis = document.querySelector('.our-friends__modal-desc ul li:nth-child(3) span');
  const modalDescParas = document.querySelector('.our-friends__modal-desc ul li:nth-child(4) span');

  for(let i = 0; i < slide.length; i++) {
    slide[i].addEventListener('click', function() {
      addOrRemoveModal()
      modalPic.src = data[i].img
      modalTitleH2.innerHTML = data[i].name
      modalTitleP.innerHTML = data[i].breed
      modalDescP.innerHTML = data[i].description
      modalDescAge.innerHTML = data[i].age
      modalDescIno.innerHTML = data[i].inoculations
      modalDescDis.innerHTML = data[i].diseases
      modalDescParas.innerHTML = data[i].parasites
    })
  }
  shadow.addEventListener('click', addOrRemoveModal)
  modalClose.addEventListener('click', addOrRemoveModal)

  function addOrRemoveModal() {
    if(modal.classList.contains('active')) {
      modal.classList.remove('active');
      shadow.classList.remove('active');
      body.classList.remove('active');
    } else if(!modal.classList.contains('active')) {
      modal.classList.add('active');
      shadow.classList.add('active');
      body.classList.add('active');
    }
  }
})

// Burger menu

const navMenu = document.querySelector('.header__nav');
const burgerIcon = document.querySelector('.header__lines');
const navMenuItem = document.querySelectorAll('.header__nav-items-item');
const overlay = document.querySelector('.overlay');
var body = document.querySelector('.body');

navMenuItem.forEach(function(item) {
  item.addEventListener('click', removeActiveBurger)
})
burgerIcon.addEventListener('click', function() {
  if(navMenu.classList.contains('active')) {
    removeActiveBurger();
  } else if(!navMenu.classList.contains('active')) {
    addActiveBurger();
  }
})
overlay.addEventListener('click', removeActiveBurger)

function addActiveBurger() {
  navMenu.classList.add('active');
  burgerIcon.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('active');
}
function removeActiveBurger() {
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('active');
}