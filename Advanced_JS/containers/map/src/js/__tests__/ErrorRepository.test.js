import ErrorRepository from '../ErrorRepository';

test('check error codes', () => {
  const error = new ErrorRepository();
  expect(error.translate(404)).toEqual('Ничего не найдено');
  expect(error.translate(224)).toEqual('В команде уже есть этот персонаж');
  expect(error.translate(196)).toEqual('Нет такой настройки');
  expect(error.translate(234)).toEqual('Unknown error!');
});
