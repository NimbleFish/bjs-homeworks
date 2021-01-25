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
