import Character from './Character';

export default class Undead extends Character {
  constructor(name) {
    super(25, 25);
    this.name = name;
    this.type = 'Undead';
  }
}
