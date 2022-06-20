let getFirstNumber = prompt("Enter your first number: ");
let getSecondNumber = prompt("Enter your second number: ");
let getOperation = prompt("What operation will you like to perform? \nEnter:\n+ for Addition\n- for Subtraction\n* for Multiplication\n/ for Division");

let firstNumber = parseFloat(getFirstNumber);
let secondNumber = parseFloat(getSecondNumber);

if (getOperation === "+") {
    answer = firstNumber + secondNumber;
    alert(`Your first  number is ${firstNumber}.\nYour second number is ${secondNumber}.\nYour operation is ${getOperation}. and...\nYour answer is ${answer}`);
} else if (getOperation === "-") {
    answer = firstNumber - secondNumber;
    alert(`Your first number is ${firstNumber}.\nYour second number is ${secondNumber}.\nYour operation is ${getOperation}. and...\nYour answer is ${answer}`);
} else if (getOperation === "*") {
    answer = firstNumber * secondNumber;
    alert(`Your first number is ${firstNumber}.\nYour second number is ${secondNumber}.\nYour operation is ${getOperation}. and...\nYour answer is ${answer}`);
} else if (getOperation === "/") {
    answer = firstNumber / secondNumber;
    alert(`Your first number is ${firstNumber}.\nYour second number is ${secondNumber}.\nYour operation is ${getOperation}. and...\nYour answer is ${answer}`);
} else {
    alert("You entered an invalid operation. Kindly refresh to restart")
}