let el = document.querySelector('.interests ul');

for(let g = 0; g < el.childElementCount; g++) {
  el.children[g].querySelector('li.interest label input').onclick = () => {
    if(el.children[g].querySelector('li.interest label input').checked == true) {
      for(let i = 0; i < el.children[g].childElementCount; i++) {
        el.children[g].querySelectorAll('li.interest ul li label input')[i].checked = true;
      }
    } else {
      for(let i = 0; i < el.children[g].childElementCount; i++) {
        el.children[g].querySelectorAll('li.interest ul li label input')[i].checked = false;
      }
    }
  }
}
