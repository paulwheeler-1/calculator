let displayValue = '0'
let operand1 = null
let operand2 = null
let operator = null
const buttons = document.querySelectorAll('button');


function add(a,b){return(Number(a)+Number(b))}
function subtract(a,b){return(a-b)}
function multiply(a,b){return(a*b)}
function divide(a,b){return(a/b)}
function operate(a,op,b) {
    if (op == '+') {
        return add(a,b)
    }
    else if (op == '-') {
        return subtract(a,b)
    }
    else if (op == '*') {
        return multiply(a,b)
    }
    else if (op == '/') {
        return divide(a,b)
    }
}
 
function inputNumber(inputNumber) {
    if (displayValue == '0' || displayValue == operand1) {
        displayValue = inputNumber
        //reset on no input or starting operand2
    }
    else {
        displayValue += inputNumber
    }

}

function inputOperator(inputOperator) {
    if (operator == null) {
        operator = inputOperator
        operand1 = displayValue
    } else if (operator != null && displayValue != operand1) {
        //if there has already been an input equation
        //operate and wait for new operator
        operand2 = displayValue
        operand1 = operate(operand1, operator, operand2)
        displayValue = operand1
        operator = inputOperator
        operand2 = null
    } else if (operator != null && displayValue == operand1) {
        operator = inputOperator
        //replace operator with new operator
    }
}

function inputEquals() {
    // if operator is empty, return display
    if(operator == null || displayValue == operand1){
        //do nothing
    } else if(operator == '/' && displayValue =='0') {
        console.error('no dividing by zero silly');
        // if operator is divide & 2nd num is 0, error
    } else if(operand1 != null && operator != null && displayValue != operand1) {
        operand2 = displayValue
        operand1 = operate(operand1, operator, operand2)
        displayValue = operand1
        operator = null
        operand2 = null
    }
}


function inputClear() {
    displayValue = '0'
    operand1 = null
    operand2 = null
    operator = null
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
                updateDisplay();
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