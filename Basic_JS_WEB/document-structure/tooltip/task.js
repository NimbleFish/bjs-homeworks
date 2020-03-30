for (var i = 0; i < document.getElementsByTagName('a').length; i++) {
  document.getElementsByTagName('a')[i].addEventListener('click', (e) => {
    e.preventDefault();
    for (let f = 0; f < document.getElementsByTagName('a').length; f++) {
      if (document.getElementsByTagName('a')[f] == e.toElement) {
        document.getElementsByTagName('a')[f].insertAdjacentHTML('afterEnd', `
        <div class="tooltip" style="left: ${e.toElement.offsetLeft}px; top: ${e.toElement.offsetTop + 20}px; display: block;">
          ${e.toElement.getAttribute('title')}
        </div>
        `);
      }
    }
  });
}
