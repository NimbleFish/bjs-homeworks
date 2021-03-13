import './App.css';
import ProjectList from './ProjectList';
import jsonData from './Tovars.json';

class Portfolio {
  constructor() {
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: 'All'
    }
    this.filter = this.state.selected;
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
      ProjectList(categoryItems, selected);
    } else {
      ProjectList();
    }
  }
}

export default Portfolio;
