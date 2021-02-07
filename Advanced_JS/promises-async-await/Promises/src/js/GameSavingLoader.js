import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  read() {
    return new Promise((resolve, reject) => {
      resolve(read());
    });
  }

  load() {
    return new Promise((resolve, reject) => {
      resolve(this.read().then((data) => {
        return new Promise((res, rej) => {
          res(json(data));
        }).then((response) => {
          return JSON.parse(response);
        });
      }));
    });
  }
}
