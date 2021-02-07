import ErrorRepository from '../ErrorRepository';

const error = new ErrorRepository();
test('error code(404)', () => {
  expect(error.translate(404)).toEqual('Ничего не найдено');
});

test('error code(224)', () => {
  expect(error.translate(224)).toEqual('В команде уже есть этот персонаж');
});

test('error code(196)', () => {
  expect(error.translate(196)).toEqual('Нет такой настройки');
});

test('error code(234)', () => {
  expect(error.translate(234)).toEqual('Unknown error!');
});
