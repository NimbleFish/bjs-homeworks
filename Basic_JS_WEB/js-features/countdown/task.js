const hour = document.getElementById('timerHours');
const min = document.getElementById('timerMinutes');
const sec = document.getElementById('timerSeconds');

const hour_zero = document.getElementById('timerHours_Zero');
const min_zero = document.getElementById('timerMinutes_Zero');
const sec_zero = document.getElementById('timerSeconds_Zero');

function timer() {
  if(min.textContent == '0' && hour.textContent > '0') {
    hour.textContent -= 1;
    min.textContent = '59';
    if(hour.textContent < 10) {
      hour_zero.style.display = 'inline';
    }
  }

  if(sec.textContent <= '0' && min.textContent > '0') {
    min.textContent -= 1;
    sec.textContent = '59';
    if((min.textContent == '0' && hour.textContent == '0') || min.textContent < 10) {
      min_zero.style.display = 'inline';
    } else {
      min_zero.style.display = 'none';
    }
  }
  sec.textContent -= 1;

  if(sec.textContent < 10) {
    sec_zero.style.display = 'inline';
  } else {
    sec_zero.style.display = 'none';
  }

  if (hour.textContent == '0' && min.textContent == '0' && sec.textContent <= '0') {
    clearInterval(timerID);
    window.alert('Вы победили в конкурсе!');
    window.location.replace('https://nimblefish.github.io/bjs-homeworks/Basic_JS_WEB/js-features/countdown/file.rar');
  }
}

const timerID = setInterval(timer, 1000);
