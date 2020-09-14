import calc from './index.js';

test('calc(8)', () => {
  expect(calc(8)).toBe(8);
});

test('calc(4.3)', () => {
  expect(calc(4.3)).toBe('4.3 - не является числом в десятичной системе счисления!');
});

test('calc(два)', () => {
  expect(calc('два')).toBe('два - не является числом в десятичной системе счисления!');
});
