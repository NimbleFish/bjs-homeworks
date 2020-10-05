export default function findBy(name, attack) {
  const bd = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ];
  for (let result of bd) {
    if (result.name == name && result.type == attack) {
      return result;
    }
  }
}
