let id, scroll = document.getElementsByClassName('chat-widget__messages-container')[0];

document.getElementsByClassName('chat-widget__side-text')[0].addEventListener('click', () => {
  document.getElementsByClassName('chat-widget')[0].classList.add('chat-widget_active');
  document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message">
    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
    <div class="message__text">${botAnswer()}</div>
    </div>
  `;
});

document.addEventListener('keypress', (e) => {
	if(e.key == 'Enter') {
    if(document.querySelector('#chat-widget__input').value !== '') {
      document.getElementById('chat-widget__messages').innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${botAnswer()}</div>
        </div>
        <div class="message message_client">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${document.querySelector('#chat-widget__input').value}</div>
        </div>
      `;
      scroll.scrollTop += scroll.scrollHeight;
      document.querySelector('#chat-widget__input').value = '';
    }
  }
});

document.getElementById('chat-widget__input').addEventListener('focus', () => {
   id = setInterval(() => {
    document.getElementById('chat-widget__messages').innerHTML += `
      <div class="message">
      <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
      <div class="message__text">Ты жив? Мне скучно...</div>
      </div>
    `;
  }, 30000);
});

document.getElementById('chat-widget__input').addEventListener('blur', () => {
  clearInterval(id);
});

function botAnswer() {
  let answer = [
    'Что вы хотите?',
    'Товар закончился',
    '. . .',
    'Я устал',
    'Досвидание!',
    'Я создан чтобы помочь вам! Досвидание!',
    'Горячия линия остыла :(',
    'Как ваше настроение?',
    'Что вы здесь делаете?',
    'Думаю, я не хуже "Алисы" от яндекса'
  ], num, lastNum;

  if(lastNum == num) {
    num = Math.round(Math.random()*9);
    lastNum = num;
  } else {
    num = Math.round(Math.random()*9);
  }

  lastNum = num;
  return answer[num];
}
