document.querySelector('.tasks__control').addEventListener('submit', (e) => {
	e.preventDefault();
});

document.getElementById('tasks__add').addEventListener('click', () => {
  if(document.getElementById('task__input').value !== '') {
    document.getElementById('tasks__list').innerHTML += `
      <div class="task">
        <div class="task__title">
          ${document.getElementById('task__input').value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;
  }
});

// Удаление не работает, пробовал циклы, обработчик добавления и много if, ничего не получается
// document.querySelectorAll('.task__remove')[document.querySelectorAll('.tasks__list .task__remove').length-1].addEventListener('click', (e) => {
//   document.querySelectorAll('.tasks__list')[0].lastElementChild.remove();
// });
