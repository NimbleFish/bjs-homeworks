import * as findBy from '../src/findBy.js'
const finder = findBy('name', 'урон'), results = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
].filter(finder);
console.log(results);
