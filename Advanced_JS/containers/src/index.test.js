import Team from './Team';
import ErrorRepository from './ErrorRepository';
import Settings from './Settings';

test('check how work Set()', () => {
  const team = new Team();
  team.add('Mike');
  team.add('Person');
  team.addAll('Mike', 23, 23, 'mief');
  expect(team.toArray()).toEqual(["Mike", "Person", 23, "mief"]);
});

test('check how work Map*', () => {
  const settings = new Settings();
  const res1 = [["theme", "dark"], ["music", "trance"], ["difficulty", "easy"]];
  const res2 = [["theme", "gray"], ["music", "off"], ["difficulty", "nightmare"]];
  expect(settings.toArray(settings.DEFAULT)).toEqual(res1);
  expect(settings.toArray(new Settings('gray', 'off', 'nightmare').change)).toEqual(res2);
  expect(new Settings().change).toEqual('А хде данные?');
});
