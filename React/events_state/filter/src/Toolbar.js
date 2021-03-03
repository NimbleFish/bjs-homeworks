function generateButtons(selected, listener, ...filters) {
  let elements = [];
  filters.forEach((el, i) => elements.push(
    <li className={selected === el ? 'menuLi selected' : 'menuLi'} onClick={listener} id={"menu_"+i} key={i}>{el}</li>
  ));
  return (
    <ul id="menuUL">{elements}</ul>
  );
}

function Toolbar(data) {
  return (
    <div className="container">
      <menu className="menu">{generateButtons(data.selected, data.onSelectFilter, ...data.filters)}</menu>
      <main>
        <ul id="mainUl"></ul>
      </main>
    </div>
  );
}

export default Toolbar;