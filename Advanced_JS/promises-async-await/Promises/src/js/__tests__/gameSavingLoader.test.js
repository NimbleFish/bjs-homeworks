import GameSavingLoader from '../GameSavingLoader';
import json from '../parser';
import read from '../reader';

const gameSaveLoader = new GameSavingLoader();
let dataForParser;

test('GameSavingLoader main test', () => {
  const result = {
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000
    }
  }
  gameSaveLoader.load().then((res) => expect(res).toEqual(result));
});

test('reader', () => {
  new Promise((resolve, reject) => {
    resolve(read());
  }).then((res) => {
    dataForParser = res;
    expect(res.byteLength).toEqual(180);
  });
});

test('parser', () => {
  new Promise((resolve, reject) => {
    resolve(json(dataForParser));
  }).then((res) => {
    expect(res).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  })
});
