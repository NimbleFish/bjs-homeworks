class UserWidget { // Отвечает за отображение информации о имени пользователя
  constructor( element ) { // Устанавливает полученный элемент
    if (element) {
      this.element = element;
    } else {
      console.error("Переданный элемент не существует!");
    }
  }

  update() { // Получает информацию о текущем пользователе
    let info = User.current();
    if (info) {
      document.getElementsByClassName('user-name')[0].innerText = info.name;
    }
  }
}
