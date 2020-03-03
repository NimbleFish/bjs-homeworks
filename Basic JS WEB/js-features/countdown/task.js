const time = document.getElementById('timer');

function timer() {
  time.textContent -= 1;

  if (time.textContent == 0) {
    clearInterval(timerID);
    window.alert('Вы победили в конкурсе!');
  }
}

const timerID = setInterval(timer, 1000);
