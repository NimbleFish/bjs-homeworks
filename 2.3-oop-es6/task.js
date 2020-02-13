class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.mindDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
    return this.durability;
  }

  getDamage() {
    if (this.durability == 0 || this.durability == null || this.durability == undefined || isNaN(this.durability) == true) {
      return 0;
    }
    if (this.durability == Infinity) {
      return this.attack;
    }
    if (this.durability >= (0.3 * this.mindDurability)) {
      return this.attack;
    }
    else {
      return this.attack/2;
    }
  }

  isBroken() {
    if (this.durability == 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const super_longBow = new Weapon('Длинный лук', 15, 200, 4);
const super_ax = new Weapon('Секира', 27, 800, 1);
const super_straff = new Weapon('Посох Бури', 10, 300, 2);
