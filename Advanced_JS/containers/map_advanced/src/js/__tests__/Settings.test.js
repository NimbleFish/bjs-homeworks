import Settings from '../Settings';

const settings = new Settings();
const res1 = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']];
const res2 = [['theme', 'gray'], ['music', 'off'], ['difficulty', 'nightmare']];

test('check empty data', () => {
  expect(new Settings().change).toEqual('А хде данные?');
});

test('check DEFAULT settings', () => {
  expect(settings.toArray(settings.DEFAULT)).toEqual(res1);
});

test('test normal preset 1', () => {
  expect(settings.toArray(new Settings('gray', 'off', 'nightmare').change)).toEqual(res2);
});

test('test errores preset (theme)', () => {
  expect(new Settings('123', 'chillout', 'normal').change).toEqual('Нет такой настройки');
});

test('test errores preset (music)', () => {
  expect(new Settings('light', 'PSY', 'hard').change).toEqual('Нет такой настройки');
});

test('test errores preset (difficulty)', () => {
  expect(new Settings('gray', 'rock', '???').change).toEqual('Нет такой настройки');
});
