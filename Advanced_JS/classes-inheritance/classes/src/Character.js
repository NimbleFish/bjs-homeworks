export default class Character {
  constructor(attack, defence) {
    this.name = '';
    this.type = '';
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
    this.powerMode = null;
    this.attackCount = 0;
  }

  setAttack() {
    if (this.powerMode === true) {
      this.attackCount++;
      if (this.attackCount === 3) {
        this.powerMode = false;
      }
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack = this.attack + (this.attack * 0.2);
      this.defence = this.defence + (this.defence * 0.2);
      this.health = 100;
    } else {
      throw('Нельзя повысить уровень умершего!');
    }
  }

  set powerModeSet(access) {
    if (this.powerMode === null && access === true) {
      this.powerMode = true;
      console.log('Вы в ярости! Показатели Атаки, Защиты и Здоровья увеличены вдвое! Эффект закончится после 3-х атак.');
      console.log('Ваша сила безгранична! Показатели: Атака: ' + this.getAttack + ', Защита: ' + this.getDefence + ', Здоровье: ' + this.getHealth);
    } else {
      console.log('Вы уже исчерпали все свои жизненные силы и вам более не доступен режим ярости!');
    }
  }

  get getAttack() {
    return this.powerMode === true ? this.attack * 2 : false;
  }

  get getDefence() {
    return this.powerMode === true ? this.defence * 2 : false;
  }

  get getHealth() {
    return this.powerMode === true ? this.health * 2 : false;
  }


  get powerModeGet() {
    if (this.powerMode === true) {
      return 'Ваша сила безгранична! Показатели: Атака: ' + this.getAttack + ', Защита: ' + this.getDefence + ', Здоровье: ' + this.getHealth;
    } else {
      return 'Вы выдохлись! Показатели: Атака: ' + this.attack + ', Защита: ' + this.defence + ', Здоровье: ' + this.health;
    }
  }
}
