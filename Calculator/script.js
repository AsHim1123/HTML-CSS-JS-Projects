let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector(".input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector(".input").value = string;
      } else if (e.target.innerHTML == "DE") {
        if (string.length > 0 && string !== "Math Error") {
          string = string.slice(0, string.length - 1);
          document.querySelector(".input").value = string;
        } else if (string === "Math Error") {
          string = "";
          document.querySelector(".input").value = string;
        }
      } else {
        string = string + e.target.innerHTML;
        document.querySelector(".input").value = string;
      }
    } catch (error) {
      string = "";
      string = string + `Math Error`;
      document.querySelector(".input").value = string;
    }
  });
});
