import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import Toolbar from './Toolbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Toolbar
      filters={new Portfolio().filters}
      selected={new Portfolio().selected}
      onSelectFilter={new Portfolio().onSelectFilter}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
