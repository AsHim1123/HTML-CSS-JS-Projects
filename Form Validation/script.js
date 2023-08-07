const btnEl = document.getElementById("btn");

const nameErrorEl = document.getElementById("name-error");
const phoneErrorEl = document.getElementById("phone-error");
const emailErrorEl = document.getElementById("email-error");
const messageErrorEl = document.getElementById("message-error");

const fullNameEl = document.getElementById("full-name");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const messageEl = document.getElementById("message");
validateName = () => {
  let fullName = fullNameEl.value;
  if (fullName.length == 0) {
    nameErrorEl.textContent = `Name is required!`;
    return false;
  } else if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErrorEl.textContent = `Write Full Name!`;
    return false;
  } else {
    nameErrorEl.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};

validatePhone = () => {
  let phone = phoneEl.value;
  if (phone.length == 0) {
    phoneErrorEl.textContent = `Phone No. is required!`;
    return false;
  } else if (phone.length !== 10) {
    phoneErrorEl.textContent = `Phone No. must be 10 digits!`;
    return false;
  } else {
    phoneErrorEl.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};

validateEmail = () => {
  let email = emailEl.value;

  if (email.length == 0) {
    emailErrorEl.textContent = `Email is required!`;
    return false;
  } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailErrorEl.textContent = `Email Invalid!`;
    return false;
  } else {
    emailErrorEl.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};

validateMessage = () => {
  let message = messageEl.value;
  let required = 40;
  let left = required - message.length;

  if (left > 0) {
    messageErrorEl.textContent = `At least ${left} characters required!`;
    return false;
  } else {
    messageErrorEl.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};
const submissionEl = document.getElementById("submission");

validateForm = () => {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    return false;
  } else {
    submissionEl.style.display = "block";
    btnEl.style.display = "none";
    submissionEl.textContent = `Form Submitted Sucessfully!`;
    setTimeout(() => {
      submissionEl.textContent = "";
      btnEl.style.display = "block";
    }, 4000);
    return true;
  }
};
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
});
fullNameEl.addEventListener("keyup", validateName);
phoneEl.addEventListener("keyup", validatePhone);
emailEl.addEventListener("keyup", validateEmail);
messageEl.addEventListener("keyup", validateMessage);
btnEl.addEventListener("click", validateForm);
