import canIterate from '../canIterate';

test('Can\'t Iterate', () => {
  expect(canIterate(10)).toEqual(false);
});

test('Can Iterate', () => {
  expect(canIterate('Netology')).toEqual(true);
});
