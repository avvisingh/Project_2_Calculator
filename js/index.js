let runningNumber = "";
let runningTotal = 0;
let lastOperatorClicked = "";
let displayText = document.getElementById("calculator-body__display-text");
let equalsButton = document.getElementById("equalsButton");
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let sevenButton = document.getElementById("sevenButton");
let eightButton = document.getElementById("eightButton");
let nineButton = document.getElementById("nineButton");
let fourButton = document.getElementById("fourButton");
let fiveButton = document.getElementById("fiveButton");
let sixButton = document.getElementById("sixButton");
let oneButton = document.getElementById("oneButton");
let twoButton = document.getElementById("twoButton");
let threeButton = document.getElementById("threeButton");
let zeroButton = document.getElementById("zeroButton");
let periodButton = document.getElementById("periodButton");
let clearButton = document.getElementById("clearButton");

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
sevenButton.addEventListener("click", () => numberStringConcat(7));
eightButton.addEventListener("click", () => numberStringConcat(8));
nineButton.addEventListener("click", () => numberStringConcat(9));
fourButton.addEventListener("click", () => numberStringConcat(4));
fiveButton.addEventListener("click", () => numberStringConcat(5));
sixButton.addEventListener("click", () => numberStringConcat(6));
oneButton.addEventListener("click", () => numberStringConcat(1));
twoButton.addEventListener("click", () => numberStringConcat(2));
threeButton.addEventListener("click", () => numberStringConcat(3));
zeroButton.addEventListener("click", () => numberStringConcat(0));
periodButton.addEventListener("click", () => numberStringConcat("."));
clearButton.addEventListener("click", clearDisplayAndTotal);
