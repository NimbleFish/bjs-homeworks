import logo from './logo.svg';
import './App.css';

class Portfolio {
  static filtres = () => {
    return ["All", "Websites", "Flayers", "Business Cards"];
  }

  static selected = () => {
    return "All";
  }

  static onSelectFilter = () => {
    return filter => console.log(filter);
  }
}

export default Portfolio;
