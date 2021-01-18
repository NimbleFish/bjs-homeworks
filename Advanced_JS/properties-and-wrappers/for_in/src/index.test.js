import {orderByProps} from './index';

test('empty array', () => {
  const obj = {
    name: 'мечник',
    test1: 'тест 1',
    health: 10,
    defence: 0,
    attack: 140
  }
  const result = orderByProps(obj);
  const data = [
    {'attack': 140},
    {'defence': 0},
    {'health': 10},
    {'name': 'мечник'},
    {'test1': 'тест 1'}
  ]
  expect(result).toEqual(data);
});

test('array', () => {
  const obj = {
    name: 'лучник',
    test2: 'тест 2',
    health: 100,
    defence: 10,
    attack: 540
  }
  const result = orderByProps(obj, ['name', 'test2', 'health']);
  const data = [
    {'name': 'лучник'},
    {'test2': 'тест 2'},
    {'health': 100},
    {'attack': 540},
    {'defence': 10}
  ]
  expect(result).toEqual(data);
});
