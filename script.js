let displayValue = '0'
let operator1 = null
let operator2 = null
let operand = null
const buttons = document.querySelectorAll('button');


function add(a,b){return(a+b)}
function subtract(a,b){return(a-b)}
function multiply(a,b){return(a*b)}
function divide(a,b){return(a/b)}
function operate(a,operator,b) {
    if (operator == '+') {
        return add(a,b)
    }
    else if (operator == '-') {
        return subtract(a,b)
    }
    else if (operator == '*') {
        return multiply(a,b)
    }
    else if (operator == '/') {
        return divide(a,b)
    }
}
 
function inputNumber(a) {
    
    //append number to number string
    // if operator full, go to number string 2
    //update display w. new number
}

function inputOperator(op) {
    
    // save operator for equals or second operator
    // if operator is already filled
    // if number string 2 is empty, replace operator
    // if number string 2 is full, compute 1 & 2 and save in 1
    // display new number

}

function inputEquals() {
    // if operator is empty, return display
    // if operator is divide & 2nd num is 0, error
    // call operate
    // display new number, save in number 1
    //clear operand
}

function inputClear() {
    // clear num1, num2, operand, display
}



function updateDisplay() {
    const displayBox = document.querySelector('.display-box');
    displayBox.innerText = displayValue;
}

function buttonClickRouter() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('number')) {
                inputNumber(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
                inputClear();
                updateDisplay();
        }
    )}
}

updateDisplay();
buttonClickRouter();