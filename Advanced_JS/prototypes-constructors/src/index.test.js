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
  expect(result).toEqual({health:100,level:1,name:"Юра",specifications:{attack:40,defence:10},type:"Swordsman"});
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
  expect(result).toEqual({health:100,level:1,name:"Юра",specifications:{attack:40,defence:10},type:"Swordsman"});
});
