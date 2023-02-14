const addListenerBtn = document.querySelector('[data-action=increment]');
const removeListenerBtn = document.querySelector('[data-action=decrement]');
const counter = document.querySelector('#value');
let counterValue = 0;



addListenerBtn.addEventListener('click', addClick);
    
function addClick() {
    counter.textContent = counterValue += 1;
};


removeListenerBtn.addEventListener('click', delClick);

function delClick() {
    counter.textContent = counterValue -= 1;
};




