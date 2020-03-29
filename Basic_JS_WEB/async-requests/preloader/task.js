let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState === xhr.DONE) {
    let parse = JSON.parse(xhr.responseText);
    document.getElementById('poll__title').innerText = parse.data.title;
    for (var i = 0; i < parse.data.answers.length; i++) {
      document.getElementById('poll__answers').innerHTML += `
        <button class="poll__answer">
          ${parse.data.answers[i]}
        </button>
      `;
      for (let f = 0; f < document.getElementsByClassName('poll__answer').length; f++) {
        document.getElementsByClassName('poll__answer')[f].addEventListener('click', (e)=>{
          alert('Спасибо, ваш голос засчитан!');
          document.getElementById('poll__title').innerText = '';
          document.getElementById('poll__answers').innerHTML = '';
        });
      }
    }
  }
}
