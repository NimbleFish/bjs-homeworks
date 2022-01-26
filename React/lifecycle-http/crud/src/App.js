import { useState, Fragment, useEffect } from 'react';
import updateImg from './img/updateImg.png';
import deleteImg from './img/deleteImg.png';

export default function App() {
  const [list, updateList] = useState([]);
  const [text, setText] = useState("");

  const getNotes = () => fetch(process.env.REACT_APP_SERVER_URL).then(el => el.json()).then(data => updateList([...data]));
  useEffect(() => getNotes(), []);
  
  const createNotes = () => {fetch(process.env.REACT_APP_SERVER_URL, {'method':'POST', 'headers': { 'Content-Type': 'application/json' }, 'body':JSON.stringify({'content':text})}).then(() => getNotes()); setText(""); };
  
  const deleteNotes = id => fetch(process.env.REACT_APP_SERVER_URL, {'method':'DELETE', 'headers': { 'Content-Type': 'application/json' }, 'body':JSON.stringify({id})}).then(() => getNotes());

  return (
    <Fragment>
      <header>
        <h1>Notes</h1>
        <div onClick={getNotes} className="cursor"><img src={updateImg} alt="updateButtonImage" /></div>
      </header>
      <ul>
        {
          list.length !== 0 && list.map(el => {
            return (
              <li key={el.id}>
                <span onClick={() => deleteNotes(el.id)}><img src={deleteImg} alt="deleteButton" /></span>
                <div>{el.content}</div>
              </li>
            );
          })
        }
      </ul>
      <div>
        <textarea onChange={evt => setText(evt.target.value)} value={text}></textarea>
        <button onClick={() => createNotes()}>Отправить</button>
      </div>
    </Fragment>
  );
}