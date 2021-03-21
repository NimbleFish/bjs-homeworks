function generateButtons(selected, listener, ...filters) {
  let elements = [];
  filters.forEach((el, i) => elements.push(
    <li className={selected === el ? 'menuLi selected' : 'menuLi'} onClick={listener} key={i}>{el}</li>
  ));
  return <ul id="menuUL">{elements}</ul>;
}

function Toolbar(data) {
  return <menu className="menu">{generateButtons(data.selected, data.onSelectFilter, ...data.filters)}</menu>;
}

export default Toolbar;