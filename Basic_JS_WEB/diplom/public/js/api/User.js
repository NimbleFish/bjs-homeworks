class User { // Класс User управляет авторизацией, выходом и регистрацией пользователя из приложения.
  static setCurrent(user) { // Устанавливает текущего пользователя в локальном хранилище.
    localStorage.user = JSON.stringify(user);
  }

  static unsetCurrent() { // даляет информацию об авторизованном пользователе из локального хранилища.
    delete localStorage.user;
  }

  static current() { // Возвращает текущего авторизованного пользователя из локального хранилища.
    if (localStorage.user !== undefined) {
      return JSON.parse(localStorage.user);
    } else {
      return undefined;
    }
  }

  static fetch( data, callback = f => f ) { // Получает информацию о текущем авторизованном пользователе.
    if (data === undefined) { data = { 'id' : undefined, 'name' : undefined, 'email' : undefined } };
    return createRequest({
      'url' : 'http://localhost:8000/user/current',
      'method' : 'GET',
      'responseType' : 'json',
      'data' : { 'id' : data.id, 'name' : data.name, 'email' : data.email },
      'callback' : callback
    });
  }

  static login( data, callback = f => f ) { // Производит попытку авторизации.
    return createRequest({
      'url' : 'http://localhost:8000/user/login',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'email' : data.email, 'password' : data.password },
      'callback' : callback
    });
  }

  static register( data, callback = f => f ) { // Производит попытку регистрации пользователя.
    return createRequest({
      'url' : 'http://localhost:8000/user/register',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'name' : data.name, 'email' : data.email, 'password' : data.password },
      'callback' : callback
    });
  }

  static logout( data, callback = f => f ) { // Производит выход из приложения.
    return createRequest({
      'url' : 'http://localhost:8000/user/logout',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'email' : data.email, 'password' : data.password },
      'callback' : callback
    });
  }
}

// Вызов User.register(...);
/*
User.register({
	'name' : 'Alex91',
	'email' : '1234567891@mail.ru',
	'password' : '1234567891'
}, (err, res) => {
  if(err) {
    console.error(err);
  }
	console.log(res);
	if (res.success === true) {
		User.setCurrent(res.user);
		console.log(res.user);
    }
});
*/

// Вызов User.login(...);
/*
User.login({
	'email' : '1234567891@mail.ru',
	'password' : '1234567891'
}, (err, res) => {
  if(err) {
    console.error(err);
  }
	console.log(res);
	if (res.success === true) {
		User.setCurrent(res.user);
		console.log(res.user);
    }
});
*/

// Вызов User.logout(...);
/*
User.logout({
	'email' : '1234567891@mail.ru',
	'password' : '1234567891'
}, (err, res) => {
  if(err) {
    console.error(err);
  }
	console.log(res);
	if (res.success === true) {
		User.unsetCurrent();
		console.log(res.user);
    }
});
*/

// Вызов User.fetch(...);
/*
User.fetch(User.current(), (err, res) => {
  res = JSON.parse(res);
	console.log(res);
	if (res.success === true) {
    User.setCurrent(res.user);
		console.log(res.user);
  } else {
    console.error("Необходима авторизация");
    User.unsetCurrent();
  }
});
*/
