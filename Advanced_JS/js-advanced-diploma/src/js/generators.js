import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Vampire from './Vampire';
import Undead from './Undead';
import Daemon from './Daemon';

// Разрешённые классы для создания персонажей
const allowedClasses = [Bowman, Swordsman, Magician, Vampire, Undead, Daemon];

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

function generatorInputValidator(allowedTypes) {
  if (Array.isArray(allowedTypes)) { // Проверка списка итерируемых классов, является ли массивом
    allowedTypes.forEach((prop, i) => { // Перебор массива allowedTypes для проверки на iterable and class
      if (!!(Object.getOwnPropertySymbols(prop.__proto__).includes(Symbol.iterator))) {// Если эл.массива итерируемый
        if (allowedClasses.includes(prop)) { // Если эл.массива есть в спике разрешённых классов
          if (!(new prop instanceof allowedClasses[i])) { // Если эл.массива типов не является классом, из списка разрешённых классов
            throw new Error(`${prop} not allowed Type of character!`);
          }
        } else { throw new Error(`${prop} not allowed Type of character!`); }
      } else { throw new Error('allowedTypes not iterable of classes'); }
    });
  } else { throw new Error('allowedTypes is not array'); }
  return 'success';
}

// Генерирует рандомное число до длины массива, округляет и достаёт из массива класс
function generateRandomPersonage() {
  return allowedClasses[Math.floor(Math.random()*Math.floor(allowedClasses.length))];
}

export function* characterGenerator(allowedTypes, maxLevel) {
  let answer = generatorInputValidator(allowedTypes), randPers;
  if (answer === 'success') { // Если валидация успешна
    // Случайно генерирует персонажа по списку разрешённых
    do { randPers = generateRandomPersonage(); } while(!allowedTypes.includes(randPers));
    return new randPers(maxLevel, randPers);
  } else { throw new Error(answer); }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  let answer = generatorInputValidator(allowedTypes), team = new Set();
  if (answer === 'success') { // Если валидация успешна
    for (let i = 0; i < characterCount; i++) team.add(characterGenerator(allowedTypes, maxLevel));
    return team;
  } else { throw new Error(answer); }
}
