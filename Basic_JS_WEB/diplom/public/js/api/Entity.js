class Entity { // Базовый калсс для взаимодействия с сервером.
  static list( data, callback = f => f ) { // Запрашивает с сервера список данных.
    createRequest({
      'url' : 'http://localhost:8000/account/',
      'method' : 'GET',
      'responseType' : 'json',
      'data' : { 'mail' : data.mail, 'password' : data.password },
      'callback' : callback
    });
  }

  static create( data, callback = f => f ) { // Создаёт счёт или доход/расход с помощью запроса на сервер.
    createRequest({
      'url' : 'http://localhost:8000/account/',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'mail' : data.mail, 'password' : data.password, '_method' : 'PUT' },
      'callback' : callback
    });
  }

  static get( id = '', data, callback = f => f ) { // Получает информацию о счёте или доходе/расходе
    createRequest({
      'url' : 'http://localhost:8000/account/get',
      'method' : 'GET',
      'responseType' : 'json',
      'data' : { 'id' : id, 'mail' : data.mail, 'password' : data.password },
      'callback' : callback
    });
  }

  static remove( id = '', data, callback = f => f ) { // Удаляет информацию о счёте или доходе/расходе
    createRequest({
      'url' : 'http://localhost:8000/account/',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'id' : id, 'mail' : data.mail, 'password' : data.password, '_method' : 'DELETE' },
      'callback' : callback
    });
  }
}
// Вызов
/*
Entity.create({
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(res);
});

Entity.get('1', {
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(JSON.parse(res));
});

Entity.list({
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(JSON.parse(res));
});

Entity.remove('1', {
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(res);
});
*/
