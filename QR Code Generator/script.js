const btnEl = document.querySelector(".input-container button");
const qrImgEl = document.getElementById("qrImg");
const inputEl = document.querySelector(".input");
const errorEl = document.querySelector(".imgBox p");
generateQR = (text) => {
  if (inputEl.value.length > 0) {
    qrImgEl.src =
       `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  } else {
    errorEl.innerHTML = `Please Enter your text or URL!!!`;
    btnEl.style.display = "none";
    qrImgEl.style.display = "none";
    setTimeout(() => {
      errorEl.innerHTML = "";
      btnEl.style.display = "inline";
    }, 3000);
  }
};

btnEl.addEventListener("click", () => {
  generateQR(inputEl.value);
});
