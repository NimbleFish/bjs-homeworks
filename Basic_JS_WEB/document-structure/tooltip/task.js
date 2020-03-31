for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
  document.getElementsByTagName('a')[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementsByTagName('a')[i] == e.toElement) {
      let neighbour = document.getElementsByTagName('a')[i].nextElementSibling;
      if (neighbour == null) {
        document.getElementsByTagName('a')[i].insertAdjacentHTML('afterEnd', `
        <div class="tooltip" style="left: ${e.toElement.offsetLeft}px; top: ${e.toElement.offsetTop + 20}px; display: block;">
          ${e.toElement.getAttribute('title')}
        </div>
        `);
      }
      else if (neighbour.getAttribute('class') == 'tooltip') {
        neighbour.remove();
      }
      else {
        document.getElementsByTagName('a')[i].insertAdjacentHTML('afterEnd', `
        <div class="tooltip" style="left: ${e.toElement.offsetLeft}px; top: ${e.toElement.offsetTop + 20}px; display: block;">
          ${e.toElement.getAttribute('title')}
        </div>
        `);
      }
    }
  });
}
