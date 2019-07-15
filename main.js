const btn = document.getElementById('btn');
const winner = document.querySelector('.winner');
const resetBtn = document.querySelector('.close');

//Change the text on the button when hovered
btn.addEventListener('mouseover', changePosition);
btn.addEventListener('click', win);
resetBtn.addEventListener('click', resetGame);

function changePosition(event) {
  btn.style.marginLeft = Math.random() * 800 + event.clientX/4 + 'px';
  btn.style.marginTop = Math.random() * 500 + event.clientY/4 + 'px';
}

function win() {
  winner.style.opacity = '1';
  btn.style.opacity = '0';
  btn.style.margin = '10px';
}

function resetGame() {
  winner.style.opacity = '0';
  btn.style.opacity = '1';
}


