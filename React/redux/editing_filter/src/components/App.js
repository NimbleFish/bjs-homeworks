import { Fragment } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Filter from "./Filter";
import List from "./List";

function App(props) {
  let form, setForm;
  
  const forma = (frm, setFrm) => { form = frm; setForm = setFrm };

  const editHandler = id => {
    const el = props.list.filter(el => el.id === id)[0];
    setForm({ 'text': el.text, 'number': el.number });
    removeHandler(el.id);
  };

  const removeHandler = id => {
    const el = props.list.filter(el => el.id === id)[0];
    props.disc('REMOVE', el);
  }

  return (
    <Fragment>
      <Filter list={props.list} filter={props.filter} disp={props.disc} />
      <Form list={props.list} disp={props.disc} forma={forma} />
      <List filter={( props.filter.length !== 0 || props.filter[0] == { 'id': null, 'text': null, 'number': null } ) ? props.filter : props.list} editHandler={editHandler} removeHandler={removeHandler} />
    </Fragment>
  );
}

const act = dispacth => ({ disc: (type, payload) => dispacth({ type, payload }) });

export default connect(state => state, act)(App);