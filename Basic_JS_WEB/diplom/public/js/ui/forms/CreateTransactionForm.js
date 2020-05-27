class CreateTransactionForm extends AsyncForm { // Управляет формой создания новой транзакции
  constructor( element ) {
    super(element);
    this.renderAccountsList();
    this.update = false;
  }

  renderAccountsList() {
    Account.list({
      'id': User.current().id,
      'mail': User.current().email,
      'name': User.current().name
    }, (err, res) => {
      res = JSON.parse(res);
      if (res.success == true) {
        if (document.getElementsByClassName('form-control accounts-select')[0].children.length == 0 || this.update == true) {
          for(let j = 0; j < document.getElementsByClassName('form-control accounts-select').length; j++) {
            for (let i = 0; i < res.data.length; i++) {
              document.getElementsByClassName('form-control accounts-select')[j].insertAdjacentHTML('beforeEnd', `<option value="${res.data[i].id}">${res.data[i].name}</option>`);
            }
          }
          this.update = false;
        }
      } else {
        console.error(err);
      }
    });
  }

  update() {
    this.update = true();
    while (document.getElementsByClassName('form-control accounts-select')[0].childElementCount > 0 || document.getElementsByClassName('form-control accounts-select')[1].childElementCount > 0) {
      document.getElementsByClassName('form-control accounts-select')[0].children[0].remove();
      document.getElementsByClassName('form-control accounts-select')[1].children[0].remove();
    }
    this.renderAccountsList();
  }
  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit( options ) {
    console.log(options);
    Transaction.URL = 'transaction/'
    Transaction.create({
      'name' : options.data.name,
      'method' : options.data.method,
      'data' : options.data,
    }, (err, res) => {
        console.log(JSON.parse(res));
      });
    App.update();
    new Modal(App.getModal('newIncome').element).close();
    new Modal(App.getModal('newExpense').element).close();
  }
}
