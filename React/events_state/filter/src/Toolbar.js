function generateButtons(selected, listener, ...filters) {
  let elements = [];
  filters.forEach((el, i) => elements.push(
    <li className={selected === el ? 'menuLi selected' : 'menuLi'} onClick={listener} key={i}>{el}</li>
  ));
  return elements;
}

function Toolbar(data) {
  return <ul id="menuUL">{generateButtons(data.selected, data.onSelectFilter, ...data.filters)}</ul>;
}

export default Toolbar;