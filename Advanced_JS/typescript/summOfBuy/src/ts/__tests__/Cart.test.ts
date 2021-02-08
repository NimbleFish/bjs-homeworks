import Cart from '../Cart';
const cart = new Cart();

cart.add({id:1,name:'Жигули',price:3400});
cart.add({id:2,name:'Жигули-2',price:13400});

test('cart.items', () => {
  expect(cart.items).toEqual([
    {id: 1, name: "Жигули", price: 3400},
    {id: 2, name: "Жигули-2", price: 13400}
  ]);
});

test('getter cart.price', () => {
  expect(cart.price).toEqual(16800);
});

test('getter cart.AllPrice', () => {
  expect(cart.AllPrice(20)).toEqual(13440);
});

test('cart.remove', () => {
  cart.add({id:45,name:'Жигули-234',price:13234400});
  cart.add({id:43,name:'Жигули-534',price:14400});
  expect(cart.remove(45)).toEqual([
    {id: 1, name: "Жигули", price: 3400},
    {id: 2, name: "Жигули-2", price: 13400},
    {id: 43, name: "Жигули-534", price: 14400}
  ]);
});
