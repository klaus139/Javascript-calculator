//program to create a simple calculator using if else in javascript//
//accept the number form the user through a prompt box


const operator = prompt("Enter operation to perform calculation (either +,-,*,or/):");
const number1 = parseFloat(prompt ("Enter the first number"));
const number2 = parseFloat(prompt ("Enter the second number"));

let results; // declaration of variables.

//use if, elseif and else keyword to defien the calculatro condition in javascript.

if (operator == '+') {//use + (addition)operator to add two numbers 
results = number1 + number2;
}

else if (operator == '-') {
    results = number1 - number2;
}

else if (operator == '*') {
    results = number1 * number2;
}

else {
    results = number1 / number2;
}

//display the result of the calculator
window.alert("Results is" + results);