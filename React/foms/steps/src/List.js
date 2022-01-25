import { Fragment } from "react";

export default function List(props) {
    return (
        <Fragment>
            <div className="labels">
                <div className="label_date">Дата (ДД.ММ.ГГГГ)</div>
                <div className="label_number">Пройдено км</div>
                <div className="label_options">Действия</div>
            </div>
            <ul>
                { props.list ? props.list.map(el=>
                    <li key={el.id}>
                        <div className="li_date">{el.date}</div>
                        <div className="li_number">{el.number}</div>
                        <div className="li_options">
                            <div className="li_edit" onClick={() => props.editHandler(el.id)}></div>
                            <div className="li_remove" onClick={() => props.removeHandler(el.id)}></div>
                        </div>
                    </li>) : null
                }
            </ul>
        </Fragment>
    )
}