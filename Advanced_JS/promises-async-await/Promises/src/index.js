import './css/style.css';
import GameSavingLoader from './js/GameSavingLoader';

const gameSaveLoader = new GameSavingLoader().load();
// console.log(gameSaveLoader);
gameSaveLoader.then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
  throw new Error(error);
});
