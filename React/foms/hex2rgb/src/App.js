import { useState, Fragment } from 'react';
import getRGB from './getRGB';

const checkNumber = el => el >= 48 && el <= 57; // Если число >= 0 && <= 9
const checkWord = el => el >= 98 && el <= 102; // Если символ >= a && <= f

function validator(value) {
    let result = "#";
    if (value)
        value.substr(1).toLowerCase().split('').forEach(el => result += (checkNumber(el.charCodeAt()) || checkWord(el.charCodeAt())) ? el : 0 );
    return result;
}

export default function App() {
    const [form, setForm] = useState('#');

    const changeColor = e => setForm(e.target.value !== '' ? validator(e.target.value) : '#');

    return (
        <Fragment>
            <input name="hexcolor" value={form ? form : '#'} onChange={changeColor} maxLength="7" />
            { form.length === 7 ? <div id="rgb">{getRGB(form)}</div> : null }
        </Fragment>
    );
}