"use strict"
function getResult(a,b,c) {
  let x = [], x1, x2, d = Math.pow(b, 2) - 4 * (a * c);
  if ( a === 0) {
    console.log('Это не квадратное уравнение!');
    console.log('Есть 1 корень!');
    x1 = (-b) / (2 * a);
    return x = [x1];
  }
  if (d > 0) {
    console.log('Есть 2 корня!');
    x1 = ((-b) + Math.sqrt(d)) / (2 * a);
    x2 = ((-b) - Math.sqrt(d)) / (2 * a);
    return x = [x1, x2];
  } else if (d == 0) {
    console.log('Есть 1 корень!');
    x1 = (-b) / (2 * a);
    return x = [x1];;
  } else {
    console.log('Нет корней!')
    return x;
  }
}

function getAverageMark(marks) {
  let sum = 0;
  if (marks != '') {
    console.log(marks);
    if (marks.length >= 5) {
      marks = marks.slice(0, 5);
    }
    for (let сount = 0; сount < marks.length; сount++) {
      console.log(сount);
      marks[сount] = parseInt(marks[сount]);
      sum = sum + marks[сount];
      console.log(marks[сount]);
      console.log(sum);
    };


  }
  return sum / marks.length;;
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
