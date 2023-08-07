const btnEl = document.getElementById("btn");
const inputEl = document.querySelector(".input");
const errorEl = document.getElementById("error");
const guessLowHighEl = document.getElementById("guess-low-high");
const totalNumberGuesses = document.querySelector(".result span");

let randomNumber = Math.floor(Math.random() * 100 - 1);
let guesses = 0;

checkNumber = (user_number) => {
  if (user_number < 0 || user_number > 100) {
    errorEl.textContent = `Please enter a number between 1-100!!!`;
    guessLowHighEl.textContent = "";
  } else if (user_number == randomNumber) {
    errorEl.textContent = "";
    guessLowHighEl.textContent = `Congratulations, Your Guess is Right!!!`;
  } else if (user_number > randomNumber) {
    guessLowHighEl.textContent = `Your Guess is High!!!`;
    errorEl.textContent = "";
    totalNumberGuesses.textContent = ++guesses;
  } else {
    errorEl.textContent = "";
    guessLowHighEl.textContent = `Your Guess is Low!!!`;
    totalNumberGuesses.textContent = ++guesses;
  }
};

btnEl.addEventListener("click", () => {
  checkNumber(inputEl.value);
});
console.log(randomNumber);
