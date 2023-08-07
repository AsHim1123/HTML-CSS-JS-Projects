const searchEl = document.querySelector(".search");
const inputEl = document.querySelector(".input");
const imgEl = document.querySelector(".weather-img");
const tmpEl = document.querySelector(".tmp");
const conditionEl = document.querySelector(".condition");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weather = document.querySelector(".weather");
updateWeather = async (city_name) => {
  const API_key = "39fb3e2352366ef2cea33b69d34186c7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
  const result = await fetch(url).then((res) => res.json());

  if (result.cod === "404") {
    weather.style.display = "none";
    locationNotFound.style.display = "flex";
    return;
  }
  weather.style.display = "flex";
  locationNotFound.style.display = "none";
  tmpEl.innerHTML = `${Math.round(result.main.temp - 273.15)}°C`;
  conditionEl.innerHTML = `${result.weather[0].description}`;
  humidityEl.innerHTML = `${result.main.humidity}%`;
  windSpeedEl.innerHTML = `${result.wind.speed}Km/h`;
  switch (result.weather[0].main) {
    case "Clouds":
      imgEl.src = "assets/cloud.png";
      break;
    case "Clear":
      imgEl.src = "assets/clear.png";
      break;
    case "Rain":
      imgEl.src = "assets/rain.png";
      break;
    case "Mist":
      imgEl.src = "assets/mist.png";
      break;
    case "Snow":
      imgEl.src = "assets/snow.png";
      break;
    case "Clouds":
      imgEl.src = "assets/cloud.png";
      break;
  }
};

searchEl.addEventListener("click", (event) => {
  updateWeather(inputEl.value);
});
