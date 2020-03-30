for (var i = 0; i < document.getElementsByTagName('a').length; i++) {
  document.getElementsByTagName('a')[i].addEventListener('click', (e) => {
    e.preventDefault();
    for (let f = 0; f < document.getElementsByTagName('a').length; f++) {
      if (document.getElementsByTagName('a')[f] == e.toElement) {
        let sosed = document.getElementsByTagName('a')[f].nextElementSibling;
        if (sosed == null) {
          document.getElementsByTagName('a')[f].insertAdjacentHTML('afterEnd', `
          <div class="tooltip" style="left: ${e.toElement.offsetLeft}px; top: ${e.toElement.offsetTop + 20}px; display: block;">
            ${e.toElement.getAttribute('title')}
          </div>
          `);
        }
        else if (sosed.getAttribute('class') == 'tooltip') {
          sosed.remove();
        }
        else {
          document.getElementsByTagName('a')[f].insertAdjacentHTML('afterEnd', `
          <div class="tooltip" style="left: ${e.toElement.offsetLeft}px; top: ${e.toElement.offsetTop + 20}px; display: block;">
            ${e.toElement.getAttribute('title')}
          </div>
          `);
        }
      }
    }
  });
}
