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

<<<<<<< HEAD
export function getInfo(dataIn) {
=======
export function getInfo(input) {
  let dataIn = {};
  Object.assign(dataIn, input);
>>>>>>> 9178f9d0d44bd550fbda5584eb83c4aafb593cf1
  const DEFAULT = 'Описание недоступно';
  let exit_data = [], access = true;
  for (let i = 0; i < dataIn.special.length; i++) {
    let obj = {};
    for (const [key, value] of Object.entries(dataIn.special[i])) obj[key] = value;
    access = true;
    for (let prop in obj) if (obj.hasOwnProperty(prop) && prop == 'description') access = false;
    if (access) obj['description'] = DEFAULT;
    exit_data.push(obj);
  }
  return exit_data;
}

console.log(getInfo(data));
