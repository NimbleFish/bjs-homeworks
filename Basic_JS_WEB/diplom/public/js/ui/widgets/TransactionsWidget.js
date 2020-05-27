class TransactionsWidget { // Отвечает за открытие всплывающих окон для создания нового дохода или расхода
  constructor( element ) {
    if (element) {
      this.element = element
      this.registerEvents();
    } else {
      console.error("Передан пустой или несуществующий элемент!");
    }
  }

  registerEvents() {
    document.getElementsByClassName('create-income-button')[0].addEventListener('click', () => {
      new Modal(App.getModal('newIncome').element).open();
    });
    document.getElementsByClassName('create-expense-button')[0].addEventListener('click', () => {
      new Modal(App.getModal('newExpense').element).open();
    });
  }
}
