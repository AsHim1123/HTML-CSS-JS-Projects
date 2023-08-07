const inputSliderEl = document.getElementById("inputSlider");
const sliderValueEl = document.getElementById("sliderValue");
const passwordEl = document.getElementById("password");
const generateBtnEl = document.getElementById("generate-btn");
const copyBtnEl = document.getElementById("copy-btn");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const copyPasswordEl = document.getElementById("copy-password");

sliderValueEl.textContent = inputSliderEl.value;

inputSliderEl.addEventListener("input", () => {
  sliderValueEl.textContent = inputSliderEl.value;
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%";
generatePass = () => {
  let pass = "";
  let allChars = "";

  allChars += upperCaseEl.checked ? upperChars : "";
  allChars += lowerCaseEl.checked ? lowerChars : "";
  allChars += numbersEl.checked ? numbers : "";
  allChars += symbolsEl.checked ? symbols : "";

  for (let i = 1; i <= inputSliderEl.value; i++) {
    pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return pass;
};

generateBtnEl.addEventListener("click", () => {
  passwordEl.value = generatePass();
  copyBtnEl.style.display = "block";
});
copyCode = () => {
  passwordEl.select();
  // passwordEl.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(passwordEl.value);
  copyPasswordEl.textContent = `Password Copied to Clipboard!`;

  setTimeout(() => {
    copyPasswordEl.textContent = "";
  }, 3000);
};

copyBtnEl.addEventListener("click", copyCode);
