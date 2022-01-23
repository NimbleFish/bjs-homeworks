import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HOST = 'http://localhost:7777';

export default function NewPost(props) {
    const [ text, setText ] = useState("");
    const navigate = useNavigate();

    function send() {
        if (text != "")
        {
            fetch(HOST + "/posts", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({ 'id': 0, "content": text })
            }).then(() => props.update());
            navigate("/");
        }
    }

    return (
        <div>
            <input onChange={evt => setText(evt.target.value)} value={text} />
            <div onClick={send}>Опубликовать</div>
            <div onClick={() => navigate("/")}>Закрыть</div>
        </div>
    );
}