import Character from './Character';

export default class Vampire extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Vampire';
    this.__proto__ = Character;
  }
}
