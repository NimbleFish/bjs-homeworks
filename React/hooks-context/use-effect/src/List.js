import { useState, useEffect } from "react";

export default function List(props) {
    const [ data, setData ] = useState();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then(d => d.json())
        .then(d => setData(d));
    }, []);

    return <ul>{ data && data.map(d => <li id={d.id} key={d.id} onClick={el => props.click(el.nativeEvent.target.id)}>{d.name}</li>)}</ul>;
}