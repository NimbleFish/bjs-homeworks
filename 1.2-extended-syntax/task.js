"use strict"

//Задача №1
console.log(getResult(2, 4, 3));

function getResult(a, b, c) {
  b = Math.pow(b, 2);
  let number = 'Задача №1:', result = [], x1, x2, h = 2 * a, d = b - 4 * (a * c);

  if ( a != 0) {
    if (d > 0) {
      console.log(number + 'Есть 2 кореня!');
      d = Math.sqrt(d);
      x1 = ((-b) + d) / h;
      x2 = ((-b) - d) / h;
      return result = [x1, x2];
    } else if (d == 0) {
      console.log(number + 'Есть 1 корень!');
      x1 = (-b) / h;
      return result = [x1];
    } else if (d < 0) {
      console.log(number + 'Нет корней!')
      return result;
    }
  }
}
console.log('\n');

//Задача №2
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
console.log('\n');

//Задача №3
let name = prompt('Введите ваше имя'), dateOfBirthday = prompt('Введите дату вашего рождения (Пример: 01.01.2000)').split('.'), currentAge;
console.log('Задача №3: \n' + askDrink(name, dateOfBirthday));

function output(old) {
  result = '';
  if (old) {
    result = 'Не желаете ли олд-фэшн, ' + name + ' ? ';
  }
  else {
    result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот! '
  }
  return result;
}

function askDrink(name, age) {
  let date = new Date(), day = date.getDate(), year = date.getFullYear();
  age[0] = parseInt(age[0]);
  age[1] = parseInt(age[1]);
  age[2] = parseInt(age[2]);
  if (age[2] - year >= 18) {
    if (age[0] <= day) {
      console.log('Вам больше 18 лет!');
      output(true);
    }
    else {
      console.log('Вам меньше 18 лет!');
      output(false);
    }
  }
  else {
    console.log('Вам меньше 18 лет!');
    output(false);
  }
  return result;
}
