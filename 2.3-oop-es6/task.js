class Weapon {
  constructor({name, attack, durability, range}) {
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

let name = '';

function weapons(weapon) {
  switch (weapon) {
    case 'hand':
      const hand = new Weapon({'name':'Рука', 'attack':1, 'durability':Infinity, 'range':1});
      name = hand;
    break;
    case 'bow':
      const bow = new Weapon({'name':'Лук', 'attack':10, 'durability':200, 'range':3});
      name = bow;
    break;
    case 'sword':
      const sword = new Weapon({'name':'Меч', 'attack':25, 'durability':500, 'range':1});
      name = sword;
    break;
    case 'knife':
      const knife = new Weapon({'name':'Нож', 'attack':5, 'durability':300, 'range':1});
      name = knife;
    break;
    case 'staff':
      const staff = new Weapon({'name':'Посох', 'attack':8, 'durability':300, 'range':2});
      name = staff;
    break;
    case 'super_longBow':
      const super_longBow = new Weapon({'name':'Длинный лук', 'attack':15, 'durability':200, 'range':4});
      name = super_longBow;
    break;
    case 'super_ax':
      const super_ax = new Weapon({'name':'Секира', 'attack':27, 'durability':800, 'range':1});
      name = super_ax;
    break;
    case 'super_straff':
      const super_straff = new Weapon({'name':'Посох Бури', 'attack':10, 'durability':300, 'range':2});
      name = super_straff;
    break;
  }
}

function damageWeapon(what) {
  if (name.isBroken() == false) {
    if (what == 'get') {
      window.statused.innerText = `Вы нанесли урон: ${name.getDamage()}`;
    }
    else {
      if (window.damaged.value == '') {
        window.statused.innerText = 'Введите наносимый урон!'
        return 0;
      }
      window.durabilited.innerText = name.takeDamage(window.damaged.value);
      window.statused.innerText = `Вы получили урон: ${window.damaged.value}`;
    }
  }
  else {
    window.statused.innerText = 'Ваше оружие сломано!'
  }
}

// Задача №2
console.log('Задача №2');

class Hand {
  constructor() {
    const hand = new Weapon({'name':'Рука', 'attack':1, 'durability':Infinity, 'range':1});
    this.name = hand.name;
    this.attack = hand.attack;
    this.durability = hand.durability;
    this.mindDurability = hand.durability;
    this.range = hand.range
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class Bow {
  constructor() {
    const bow = new Weapon({'name':'Лук', 'attack':10, 'durability':200, 'range':3});
    this.name = bow.name;
    this.attack = bow.attack;
    this.durability = bow.durability;
    this.mindDurability = bow.durability;
    this.range = bow.range
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class Sword {
  constructor() {
    const sword = new Weapon({'name':'Меч', 'attack':25, 'durability':500, 'range':1});
    this.name = sword.name;
    this.attack = sword.attack;
    this.durability = sword.durability;
    this.mindDurability = sword.durability;
    this.range = sword.range
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class Knife {
  constructor() {
    const knife = new Weapon({'name':'Нож', 'attack':5, 'durability':300, 'range':1});
    this.name = knife.name;
    this.attack = knife.attack;
    this.durability = knife.durability;
    this.mindDurability = knife.durability;
    this.range = knife.range
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class Staff {
  constructor() {
    const staff = new Weapon({'name':'Посох', 'attack':8, 'durability':300, 'range':2});
    this.name = staff.name;
    this.attack = staff.attack;
    this.durability = staff.durability;
    this.mindDurability = staff.durability;
    this.range = staff.range
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class LongBow {
  constructor() {
    const longBow = new Bow();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.durability = longBow.durability;
    this.range = 4;
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class Ax {
  constructor() {
    const ax = new Sword();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.range = ax.range;
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

class SuperStaff {
  constructor() {
    const superStaff = new Staff();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.durability = superStaff.durability;
    this.range = 3;
  }

  takeDamage() {
    Weapon.takeDamage(window.damaged.value);
  }

  getDamage() {
    Weapon.getDamage();
  }

  isBroken() {
    Weapon.isBroken();
  }
}

const $hand = new Hand();
const $bow = new Bow();
const $sword = new Sword();
const $knife = new Knife();
const $staff = new Staff();
const $longBow = new LongBow();
const $axe = new Ax();
const $superStaff = new SuperStaff();

console.log('Оружие: Рука');
console.log('Название: ' + $hand.name);
console.log('Атака: ' + $hand.attack);
console.log('Прочность: ' + $hand.durability);
console.log('Дистанция: ' + $hand.range);
console.log('----------------------------------------------');
console.log('Оружие: Лук');
console.log('Название: ' + $bow.name);
console.log('Атака: ' + $bow.attack);
console.log('Прочность: ' + $bow.durability);
console.log('Дистанция: ' + $bow.range);
console.log('----------------------------------------------');
console.log('Оружие: Меч');
console.log('Название: ' + $sword.name);
console.log('Атака: ' + $sword.attack);
console.log('Прочность: ' + $sword.durability);
console.log('Дистанция: ' + $sword.range);
console.log('----------------------------------------------');
console.log('Оружие: Нож');
console.log('Название: ' + $knife.name);
console.log('Атака: ' + $knife.attack);
console.log('Прочность: ' + $knife.durability);
console.log('Дистанция: ' + $knife.range);
console.log('----------------------------------------------');
console.log('Оружие: Посох');
console.log('Название: ' + $staff.name);
console.log('Атака: ' + $staff.attack);
console.log('Прочность: ' + $staff.durability);
console.log('Дистанция: ' + $staff.range);
console.log('----------------------------------------------');
console.log('Оружие: Длинный лук');
console.log('Название: ' + $longBow.name);
console.log('Атака: ' + $longBow.attack);
console.log('Прочность: ' + $longBow.durability);
console.log('Дистанция: ' + $longBow.range);
console.log('----------------------------------------------');
console.log('Оружие: Секира');
console.log('Название: ' + $axe.name);
console.log('Атака: ' + $axe.attack);
console.log('Прочность: ' + $axe.durability);
console.log('Дистанция: ' + $axe.range);
console.log('----------------------------------------------');
console.log('Оружие: Посох Бури');
console.log('Название: ' + $superStaff.name);
console.log('Атака: ' + $superStaff.attack);
console.log('Прочность: ' + $superStaff.durability);
console.log('Дистанция: ' + $superStaff.range);
console.log('----------------------------------------------');
