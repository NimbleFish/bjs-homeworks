import { Fragment, useState } from "react";
import List from './List';

let listOfData = [];
const zeroStatus = { 'date': '', 'number': 0 };

const removeHandler = e => e.target.parentNode.parentNode.remove();

const sort = () => listOfData = listOfData.sort((a, b) => a.date > b.date);

export default function App() {
    const [form, setForm] = useState(zeroStatus)
    const changeValue = frm => setForm(prevForm => ({ ...prevForm, [frm.target.type]: frm.target.type === 'number'?
        parseInt(frm.target.value) : frm.target.value
    }));
    const submitForm = () => {
        const exists = listOfData.filter(el => el.date === form.date); // Получение данных по дате
        if (exists.length !== 0) { // Проверка есть ли уже такая дата
            exists[0].number = parseInt(exists[0].number) + parseInt(form.number); // Добавление пройденных км
            listOfData.filter(el => el.date !== form.date).push(exists[0]); // Соединение с другими данными
        } else listOfData.push(form); // Добавление, если нет даты
        sort(); // Сортировка по датам
        setForm(zeroStatus); // Сброс полей ввода
    }

    const editHandler = e => {
        const data = e.target.parentNode.parentNode.children; // Получение вложенной структуры строки 
        const oldDate = data[0].innerText; // Запись в память данных о дате
        const oldNumber = parseFloat(data[1].innerText); // Запись в память данных о км
        removeHandler(e); // Удалить строку с старыми данными
        setForm({ 'date': oldDate, 'number': oldNumber }); // Запись старых данных в поля редактирования данных
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
            <List list={listOfData} editHandler={editHandler} removeHandler={removeHandler} />
        </Fragment>
    );
}