let tabNav = document.getElementsByClassName('tab__navigation')[0],
    tabCont = document.getElementsByClassName('tab__contents')[0];

for (let n = 0; n < tabNav.children.length; n++) {
  tabNav.children[n].onclick = (e) => {
    clearClassTab();
    tabNav.children[n].classList.add('tab_active');
  }

  tabNav.children[n].onclick = (e) => {
    clearClassTabContent();
    tabCont.children[n].classList.add('tab__content_active');
  }
}

function clearClassTab() {
  for(let n = 0; n < tabNav.children.length; n++) {
    tabNav.children[n].classList.remove('tab_active');
  }
}

function clearClassTabContent() {
  for(let n = 0; n < tabCont.children.length; n++) {
    tabCont.children[n].classList.remove('tab__content_active');
  }
}
