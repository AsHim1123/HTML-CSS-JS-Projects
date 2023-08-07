const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";
ratingsEls.forEach((ratingEL) => {
  ratingEL.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});
btnEl.addEventListener("click", () => {
  if (selectedRating !== "")
    containerEl.innerHTML = `<strong>Thank You!!!</strong>
    <br>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <br>
    <p>We will consider your feedback to improve our customer service.</p>`
    ;
});

removeActive = () => {
  ratingsEls.forEach((ratingEL) => {
    ratingEL.classList.remove("active");
  });
};
