class AccountsWidget { // Управляет блоком отображения счетов в боковой колонке
  constructor( element ) {
    if (element) {
      this.element = element;
      this.registerEvents();
      this.update();
    } else {
      console.error('Передан пустой или несуществующий элемент!');
    }
  }

  registerEvents() {
    document.getElementsByClassName('create-account')[0].addEventListener('click', (e) => {
      new Modal(App.getModal('createAccount').element).open();
    });
    let el = document.getElementsByClassName('sidebar-menu accounts-panel')[0].querySelectorAll('.account');
    for (let i = 0; i < el.length; i++) {
      console.log(el[i]);
      el[i].addEventListener('click', () => {
        this.onSelectAccount(el[i]);
      });
    }
  }

  update() {
    if(User.current()) {
      Account.list({ 'id' : User.current().id, 'mail' : User.current().email, 'name' : User.current().name }, (err, res) => {
        res = JSON.parse(res);
        if (res.success == true) { this.clear(); this.renderItem(res.data); } else { console.error(err); }
      });
    }
  }

  clear() {
    let el = document.getElementsByClassName('sidebar-menu accounts-panel')[0].querySelectorAll('.account');
    for (let i = 0; i < el.length; i++) { el[i].remove(); }
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount( element ) {
    let el = document.getElementsByClassName('sidebar-menu accounts-panel')[0].querySelectorAll('.account');
    for (let i = 0; i < el.length; i++) {
      element.classList.remove('active');
    }
    element.classList.add('active');
    App.showPage('transactions', { 'account_id' : element.dataset.id });
  }

  getAccountHTML( item ) {
    return `<li class="account" data-id="${item.id}">
        <a href="#">
            <span>${item.name}</span> /
            <span>${item.sum} ₽</span>
        </a>
     </li>`;
  }

  renderItem( item ) {
    for (let i = 0; i < item.length; i++) {
      this.element.insertAdjacentHTML('beforeend', this.getAccountHTML( item[i] ));
    }
  }
}
