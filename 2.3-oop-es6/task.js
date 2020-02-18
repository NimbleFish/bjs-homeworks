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

class Hand extends Weapon {
  constructor() {
    super({'name':'Рука', 'attack':1, 'durability':Infinity, 'range':1});
  }
}

class Bow extends Weapon {
  constructor() {
    super({'name':'Лук', 'attack':10, 'durability':200, 'range':3});
  }
}

class Sword extends Weapon {
  constructor() {
    super({'name':'Меч', 'attack':25, 'durability':500, 'range':1});
  }
}

class Knife extends Weapon {
  constructor() {
    super({'name':'Нож', 'attack':5, 'durability':300, 'range':1});
  }
}

class Staff extends Weapon {
  constructor() {
    super({'name':'Посох', 'attack':8, 'durability':300, 'range':2});
  }
}

class LongBow extends Bow {
  constructor() {
    super({'name':'Длинный лук', 'attack':15, 'range':4});
  }
}

class Ax extends Sword {
  constructor() {
    super({'name':'Секира', 'attack':27, 'durability':800});
  }
}

class SuperStaff extends Staff {
  constructor() {
    super({'name':'Посох Бури', 'attack':10, 'range':3});
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
console.log('Наследован от: ' + $longBow.name);
console.log('Атака: ' + $longBow.attack);
console.log('Прочность: ' + $longBow.durability);
console.log('Дистанция: ' + $longBow.range);
console.log('----------------------------------------------');
console.log('Оружие: Секира');
console.log('Наследован от: ' + $axe.name);
console.log('Атака: ' + $axe.attack);
console.log('Прочность: ' + $axe.durability);
console.log('Дистанция: ' + $axe.range);
console.log('----------------------------------------------');
console.log('Оружие: Посох Бури');
console.log('Наследован от: ' + $superStaff.name);
console.log('Атака: ' + $superStaff.attack);
console.log('Прочность: ' + $superStaff.durability);
console.log('Дистанция: ' + $superStaff.range);
console.log('----------------------------------------------');
