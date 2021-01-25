import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

test('attack_defence test', () => {
  const bowerman = new Bowerman();
  const swordsman = new Swordsman();
  const magician = new Magician();
  const daemon = new Daemon();
  const undead = new Undead();
  const zombie = new Zombie();

  expect(bowerman.attack).toEqual(25);
  expect(swordsman.attack).toEqual(40);
  expect(magician.attack).toEqual(10);
  expect(daemon.attack).toEqual(10);
  expect(undead.attack).toEqual(25);
  expect(zombie.attack).toEqual(40);

  expect(bowerman.defence).toEqual(25);
  expect(swordsman.defence).toEqual(10);
  expect(magician.defence).toEqual(40);
  expect(daemon.defence).toEqual(40);
  expect(undead.defence).toEqual(25);
  expect(zombie.defence).toEqual(10);
});

test('check levelUp', () => {
  const bowerman = new Bowerman();
  const swordsman = new Swordsman();
  const magician = new Magician();
  const daemon = new Daemon();
  const undead = new Undead();
  const zombie = new Zombie();

  const bowermanConstAttack = bowerman.attack;
  const swordsmanConstAttack = swordsman.attack;
  const magicianConstAttack = magician.attack;
  const daemonConstAttack = daemon.attack;
  const undeadConstAttack = undead.attack;
  const zombieConstAttack = zombie.attack;

  const bowermanConstDefence = bowerman.defence;
  const swordsmanConstDefence = swordsman.defence;
  const magicianConstDefence = magician.defence;
  const daemonConstDefence = daemon.defence;
  const undeadConstDefence = undead.defence;
  const zombieConstDefence = zombie.defence;

  bowerman.levelUp();
  swordsman.levelUp();
  magician.levelUp();
  daemon.levelUp();
  undead.levelUp();
  zombie.levelUp();

  expect(bowerman.level).toEqual(2);
  expect(swordsman.level).toEqual(2);
  expect(magician.level).toEqual(2);
  expect(daemon.level).toEqual(2);
  expect(undead.level).toEqual(2);
  expect(zombie.level).toEqual(2);

  expect(bowerman.attack).toEqual(bowermanConstAttack+(bowermanConstAttack*0.2));
  expect(swordsman.attack).toEqual(swordsmanConstAttack+(swordsmanConstAttack*0.2));
  expect(magician.attack).toEqual(magicianConstAttack+(magicianConstAttack*0.2));
  expect(daemon.attack).toEqual(daemonConstAttack+(daemonConstAttack*0.2));
  expect(undead.attack).toEqual(undeadConstAttack+(undeadConstAttack*0.2));
  expect(zombie.attack).toEqual(zombieConstAttack+(zombieConstAttack*0.2));

  expect(bowerman.defence).toEqual(bowermanConstDefence+(bowermanConstDefence*0.2));
  expect(swordsman.defence).toEqual(swordsmanConstDefence+(swordsmanConstDefence*0.2));
  expect(magician.defence).toEqual(magicianConstDefence+(magicianConstDefence*0.2));
  expect(daemon.defence).toEqual(daemonConstDefence+(daemonConstDefence*0.2));
  expect(undead.defence).toEqual(undeadConstDefence+(undeadConstDefence*0.2));
  expect(zombie.defence).toEqual(zombieConstDefence+(zombieConstDefence*0.2));

  expect(bowerman.health).toEqual(100);
  expect(swordsman.health).toEqual(100);
  expect(magician.health).toEqual(100);
  expect(daemon.health).toEqual(100);
  expect(undead.health).toEqual(100);
  expect(zombie.health).toEqual(100);
});

test('attack_defence test', () => {
  const bowerman = new Bowerman();
  const swordsman = new Swordsman();
  const magician = new Magician();
  const daemon = new Daemon();
  const undead = new Undead();
  const zombie = new Zombie();

  bowerman.powerModeSet = true;
  swordsman.powerModeSet = true;
  magician.powerModeSet = true;
  daemon.powerModeSet = true;
  undead.powerModeSet = true;
  zombie.powerModeSet = true;

  expect(bowerman.powerMode).toEqual(true);
  expect(swordsman.powerMode).toEqual(true);
  expect(magician.powerMode).toEqual(true);
  expect(daemon.powerMode).toEqual(true);
  expect(undead.powerMode).toEqual(true);
  expect(zombie.powerMode).toEqual(true);

  expect(bowerman.powerMode).toEqual(true);
  bowerman.setAttack();
  expect(bowerman.powerMode).toEqual(true);
  bowerman.setAttack();
  expect(bowerman.powerMode).toEqual(true);
  bowerman.setAttack();
  expect(bowerman.powerMode).toEqual(false);

  expect(swordsman.powerMode).toEqual(true);
  swordsman.setAttack();
  expect(swordsman.powerMode).toEqual(true);
  swordsman.setAttack();
  expect(swordsman.powerMode).toEqual(true);
  swordsman.setAttack();
  expect(swordsman.powerMode).toEqual(false);

  expect(magician.powerMode).toEqual(true);
  magician.setAttack();
  expect(magician.powerMode).toEqual(true);
  magician.setAttack();
  expect(magician.powerMode).toEqual(true);
  magician.setAttack();
  expect(magician.powerMode).toEqual(false);

  expect(daemon.powerMode).toEqual(true);
  daemon.setAttack();
  expect(daemon.powerMode).toEqual(true);
  daemon.setAttack();
  expect(daemon.powerMode).toEqual(true);
  daemon.setAttack();
  expect(daemon.powerMode).toEqual(false);

  expect(undead.powerMode).toEqual(true);
  undead.setAttack();
  expect(undead.powerMode).toEqual(true);
  undead.setAttack();
  expect(undead.powerMode).toEqual(true);
  undead.setAttack();
  expect(undead.powerMode).toEqual(false);

  expect(zombie.powerMode).toEqual(true);
  zombie.setAttack();
  expect(zombie.powerMode).toEqual(true);
  zombie.setAttack();
  expect(zombie.powerMode).toEqual(true);
  zombie.setAttack();
  expect(zombie.powerMode).toEqual(false);

  bowerman.powerModeSet = true;
  swordsman.powerModeSet = true;
  magician.powerModeSet = true;
  daemon.powerModeSet = true;
  undead.powerModeSet = true;
  zombie.powerModeSet = true;

  expect(bowerman.powerMode).toEqual(false);
  expect(swordsman.powerMode).toEqual(false);
  expect(magician.powerMode).toEqual(false);
  expect(daemon.powerMode).toEqual(false);
  expect(undead.powerMode).toEqual(false);
  expect(zombie.powerMode).toEqual(false);
});
