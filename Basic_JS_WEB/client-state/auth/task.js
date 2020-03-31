let sign = localStorage.sign;

const xhr = new XMLHttpRequest();
if (sign == undefined) {
  document.getElementById('signin').classList.add('signin_active');
  document.getElementById('signin__btn').addEventListener('click', (e) => {
    e.preventDefault();
    xhr.open('POST', document.getElementById('signin__form').action);
    xhr.send(new FormData(document.forms.signin__form));
    xhr.addEventListener('readystatechange', (e) => {
      if (xhr.readyState === xhr.DONE) {
        let answer = JSON.parse(xhr.responseText);
        if(answer.success == true) {
          document.getElementById('welcome').innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${answer.user_id}</span><button id="unlogin">Деавторизация</button>`;
          document.getElementById('signin').classList.remove('signin_active');
          document.getElementById('welcome').classList.add('welcome_active');
          localStorage.sign = answer.user_id;
        } else {
          document.getElementsByName('login')[0].value = '';
          document.getElementsByName('password')[0].value = '';
          document.getElementById('signin').classList.add('signin_active');
          document.getElementById('welcome').classList.remove('welcome_active');
          alert('Неверный логин/пароль!');
        }
      }
    });
  });
} else {
  document.getElementById('signin').classList.remove('signin_active');
  document.getElementById('welcome').innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${sign}</span><button id="unlogin">Деавторизация</button>`;
  document.getElementById('welcome').classList.add('welcome_active');
}
document.getElementById('unlogin').addEventListener('click', () => {
  delete localStorage.sign;
  document.getElementById('signin').classList.add('signin_active');
  document.getElementById('welcome').classList.remove('welcome_active');
});
