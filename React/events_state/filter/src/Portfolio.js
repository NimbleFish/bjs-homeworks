import React from 'react';
import './App.css';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: 'All',
      elements: ProjectList()
    }
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Toolbar filters={this.filtres()} selected={this.selected()} onSelectFilter={this.onSelectFilter} />
        <ul id="mainUl">{this.state.elements.map(elem => {return elem;})}</ul>
      </div>
    );
  }

  filtres() {
    return this.state.filters;
  }

  selected() {
    return this.state.selected;
  }

  onSelectFilter(event) {
    event.target.classList.contains('selected') && this.setState(prevState => {
      prevState.elements = ProjectList(prevState.selected);
      prevState.selected = event.target.textContent;
    });
  }
}

export default Portfolio;
