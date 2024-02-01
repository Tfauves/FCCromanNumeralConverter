const convertBtn = document.getElementById("convert-btn");
const outputDisplay = document.getElementById("output");
const numberInput = document.getElementById("number");
const romanNumerals = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const validateInput = () => {
  let flag = true;
  let inputValue = numberInput.value;

  if (inputValue === "") {
    outputDisplay.innerText = "Please enter a valid number";
    flag = false;
  } else if (inputValue < 1) {
    outputDisplay.innerText =
      "Please enter a number greater than or equal to 1";
    flag = false;
  } else if (inputValue >= 4000) {
    outputDisplay.innerText =
      "Please enter a number less than or equal to 3999.";
    flag = false;
  }

  if (flag) {
    convertToRoman(inputValue);
  }
};

const convertToRoman = (input) => {
  let result = "";
  let inputValue = input;

  for (let i = 0; i < decimalNumbers.length; i++) {
    while (decimalNumbers[i] <= inputValue) {
      result += romanNumerals[i];
      inputValue -= decimalNumbers[i];
    }
  }

  outputDisplay.innerText = result;
};

convertBtn.addEventListener("click", validateInput);
