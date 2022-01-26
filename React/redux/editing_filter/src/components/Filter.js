import { useState } from "react"

export default function Filter(props) {
    const [ filter, setText ] = useState("");

    const Fclear = () => props.disp('F_FL');

    const set = frm => {
        setText(frm.target.value);
        const filtered = props.list.filter(el => el.text.includes(frm.target.value) ? el : null);
        console.log(filtered.length);
        if (filtered.length == 0) Fclear();
        else { Fclear(); props.disp('F_ADD', filtered ); }
    }

    return (
        <div>
            <div className="mr">Filter: </div>
            <input type="text" onChange={set} value={filter} />
            <div className="btn" onClick={() => { props.disp('F_CL'); setText(""); }}>X</div>
        </div>
    );
}