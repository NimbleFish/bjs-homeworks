export default class Character {
  constructor(attack, defence) {
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack = this.attack + (this.attack * 0.2);
      this.defence = this.defence + (this.defence * 0.2);
      this.health = 100;
    } else {
      new throw('Нельзя повысить уровень умершего!');
    }
  }
}
