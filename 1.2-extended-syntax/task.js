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

let marks = prompt('Введите оценки'), result, sum;
marks = marks.split('');
console.log('Задача №2: ' + getAverageMark(marks));

function getAverageMark(marks) {
  if (marks != '') {
    if (marks.length >= 5) {
      marks = marks.slice(0, 5);
    }
    marks[0] = parseInt(marks[0]);
    marks[1] = parseInt(marks[1]);
    marks[2] = parseInt(marks[2]);
    marks[3] = parseInt(marks[3]);
    marks[4] = parseInt(marks[4]);
    sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    result = sum / marks.length;
  }
  return result;
}
