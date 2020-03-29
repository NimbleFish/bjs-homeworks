const progress = document.getElementById('progress');
let xhr = new XMLHttpRequest();
// progress.value = 0.0;

document.getElementById('send').addEventListener('click', (e) => {
  e.preventDefault();

  xhr.upload.onprogress = function(event) {
    console.log(event);
    progress.value = event.loaded;
  }

  xhr.open('GET', document.getElementById('form').action);
  xhr.send(document.getElementsByName('file'));
});
