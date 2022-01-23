import React from "react";
import { useNavigate } from "react-router-dom";

export default function Posts(props) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div onClick={() => navigate("/posts/new")}>Создать пост</div>
            <ul id="posts-list">
                { props.data ? props.data.map(el =>
                    <li id={el.id} key={el.id} className="post" onClick={() => navigate("/posts/"+el.id)}>
                        <div className="header">
                        <div className="img_container"><img src="" alt="avatar" /></div>
                        <div className="name_conainer">
                            <div className="name">FName lName</div>
                            <div className="created">{el.created}</div>
                        </div>
                        </div>
                        <div className="content">{el.content}</div>
                    </li>) : null
                }
            </ul>
        </React.Fragment>
    );
}