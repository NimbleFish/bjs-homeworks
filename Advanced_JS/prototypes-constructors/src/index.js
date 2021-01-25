export class Unnamed {
  character(name, type, testMode = false) {
    let types = {
      'Bowman': {attack: 25, defence: 25},
      'Swordsman': {attack: 40, defence: 10},
      'Magician': {attack: 10, defence: 40},
      'Undead': {attack: 25, defence: 25},
      'Zombie': {attack: 40, defence: 10},
      'Daemon': {attack: 10, defence: 40}
    }
    let typeList = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    function validate() {
      if (!(typeof(name) === 'string' && name.length >= 2 && name.length <= 10)) {
        return false;
      } else if (typeList.includes(type) && typeof(type) === 'string') {
        return true;
      } else {
        return false;
      }
    }
    if (validate()) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.defence = 40;
      this.specifications = types[type];
      this.__proto__ = {
        damage: (points) => {
          if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
          }
        }
      }
      return this;
    } else {
      if (!testMode) {
        throw('Введены некорректные значения!');
      }
      return 'Введены некорректные значения!';
    }
  }
}

let obj = new Unnamed().character('Юра', 'Swordsman');
console.log('health до вызова __proto__: ' + obj.health);
obj.__proto__(10);
console.log('health после вызова __proto__: ' + obj.health);
