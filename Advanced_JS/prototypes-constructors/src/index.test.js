import {Unnamed} from './index';

test('Error by name 1', () => {
  const result = new Unnamed().character('Ю', 'Swordsman', true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Error by name 2', () => {
  const result = new Unnamed().character('Юра1234567890', 'Swordsman', true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Error by name type', () => {
  const result = new Unnamed().character(345546, 'Swordsman', true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Complete name', () => {
  const result = new Unnamed().character('Юра', 'Swordsman', true);
  expect(result).toEqual({health:100,level:1,name:"Юра",defence:40,specifications:{attack:40,defence:10},type:"Swordsman"});
});

test('Error by type 1', () => {
  const result = new Unnamed().character('Юра', 'орвм', true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Error by type type', () => {
  const result = new Unnamed().character('Юра', 123, true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Error by type 2', () => {
  const result = new Unnamed().character('Юра', 'Swordsman2', true);
  expect(result).toEqual('Введены некорректные значения!');
});

test('Complete type', () => {
  const result = new Unnamed().character('Юра', 'Swordsman', true);
  expect(result).toEqual({health:100,level:1,name:"Юра",defence:40,specifications:{attack:40,defence:10},type:"Swordsman"});
});

test('__proto__ no call', () => {
  const result = new Unnamed().character('Юра', 'Swordsman', true);
  expect(result.health).toEqual(100);
});

test('__proto__ call', () => {
  const result = new Unnamed().character('Юра', 'Swordsman', true);
  result.__proto__(10);
  expect(result.health).toEqual(94);
});
