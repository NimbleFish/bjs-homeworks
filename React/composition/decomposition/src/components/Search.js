export default function Search(props) { // Рендерит строку, кнопку поиска и слоган
    return (
        <div className="searchBlock">
            <div className="searchContainer">
                <div className="searchLine"></div>
                <div className="searchButton">{props.btnText}</div>
            </div>
            <div className="diviz">{props.diviz}<span>фаза луны сегодня</span></div>
        </div>
    );
}