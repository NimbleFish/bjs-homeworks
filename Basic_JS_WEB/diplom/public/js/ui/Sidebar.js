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

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {

  }

}
