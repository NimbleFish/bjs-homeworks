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

function getInfo() {
  const DEFAULT = 'Описание недоступно';
  let exit_data = [];
  for (let i = 0; i < data.special.length; i++) {
    if (data.special[i].description) {
      exit_data.push(data.special[i]);
    } else {
      let new_data = data.special[i];
      new_data.description = DEFAULT;
      exit_data.push(new_data);
    }
  }
  return exit_data;
}

console.log(getInfo());
