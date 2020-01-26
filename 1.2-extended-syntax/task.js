"use strict"
console.log(getResult(2, 4, 3));

function getResult(a, b, c) {
  b = Math.pow(b, 2);
  let number = 'Задача №1:', result = [], x1, x2, h = 2 * a, d = b - 4 * (a * c);

  if ( a != 0) {
    if (d > 0) {
      console.log(number + '\nЕсть 2 кореня!');
      d = Math.sqrt(d);
      x1 = ((-b) + d) / h;
      x2 = ((-b) - d) / h;
      return result = [x1, x2];
    } else if (d == 0) {
      console.log(number + '\nЕсть 1 корень!');
      x1 = (-b) / h;
      return result = [x1];
    } else if (d < 0) {
      console.log(number + '\nНет корней!')
      return result;
    }
  }
}
