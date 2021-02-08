export default class Team {
  constructor() {
    this.team = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 100,
        level: 4,
        attack: 34,
        defence: 15
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 120,
        level: 2,
        attack: 65,
        defence: 50
      }
    ];
  }
  [Symbol.iterator]() {
    let index = -1, data = this.team;
    return {next: () => {return {value:data[++index], done:!(index in data)};}}
  }
}
