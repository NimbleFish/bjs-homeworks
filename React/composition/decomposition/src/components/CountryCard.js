export default function CountryCard(props) { // Рендерит карту страны
    return (
        <div className="block">
            <div className="blockTitle">Карта {props.country}</div>
            <div>Расписания</div>
        </div>
    );
}