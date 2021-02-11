import Character from './Character';

export default class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Magician';
    this.__proto__ = Character;
  }
}
