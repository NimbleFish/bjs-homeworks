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
moneyManager.addMoneyCallback = (result)=> {
    ApiConnector.addMoney({'currency':result.currency, 'amount':result.amount}, (...args)=>{
      if(args[0].success == true) {
        ProfileWidget.showProfile(args[0].data);
        console.log(`Вы пополнили свой счёт на ${result.amount} ${result.currency}`);
        moneyManager.setMessage(args.success, `Вы пополнили свой счёт на ${result.amount} ${result.currency}`);
      } else {
        moneyManager.setMessage(args.success, 'Ошибка пополнения счёта');
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
    }
  });
}
