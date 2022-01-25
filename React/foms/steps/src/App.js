import { Fragment, useState } from "react";
import List from "./List";

const zeroStatus = { 'date': '', 'number': 0 };

export default function App() {
    const [ list, changeList ] = useState([]);
    const [ form, setForm ] = useState(zeroStatus)

    const changeValue = frm => setForm(prevForm => ({ ...prevForm, [frm.target.type]: frm.target.type === 'number'? parseInt(frm.target.value) : frm.target.value }));
    
    const submitForm = () => {
        let el = list.filter(el => el.date == form.date)[0];
        if (!el) changeList(prevList => ([ ...prevList, { ...form, id: new Date().getTime() } ]));
        else {
            el.number = parseInt(el.number) + parseInt(form.number);
            changeList(prevList => ([ ...prevList.filter(e => e.date != el.date), { ...el } ]));
        }
        setForm(zeroStatus);
    }

    const removeHandler = id => changeList([...list.filter(el => el.id != id)]);

    const editHandler = id => {
        const el = list.filter(e => e.id == id)[0];
        setForm({ 'date': el.date, 'number': el.number });
        removeHandler(id);
    };

    return (
        <Fragment>
            <form>
                <div className="fdc">
                    <label htmlFor="inp_date">Дата (ДД.ММ.ГГГГ)</label>
                    <input id="inp_date" type="date" value={form.date} onChange={changeValue} />
                </div>
                <div className="fdc">
                    <label htmlFor="inp_number">Пройдено км</label>
                    <input id="inp_number" type="number" min="0" value={form.number} onChange={changeValue} />
                </div>
                <div id="button" onClick={submitForm}>OK</div>
            </form>
            <List list={list} editHandler={editHandler} removeHandler={removeHandler} />
        </Fragment>
    );
}