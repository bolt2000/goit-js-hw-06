const targetBtn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');
const body = document.querySelector('body')


targetBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

