function calculate() {
  let a = +window.a.value, b = +window.b.value, c = +window.c.value, result = showSolutionsMessage(a, b, c), div = window.result;
  window.expression.textContent = `${a}x² + (${b})x + (${c}) = 0`;
  window.discriminant.textContent = `Дискриминант: ${result.d}`
  div.children.text.textContent = result.text;
  div.children.x1.textContent = result.x1;
  div.children.x2.textContent = result.x2;
}

function calculateAverageRating() {
  let data, estimation, value = {}, avarage;
  data = { 'algebra'     :  window.algebra.value.split(""),
           'geometry'    :  window.geometry.value.split(""),
           'russian'     :  window.russian.value.split(""),
           'physics'     :  window.physics.value.split(""),
           'music'       :  window.music.value.split(""),
           'english'     :  window.english.value.split(""),
           'chemistry'   :  window.chemistry.value.split(""),
           'german'      :  window.german.value.split(""),
           'literature'  :  window.literature.value.split(""),
           'informatics' :  window.informatics.value.split(""),
  }

  for (let prop in data) {
      for (let i = 0; i < data[prop].length; i++) {
        data[prop][i] = parseInt(data[prop][i]);
        value[prop] = data[prop];
      }
  }

  estimation = getAverageScore(value);
  avarage = getAverageMark(estimation);

  window.result_algebra.textContent = 'Алгебра: ' + estimation.algebra;
  window.result_geometry.textContent = 'Геометрия: ' + estimation.geometry;
  window.result_russian.textContent = 'Русский: ' + estimation.russian;
  window.result_physics.textContent = 'Физика: ' + estimation.physics;
  window.result_music.textContent = 'Музыка: ' + estimation.music;
  window.result_english.textContent = 'Английский: ' + estimation.english;
  window.result_chemistry.textContent = 'Химия: ' + estimation.chemistry;
  window.result_german.textContent = 'Немецкий: ' + estimation.german;
  window.result_literature.textContent = 'Литература: ' + estimation.literature;
  window.result_informatics.textContent = 'Информатика: ' + estimation.informatics;
  window.result_all.textContent = 'Общая оценка: ' + estimation.all.res;
}
