let d = document, currentSlide = 0, currnetDot = 0,
    slideCollection = d.getElementsByClassName('slider__items')[0],
    dotCollection = d.getElementsByClassName('slider__dots')[0];

d.getElementsByClassName('slider__arrows')[0].children[0].addEventListener('click', backSlide);
d.getElementsByClassName('slider__arrows')[0].children[1].addEventListener('click', nextSlide);

for(let count = 0; count < dotCollection.childElementCount; count++) {
  dotCollection.children[count].addEventListener('click', (...arr) => {
    currnetDot = parseInt(arr[0].toElement.getAttribute('value'));
    renderSlide(currnetDot);
  });
}

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
      dotCollection.children[i].classList.remove('slider__dot_active');
  }
  slideCollection.children[slide].classList.add('slider__item_active');
  dotCollection.children[slide].classList.add('slider__dot_active');
}
