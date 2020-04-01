const progress = document.getElementById('progress');
let xhr = new XMLHttpRequest();
// progress.value = 0.0;

document.getElementById('send').addEventListener('click', (e) => {
  e.preventDefault();

  xhr.upload.onprogress = function(event) {
    console.log(event.loaded);
  }

  xhr.open('POST', document.getElementById('form').action, true);
  xhr.send(document.getElementsByName('file'));
});
