export default function calc(number) {
  try {
    if (Number.isInteger(Number.parseFloat(number)) == true) {
      return Number.parseFloat(number);
    } else {
      throw(number + " - не является числом в десятичной системе счисления!");
    }
  } catch (e) {
    return e;
  }
}
