import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowerman = new Bowerman();
const swordsman = new Swordsman();
const magician = new Magician();
const daemon = new Daemon();
const undead = new Undead();
const zombie = new Zombie();

console.log('');
console.log('class Bowerman (attack: ' + bowerman.attack + ', defence: ' + bowerman.defence + ')');
console.log('class Swordsman (attack: ' + swordsman.attack + ', defence: ' + swordsman.defence + ')');
console.log('class Magician (attack: ' + magician.attack + ', defence: ' + magician.defence + ')');
console.log('class Daemon (attack: ' + daemon.attack + ', defence: ' + daemon.defence + ')');
console.log('class Undead (attack: ' + undead.attack + ', defence: ' + undead.defence + ')');
console.log('class Zombie (attack: ' + zombie.attack + ', defence: ' + zombie.defence + ')');
console.log('');

console.log('Swordsman level: ' + swordsman.level);
console.log('class Swordsman levelUp!');
swordsman.levelUp();
console.log('Swordsman level: ' + swordsman.level);
console.log('');

console.log('class Zombie впал в ярость!');
zombie.powerModeSet = true;
console.log('Атака №1 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log('Атака №2 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log(zombie.powerModeGet);
console.log('Атака №3 - powerMode: '+ zombie.powerMode);
zombie.setAttack();
console.log('Атака №4 - powerMode: '+ zombie.powerMode);
console.log(zombie.powerModeGet);
console.log('');

console.log('Повторная активация powerMode...');
zombie.powerModeSet = true;
