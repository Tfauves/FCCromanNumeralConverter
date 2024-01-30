const convertBtn = document.getElementById("convert-btn");
const outputDisplay = document.getElementById("output");
const numberInput = document.getElementById("number");

const validateInput = () => {
  let inputValue = numberInput.value;
  let result = "valid input";

  if (inputValue === "") {
    outputDisplay.innerText = "Please enter a valid number";
  } else if (inputValue < 1) {
    outputDisplay.innerText =
      "Please enter a number greater than or equal to 1";
  } else if (inputValue >= 4000) {
    outputDisplay.innerText =
      "Please enter a number less than or equal to 3999.";
  } else {
    outputDisplay.innerText = result;
  }
};

convertBtn.addEventListener("click", validateInput);
