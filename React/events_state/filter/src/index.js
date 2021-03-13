import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

const portfolio = new Portfolio();
ReactDOM.render(
  <React.StrictMode>
    <Toolbar
      filters={portfolio.filtres()}
      selected={portfolio.selected()}
      onSelectFilter={(e) => portfolio.onSelectFilter(e, portfolio.selected())} />
    {window.addEventListener('DOMContentLoaded', () => ProjectList())}
  </React.StrictMode>,
  document.getElementById('root')
);