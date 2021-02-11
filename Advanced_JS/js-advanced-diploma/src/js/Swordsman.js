import Character from './Character';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Swordsman';
    this.__proto__ = Character;
  }
}
