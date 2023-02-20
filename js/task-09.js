const targetBtn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');
const body = document.querySelector('body')


targetBtn.addEventListener('click', () => {
  console.log(getRandomHexColor());
  getRandomHexColor();
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
);

  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




