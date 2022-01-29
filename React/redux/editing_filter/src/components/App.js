import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Filter from "./Filter";
import List from "./List";

export default function App() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  let form, setForm;
  
  const forma = (frm, setFrm) => { form = frm; setForm = setFrm };

  const editHandler = id => {
    const el = data.list.filter(el => el.id === id)[0];
    setForm({ 'text': el.text, 'number': el.number });
    removeHandler(el.id);
  };

  const removeHandler = id => dispatch({ 'type': 'REMOVE', 'payload': data.list.filter(el => el.id === id)[0] });

  return (
    <Fragment>
      <Filter />
      <Form forma={forma} />
      <List editHandler={editHandler} removeHandler={removeHandler} />
    </Fragment>
  );
}