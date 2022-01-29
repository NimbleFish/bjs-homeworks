import { useSelector } from "react-redux";

export default function List(props) {
    const data = useSelector(state => state);
    let current = ( data.filter.length !== 0 || data.filter[0] == { 'id': null, 'text': null, 'number': null } ) ? data.filter : data.list;
    return (
        <ul>
            {
                current.map(el => {
                    return ( (el.id != null && el.text != null && el.number != null) ? 
                        <li key={el.id}>
                            <div>{el.text}</div>
                            <div>{el.number}</div>
                            <div className="btn" onClick={() => props.editHandler(el.id)}>edit</div>
                            <div className="btn" onClick={() => props.removeHandler(el.id)}>remove</div>
                        </li> : null
                    )
                })
            }
        </ul>
    );
}