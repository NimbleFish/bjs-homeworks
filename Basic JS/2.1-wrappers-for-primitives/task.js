"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(Number(percent))) {
    console.log('Параметр "Процентная ставка" содержит неправильное значение ' + window.percent.value);
    return 'Параметр "Процентная ставка" содержит неправильное значение ' + window.percent.value;
  }
  if (isNaN(Number(contribution))) {
    console.log('Параметр "Начальный взнос" содержит неправильное значение ' + window.contribution.value);
    return 'Параметр "Начальный взнос" содержит неправильное значение ' + window.contribution.value;
  }
  if (isNaN(Number(amount))) {
    console.log('Параметр "Общая стоимость" содержит неправильное значение ' + window.amount.value);
    return 'Параметр "Общая стоимость" содержит неправильное значение ' + window.amount.value;
  }
  if (isNaN(date)) {
    console.log('Пожалуйста, выберите параметр "Срок дейтсвия ипотеки"');
    return 'Пожалуйста, выберите параметр "Срок дейтсвия ипотеки"';
  }
  if (new Date(date).getFullYear() < new Date().getFullYear() ) {
    console.log('Нельзя взять импотеку в прошлое, пожалуйста, выберите правильный срок ипотеки!');
    return 'Нельзя взять импотеку в прошлое, пожалуйста, выберите правильный срок ипотеки!';
  }

  date = {
    'month' : new Date(date).getMonth() + 1,
    'year' : new Date(date).getFullYear(),
  }

  let dateCurrent = {
    'month' : new Date().getMonth() + 1,
    'year' : new Date().getFullYear(),
  },
  dateEnd = (12 * (date.year - dateCurrent.year)) - (dateCurrent.month - date.month),
  moneyDolg = amount - contribution,
  moneyInMounth = moneyDolg * ( ((1/12) * (percent/100)) + ((1/12) * (percent/100))/( ( ( 1 + ((1/12) * (percent/100)) )**(dateEnd) ) - 1 )),
  totalAmount = (moneyInMounth * dateEnd).toFixed(2);
  totalAmount = Number(totalAmount);

  console.log(`dateEnd: ${dateEnd}`);
  console.log(`moneyDolg: ${moneyDolg}`);
  console.log(`moneyInMounth: ${moneyInMounth}`);
  console.log(`totalAmount: ${totalAmount}`);
  console.log(typeof(totalAmount));
  if (isNaN(totalAmount)) {
    console.log('Ошибка! Пожалуйста, проверьте введёный вами данные.');
    return 'Ошибка! Пожалуйста, проверьте введёный вами данные.';
  }
  return totalAmount;
}

function getGreeting(name) {
  if (name == '' || name == null || name == undefined) {
    name = 'Аноним';
  }

  let greeting = `Привет, мир! Меня зовут ${name}`;
  console.log(greeting);
  return greeting;
}
