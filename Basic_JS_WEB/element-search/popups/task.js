document.getElementById('modal_main').className += ' modal_active';

document.querySelector('#modal_main .modal__close').onclick = ()=> {
  document.getElementById('modal_main').className = 'modal';
}
document.querySelector('#modal_success .modal__close').onclick = ()=> {
  document.getElementById('modal_success').className = 'modal';
}
document.querySelector('#modal_main .show-success').onclick = ()=> {
  document.getElementById('modal_main').className = 'modal';
  document.getElementById('modal_success').className += ' modal_active';
}
