function checkCookie( cookie ) {
  const value = '; ' + document.cookie;
  let parts = value.split( '; ' + cookie + '=' );
    return parts
    .pop()
    .split(';')
    .shift();
}

if (!checkCookie('modal')) {
  document.getElementsByClassName('modal')[0].classList.add('modal_active');
  document.getElementsByClassName('modal__close')[0].addEventListener('click', () => {
    document.getElementsByClassName('modal')[0].classList.remove('modal_active');
    document.cookie = "modal=true";
  });
}
