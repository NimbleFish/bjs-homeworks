const data = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]
}

export function getInfo(dataIn) {
  console.log(dataIn);
  const DEFAULT = 'Описание недоступно';
  let exit_data = [];
  for (let i = 0; i < dataIn.special.length; i++) {
    if (dataIn.special[i].description) {
      exit_data.push(dataIn.special[i]);
    } else {
      let new_data = dataIn.special[i];
      new_data.description = DEFAULT;
      exit_data.push(new_data);
    }
  }
  return exit_data;
}

console.log(getInfo(data));
