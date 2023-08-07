const btnEl = document.getElementById("button");
const diceEl = document.getElementById("dice");
const historyEl = document.getElementById("history");

let historyList = [];

rollDice = () => {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  const diceFace = getDiceFace(randomNum);
  diceEl.innerHTML = diceFace;
  historyList.push(randomNum);
  updateHistory();
};
updateHistory = () => {
  historyEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    historyEl.appendChild(listItem);
  }
};
getDiceFace = (randomNum) => {
  switch (randomNum) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

btnEl.addEventListener("click", () => {
  diceEl.classList.add("animation");
  setTimeout(() => {
    diceEl.classList.remove("animation");
    rollDice();
  }, 1000);
});
