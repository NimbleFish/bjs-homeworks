//Выход
const logout = new LogoutButton;
logout.action = ()=>{
  ApiConnector.logout((err)=>{
    if(err.success == true) {
      alert('Вы больше не авторизованы');
      location.reload();
    }
  });
}

//Отображение данных пользователя
ApiConnector.current((dan) => {
  if(dan.success == true) {
    ProfileWidget.showProfile(dan.data);
  }
  else {
    alert('Ошибка! Нет данных о пользователе!');
    console.error('Ошибка! Нет данных о пользователе!');
  }
});

//Курс Валют
const ratesBoard = new RatesBoard;
function valute() {
  ApiConnector.getStocks((...args)=>{
    if(args[0].success == true) {
      console.log(`${new Date().getHours()}:${new Date().getMinutes()} Обновление курса!`);
      ratesBoard.clearTable();
      ratesBoard.fillTable(args[0].data);
    }
  });
}
//Обновление курса валют
valute();
setInterval(valute, 60000);

//Пополнение счёта
const moneyManager = new MoneyManager;
moneyManager.addMoneyCallback = ({currency, amount})=> {
    ApiConnector.addMoney({currency, amount}, (...args)=>{
      if(args[0].success == true) {
        ProfileWidget.showProfile(args[0].data);
        console.log(`Вы пополнили свой счёт на ${amount} ${currency}`);
        moneyManager.setMessage(args.success, `Вы пополнили свой счёт на ${amount} ${currency}`);
      } else {
        moneyManager.setMessage(args.success, 'Ошибка пополнения счёта');
        console.error('Ошибка пополнения счёта');
      }
    });
}

//конвертирование валюты
moneyManager.conversionMoneyCallback = ({fromCurrency, targetCurrency, fromAmount})=> {
  ApiConnector.convertMoney({fromAmount, fromCurrency, targetCurrency}, (...args)=>{
    console.log(args);
    if(args[0].success == true) {
      ProfileWidget.showProfile(args[0].data);
      console.log(`Вы конвертировали ${fromCurrency} ${targetCurrency} в ${fromAmount}`);
      moneyManager.setMessage(args.success, `Вы конвертировали ${fromCurrency} ${targetCurrency} в ${fromAmount}`);
    } else {
      moneyManager.setMessage(args.success, 'Ошибка конвертации');
      console.error('Ошибка конвертации');
    }
  });
}

//перевод валюты
moneyManager.sendMoneyCallback = ({to, amount, currency})=>{
  ApiConnector.transferMoney({to, currency, amount}, (...args)=>{
    console.log(args);
    if(args[0].success == true) {
      ProfileWidget.showProfile(args[0].data);
      console.log(`Вы перевели ${currency} ${amount} пользователю с id: ${to}`);
      moneyManager.setMessage(args.success, `Вы перевели ${currency} ${amount} пользователю с id: ${to}`);
    } else {
      moneyManager.setMessage(args.success, `Ошибка перевода ${currency} ${amount}`);
      console.error(`Ошибка перевода ${currency} ${amount}`);
    }
  });
}

//Список избранного
const favoritesWidget = new FavoritesWidget;
ApiConnector.getFavorites((result)=>{
  if(result.success == true) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(result.data);
    moneyManager.updateUsersList(result.data);
  }
});

//Добавление в избранное
favoritesWidget.addUserCallback = ({id, name})=>{
  ApiConnector.addUserToFavorites({id, name}, (...args)=>{
    if(args[0].success == true) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(args[0].data);
      moneyManager.updateUsersList(args[0].data);
      console.log(`${name} с id ${id} Успешно добавлен в избранное`);
      favoritesWidget.setMessage(args[0].success, `${name} с id ${id} Успешно добавлен в избранное`);
    } else {
      console.error(args[0].data);
      favoritesWidget.setMessage(args[0].success, `Ошибка добавления ${name} с id ${id} в избранное`);
    }
  });
}

//Удаления из избранного
favoritesWidget.removeUserCallback = (id)=>{
  ApiConnector.removeUserFromFavorites(id, (result)=>{
    if(result.success == true) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(result.data);
      moneyManager.updateUsersList(result.data);
      console.log(`${id} Успешно удалён из избранного`);
      favoritesWidget.setMessage(result.success, `${id} Успешно удалён из избранного`);
    }
    else {
      console.error(result.data);
      favoritesWidget.setMessage(result.success, `Ошибка удаления ${id} из избранного`);
    }
  });
}
