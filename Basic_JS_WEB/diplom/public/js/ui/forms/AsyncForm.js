class AsyncForm { // Управляет всеми формами приложения, которые не должны быть отправлены с перезагрузкой страницы.
  constructor( element ) { // Сохраняет переданный элемент и регистрирует события.
    if (!element) {
      console.error("Передана пустая или несуществующая форма!");
    } else {
      this.element = element;
      this.registerEvents();
    }
  }

  registerEvents() { // В момент отправки вызывает метод submit()
    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submit();
    });
  }

  getData() { // Преобразует данные формы в объект FormData
    let el = document.querySelectorAll(`#${this.element.id} input.form-control`), data = {};
    for (let i = 0; i < el.length; i++) {
      data[el[i].name] = el[i].value;
    }
    return data;
  }

  onSubmit( options ) { // Для наследования

  }

  submit() { // Вызывает метод onSubmit и передаёт данные, полученные из метода getData()
    this.onSubmit({ 'url': this.element.action, 'method': this.element.method, 'data' : this.getData()});
  }
}
