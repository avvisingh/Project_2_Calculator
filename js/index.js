let runningNumber = "";
let runningTotal = 0;
let lastOperatorClicked = "";
let numberButton = document.getElementsByClassName(
    "calculator-body__buttons-number"
);
let displayText = document.getElementById("calculator-body__display-text");
let equalsButton = document.getElementById("equalsButton");
let plusButton = document.getElementById("plusButton");

let numberStringConcat = (n) => {
    runningNumber += n;
    displayText.innerHTML = runningNumber;
    return runningNumber;
};

let clearDisplayAndTotal = () => {
    runningNumber = "";
    runningTotal = 0;
    lastOperatorClicked = "";
    displayText.innerHTML = runningNumber;
};

let addToTotal = () => {
    runningTotal += +runningNumber;
    runningNumber = "";
    lastOperatorClicked = "+";
    displayText.innerHTML = runningTotal;
};

let subtractFromTotal = () => {};

let divideTotal = () => {};

let multiplyTotal = () => {};

let displayTotal = () => {
    if (lastOperatorClicked === "+") {
        runningTotal += +runningNumber;
    }
    displayText.innerHTML = runningTotal;
};

plusButton.addEventListener("click", addToTotal);
equalsButton.addEventListener("click", displayTotal);
