console.log("Hello Calculator App");

const calculatorBtns = document.querySelectorAll(".calculator-button");
const calculatorDisplay = document.querySelector(".calculator-display");
const functionButton = ["%", "X", "-", "=", "+", "Reset", "del"];
const operations = ["%", "X", "-", "+"];

let displayValue = "";
let stashValue = "";
let currentOperation = "";

calculatorBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    clickValue = btn.textContent;

    // reset calculator
    if (btn.textContent == "Reset") {
      clickValue = "";
      displayValue = "";
      calculatorDisplay.textContent = 0;
      console.log("disV", displayValue);
      console.log("clickV", clickValue);
    }
    // if hit del just delete 1 char
    if (btn.textContent === "del") {
      displayValue = displayValue.substring(0, displayValue.length - 1);
      calculatorDisplay.textContent = displayValue;
    }

    if (operations.includes(btn.textContent)) {
      stashValue = calculatorDisplay.textContent;
      displayValue = "";
      calculatorDisplay.textContent = 0;
      currentOperation = btn.textContent;
      console.log("stash value", stashValue);
    }

    if (btn.textContent === "=") {
      displayValue = calculatorDisplay.textContent;
      switch (currentOperation) {
        case "+":
          calculatorDisplay.textContent = +stashValue + +displayValue;
          displayValue = +stashValue + +displayValue;
          break;
        case "-":
          calculatorDisplay.textContent = +stashValue - +displayValue;
          displayValue = +stashValue - +displayValue;
          break;
        case "X":
          calculatorDisplay.textContent = +stashValue * +displayValue;
          displayValue = +stashValue * +displayValue;
          break;
        case "%":
          if (+displayValue == 0) {
            calculatorDisplay.textContent = 0;
            displayValue = 0;
            return;
          }
          calculatorDisplay.textContent = +stashValue / +displayValue;
          displayValue = +stashValue / +displayValue;
          break;
      }
    }

    // append text
    if (!functionButton.includes(btn.textContent)) {
      // if 0 first char dont continue
      if (displayValue == "" && btn.textContent == 0) {
        calculatorDisplay.textContent = 0;
        return;
      }
      // if display value include . cant add more .
      if (btn.textContent === ".") {
        if (calculatorDisplay.textContent.includes(".")) {
          return;
        }
      }

      displayValue += btn.textContent;
      calculatorDisplay.textContent = displayValue;
    }
  })
);
