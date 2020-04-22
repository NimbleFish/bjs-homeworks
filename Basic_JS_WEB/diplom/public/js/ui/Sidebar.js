class Sidebar { // отвечает за боковую колонку: кнопки скрытия/показа колонки в мобильной версии и за кнопки меню
  static init() { // Запускает initAuthLinks и initToggleButton
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() { // Отвечает за скрытие/показа боковой колонки
    let el = document.querySelector('a.sidebar-toggle'), elem = document.getElementsByTagName('body')[0];
    if (el.dataset.toggle == "push-menu") {
      el.addEventListener('click', () => {
        elem.classList.toggle('sidebar-open');
        elem.classList.toggle('sidebar-collapse');
      });
    }
  }

  static initAuthLinks() { // кнопки боковой панели
    let login = document.querySelector('li.menu-item.menu-item_login'),
        register = document.querySelector('li.menu-item.menu-item_register'),
        logout = document.querySelector('li.menu-item.menu-item_logout');
    register.addEventListener('click', () => {
      new Modal(App.getModal('register').element).open();
    });
    login.addEventListener('click', () => {
      new Modal(App.getModal('login').element).open();
    });
    logout.addEventListener('click', () => {
      User.logout(User.current(), (err, res) => {
        if(res.success === true) {
          User.unsetCurrent();
          window.location.reload();
        } else {
          console.error(err);
        }
      });
    });
  }

}
