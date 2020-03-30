if (localStorage.text !== undefined) {
  document.getElementById('editor').value = localStorage.text;
}
document.getElementById('editor').onchange = () => {
  localStorage.text = document.getElementById('editor').value;
}
document.getElementById('clearEditor').addEventListener('click', ()=>{
  localStorage.clear();
  document.getElementById('editor').value = '';
});
