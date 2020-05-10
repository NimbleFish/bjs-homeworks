class CreateAccountForm extends AsyncForm { // Управляет формой создания нового счёта
  onSubmit( options ) { // Создаёт счёт с помощью Account.create и закрывает окно а также вызывает App.update() и сбрасывает форму
    Account.create({
      'id' : User.current().id,
      'mail' : User.current().email,
      'name' : options.data.name
    }, (err, res) => {
      new Modal(App.getModal('createAccount').element).close();
      this.element.querySelectorAll('.form-control')[0].value = '';
      App.update();
    });
  }
}
