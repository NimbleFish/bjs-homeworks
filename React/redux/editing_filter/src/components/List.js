export default function List(props) {
    return (
        <ul>
            {
                props.filter.map(el => {
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