const generatedNumber = document.querySelector('.result');
const generate = document.querySelector('.rng');
const maximum = document.querySelector('.maximum');
let userInput = "";

generate.addEventListener('click', function() {
    let userInput = maximum.value;
    if (userInput > 100 || userInput === "") {
        alert('100以下の数値を入力してください。') 
    } else {generatedNumber.textContent = Math.floor(Math.random() * userInput) +1};
});