import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(10, 40);
    this.name = name;
    this.type = 'Magician';
  }
}
