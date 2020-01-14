let navMain = document.querySelector('.page-header__main-nav');
let navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
