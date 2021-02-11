import Character from './Character';

export default class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Undead';
    this.__proto__ = Character;
  }
}
