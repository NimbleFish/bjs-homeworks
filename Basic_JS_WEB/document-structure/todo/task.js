document.querySelector('.tasks__control').addEventListener('submit', (e) => {
	e.preventDefault();
});

document.getElementById('tasks__add').addEventListener('click', () => {
  if(document.getElementById('task__input').value !== '') {
    document.getElementsByClassName('tasks__list')[0].insertAdjacentHTML('BeforeEnd', `
      <div class="task">
        <div class="task__title">
          ${document.getElementById('task__input').value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `);
		for (let i = 0; i < document.querySelectorAll('.task__remove').length; i++) {
			document.querySelectorAll('.task__remove')[i].addEventListener('click', (e) => {e.path[1].remove()});
		}
		document.getElementById('task__input').value = '';
  }
});
