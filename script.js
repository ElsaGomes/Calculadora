'use strict';

const numberButtons = document.querySelectorAll("#btn-number")
const symbolButtons = document.querySelectorAll("#btn-symbol");
const equalButton = document.getElementById("btn-equal");
const resetButton = document.getElementById("btn-reset");

let display = document.querySelector(".result");
let operatorSymbol, displayOperatorSymbol, result;

// função que inicializa a calculadora
function init() {
    display.value = 0;
}

init();

// evento que acontece ao clicar em qualquer botão de um número
for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function(e) {
        result = Number(numberButtons[i].textContent);   

        if(display.value === "0.") {
            display.value += result;
        }
        // if(Number(display.value) === 0) {
        //     display.value = result;
        // }
        else if(display.value === "Not a number" || Number(display.value) === 0) {
            display.value = result;
        }
        else{
            display.value += result;
        }
        console.log(display.value);
    });  
}

// evento que acontece ao clicar em qualquer botão de um símbolo, com a exceção do símbolo de =
for(let i = 0; i < symbolButtons.length; i++) {
    symbolButtons[i].addEventListener("click", function() {
        displayOperatorSymbol = symbolButtons[i].textContent;
        console.log(displayOperatorSymbol);

        if(displayOperatorSymbol === "x") {
            display.value += "*";
        }
        else if(displayOperatorSymbol === "÷") {
            display.value += "/";
        }
        else if(displayOperatorSymbol === ",") {
            display.value += ".";
            console.log(display.value, typeof display.value);
        }
        else {
            display.value += displayOperatorSymbol;
        }
    });
}

// função para ver o resultado
function viewResult() {
    if(display.value === "0/0") {
        display.value = "Not a number";
    }
    else {
        result = eval(display.value);
        console.log(result, typeof result);
        // em caso de divisão por 0
        if(result === Infinity || result === -Infinity) {
            display.value = "Not a number"; 
        }
        else{
            display.value = result;
        }
    }
}

// par ver o resultado se for escrito pelo teclado
document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if (e.key === "Enter") {
        viewResult();
    }
});

// evento que acontece ao clicar no botão de igual
equalButton.addEventListener("click", viewResult);

// evento que acontece ao clicar no botão C, reinicia a calculadora
resetButton.addEventListener("click", init);