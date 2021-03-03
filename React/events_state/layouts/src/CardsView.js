import ShopCard from './ShopCard';
import Products from './Products.json';

function Cards(...cards) {
  let results = [];
  for (let i = 0; i < Products.products.length; i++) results.push(ShopCard(cards[i].name, cards[i].price, cards[i].color, cards[i].img, i));
  return results;
}

function CardsView(cards) {
  cards = cards.cards;
  return Cards(...cards);
}

export default CardsView;