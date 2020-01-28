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
