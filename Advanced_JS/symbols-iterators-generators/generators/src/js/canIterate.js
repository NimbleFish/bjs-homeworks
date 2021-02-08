export default function canIterate(obj) {
  return !!(Object.getOwnPropertySymbols(obj.__proto__).includes(Symbol.iterator));
}
