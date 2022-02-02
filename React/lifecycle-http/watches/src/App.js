import { useState } from "react";
import getTime from "./getTime";
import Watch from "./Watch";

const empty = { 'name': '', 'date': 0 };

export default function App() {
  const [ clocks, changeClocks ] = useState([  ]);
  const [ form, setForm ] = useState(empty);

  const changeValue = f => setForm( pS => ({ ...pS, [f.target.id]: f.target.id === 'date' ? parseInt(f.target.value) : f.target.value }) );

  const addClock = () => {
    if (!clocks.filter(el => el.timeZone === form.date)[0]) {
      changeClocks( pS => ([ ...pS, { 'name': form.name, 'timeZone': form.date, 'time': getTime(form.date) } ]) );
      setForm(empty);
    } else alert("Уже существуют часы с этим часовым поясом!");
  };

  const removeClock = id => changeClocks( pS => pS.filter( el => el.id !== id ) );

  return (
    <div className="wrapper">
      <div className="controls-wrapper">
        <div className="block-wrapper">
          <label htmlFor="name">Название</label>
          <input id="name" type="text" value={form.name} onChange={changeValue} />
        </div>
        <div className="block-wrapper">
          <label htmlFor="date">Временная зона</label>
          <input id="date" type="number" value={form.date} min="-12" mas="12" onChange={changeValue} addClock={addClock} />
        </div>
        <div className="btn" onClick={addClock}>Добавить</div>
      </div>
      <Watch clocks={clocks} changeClocks={changeClocks} />
      <ul>
        {
          clocks.map(el =>
            <li key={el.id}>
              <div onClick={() => removeClock(el.id)} className="remove btn">Удалить</div>
              <div className="name">{el.name}</div>
              <div className="time">{el.time}</div>
            </li>
          )
        }
      </ul>
    </div>
  );
}