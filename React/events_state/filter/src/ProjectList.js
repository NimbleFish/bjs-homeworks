import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './Tovars.json';

function writeDoc(data, category) {
  ReactDOM.render(
    <React.StrictMode>
      {data.map((tovar, id) => {
        return (
        <li className="tovar" data-category={tovar.category || category} key={id}>
          <img src={tovar.img || tovar} alt="tovar_img" />
        </li>
        )
      })}
    </React.StrictMode>,
    document.getElementById('mainUl')
  );
}

function ProjectList(projects, category) {
  projects ? writeDoc(projects, category) : writeDoc(jsonData.tovars);
}

export default ProjectList;