const generatedNumber = document.querySelector('.result');
const generate = document.querySelector('.rng');
const maximum = document.querySelector('.maximum');
let userInput = "";

generate.addEventListener('click', function() {
    let userInput = maximum.value;
    if (userInput > 100 || userInput === "") {
        alert('100以下の数値を入力してください。') 
    } else {
        generatedNumber.textContent = '次の発表者は名簿順の' + (Math.floor(Math.random() * userInput) +1) + '番になります。'};
});