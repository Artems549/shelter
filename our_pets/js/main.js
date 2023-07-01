
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

// JSON

var cards = document.querySelector('.our-friends__items');




fetch('../../json/cards.json')
.then(response => response.json())
.then(data => {
  console.log(data.length)
  for(let i = 0; i < data.length; i++) {
    let card = document.createElement('div');
    card.className = 'our-friends__items-item';

    let cardPic = document.createElement('div');
    cardPic.className = 'our-friends__items-item-pic';

    let cardPicImg = document.createElement('img');
    cardPicImg.src = data[i].img;
    cardPicImg.alt = 'animal';

    let cardText = document.createElement('div');
    cardText.className = 'our-friends__items-item-text';

    let cardTextP = document.createElement('p');
    cardTextP.innerHTML = data[i].name;

    var cardTextA = document.createElement('a')
    cardTextA.innerHTML = 'Learn more'

    cards.append(card);
    card.append(cardPic);
    cardPic.append(cardPicImg);
    card.append(cardText);
    cardText.append(cardTextP);
    cardText.append(cardTextA);
  }

  // Modal

  const friendsCard = document.querySelectorAll('.our-friends__items-item')
  const shadow = document.querySelector('.shadow');
  const modal = document.querySelector('.our-friends__modal');
  const modalClose = document.querySelector('.our-friends__modal-close')
  const modalPic = document.querySelector('.our-friends__modal-pic img');
  const modalTitleH2 = document.querySelector('.our-friends__modal-title h2');
  const modalTitleP = document.querySelector('.our-friends__modal-title p');
  const modalTextP = document.querySelector('.our-friends__modal-desc > p');
  const modalTextAge = document.querySelector('.our-friends__modal-desc ul li:nth-child(1) span');
  const modalTextInoc = document.querySelector('.our-friends__modal-desc ul li:nth-child(2) span');
  const modalTextDise = document.querySelector('.our-friends__modal-desc ul li:nth-child(3) span');
  const modalTextParas = document.querySelector('.our-friends__modal-desc ul li:nth-child(4) span');

  for(let i = 0; i < friendsCard.length; i++) {
    friendsCard[i].addEventListener('click', function() {
      addOrRemove()
      modalPic.src = data[i].img
      modalTitleH2.innerHTML = data[i].name
      modalTitleP.innerHTML = data[i].type + ' - ' + data[i].breed
      modalTextP.innerHTML = data[i].description
      modalTextAge.innerHTML = data[i].age
      modalTextInoc.innerHTML = data[i].inoculations
      modalTextDise.innerHTML = data[i].diseases
      modalTextParas.innerHTML = data[i].parasites
    })
  }

  shadow.addEventListener('click', addOrRemove);
  modalClose.addEventListener('click', addOrRemove);
  function addOrRemove() {
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






