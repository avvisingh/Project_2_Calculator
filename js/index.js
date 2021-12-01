let runningNumber = "";
let numberButton = document.getElementsByClassName(
    "calculator-body__buttons-number"
);

console.log(numberButton);

let numberStringConcat = (n) => {
    runningNumber += n;
    console.log(runningNumber);
    return runningNumber;
};
