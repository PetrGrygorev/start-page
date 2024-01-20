document.querySelector('#testTextField').addEventListener('click', function (event) {
    event.preventDefault();
})


document.querySelector('#testTextField').addEventListener('click', function (event) {

    let userTextField = document.querySelector('#testTextField');

    let userText = prompt('Измените текст ссылки по своему усмотрению');

    userTextField.textContent = userText;

})
