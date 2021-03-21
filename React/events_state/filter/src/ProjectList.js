import jsonData from './Tovars.json';

function writeDoc(data, category) {
  console.log(data);
  console.log(category);
  return (
    data.map((tovar, id) => {
      return (
        <li className="tovar" data-category={tovar.category || category} key={id}>
          <img src={tovar.img || tovar} alt="tovar_img" />
        </li>
      );
    })
  );
}

function ProjectList(projects, selected) {
  return Array.isArray(projects) ? writeDoc(projects, selected) : writeDoc(jsonData.tovars);
}

export default ProjectList;