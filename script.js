let allButtons = document.querySelectorAll("button");
let input = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";
let result = "";

allButtons.forEach((element) => {
  element.addEventListener("click", () => {
    const buttonValue = element.value;

    switch (buttonValue) {
      case "CE":
        input.value = " 0";
        currentInput = "";
        previousInput = "";
        operator = null;
        result = null;
        break;

      case "C":
        input.value = "0";
        currentInput = "";
        previousInput = "";
        operator = null;
        result = null;
        break;

      case "=":
        if (operator) {
          currentInput = operate(operator, previousInput, currentInput);
          input.value = currentInput;
        }
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (currentInput && previousInput && operator) {
          currentInput = operate(operator, previousInput, currentInput);
          previousInput = currentInput;
          currentInput = "";
          operator = buttonValue;
        } else if (currentInput && !previousInput && operator) {
          previousInput = currentInput;
          currentInput = "";
          operator = buttonValue;
        } else if (!currentInput && previousInput && operator) {
          currentInput = previousInput;
          previousInput = "";
          operator = buttonValue;
        } else {
          previousInput = currentInput;
          currentInput = "";
          operator = buttonValue;
        }
        break;

      case ".":
        if (!currentInput.includes(".")) {
          currentInput += ".";
          input.value = currentInput;
        }
        break;

      default:
        currentInput += buttonValue;
        input.value = currentInput;
        break;
    }
  });
});

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(parseFloat(a), parseFloat(b));
    case "-":
      return sub(parseFloat(a), parseFloat(b));
    case "*":
      return mul(parseFloat(a), parseFloat(b));
    case "/":
      return div(parseFloat(a), parseFloat(b));
  }
}
