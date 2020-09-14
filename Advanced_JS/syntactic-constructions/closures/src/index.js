const bd = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
];
export default function findBy(name, attack) {
  let returnData = [];
  for (let result of bd) {
    if (result.name == name && result.type == attack) {
      return result;
    }
  }
}
let data = findBy('урон', 'help');
console.log(typeof(findBy('урон', 'help')));
const results = bd.filter(el => el.name == data.name && el.type == data.type);
console.log(results[0]);
