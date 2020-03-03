const hole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 9; i++) {
  hole(i).onclick=()=>{
    if(hole(i).className == 'hole hole_has-mole') {
      dead.textContent = parseInt(dead.textContent) + 1;
    }
    else {
      lost.textContent = parseInt(lost.textContent) + 1;
    }

    if (dead.textContent == '10') {
      dead.textContent = 0;
      alert('Вы выйграли!');
    }
    if(lost.textContent == '5') {
      lost.textContent = 0;
      alert('Вы проиграли!');
    }
  }
}
