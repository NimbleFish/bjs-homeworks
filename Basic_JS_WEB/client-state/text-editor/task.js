if (localStorage.text !== undefined) {
  document.getElementById('editor').value = localStorage.text;
}
document.getElementById('editor').addEventListener('keydown', () => {
  localStorage.text = document.getElementById('editor').value;
});
document.getElementById('clearEditor').addEventListener('click', ()=>{
  localStorage.clear();
});
