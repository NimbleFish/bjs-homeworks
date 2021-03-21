import React from 'react';
import './App.css';
import ProjectList from './ProjectList';
import jsonData from './Tovars.json';
import Toolbar from './Toolbar';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: 'All'
    }
    this.filter = this.state.selected;
  }

  render(category, selected) {
    return (
      <div className="container">
        <Toolbar filters={this.filtres()} selected={this.selected()} onSelectFilter={(e) => this.onSelectFilter(e, this.selected())} />
        <main>
          <ul id="mainUl">
            <ProjectList categoryItems={category} selected={selected} />
          </ul>
        </main>
      </div>
    );
  }

  filtres() {
    return this.state.filters;
  }

  selected() {
    return this.state.selected;
  }

  onSelectFilter(event, selected) {
    let menu = event.nativeEvent.path[1].children;
    for (let i = 0; i < menu.length; i++) if (menu[i].classList.contains('selected')) menu[i].classList.remove('selected');
    event.target.classList.add('selected');
    selected = event.target.textContent;
    if (selected !== 'All') {
      let categoryItems = [];
      jsonData.tovars.forEach(el => selected === el.category ? categoryItems.push(el.img) : '');
      this.render(categoryItems, selected);
    } else {
      this.render();
    }
  }
}

export default Portfolio;
