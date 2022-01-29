import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    const [ filter, setText ] = useState("");

    const Fclear = () => dispatch({ 'type': 'F_FL' });

    const set = frm => {
        setText(frm.target.value);
        const filtered = data.list.filter(el => el.text.includes(frm.target.value) ? el : null);
        if (filtered.length == 0) Fclear();
        else { Fclear(); dispatch({ 'type': 'F_ADD', 'payload': filtered }); }
    }

    return (
        <div>
            <div className="mr">Filter: </div>
            <input type="text" onChange={set} value={filter} />
            <div className="btn" onClick={() => { dispatch({ 'type': 'F_CL' }); setText(""); }}>X</div>
        </div>
    );
}