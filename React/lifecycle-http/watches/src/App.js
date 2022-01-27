import { useState } from "react";

export default function App() {
  const [ clocks, changeClocks ] = useState([  ]);
  const [ form, setForm ] = useState({ 'name': '', 'date': 0 });

  const valid = data => data < 10 ? "0"+ data : data;
  const getTime = zone => `${valid(new Date().getUTCHours()+zone)}:${valid(new Date().getUTCMinutes())}:${valid(new Date().getUTCSeconds())}`;
  const changeValue = frm => setForm(prevState => ({...prevState, [frm.target.id]: frm.target.id === 'date' ? parseInt(frm.target.value) : frm.target.value}));

  const removeClock = id => {
    clearInterval(id);
    changeClocks( prevState => ({ ...prevState, clocks: prevState.clocks.filter(el => el.id !== id) }));
  }

  const addClock = () => {
    if (!clocks.filter(el => el.timeZone === form.date)[0]) { // Проверка на существование часов с таким чп
      const name = form.name; // Дамп данных
      const timeZone = form.date; // Дамп данных
      setForm({ name: "", date: 0 }); // Сброс полей ввода

      const getInterval = () => setInterval(() => changeClocks(prevState =>
          ([ ...prevState.filter(el => el.timeZone !== timeZone), { ...prevState.filter(el => el.timeZone === timeZone)[0], time: getTime(timeZone) } ])), 1000);

      changeClocks(prevState => ([ ...prevState, { name, timeZone, time: getTime(timeZone), id: getInterval() } ]));

    } else alert("Уже существуют часы с этим часовым поясом!");    
  }

  return (
    <div className="wrapper">
      <div className="controls-wrapper">
        <div className="block-wrapper">
          <label htmlFor="name">Название</label>
          <input id="name" type="text" value={form.name} onChange={changeValue} />
        </div>
        <div className="block-wrapper">
          <label htmlFor="date">Временная зона</label>
          <input id="date" type="number" value={form.date} min="-12" mas="12" onChange={changeValue} />
        </div>
        <div className="btn" onClick={addClock}>Добавить</div>
      </div>
      <ul>
        {
          clocks.length !== 0 && clocks.map(el => {
            return (
              <li key={el.id}>
                <div onClick={() => removeClock(el.id)} className="remove">Удалить</div>
                <div className="name">{el.name}</div>
                <div className="time">{el.time}</div>
              </li>
            );
          })
        }
      </ul>
    </div>    
  );
}