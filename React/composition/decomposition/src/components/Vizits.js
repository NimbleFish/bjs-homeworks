export default function Vizits(props) { // Рендерит блок Посещаемое
    console.log(props);
    return (
        <div className="block">
            <div className="blockTitle">Посещаемое</div>
            <ul className="vizits">
                { props.vizits.map((el, i) => <li key={i} className="item"><span className="bold">{el.target}</span> - {el.theme}</li>) }
            </ul>
        </div>
    );
}