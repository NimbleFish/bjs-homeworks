export default function Course(props) { // Рендерит курс валют
    return (
        <ul className="valutes">
            { props.valute.map((el, i) => <li key={i} className="valute">{el.name} {el.currency} <span>{el.dynamic}</span></li>) }
        </ul>
    );
}