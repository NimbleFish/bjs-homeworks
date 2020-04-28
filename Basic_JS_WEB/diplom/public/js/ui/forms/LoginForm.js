class LoginForm extends AsyncForm { // Управляет формой входа
  /**
   *  с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) { // Производит авторизацию и закрывает окно, в котором находится форма
    console.log(options);
    User.login({
    	'email' : options.data.email,
    	'password' : options.data.password
    }, (err, res) => {
    	if (res.success === true) {
        User.setCurrent(res.user);
    		App.setState('user-logged');
        new Modal(App.getModal('login').element).close();
      } else {
        console.error(err);
      }
    });
  }
}
