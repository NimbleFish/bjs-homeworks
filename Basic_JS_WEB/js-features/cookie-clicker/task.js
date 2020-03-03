const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

cookie.onclick = ()=>{
  cookie.width = 250;
  cookie.height = 150;

  count.textContent = parseInt(count.textContent) + 1;

  setTimeout(()=>{
    cookie.width = 200;
    cookie.height = 128;
  }, 50);
}
