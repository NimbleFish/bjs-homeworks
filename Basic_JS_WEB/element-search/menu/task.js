let d = document,
    mainMenu = d.querySelectorAll('.menu_main>li>.menu__link');

for(let i = 0; i < d.getElementsByClassName('menu_main')[0].childElementCount; i++) {
  if(d.getElementsByClassName('menu_main')[0].children[i].childElementCount > 1) {
    d.getElementsByClassName('menu_main')[0].children[i].addEventListener('click', (el)=>{
      el.preventDefault();
      d.getElementsByClassName('menu_main')[0].children[i].children[1].classList.toggle('menu_active');
      if(d.getElementsByClassName('menu_main')[0].children[1].children[1].className.includes('menu_active')) {
        d.getElementsByClassName('menu_main')[0].children[2].children[1].classList.remove('menu_active');
      }
      if(d.getElementsByClassName('menu_main')[0].children[2].children[1].className.includes('menu_active')) {
        d.getElementsByClassName('menu_main')[0].children[1].children[1].classList.remove('menu_active');
      }
    });
  }
}
