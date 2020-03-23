let el = document.getElementsByClassName('book__control_font-size')[0],
    text = document.getElementById('book'),
    currentEl;
for (let i = 0; i < el.childElementCount; i++) {
  el.children[i].addEventListener('click',(e)=>{
    e.preventDefault();
    currentEl = e.path[0];
    for (let f = 0; f < el.childElementCount; f++) {
      el.children[f].classList.remove('font-size_active');
    }
    currentEl.classList.add('font-size_active');
    if(Object.keys(currentEl.dataset).length == 0) {
      text.classList.remove('book_fs-big');
      text.classList.remove('book_fs-small');
    }
    if(currentEl.dataset.size == 'small') {
      text.classList.remove('book_fs-big')
      text.classList.add('book_fs-small');
    }
    if(currentEl.dataset.size == 'big') {
      text.classList.remove('book_fs-small')
      text.classList.add('book_fs-big');
    }
  });
}
