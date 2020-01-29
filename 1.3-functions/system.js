function calculate() {
  let a = +window.a.value, b = +window.b.value, c = +window.c.value, result = showSolutionsMessage(a, b, c), div = window.result;
  window.expression.textContent = `${a}x² + (${b})x + (${c}) = 0`;
  window.discriminant.textContent = `Дискриминант: ${result.d}`
  div.children.text.textContent = result.text;
  div.children.x1.textContent = result.x1;
  div.children.x2.textContent = result.x2;
}

function calculateAverageRating(){
  let data, datan, estimation;
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

let value = [];

  for (let prop in data) {
    let i;
    for (i = 0; i < prop.length; i++) {
       value[i] = parseInt(data[prop][i]);
       if (isNaN(value[i])) {
         value[i] = 0;
       }
    };
    data[prop] = { [prop] : value[i] };
  }

  estimation = getAverageScore(data);

  window.result_algebra.textContent = estimation.algebra;
  window.result_geometry.textContent = estimation.geometry;
  window.result_russian.textContent = estimation.russian;
  window.result_physics.textContent = estimation.physics;
  window.result_music.textContent = estimation.music;
  window.result_english.textContent = estimation.english;
  window.result_chemistry.textContent = estimation.chemistry;
  window.result_german.textContent = estimation.german;
  window.result_literature.textContent = estimation.literature;
  window.result_informatics.textContent = estimation.informatics;
  window.result_all.textContent = estimation.all;
}
