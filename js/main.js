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


