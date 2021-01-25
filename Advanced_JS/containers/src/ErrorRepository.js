export default class ErrorRepository {
  constructor() {
    this.table = new Map([
      [404, 'Ничего не найдено'],
      [224, 'В команде уже есть этот персонаж']
    ]);
  }
  translate(code) {
    if (this.table.has(code)) {
      return this.table.get(code);
    } else {
      return 'Unknown error!';
    }
  }
}
