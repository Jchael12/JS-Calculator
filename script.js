const result = document.getElementById("result");
const typed = document.getElementById("typed-value");
const buttons = document.querySelectorAll(".btn");
const del = document.getElementById("delete-btn");
const clear = document.getElementById("clear");

function appendToDisplay(input) {
  typed.value += input;
}

function clearDisplay() {
  typed.value = "";
  result.textContent = "0";
}

function calculate() {
  try {
    const evaluated = eval(typed.value);
    result.textContent = evaluated;
  } catch (error) {
    typed.value = "Error";
  }
}

function deleteDisplay() {
  typed.value = typed.value.slice(0, -1);
}
