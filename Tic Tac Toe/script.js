let turn = "X";
let gameOver = false;

// Function for changing turn
swapTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function for checking win
checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let boxText = document.querySelectorAll(".boxtext");
  wins.forEach((e) => {
    if (
      boxText[e[0]].textContent === boxText[e[1]].textContent &&
      boxText[e[2]].textContent === boxText[e[1]].textContent &&
      boxText[e[0]].textContent !== ""
    ) {
      document.querySelector(".turn").textContent = `${
        boxText[e[0]].textContent
      } Wins!`;
      gameOver = true;
    }
  });
};

// Main logic of game

const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((box) => {
  box.addEventListener("click", () => {
    let boxText = box.querySelector(".boxtext");
    if (boxText.textContent === "") {
      boxText.textContent = turn;
      turn = swapTurn();
      checkWin();
      if (!gameOver) {
        document.querySelector(".turn").textContent = `Turn : ${turn}`;
      }
    }
  });
});

// Restart the game
const restartBtn = document.getElementById("btn");
restartBtn.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxtext");
  Array.from(boxTexts).forEach((boxText) => {
    boxText.textContent = "";
  });
  turn = "X";
  document.querySelector(".turn").textContent = `Turn : ${turn}`;
  gameOver = false;
});
