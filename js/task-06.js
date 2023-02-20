const symbolEnter = document.querySelector('#validation-input');
const maxLength = symbolEnter.getAttribute('data-length');





symbolEnter.addEventListener('blur', onInputSymbol);

function onInputSymbol() {
    return symbolEnter.value.length == maxLength? 
       symbolEnter.classList.add('valid') : symbolEnter.classList.add('invalid');
   
       
};


console.log(maxLength);


