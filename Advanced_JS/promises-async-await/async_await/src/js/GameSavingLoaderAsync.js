import json from './parser';
import read from './reader';

export default class GameSavingLoaderAsync {
  read() {
    return new Promise((resolve, reject) => resolve(read()));
  }

  load() {
    return (async () => JSON.parse(await json(await this.read())))();
  }
}
