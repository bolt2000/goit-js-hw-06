const symbolEnter = document.querySelector('#validation-input');
const maxLength = symbolEnter.getAttribute('data-length');





symbolEnter.addEventListener('blur', onInputSymbol);

function onInputSymbol () {
    if (symbolEnter.value.length == maxLength) {
        symbolEnter.classList.add('valid');
        symbolEnter.classList.remove('invalid');
    } else if (symbolEnter.value.length !== maxLength) {
        symbolEnter.classList.add('invalid');
         symbolEnter.classList.remove('valid');
    };
   
       
};


console.log(maxLength);


