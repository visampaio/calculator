function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//Calls the correct function according to the operator selected
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;

    case "-":
      return subtract(num1, num2);
      break;

    case "*":
      return multiply(num1, num2);
      break;

    case "/":
      return divide(num1, num2);
      break;

  }
}

const numbers = document.querySelectorAll("#number button");
const operators = document.querySelectorAll("#operator button:not(#equal):not(#clear)");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let number1;
let opSymbol;

function updateDisplay(number) {
  return display.textContent += number;
}

function resetDisplay() {
  return display.textContent = "";
}

//Stores previous number and operator, reset the display
function storeFirstPart(num1, operator) {
  number1 = Number(num1);
  opSymbol = operator;
  resetDisplay();
}

function doTheMath(num1, num2, operator){
  resetDisplay();
  let result = operate(number1, num2, operator);
  if (num1 || num2 || operator) {updateDisplay(result);}
  else {updateDisplay("ERROR");}
}

numbers.forEach((number) => {
  number.addEventListener("click", () => updateDisplay(number.textContent));
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => storeFirstPart(display.textContent, operator.textContent));
});

equal.addEventListener("click", () => doTheMath(number1, Number(display.textContent), opSymbol));

clear.addEventListener("click", function(){
  resetDisplay();
  number1 = "";
  operator = "";
});
