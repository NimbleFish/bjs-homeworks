import findBy from './index.js';

test("findBy('маг', 'character')", () => {
  expect(findBy('маг', 'character')).toMatchObject({name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'});
});
test("findBy('заклинание', 'attack')", () => {
  expect(findBy('заклинание', 'attack')).toMatchObject({name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'});
});
test("findBy('урон', 'help')", () => {
  expect(findBy('урон', 'help')).toMatchObject({name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'});
});
