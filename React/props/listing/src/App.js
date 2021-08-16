import Listing from './Listing';
const data = require('./extsy.json');

function App() {
  return <div className="item-list">{ data.map((el, i) => { return <Listing data={el} key={i} /> }) }</div>;
}

export default App;
