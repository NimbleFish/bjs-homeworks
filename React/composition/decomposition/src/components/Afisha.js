export default function Afisha(props) { // Рендерит блок Телепрограммы
    return (
        <div className="block">
            <div className="blockTitle">Телепрограмма</div>
            <ul className="afisha">
                { props.afisha.map((el, i) => <li key={i} className="item">{el.time} {el.name} <span>{el.channel}</span></li>) }
            </ul>
        </div>
    );
}