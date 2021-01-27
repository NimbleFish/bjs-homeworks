import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(40, 10);
    this.name = name;
    this.type = 'Swordsman';
  }
}
