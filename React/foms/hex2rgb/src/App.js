import React, { useState } from 'react';
import hex2rgb from './hex2rgb';

function rgb(form) {
    let result = null;
    const a = hex2rgb(form.substr(1));
    if (form !== '#000000' && a.r === 0 && a.g === 0 && a.b === 0) result = 'ERROR'; // отслеживание ошибки
    else {
        document.body.style.backgroundColor = `rgb(${a.r}, ${a.g}, ${a.b})`;
        result = `rgb(${a.r}, ${a.g}, ${a.b})`;
    }
    return <div id="rgb">{result}</div>
}

export default function App() {
    const [form, setForm] = useState('#');

    const changeColor = e => setForm(e.target.value !== '' ? e.target.value : '#');

    return (
        <React.Fragment>
            <input name="hexcolor" value={form ? form : '#'} onChange={changeColor} maxLength="7" />
            { form.length === 7 ? rgb(form) : null }
        </React.Fragment>
    );
}