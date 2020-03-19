let menu = document.getElementsByClassName('menu_main')[0];

for(let i = 0; i < menu.childElementCount; i++) {
  if(menu.children[i].childElementCount > 1) {
    menu.children[i].addEventListener('click', (el)=>{
      el.preventDefault();
      if(!menu.children[i].children[1].className.includes('menu_active')) {
        menu.children[i].children[1].classList.add('menu_active');
      } else {
        menu.children[i].children[1].classList.remove('menu_active');
      }
    });
  }
}
