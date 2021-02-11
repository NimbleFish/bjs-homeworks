import Character from './Character';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Bowman';
    this.__proto__ = Character;
  }
}
