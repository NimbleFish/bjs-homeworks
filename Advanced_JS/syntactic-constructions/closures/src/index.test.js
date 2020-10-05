import * as findBy from '../src/findBy.js'
const finder = findBy('name', 'урон'), results = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
].filter(finder);
test("findBy('маг', 'character')", () => {
  expect(results.filter(findBy('маг', 'character'))).toMatchObject({name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'});
});
test("findBy('заклинание', 'attack')", () => {
  expect(results.filter(findBy('заклинание', 'attack'))).toMatchObject({name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'});
});
test("findBy('урон', 'help')", () => {
  expect(results.filter(findBy('урон', 'help'))).toMatchObject({name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'});
});
test("findBy('маг', 'attack')", () => {
  expect(results.filter(findBy('маг', 'attack'))).toMatchObject({name: 'маг', type: 'attack', description: 'Персонаж, обладающий магическими способностями'});
});
test("findBy('заклинание', 'help')", () => {
  expect(results.filter(findBy('заклинание', 'help'))).toMatchObject({name: 'заклинание', type: 'help', description: 'Атака магическим заклинанием'});
});
test("findBy('урон', 'character')", () => {
  expect(results.filter(findBy('урон', 'character'))).toMatchObject({name: 'урон', type: 'character', description: 'Страница описания элемента интерфейса'});
});
