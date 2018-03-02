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
const operators = document.querySelectorAll("#operator button");
const display = document.querySelector("#display");

// Adds parameter to the display
function displayNumber(number) {
  return display.textContent += number;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => displayNumber(number.textContent));
});
