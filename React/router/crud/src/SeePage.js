import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HOST = 'http://localhost:7777';

function removePost(id, navigate, update) {
    console.log(id);
    fetch((HOST + "/posts/" + id), { "method": "DELETE", "headers": { "Accept": "application/json", "Content-Type": "application/json" } }).then(() => update());
    navigate("/");
}

export default function SeePage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [ data, setData ] = useState(null);
    const [ edit, changeEdit ] = useState();
    const [ text, saveText ] = useState();

    const save = () => {
        changeEdit(text);
        fetch(HOST + "/posts", {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ 'id': data.id, "content": text })
        }).then(() => props.update());
    }

    useEffect(() => fetch(HOST+"/posts").then(d => d.json()).then(d => d.filter(el => el.id == location.pathname.substr(7))).then(el => { setData(el[0]); changeEdit(el[0].content); saveText(el[0].content) }), []);
    return data != null ?
        (
            <div id={data.id} className="post">
                <div className="header">
                    <div className="img_container"><img src="" alt="avatar" /></div>
                    <div className="name_conainer">
                        <div className="name">FName lName</div>
                        <div className="created">{data.created}</div>
                    </div>
                </div>
                <div className="content">{ !edit ? (<React.Fragment><input onChange={evt => saveText(evt.target.value)} value={text} /><div onClick={save}>Сохранить</div></React.Fragment>) : edit}
                </div>
                <div className="controls">
                    <div className="editButton" onClick={() => changeEdit(false)}>Изменить</div>
                    <div className="deleteButton" onClick={() => removePost(data.id, navigate, props.update)}>Удалить</div>
                </div>
                <div onClick={() => navigate("/")}>Закрыть</div>
            </div>
        )
    : null;
}