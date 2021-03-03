import './App.css';
import ProjectList from './ProjectList';
import jsonData from './Tovars.json';

class Portfolio {
  static filtres = () => {
    return ["All", "Websites", "Flayers", "Business Cards"];
  }

  static selected = () => {
    return document.getElementsByClassName('selected')[0] ? document.getElementsByClassName('selected')[0] : 'All';
  }

  static onSelectFilter(filter) {
    filter = filter.target.textContent;
    let categoryItems = [],
        filters = Portfolio.filtres(),
        cur = document.getElementById('menu_' + filters.indexOf(filter)),
        sel = document.querySelector('.menuLi.selected');
    if (cur !== sel) {
      sel.classList.remove('selected');
      cur.classList.add('selected');
      if (filter === 'All') {
        ProjectList();
      } else {
        jsonData.tovars.forEach(el => filter === el.category ? categoryItems.push(el.img) : '');
        ProjectList(categoryItems, filter);
      }
    }
  }
}

export default Portfolio;
