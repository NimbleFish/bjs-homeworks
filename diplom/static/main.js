class Profile {
  constructor(username, name, password) {
      this.username = username;
      this.name = {
        'firstName' : name.firstName,
        'lastName' : name.lastName,
      };
      this.password = password;

//Создать профиль - new Profile('NimbleFish', {'firstName':'Юрий','lastName':'Карпов'}, '1002071');

      this.addUser( {'username':this.username, 'name':{'firstName':this.name.firstName,'lastName':this.name.lastName}, 'password':this.password}, (err, data) => {
        if(err) {
          console.error(`Ошибка ${err.code} при создании пользователя ${this.username}; Статус: ${err.message}`);
        }
        else {
          console.log(`Пользователь ${this.username} Успешно создан!`);
          this.autorization({ 'username':this.username, 'password':this.password }, (err, data) => {
            if(err) {
              console.error(`Ошибка ${err.code} при авторизации пользователя ${this.username}; Статус: ${err.message}`);
            }
            else {
              console.log(`Пользователь ${this.username} Успешно авторизован!`);
            }});
          }});


  }

  addUser({ username, name, password }, callback) {
    ApiConnector.createUser({username, name, password}, callback);
  }

  autorization({ username, password }, callback) {
    ApiConnector.performLogin({ username, password }, callback);
  }

  addMoney({ valuta, money }, callback) {
    ApiConnector.addMoney({ valuta, money }, callback);
  }

  convertMoney({ valutaIn, valutaOut, money }, callback) {
    ApiConnector.convertMoney({ valutaIn, valutaOut, money }, callback);
  }

  transferMoney({ to, money }, callback) {
    ApiConnector.transferMoney({ to, money }, callback);
  }
}

function getValute() {
  ApiConnector.getStocks(callback);
}
