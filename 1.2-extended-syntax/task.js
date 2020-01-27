"use strict"
function getResult(a,b,c) {
  let x = [], x1, x2, d = Math.pow(b, 2) - 4 * (a * c);
  if ( a === 0) {
    console.log('Это не квадратное уравнение!');
    console.log('Есть 1 корень!');
    x1 = (-b) / (2 * a);
    x = [x1];
    return x;
  }
  if (d > 0) {
    console.log('Есть 2 корня!');
    d = Math.sqrt(d);
    x1 = ((-b) + d) / (2 * a);
    x2 = ((-b) - d) / (2 * a);
    x = [x1, x2];
    return x;
  } else if (d == 0) {
    console.log('Есть 1 корень!');
    x1 = (-b) / (2 * a);
    x = [x1];
    return x;
  } else {
    console.log('Нет корней!')
    return x;
  }
}

function getAverageMark(marks) {
  let sum, averageMark;
  if (marks != '') {
    console.log(marks);
    if (marks.length >= 5) {
      marks = marks.slice(0, 5);
    }
    marks.forEach(function(markCount){
      marks[markCount] = parseInt(marks[markCount]);
      sum = marks[markCount];
    });

    averageMark = sum / marks.length;
  }
  return averageMark;
}

function output(name, old) {
  let resulted = '';
  if (old) {
    resulted = 'Не желаете ли олд-фэшн, ' + name + '?';
  }
  else {
    resulted = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот! '
  }
  return resulted;
}

function askDrink(name, dateOfBirthday){
  let date = new Date(), year = date.getFullYear(), result;
  if (year - dateOfBirthday.getFullYear() >= 18) {
    console.log('Вам больше 18 лет!');
    result = output(name, true);
  }
  else {
    console.log('Вам меньше 18 лет!');
    result = output(name, false);
  }
  console.log(result)
  return result;
}

// //Задача №1
// console.log(getResult(2, 4, 3));
//
// function getResult(a, b, c) {
//   let number = 'Задача №1:', result = [], x1, x2, d = Math.pow(b, 2) - 4 * (a * c);
//
//   if ( a === 0) {
//     console.log('Это не квадратное уравнение!');
//     console.log(number + 'Есть 1 корень!');
//     x1 = (-b) / (2 * a);
//     result = [x1];
//     return result;
//   }
//   if (d > 0) {
//     console.log(number + 'Есть 2 кореня!');
//     d = Math.sqrt(d);
//     x1 = ((-b) + d) / (2 * a);
//     x2 = ((-b) - d) / (2 * a);
//     result = [x1, x2];
//     return result;
//   } else if (d == 0) {
//     console.log(number + 'Есть 1 корень!');
//     x1 = (-b) / (2 * a);
//     result = [x1];
//     return result;
//   } else {
//     console.log(number + 'Нет корней!')
//     return result;
//   }
// }
// console.log('\n');
//
// //Задача №2
// let marks = prompt('Введите оценки'), result, sum;
// marks = marks.split('');
// console.log('Задача №2: ' + getAverageMark(marks));
//
// function getAverageMark(marks) {
//   if (marks != '') {
//     if (marks.length >= 5) {
//       marks = marks.slice(0, 5);
//     }
//
//     marks.forEach(function(markCount){
//       marks[markCount] = parseInt(marks[markCount]);
//       sum = marks[markCount];
//     });
//
//     result = sum / marks.length;
//   }
//   return result;
// }
// console.log('\n');
//
// //Задача №3
// let name = prompt('Введите ваше имя'), dateOfBirthday = prompt('Введите год вашего рождения (Пример: 01.01.2000)').split('.'), currentAge;
//
// function output(old) {
//   let resulted = '';
//   if (old) {
//     resulted = 'Не желаете ли олд-фэшн, ' + name + '?';
//   }
//   else {
//     resulted = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот! '
//   }
//   return resulted;
// }
//
// function askDrink(name, dateOfBirthday) {
//   let date = new Date(), year = date.getFullYear(), resulted;
//
//   if (year - dateOfBirthday >= 18) {
//     console.log('Вам больше 18 лет!');
//     output(true);
//   }
//   else {
//     console.log('Вам меньше 18 лет!');
//     output(false);
//   }
//   return resulted;
// }
//
// console.log('Задача №3: \n' + askDrink(name, dateOfBirthday));
