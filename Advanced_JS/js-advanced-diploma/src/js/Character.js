export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
  }
}

Character.prototype = {
  [Symbol.iterator]() {
    const propertyes = [this.level, this.attack, this.defence, this.health]; let index = -1; const data = this.team;
    return { next: () => ({ value: propertyes[++index], done: !(index in data) }) };
  }
}
