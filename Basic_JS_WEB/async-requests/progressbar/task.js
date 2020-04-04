const progress = document.getElementById('progress');
let xhr = new XMLHttpRequest();
// progress.value = 0.0;

document.getElementById('send').addEventListener('click', (e) => {
  e.preventDefault();
  xhr.open('POST', document.getElementById('form').action, true);
  xhr.send(document.getElementsByName('file'));
  xhr.onprogress = function(event) {
    progress.value = event.loaded / 1000000;
  }
});
