const buttonEl = document.getElementById("btn");
const bmiEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

calculateBMI = (event) => {
  const heightEl = document.getElementById("height");
  const weightEl = document.getElementById("weight");
  const BMIvalue = (
    weightEl.value /
    (((heightEl.value / 100) * heightEl.value) / 100)
  ).toFixed(2);
  bmiEl.value = BMIvalue;
  if (BMIvalue < 18.5) {
    weightConditionEl.innerText = "Under Weight!!! Aba Dherai khana Paryo";
  } else if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
    weightConditionEl.innerText = "Healthy Weight!!! Fit and Fine Xau";
  } else if (BMIvalue >= 24.9 && BMIvalue <= 29.9) {
    weightConditionEl.innerText =
      "Over Weight!!! Aba thorai khane ra exercise garna paryo";
  } else {
    weightConditionEl.innerText = "Obesity!!! Doctor lai dekhauna gaihala";
  }
};

buttonEl.addEventListener("click", calculateBMI);
