//d.getElementsByClassName('slider__items')[0].children[0].classList.add('slider__item_active');
let d = document, currentSlide = 0,
    slideCollection = d.getElementsByClassName('slider__items')[0],
    arrow_prev = d.getElementsByClassName('slider__arrows')[0].children[0],
    arrow_next = d.getElementsByClassName('slider__arrows')[0].children[1];

arrow_prev.addEventListener('click', backSlide);
arrow_next.addEventListener('click', nextSlide);

console.log(currentSlide);

function nextSlide() {
  if (currentSlide == (slideCollection.childElementCount - 1)) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  renderSlide(currentSlide);
  console.log('Работает событие nextSlide; currentSlide = ' + currentSlide);
}

function backSlide() {
  if (currentSlide == 0) {
    currentSlide = slideCollection.childElementCount - 1;
  } else {
    currentSlide -= 1;
  }
  renderSlide(currentSlide);
  console.log('Работает событие backSlide; currentSlide = ' + currentSlide);
}

function renderSlide(slide) {
  for (let i = 0; i < slideCollection.childElementCount; i++) {
    slideCollection.children[i].classList.remove('slider__item_active');
  }
  slideCollection.children[slide].classList.add('slider__item_active');
}
