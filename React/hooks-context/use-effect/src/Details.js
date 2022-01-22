import { useState, useEffect } from "react";

export default function Details(props) {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        if (!data && props.element || data && props.element != data.id)
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.element}.json`)
            .then(d => d.json())
            .then(d => setData(d));
    });

    return (data != null ?
        <div id={data.id}>
            <img src={data.avatar+"?name="+decodeURIComponent(data.name)} alt="avatar" />
            <div id="name">{data.name}</div>
            <div>
                <div>City: {data.details.city}</div>
                <div>Company: {data.details.company}</div>
                <div>Position: {data.details.position}</div>
            </div>
        </div> : null
    );
}