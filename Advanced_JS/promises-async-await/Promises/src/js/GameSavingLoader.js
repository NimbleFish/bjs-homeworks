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
      return this.read().then((data) => {
        new Promise((res, rej) => res(json(data))).then((response) => console.log(JSON.parse(response)));
      });
    });
  }
}
// {
//   "id": <number>, // id сохранения
//   "created": <timestamp>, // timestamp создания
//   "userInfo": {
//     "id": <number>, // user id
//     "name": <string>, // user name
//     "level": <number>, // user level
//     "points": <number> // user points
//   }
// }
