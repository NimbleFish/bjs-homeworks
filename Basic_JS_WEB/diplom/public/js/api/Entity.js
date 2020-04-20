class Entity { // Базовый калсс для взаимодействия с сервером.
  static list( data, callback = f => f ) { // Запрашивает с сервера список данных.
    createRequest({
      'url' : 'http://localhost:8000/entity/create',
      'method' : 'POST',
      'responseType' : 'json',
      'data' : { 'mail' : data.mail, '_method' : 'PUT' },
      'callback' : callback
    });
  }

  static create( data, callback = f => f ) { // Создаёт счёт или доход/расход с помощью запроса на сервер.

  }

  static get( id = '', data, callback = f => f ) { // Получает информацию о счёте или доходе/расходе

  }

  static remove( id = '', data, callback = f => f ) { // Удаляет информацию о счёте или доходе/расходе

  }
}

Entity.list({
  'mail' : 'demo@mail.ru',
  'password' : 'demo'
}, (err, res) => {
  console.log(res);
});
