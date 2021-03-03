import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import Toolbar from './Toolbar';
import reportWebVitals from './reportWebVitals';
import ProjectList from './ProjectList';

ReactDOM.render(
  <React.StrictMode>
    <Toolbar
      filters={Portfolio.filtres()}
      selected={Portfolio.selected()}
      onSelectFilter={Portfolio.onSelectFilter} />
    {window.addEventListener('DOMContentLoaded', () => ProjectList())}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
