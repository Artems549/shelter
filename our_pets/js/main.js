console.log("Баллы: 40/40")

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






