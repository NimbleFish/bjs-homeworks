import {generateTeam, characterGenerator} from '../js/generators';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Vampire from '../js/Vampire';
import Undead from '../js/Undead';
import Daemon from '../js/Daemon';

test('generateTeam test', () => {
  let setArr = new Set();
  setArr.add('Magician');
  setArr.add('Bowman');
  expect(generateTeam([Magician, Bowman], 1, 2)).toEqual(setArr);
});
