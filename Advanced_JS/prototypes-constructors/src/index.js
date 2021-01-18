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
      this.specifications = types[type];
      return this;
    } else {
      if (!testMode) {
        throw('Введены некорректные значения!');
      }
      return 'Введены некорректные значения!';
    }
  }
}

console.log(new Unnamed().character('Юра', 'Swordsman'));
