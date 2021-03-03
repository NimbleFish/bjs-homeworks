import ShopItem from './ShopItem';
import Products from './Products.json';

function Lists(...items) {
  let results = [];
  for (let i = 0; i < Products.products.length; i++) results.push(ShopItem(items[i].name, items[i].price, items[i].color, items[i].img, i));
  return results;
}


function ListView(items) {
  items = items.items;
  return Lists(...items);
}

export default ListView;