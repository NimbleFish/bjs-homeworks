import Validator from './Validator';
const validator = new Validator();

test('Проверка на латиницу', () => {
  expect(validator.validateUsername('Малыш')).toEqual(undefined);
});

test('Проверка на подчёркивание', () => {
  expect(validator.validateUsername('Alex_erv')).toEqual('Alex_erv');
});

test('Проверка на тире', () => {
  expect(validator.validateUsername('Alex-erv')).toEqual('Alex-erv');
});

test('Проверка начало на цифру', () => {
  expect(validator.validateUsername('1Alex-erv')).toEqual(undefined);
});

test('Проверка конец на цифру', () => {
  expect(validator.validateUsername('Alex-erv1')).toEqual(undefined);
});

test('Проверка начало на тире', () => {
  expect(validator.validateUsername('-Alex-erv')).toEqual(undefined);
});

test('Проверка конец на тире', () => {
  expect(validator.validateUsername('Alex-erv-')).toEqual(undefined);
});

test('Проверка начало на подчёркивание', () => {
  expect(validator.validateUsername('_Alex-erv')).toEqual(undefined);
});

test('Проверка конец на подчёркивание', () => {
  expect(validator.validateUsername('Alex-erv_')).toEqual(undefined);
});

test('Проверка на цифры', () => {
  expect(validator.validateUsername('Alex032IUJ')).toEqual('Alex032IUJ');
});

test('Проверка на три цифры подряд (успешная)', () => {
  expect(validator.validateUsername('Alexc234JF22WE')).toEqual('Alexc234JF22WE');
});

test('Проверка на три цифры подряд (не успешная)', () => {
  expect(validator.validateUsername('Alexc234JF2243gg')).toEqual(undefined);
});
