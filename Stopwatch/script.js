const timeEl = document.querySelector(".time h1");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

const updateTimer = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  const secondsStr = seconds < 10 ? "0" + seconds : seconds;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const hoursStr = hours < 10 ? "0" + hours : hours;

  timeEl.innerHTML = `${hoursStr} : ${minutesStr} : ${secondsStr}`;
  
};

startEl.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(updateTimer, 1000);
  
});

stopEl.addEventListener("click", () => {
  clearInterval(timer);
});

resetEl.addEventListener("click", () => {
  clearInterval(timer);
  hours = minutes = seconds = 0;
  timeEl.innerHTML = `00 : 00 : 00`;
});
