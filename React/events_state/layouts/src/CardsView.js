import ShopCard from './ShopCard';

function CardsView(props) {
  return props.cards.map((card, index) => {
    return <ShopCard name={card.name} price={card.price} color={card.color} img={card.img} i={index} />;
  });
}

export default CardsView;