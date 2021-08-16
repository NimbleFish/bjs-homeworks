function Listing(props) {
    let price = null;
    if (props.data['currency_code'] === 'USD') {
        price = '$' + props.data.price;
    } else if (props.data['currency_code'] === 'EUR') {
        price = '€' + props.data.price;
    } else {
        price = props.data.price + ' ' + props.data['currency_code'];
    }

    let title = props.data.title.length > 50 ? props.data.title.substring(0, 50) + '...' : props.data.title;
    let lvl = props.data.quantity <= 10 ? 'low' :
                (props.data.quantity > 10 && props.data.quantity <= 20) ? 'medium' : 'high';
    return (
        <div className="item" id={ props.data.listing_id }>
            <div className="item-image">
                <a href={ props.data.url }>
                    <img src={ props.data['MainImage']['url_570xN'] } alt="img" />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ title }</p>
                <p className="item-price">{ price }</p>
                <p className={"item-quantity level-" + lvl}>{ props.data.quantity } left</p>
            </div>
        </div>
    );
}

export default Listing;