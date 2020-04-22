/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  constructor( element ) { // Сохраняет переданный элемент и регистрирует события.
    if (!element) {
      console.error("Передана пустая или несуществующая форма!");
    } else {
      this.element = element;
      this.registerEvents();
    }
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    this.element.addEventListener('sumbit', (e) => {
      e.preventDefault();
      this.submit();
    })
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    let el = document.querySelectorAll(`#${this.element.id} input.form-control`), data = {};
    for (let i = 0; i < el.length; i++) {
      data[el[i].name] = el[i].value;
    }
    return data;
  }

  onSubmit( options ) { // Для наследования

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    console.log({ 'url': this.element.action, 'method': this.element.method,'data' : this.getData()});
    this.onSubmit({ 'url': this.element.action, 'method': this.element.method,'data' : this.getData()});
  }
}
