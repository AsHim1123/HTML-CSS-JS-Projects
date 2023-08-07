const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let user_score = 0;
let computer_score = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRules(button.id, computerPlay());
  });
});

computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};
playRules = (user_choice, computer_choice) => {
  if (user_choice == computer_choice) {
    resultEl.innerHTML = `Game TIE!<br>You choose ${user_choice}.<br>Computer also chooses ${computer_choice}.`;
  } else if (user_choice == "rock" && computer_choice == "paper") {
    resultEl.innerHTML = `Computer wins!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    computerScoreEl.innerHTML = ++computer_score;
  } else if (user_choice == "rock" && computer_choice == "scissors") {
    resultEl.innerHTML = `You win!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    userScoreEl.innerHTML = ++user_score;
  } else if (user_choice == "paper" && computer_choice == "rock") {
    resultEl.innerHTML = `You win!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    userScoreEl.innerHTML = ++user_score;
  } else if (user_choice == "paper" && computer_choice == "scissors") {
    resultEl.innerHTML = `Computer wins!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    computerScoreEl.innerHTML = ++computer_score;
  } else if (user_choice == "scissors" && computer_choice == "rock") {
    resultEl.innerHTML = `Computer wins!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    computerScoreEl.innerHTML = ++computer_score;
  } else if (user_choice == "scissors" && computer_choice == "paper") {
    resultEl.innerHTML = `You win!<br>You choose ${user_choice}.<br>Computer chooses ${computer_choice}.`;
    userScoreEl.innerHTML = ++user_score;
  }
};
