let runningNumber = "";
let runningTotal = 0;
let lastOperatorClicked = "";
let numberButton = document.getElementsByClassName(
    "calculator-body__buttons-number"
);
let displayText = document.getElementById("calculator-body__display-text");
let equalsButton = document.getElementById("equalsButton");
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");

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
    !lastOperatorClicked
        ? (runningTotal = +runningNumber)
        : calculateRunningTotal();
    runningNumber = "";
    lastOperatorClicked = "+";
    displayText.innerHTML = runningTotal;
};

let subtractFromTotal = () => {
    !lastOperatorClicked
        ? (runningTotal = +runningNumber)
        : calculateRunningTotal();
    runningNumber = "";
    lastOperatorClicked = "-";
    displayText.innerHTML = runningTotal;
};

let divideTotal = () => {
    !lastOperatorClicked
        ? (runningTotal = +runningNumber)
        : calculateRunningTotal();
    runningNumber = "";
    lastOperatorClicked = "/";
    displayText.innerHTML = runningTotal;
};

let multiplyTotal = () => {
    !lastOperatorClicked
        ? (runningTotal = +runningNumber)
        : calculateRunningTotal();
    runningNumber = "";
    lastOperatorClicked = "*";
    displayText.innerHTML = runningTotal;
};

let calculateRunningTotal = () => {
    if (lastOperatorClicked === "+") {
        runningTotal += +runningNumber;
    } else if (lastOperatorClicked === "-") {
        runningTotal -= +runningNumber;
    } else if (lastOperatorClicked === "*") {
        runningTotal *= +runningNumber;
    } else if (lastOperatorClicked === "/") {
        runningTotal /= +runningNumber;
    }
    runningNumber = "";
    displayText.innerHTML = runningTotal;
};

let equalsButtonClicked = () => {
    calculateRunningTotal();
    lastOperatorClicked = "=";
};

plusButton.addEventListener("click", addToTotal);
minusButton.addEventListener("click", subtractFromTotal);
multiplyButton.addEventListener("click", multiplyTotal);
divideButton.addEventListener("click", divideTotal);
equalsButton.addEventListener("click", equalsButtonClicked);
