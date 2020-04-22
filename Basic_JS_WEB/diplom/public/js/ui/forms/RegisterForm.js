class RegisterForm extends AsyncForm { // Управляет формой регистрации
  onSubmit( options ) { // Производит регистрацию и закрывает окно, в котором находится форма
    User.register(options.data, (err, res) => {
    	if (res.success === true) {
    		User.setCurrent(res.user);
        App.setState('user-logged');
        new Modal(App.getModal('register').element).close();
      } else {
        console.error(err);
      }
    });
  }
}
