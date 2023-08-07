const currencyFirstEl = document.getElementById("currency_1");
const currencySecondEl = document.getElementById("currency_2");

const valueFirstEl = document.getElementById("value-1st");
const valueSecondEl = document.getElementById("value-2nd");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();
updateRate = async () => {
  await fetch(
    `https://v6.exchangerate-api.com/v6/9039217bda508fa97b5f56e3/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      valueSecondEl.value = (valueFirstEl.value * rate).toFixed(2);
    });
};

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

valueFirstEl.addEventListener("input", updateRate);
