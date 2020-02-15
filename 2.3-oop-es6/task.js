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

// const hand = new Weapon('Рука', 1, Infinity, 1);
// const bow = new Weapon('Лук', 10, 200, 3);
// const sword = new Weapon('Меч', 25, 500, 1);
// const knife = new Weapon('Нож', 5, 300, 1);
// const staff = new Weapon('Посох', 8, 300, 2);
//
// const super_longBow = new Weapon('Длинный лук', 15, 200, 4);
// const super_ax = new Weapon('Секира', 27, 800, 1);
// const super_straff = new Weapon('Посох Бури', 10, 300, 2);

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
