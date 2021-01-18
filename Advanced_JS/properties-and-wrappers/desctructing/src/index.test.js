import {getInfo} from './index';

test('description not empty', () => {
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
      }
    ]
  }
  const result = getInfo(data);
  const dataEq = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон"
    },
  ];
  expect(result).toEqual(dataEq);
});

test('description empty', () => {
  const data = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]
  }
  const result = getInfo(data);
  const dataEq = [
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно"
    }
  ];
  expect(result).toEqual(dataEq);
});
