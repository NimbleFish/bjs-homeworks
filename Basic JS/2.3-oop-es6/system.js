window.specifications.style = 'display: none';
window.select.onchange = function() {
  if (window.select.selectedOptions[0].value == '') {
    window.specifications.style = 'display: none';
    window.alerted.innerText = 'Пожалуйста, выберите оружие';
  }
  else {
    window.alerted.innerText = '';
    weapons(window.select.selectedOptions[0].value);
    window.specifications.style = 'display: flex; flex-direction: column; margin-bottom: 1%;';

    window.weaponed.innerText = name.name;
    window.attacked.innerText = name.attack;
    window.durabilited.innerText = name.durability;
    window.distanced.innerText = name.range;
  }
};
