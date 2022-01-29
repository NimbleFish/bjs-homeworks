import { useState } from "react";
import { useDispatch } from "react-redux";

const none = { 'text': "", 'number': 0 };

export default function Form(props) {
    const dispatch = useDispatch();

    const [ showCancel, changeShowCancel ] = useState(false);
    const [ form, setForm ] = useState(none);

    props.forma(form, setForm);

    const submitForm = () => {
        dispatch({ 'type': 'ADD', 'payload': { 'id': new Date().getTime(), ...form } });
        setForm(none);
    }

    const cancelForm = () => { setForm(none); changeShowCancel(false); };

    const changeValue = frm => {
        setForm(prevForm => ({ ...prevForm, [frm.target.type]: frm.target.type === 'number' ? parseInt(frm.target.value) : frm.target.value }));
        if (form.text == "" && form.number == 0) changeShowCancel(true);
        if (frm.target.type === 'number' ? ( form.text == "" && parseInt(frm.target.value) == 0 ) : (form.number == 0 && frm.target.value == ""))
            changeShowCancel(false);
    }

    return (
        <div>
            <div className="mr">Form: </div>
            <form>
                <input type="text" onChange={changeValue} value={form.text} />
                <input type="number" onChange={changeValue} min="0" value={form.number} />
                <div className="btn" onClick={submitForm}>Save</div>
                { showCancel ? <div className="btn" onClick={cancelForm}>Cancel</div> : null }
            </form>
        </div>
    )
}