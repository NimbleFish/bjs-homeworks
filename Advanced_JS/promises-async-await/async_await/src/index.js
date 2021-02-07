import './css/style.css';
import GameSavingLoaderAsync from './js/GameSavingLoaderAsync';

(async () => {
  try {
    const gameSaveLoaderAsync = await new GameSavingLoaderAsync().load();
    console.log(gameSaveLoaderAsync);
  } catch (e) {
    console.error(e);
  }
})();
