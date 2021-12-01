let runningNumber = "";
let numberButton = document.getElementsByClassName(
    "calculator-body__buttons-number"
);
let displayText = document.getElementById("calculator-body__display-text");

console.log(numberButton);

let numberStringConcat = (n) => {
    runningNumber += n;
    displayText.innerHTML = runningNumber;
    console.log(runningNumber);
    return runningNumber;
};
