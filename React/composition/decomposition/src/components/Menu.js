export default function Menu(props) { // Рендерит основное меню
    return (
        <ul className="menu">
            { props.categories.map((el, i) => <li className="item" key={i}>{el}</li>) }
        </ul>
    )
}