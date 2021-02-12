import PositionedCharacter from './PositionedCharacter';
import Character from './Character';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Vampire from './Vampire';
import Undead from './Undead';
import Daemon from './Daemon';
import {generateTeam} from './generators';
import themes from './themes';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie); // установка темы 1-го уровня
    this.currentLevel = themes.prairie; // запоминание текущего уровня

    this.gamePlay.addNewGameListener((event) => {
      const allCharaters = [Bowman, Swordsman, Magician, Vampire, Undead, Daemon]; // все типы персонажей

      let playerTeam = generateTeam([Bowman, Swordsman], 1, 2); // генерация команды игрока
      let computerTeam = generateTeam(allCharaters, 1, 2); // генерация команды компьютера

      this.renderTeam(playerTeam, computerTeam); // отрисовка команд
    }

      // desert
      // lvlUp + healAllSurvive
      // let playerTeam = generateTeam(allCharaters, 2, 1);
      // let computerTeam = generateTeam(allCharaters, 2, playerTeam.length);

      // arctic
      // lvlUp + healAllSurvive
      // let playerTeam = generateTeam(allCharaters, 2, 2);
      // let computerTeam = generateTeam(allCharaters, 3, playerTeam.length);

      // mountain
      // lvlUp + healAllSurvive
      // let playerTeam = generateTeam(allCharaters, 3, 2);
      // let computerTeam = generateTeam(allCharaters, 4, playerTeam.length);
    );
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  genRand(mode) {
    let index;
    if (mode === 'left') {
      do {
        index = Math.floor(Math.random() * (64 - 0) + 0);
      } while ((index % 8) !== 0 && (index % 8) !== 1);
    } else if (mode === 'right') {
      do {
        index = Math.floor(Math.random() * (64 - 0) + 0);
      } while ((index % 8) !== 6 && (index % 8) !== 7);
    }
    return index;
  }

  checkTeam(team, mode) {
    let render = [], index;
    team.forEach((item, i) => {
      index = this.genRand(mode); // генерация индекса расположения
      if (render.length > 0) { // Если в массиве рендер есть элементы, то
        render.forEach((item, i) => { // перебор элементов
          while (item.position === index) { // проверка на совпадение текущего индекста
            index = this.genRand(mode); // если совпадают, пересоздать индекс
          }
        });
      }
      render.push(new PositionedCharacter(team[i], index));
    });
    return render;
  }

  renderTeam(playerTeam, computerTeam) {
    let render = [],
        render1 = this.checkTeam(playerTeam, 'left'),
        render2 = this.checkTeam(computerTeam, 'right');
        render = render1.concat(render2);
    console.log(render);
    this.gamePlay.redrawPositions(render);
  }

  levelUp (playerTeam) {
    const levels = ['prairie', 'desert', 'arctic', 'mountain'];
    levels.forEach((lvl, i) => {
      if (this.currentLevel === lvl) {
        if (i === levels.length) {
          // Конец игры
        } else {
          this.currentLevel = levels[i+1];
          playerTeam.forEach((person) => {
            heal(person);
            attackAfter(person);
          });
        }
      }
    });
  }

  heal(character) {
    if ((character.health + 80) < 100) {
      character.health += 80;
    } else {
      character.health = 100;
    }
  }

  attackAfter(character) {
    character.attack = Math.max(character.attack, character.attack * (1.8 - character.health) / 100);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
