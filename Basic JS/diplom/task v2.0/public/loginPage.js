'use strict'
const userForm = new UserForm;
userForm.loginFormCallback = (data) => {
  ApiConnector.login({'login':data.login, 'password':data.password}, (err)=> {
    if(err.success !== true) {
      alert(`Доступ: ${err.success}; ${err.data}`);
      console.error(`Доступ: ${err.success}; ${err.data}`);
    } else {
      alert(`Доступ: ${err.success}; Авторизация прошла успешно`);
      location.reload();
    }
  });
}

userForm.registerFormCallback = (data) => {
  ApiConnector.register({'login':data.login, 'password':data.password}, (err) => {
    if(err.success !== true) {
      alert(`Статус: ${err.success}; Ошибка!`);
      console.error(`Статус: ${err.success}; Ошибка!`);
    } else {
      alert(`Статус: ${err.success}; Регистрация прошла успешно! ID: ${err.userId}`);
      location.reload();
    }
  });
}
