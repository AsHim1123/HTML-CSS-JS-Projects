const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

countdown = () => {
  let futureDate = new Date("12:00 AM 11 May 2023");
  let currentDate = new Date();
  let remainingDate = futureDate - currentDate;

  let days = Math.floor(remainingDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(remainingDate / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(remainingDate / 1000 / 60) % 60;
  let seconds = Math.floor(remainingDate / 1000) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

countdown();
setInterval(() => {
  countdown();
}, 1000);
