class Entity { // Базовый калсс для взаимодействия с сервером.
  static list( data, callback = f => f ) { // Запрашивает с сервера список данных.
    return createRequest({
      'url' : `${this.HOST}${this.URL}/list`,
      'method' : 'GET',
      'responseType' : 'json',
      'data' : { 'id' : data.id, 'mail' : data.mail, 'name' : data.name },
      'callback' : callback
    });
  }

  static create( data, callback = f => f ) { // Создаёт счёт или доход/расход с помощью запроса на сервер.
    return createRequest({
      'url' : `${this.HOST}${this.URL}`,
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'mail' : data.mail, 'password' : data.password, '_method' : 'PUT' },
      'callback' : callback
    });
  }

  static get( id = '', data, callback = f => f ) { // Получает информацию о счёте или доходе/расходе
    return createRequest({
      'url' : `${this.HOST}${this.URL}/get`,
      'method' : 'GET',
      'responseType' : 'json',
      'data' : { 'id' : id, 'mail' : data.mail, 'password' : data.password },
      'callback' : callback
    });
  }

  static remove( id = '', data, callback = f => f ) { // Удаляет информацию о счёте или доходе/расходе
    return createRequest({
      'url' : `${this.HOST}${this.URL}`,
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'id' : id, 'mail' : data.mail, 'password' : data.password, '_method' : 'DELETE' },
      'callback' : callback
    });
  }
}
Entity.HOST = "http://localhost:8000/";
Entity.URL = "account";
// Вызов
/*
Entity.create({
  'id' : 1,
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(JSON.parse(res));
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
  'id' : id,
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(res);
});
*/
