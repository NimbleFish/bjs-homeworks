import PropTypes from 'prop-types';

function Toolbar({ selected, onSelectFilter, filters }) {
  return <ul id="menuUL">{
    filters.map((el, i) =>
      <li className={selected === el ? 'menuLi selected' : 'menuLi'} onClick={onSelectFilter} key={i}>{el}</li>
    )
    }</ul>;
}

Toolbar.propTypes = {
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
  filters: PropTypes.array
}

export default Toolbar;