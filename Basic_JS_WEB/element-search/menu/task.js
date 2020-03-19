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
      if(menu.querySelectorAll('ul .menu_active').length > 1) {
        let countMenu = checkMenu();
        for (let g = 0; g <= countMenu; g++) {
          if(menu.children[g].childElementCount > 1) {
            menu.children[g].children[1].classList.remove('menu_active');
          }
        }
        menu.children[i].children[1].classList.add('menu_active');
      }
    });
  }
}

function checkMenu() {
  let result;
  for (let i = 0; i < menu.childElementCount; i++) {
    if(menu.children[i].childElementCount > 1) {
      result = i;
    }
  }
  return result;
}
