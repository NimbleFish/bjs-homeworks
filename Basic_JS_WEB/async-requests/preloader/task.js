let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    document.getElementsByClassName('loader_active')[0].classList.remove('loader_active');
    let parse = JSON.parse(xhr.responseText);
    for (var variable in parse.response.Valute) {
      document.getElementById('items').innerHTML += `
      <div class="item">
          <div class="item__code">
            ${parse.response.Valute[variable].CharCode}
          </div>
          <div class="item__value">
            ${parse.response.Valute[variable].Value}
          </div>
          <div class="item__currency">
              руб.
          </div>
      </div>
      `;
    }
  }
});
