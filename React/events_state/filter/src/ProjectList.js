import jsonData from './Tovars.json';

function ProjectList(selected) {
  if (selected) {
    let data = jsonData.tovars.map((tovar, id) => {
      if (tovar.category === selected) {
        return (
          <li className="tovar filtered" data-category={tovar.category} key={id}>
            <img src={tovar.img} alt="tovar_img" />
          </li>
        );
      } else {
        return 'none';
      }
    });
    return data.sort().splice(0, data.indexOf('none'));
  } else {
    return jsonData.tovars.map((tovar, id) => {
      return <li className="tovar" data-category={tovar.category} key={id}><img src={tovar.img} alt="tovar_img" /></li>;
    });
  }
}

export default ProjectList;