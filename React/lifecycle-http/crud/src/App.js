import { useState, Fragment } from 'react';
import updateImg from './img/updateImg.png';
import deleteImg from './img/deleteImg.png';

let start = true;

export default function App() {
  const [list, updateList] = useState([]);

  const getNotes = () => fetch(process.env.REACT_APP_SERVER_URL).then(data => updateList(data));
  if (start) { getNotes(); start = false; }
  
  const createNotes = e => fetch(process.env.REACT_APP_SERVER_URL, {'method':'POST','body':JSON.stringify({'content':e.target.previousSibling.value})});
  
  const deleteNotes = e => fetch(process.env.REACT_APP_SERVER_URL, {'method':'DELETE','body':JSON.stringify({'id':e.target.parentNode.id})}).then(() => getNotes());

  return (
    <Fragment>
      <header>
        <h1>Notes</h1>
        <div onClick={getNotes} className="cursor"><img src={updateImg} alt="updateButtonImage" /></div>
      </header>
      <ul>
        {
          list.length > 0 && list.map(el => {
            return (
              <li id={el.id} key={el.id}>
                <span onClick={deleteNotes}><img src={deleteImg} alt="deleteButton" /></span>
                <div>{el.content}</div>
              </li>
            );
          })
        }
      </ul>
      <div>
        <textarea></textarea>
        <button onClick={createNotes}>Отправить</button>
      </div>
    </Fragment>
  );
}