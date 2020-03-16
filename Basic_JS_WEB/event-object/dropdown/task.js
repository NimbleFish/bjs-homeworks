let d = document;

for(let i = 0; i < d.querySelectorAll('.dropdown__link').length; i++) {
  d.querySelectorAll('.dropdown__link')[i].onclick = (e)=>{
    e.preventDefault();
    d.getElementsByClassName('dropdown__value')[0].innerText = e.toElement.innerText;
    d.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active');
  }
}

d.getElementsByClassName('dropdown__value')[0].addEventListener('click', dropDown);

function dropDown() {
  d.getElementsByClassName('dropdown__list')[0].classList.toggle('dropdown__list_active');
}
