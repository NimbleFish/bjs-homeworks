window.addEventListener('scroll', (e) => {
  let elem, viewport = window.innerHeight;
  for(let i = 0; i < document.getElementsByClassName('reveal').length; i++) {
    elem = document.getElementsByClassName('reveal')[i].getBoundingClientRect().top;
    if(elem < viewport) {
      document.getElementsByClassName('reveal')[i].classList.add('reveal_active');
    }
  }
});
