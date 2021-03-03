import jsonData from './Tovars.json';

function writeDoc(data, category) {
  let father = document.getElementById('mainUl');
  father.innerHTML = '';
  data.forEach(tovar => {
    let img = document.createElement('img'), li = document.createElement('li');
    img.src = tovar.img || tovar;
    li.appendChild(img);
    li.classList.add('tovar');
    li.dataset.category = tovar.category || category;
    father.insertAdjacentElement('beforeend', li);
  });
}

function ProjectList(projects, category) {
  projects ? writeDoc(projects, category) : writeDoc(jsonData.tovars);
}

export default ProjectList;