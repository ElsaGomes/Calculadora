'use strict';

const numberButtons = document.querySelectorAll("#btn-number")
const symbolButtons = document.querySelectorAll("#btn-symbol");
const equalButton = document.getElementById("btn-equal");
const resetButton = document.getElementById("btn-reset");

let display = document.querySelector(".result");
// let result = Number(display);
// display = result;

// console.log(result, typeof result);
console.log(numberButtons[0].textContent)

function init() {
    display.value = 0;
}

for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
       // display = numberButtons[i].textContent;
    })
}

init();