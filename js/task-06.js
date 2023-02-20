const symbolEnter = document.querySelector('#validation-input');
const maxLength = symbolEnter.getAttribute('data-length');





symbolEnter.addEventListener('blur', onInputSymbol);

function onInputSymbol() {
    if (symbolEnter.value.length == maxLength) {
       symbolEnter.classList.add('valid');
    }

    else {
        symbolEnter.classList.replace('valid', 'invalid');
   }
       
};


console.log(maxLength);


