"use strict"
function showSolutionsMessage(a, b, c) {
  if (a == '' || a == '0' || b == '' || b == '0') {
    return { 'd' : 'Не существует', 'text' : 'Пожалуйста, введите знчаения a и b!' };
  }
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + (${b})x + (${c}) = 0\n`);
  let result = getSolutions(a, b, c);
  console.log(`Значение дискриминанта: ${result.d}`);
  if (result.d < 0) {
    console.log('Уравнение не имеет вещественных корней\n');
    return { 'd' : result.d, 'text' : 'Нет корней!' }
  }
  else if (result.d == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]} \n`);
    return { 'd' : result.d, 'text' : 'Уравнение имеет один корень: ', 'x1' : `X1: ${result.roots[0]}` };
  }
  else {
    console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]} \n`);
    return { 'd' : result.d, 'text' : 'Уравнение имеет два корня: ', 'x1' : `X1: ${result.roots[0]}`, 'x2' : `X2: ${result.roots[1]}` };
  }
}

function getSolutions(a, b, c) {
  let d = Math.pow(b, 2) - (4 * (a*c)), result, x1, x2;
  if (d < 0) {
    return result = { 'd' : d };
  } else if (d == 0) {
    x1 = (-b)/(2 * a);
    return result = { 'roots' : [x1], 'd' : d };
  }
  x1 = ((-b) + Math.sqrt(d))/(2 * a);
  x2 = ((-b) - Math.sqrt(d))/(2 * a);
  result = { 'roots' : [x1, x2], 'd' : d }
  return result;
}

function getAverageScore(data) {
let  sum = {
          'all'  : {
                    'sum'         : 0,
                    'len'         : 0,
                    'res'         : 0,
                  },
          'pred' : {
                    'algebra'     : 0,
                    'geometry'    : 0,
                    'russian'     : 0,
                    'physics'     : 0,
                    'music'       : 0,
                    'english'     : 0,
                    'chemistry'   : 0,
                    'german'      : 0,
                    'literature'  : 0,
                    'informatics' : 0,
                  },
          'len' : {
                    'algebra'     : 0,
                    'geometry'    : 0,
                    'russian'     : 0,
                    'physics'     : 0,
                    'music'       : 0,
                    'english'     : 0,
                    'chemistry'   : 0,
                    'german'      : 0,
                    'literature'  : 0,
                    'informatics' : 0,
                  },
        'algebra'     : 0,
        'geometry'    : 0,
        'russian'     : 0,
        'physics'     : 0,
        'music'       : 0,
        'english'     : 0,
        'chemistry'   : 0,
        'german'      : 0,
        'literature'  : 0,
        'informatics' : 0,
        }

  for (let key in data) {
    for (let i = 0; i < data[key].length; i++) {
      sum.pred[key] += data[key][i];
      sum.len[key] = data[key].length;
      sum[key] = sum.pred[key] / sum.len[key];
      sum.all.sum += data[key][i];
    }
    sum.all.len += sum.len[key];
    sum.all.res = sum.all.sum / sum.all.len;
  }

  return sum;
}
