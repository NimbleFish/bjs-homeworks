import React from 'react';
import './App.css';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import jsonData from './Tovars.json';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: 'All'
    }
  }

  render() {
    const filteredTovars = () => {
      return this.selected() === 'All' ? jsonData.tovars : jsonData.tovars.filter(tovar => {
        return tovar.category === this.selected() && tovar;
      });
    }

    const onSelectFilter = e => this.setState(prevState => prevState.selected = e.target.textContent);

    return (
      <div className="container">
        <Toolbar filters={this.filtres()} selected={this.selected()} onSelectFilter={onSelectFilter} />
        <ul id="mainUl"><ProjectList tovars={filteredTovars()} /></ul>
      </div>
    );
  }

  filtres() {
    return this.state.filters;
  }

  selected() {
    return this.state.selected;
  }
}

export default Portfolio;
