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


var friendsPic = document.querySelectorAll('.our-friends__cards-card-pic img');
var friendsName = document.querySelectorAll('.our-friends__cards-card-text h2');
const friendsBtn = document.querySelector('.our-friends__cards-card-text a');
// const modalWindow = document.querySelector('.our-friends__modal');
const cardsWrap = document.querySelector('.our-friends__cards')

function createNewBlock() {

}





const jsonObj = fetch('./cards.json')
.then(response => response.json())
.then(data => {
  console.log(data[0])
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
    cardTextH2.innerHTML = data[i].name
    let cardTextA = document.createElement('a');
    cardTextA.innerHTML = 'Learn more';
    
    cardsWrap.appendChild(card)
    card.appendChild(cardPic);
    cardPic.appendChild(cardPicImg);
    card.appendChild(cardText);
    cardText.appendChild(cardTextH2);
    cardText.appendChild(cardTextA);

  }

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


