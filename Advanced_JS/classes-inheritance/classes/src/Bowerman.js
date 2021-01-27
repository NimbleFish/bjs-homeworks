import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(25, 25);
    this.name = name;
    this.type = 'Bowerman';
  }
}
