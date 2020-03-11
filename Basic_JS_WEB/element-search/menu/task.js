let mainMenu = document.querySelectorAll('.menu_main>li>.menu__link');

mainMenu[0].onmouseover = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[0].classList.remove('menu_active');
  document.querySelectorAll('.menu_main .menu__item ul')[1].classList.remove('menu_active');
}
mainMenu[3].onmouseover = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[0].classList.remove('menu_active');
  document.querySelectorAll('.menu_main .menu__item ul')[1].classList.remove('menu_active');
}
mainMenu[1].onmouseover = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[0].classList.add('menu_active');
  document.querySelectorAll('.menu_main .menu__item ul')[1].classList.remove('menu_active');
}
document.querySelectorAll('.menu_main>li>ul li').onmouseout = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[0].classList.remove('menu_active');
}

mainMenu[2].onmouseover = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[1].classList.add('menu_active');
  document.querySelectorAll('.menu_main .menu__item ul')[0].classList.remove('menu_active');
}
document.querySelectorAll('.menu_main>li>ul li').onmouseout = () => {
  document.querySelectorAll('.menu_main .menu__item ul')[1].classList.remove('menu_active');
}
