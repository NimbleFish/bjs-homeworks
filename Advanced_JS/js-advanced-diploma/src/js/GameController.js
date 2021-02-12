import PositionedCharacter from './PositionedCharacter';
import Character from './Character';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Vampire from './Vampire';
import Undead from './Undead';
import Daemon from './Daemon';
import Team from './Team';
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
      this.playerTeam = generateTeam([Bowman, Swordsman], 1, 2); // генерация команды игрока
      this.computerTeam = generateTeam(allCharaters, 1, 2); // генерация команды компьютера
      this.gamePlay.redrawPositions(Team.renderTeam(this.playerTeam, this.computerTeam)); // отрисовка команд
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

  setEventListenerCellEnter() {
    this.gamePlay.addCellEnterListener((index) => this.onCellEnter(index));
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
    if (this.gamePlay.cells[index].childElementCount !== 0) {
      for (let team in this.teams) {
        if (this.teams.hasOwnProperty(team)) {
          this.teams[team].forEach((l) => {
            if (l.position === index) {
              this.gamePlay.showCellTooltip(`🎖${l.character.level} ⚔${l.character.attack} 🛡${l.character.defence} ❤${l.character.health}`, index);
            }
          });
        }
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
