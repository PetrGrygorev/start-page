document.querySelector('form', (event) => {
    event.preventDefault();
})


let inputIn = document.querySelector('input');
const button = document.querySelector('button');
let paragraph = document.querySelector('#duplicateField');


button.addEventListener('click', () => {
    console.log(paragraph.textContent = inputIn.value);
    inputIn.value = '';
})
