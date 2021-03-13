import './App.css';
import IconSwitch from './IconSwitch';
import Products from './Products.json';
import ListView from './ListView';
import CardsView from './CardsView';
import { useState } from 'react';

let products = Products.products;

function Store() {
  let [state, changeState] = useState('view_list');
  return (
    <div id="container">
      <div id="switch">
        <IconSwitch icon={state === "view_list" ? "view_module" : "view_list"} onSwitch={
          (e) => {       
            e.nativeEvent.path[2].children[1].removeAttribute('class');
            e.nativeEvent.path[2].children[1].classList.add(state === 'view_module' ? 'lineStyle' : 'blockStyle');
            changeState(e.target.innerText);
          }
        } />
      </div>
      <main className="lineStyle">{state === "view_list"? <ListView items={products} /> : <CardsView cards={products} />}</main>
    </div>
  );
}

export default Store;