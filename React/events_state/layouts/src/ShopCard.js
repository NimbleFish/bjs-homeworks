function ShopCard(name, price, color, img, i) {
  return (
    <div className="tovar block" key={i}>
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      <div className="tovarImg" style={{backgroundImage: 'url(' + img + ')'}} />
      <div className="tovarBlockContainer">
        <div className="price">${price}</div>
        <div className="addToCartButton">add to cart</div>
      </div>
    </div>
  );
}

export default ShopCard;