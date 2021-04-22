import './App.css';
import IconSwitch from './IconSwitch';
import Products from './Products.json';
import ListView from './ListView';
import CardsView from './CardsView';
import { useState } from 'react';

let products = Products.products;

function changeType(type) {
  return type === "view_list" ? "view_module" : "view_list";
}

function Store() {
  let [state, changeState] = useState('view_list');
  return (
    <div id="container">
      <div id="switch">
        <IconSwitch icon={changeType(state)} onSwitch={icon=>changeState(changeType(icon))} />
      </div>
      <main className="lineStyle">
        {state === "view_list"? <ListView items={products} /> : <CardsView cards={products} />}
      </main>
    </div>
  );
}

export default Store;