const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector('div#boxes');








function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

destroy.addEventListener('click', delBoxes);

function delBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
