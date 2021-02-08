import './css/style.css';
import Cart from './ts/Cart';

const cart = new Cart();

cart.add({id:1,name:'Жигули',price:3400});
cart.add({id:2,name:'Жигули-2',price:13400});
console.log(cart.items);
console.log('Цена без скидки: ' + cart.price);
console.log('Цена со скидкой: ' + cart.AllPrice(20));
cart.add({id:45,name:'Жигули-234',price:13234400});
cart.add({id:43,name:'Жигули-534',price:14400});
console.log(cart.items);
console.log(cart.remove(45));
