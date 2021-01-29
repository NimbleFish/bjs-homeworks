export default class CharacterController {
  constructor(name, type, attackDamage) {
    this.name = name;
    this.type = type;
    this.stonedStatus = false;
    this.attackDamage = attackDamage;
    this.memoryRange = null;
    this.memoryStatus = null;
    this.attackCount = 0;
    this.attackRealityDamage = 0;
    this.mode = true;
  }

  getFormula(status) {
    return status ? '((' + this.attackDamage + ' - ' + this.memoryRange + ' * 10) - (Math.log2(' + this.memoryRange + ') * 5))' : this.attackDamage + ' - ' + this.memoryRange + ' * 10';
  }

  set attack(range) {
    if (0 < range < 10) {
      this.memoryRange = range; // Запоминается дальность атаки, для геттера, чтобы автоматически задавать

      // Спустя 5 атак, дурман проходит
      if (this.attackCount === 5 && this.stonedStatus === true) {
        this.attackCount = 0; // Не ясно почему, ломается счётчик атак
        console.log('MYSTERY: Снятие чар с ' + this.name + '!');
        this.stonedStatus = false;
      }

      // Атака
      this.attackRealityDamage = range === 1 ? this.attackDamage : this.attackDamage - range * 10;
      if (this.stonedStatus) {
        this.attackRealityDamage = (this.attackRealityDamage - (Math.log2(range) * 5)).toFixed(0);
        this.attackCount++; // Количество атак
      }

      // Чтобы работал вывод как с геттера, так и с сеттера и не дубрировался вывод в консоли
      if (this.mode === true) {
        console.log('SETTER: ATTACK #' + this.attackCount + ': ' + this.name + ' атакует! Дальность: ' + this.memoryRange + ' Дурман: ' + this.stonedStatus + ' Урон: ' + this.attackRealityDamage + ' ~ ~ ~ Формула: ' + this.getFormula(this.stonedStatus));
      }

      this.mode = true;
      return this.attackRealityDamage;
    } else { // Если число меньше или равно 0 || больше или равно 10
      this.memoryRange = null;
      console.error('Число ' + range + ' - выходит за границы игрового поля от 1 до 10!');
    }
  }

  get attack() {
    if (this.memoryRange !== null) {
      this.mode = false;
      this.attack = this.memoryRange;
      return 'GETTER: ATTACK #' + this.attackCount + ': ' + this.name + ' атакует! Дальность: ' + this.memoryRange + ' Дурман: ' + this.stonedStatus + ' Урон: ' + this.attackRealityDamage + ' ~ ~ ~ Формула: ' + this.getFormula(this.stonedStatus);
    } else {
      return 'Введите кол-во клеток для атаки!';
    }
  }

  set stoned(status) {
    if (status) {
      this.stonedStatus = true;
      this.memoryStatus = true;
      console.log('SETTER: На существо ' + this.name + ' наслали дурман! Сила атаки снижена!');
    } else {
      this.stonedStatus = false;
      this.memoryStatus = false;
      console.log('SETTER: Рассудок ' + this.name + ' прояснился, сила атаки восстановлена!');
    }
  }

  get stoned() {
    if (this.memoryStatus !== null) {
      this.stonedStatus = !this.memoryStatus;
      return 'GETTER Дурман: Вы не насылали дурман на ' + this.name;
    } else {
      this.memoryStatus = null;
      return 'GETTER Дурман: Существо ' + this.name + ' одурманено!';
    }
  }
}
