let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operation");

    let equalsButton = document.querySelector(".equal");
    let allClear = document.querySelector(".allClear");
    let numDelete = document.querySelector(".numDelete");
    let decimal = document.querySelector(".decimal");

    let previousNumber = document.querySelector(".previousNumber");
    let currentNumber = document.querySelector(".currentNumber");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentNumber.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousNumber.textContent = previousValue + " " + operator;
        currentNumber.textContent = currentValue;
    }))

    allClear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '',
        previousNumber.textContent = currentValue;
        currentNumber.textContent = currentValue;
    })

    equalsButton.addEventListener("click", function(){
        if(currentValue != '' && previousValue != '') {
            calculate()
            previousNumber.textContent = '';
            currentNumber.textContent = previousValue;
        }
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <=20){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-") {
        previousValue -= currentValue;
    } else if(operator === "*"){
        previousValue *= currentValue;
    } else if(operator === "/"){
        previousValue /= currentValue;
    }
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}