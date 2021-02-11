import Character from './Character';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.name = 'Daemon';
    this.__proto__ = Character;
  }
}
