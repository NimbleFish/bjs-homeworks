export default function Vizits(props) { // Рендерит блок Посещаемое
    return (
        <div className="block">
            <div className="blockTitle">Посещаемое</div>
            <ul className="vizits">
                { props.vizits.map((el, i) => <li key={i} className="item">{el.time} - {el.name}</li>) }
            </ul>
        </div>
    );
}