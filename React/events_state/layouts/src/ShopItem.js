function ShopItem(name, price, color, img, i) {
  return (
    <div className="tovar line" key={i}>
      <div className="tovarImg" style={{backgroundImage: 'url(' + img + ')'}} />
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      <div className="price">${price}</div>
      <div className="addToCartButton">add to cart</div>
    </div>
  );
}

export default ShopItem;