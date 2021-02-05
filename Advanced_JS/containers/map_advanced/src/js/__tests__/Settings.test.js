import Settings from '../Settings';

test('check how work Map*', () => {
  const settings = new Settings();
  const res1 = [["theme", "dark"], ["music", "trance"], ["difficulty", "easy"]];
  const res2 = [["theme", "gray"], ["music", "off"], ["difficulty", "nightmare"]];
  expect(new Settings().change).toEqual('А хде данные?');
  expect(settings.toArray(settings.DEFAULT)).toEqual(res1);
  expect(settings.toArray(new Settings('gray', 'off', 'nightmare').change)).toEqual(res2);
  expect(settings.toArray(new Settings(123, "chillout", "normal").change)).toEqual('Нет такой настройки');
  expect(settings.toArray(new Settings("light", "PSY", "hard").change)).toEqual('Нет такой настройки');
  expect(settings.toArray(new Settings("gray", "rock", "???").change)).toEqual('Нет такой настройки');
});
