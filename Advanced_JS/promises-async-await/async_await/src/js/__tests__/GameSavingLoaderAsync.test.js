import GameSavingLoaderAsync from '../GameSavingLoaderAsync';

const gameSaveLoaderAsync = new GameSavingLoaderAsync();

test('GameSavingLoader main test', async () => {
  const result = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
  const res = await gameSaveLoaderAsync.load();
  expect(res).toEqual(result);
});
