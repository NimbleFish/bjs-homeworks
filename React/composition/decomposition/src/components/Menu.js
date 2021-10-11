export default function Menu(props) {
    return (
        <ul className="menu">
            { props.menuCat.map((el, i) => <li className="item" key={i}>{el}</li>) }
        </ul>
    )
}