const nameEnter = document.querySelector('input#name-input');
const nameLabel = document.querySelector('span#name-output');


nameEnter.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    nameLabel.textContent = event.currentTarget.value  || 'Anonymous';
    
};






