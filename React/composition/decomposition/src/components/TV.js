export default function TV(props) { // Рендерит блок Эфир
    return (
<       div className="block">
            <div className="blockTitle">Эфир</div>
            <ul className="TV">
                { props.TV.map((el, i) => <li key={i} className="item"><img src={props.icon} alt="tv_icon_play" /> {el.name} <span>{el.channel}</span></li>) }
            </ul>
        </div>
    );
}