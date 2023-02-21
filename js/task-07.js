
// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В
//     результате при перетаскивании ползунка будет меняться размер текста.


// const  = document.querySelector('input#font-size-control');

const inputChange = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')

inputChange.addEventListener('input', e => {
    span.style.fontSize = `${e.target.value }px`
})