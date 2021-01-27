import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowerman = new Bowerman('Робин');
const swordsman = new Swordsman('Артур');
const magician = new Magician('Вася');
const daemon = new Daemon('Дмитрий');
const undead = new Undead('Толик');
const zombie = new Zombie('Валерий');

console.log('');
console.log('class ' + bowerman.constructor.name + ' (attack: ' + bowerman.attack + ', defence: ' + bowerman.defence + ')');
console.log('class ' + swordsman.constructor.name + ' (attack: ' + swordsman.attack + ', defence: ' + swordsman.defence + ')');
console.log('class ' + magician.constructor.name + ' (attack: ' + magician.attack + ', defence: ' + magician.defence + ')');
console.log('class ' + daemon.constructor.name + ' (attack: ' + daemon.attack + ', defence: ' + daemon.defence + ')');
console.log('class ' + undead.constructor.name + ' (attack: ' + undead.attack + ', defence: ' + undead.defence + ')');
console.log('class ' + zombie.constructor.name + ' (attack: ' + zombie.attack + ', defence: ' + zombie.defence + ')');

console.log('');
console.log('class ' + bowerman.constructor.name + ' (Имя: ' + bowerman.name + ', Тип: ' + bowerman.type + ')');
console.log('class ' + swordsman.constructor.name + ' (Имя: ' + swordsman.name + ', Тип: ' + swordsman.type + ')');
console.log('class ' + magician.constructor.name + ' (Имя: ' + magician.name + ', Тип: ' + magician.type + ')');
console.log('class ' + daemon.constructor.name + ' (Имя: ' + daemon.name + ', Тип: ' + daemon.type + ')');
console.log('class ' + undead.constructor.name + ' (Имя: ' + undead.name + ', Тип: ' + undead.type + ')');
console.log('class ' + zombie.constructor.name + ' (Имя: ' + zombie.name + ', Тип: ' + zombie.type + ')');
console.log('');

console.log(swordsman.constructor.name + ' level: ' + swordsman.level);
console.log('class ' + swordsman.constructor.name + ' levelUp!');
swordsman.levelUp();
console.log(swordsman.constructor.name + ' level: ' + swordsman.level);
console.log('');

console.log('class ' + zombie.constructor.name + ' впал в ярость!');
zombie.powerModeSet = true;
console.log('class ' + zombie.constructor.name + ' Атака №1 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log('class ' + zombie.constructor.name + ' Атака №2 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log(zombie.powerModeGet);
console.log('class ' + zombie.constructor.name + ' Атака №3 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log('class ' + zombie.constructor.name + ' Атака №4 - powerMode: '+ zombie.powerMode);
console.log(zombie.powerModeGet);
console.log('');

console.log('class ' + zombie.constructor.name + ' Повторная активация powerMode...');
zombie.powerModeSet = true;
