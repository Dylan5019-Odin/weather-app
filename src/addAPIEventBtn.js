import getWeather from "./getWeatherData";
import displayWeatherInfo from "./displayWeatherInfo";

const addAPIEventBtn = () => {
  const searchButton = document.querySelector(`.search-btn`);
  const toggleButton = document.querySelector(`.toggle-btn`);

  searchButton.addEventListener("click", async () => {
    let city = document.getElementById("search").value;
    let units = toggleButton.value;

    if (city == "") {
      return;
    }

    let weatherInfo = await getWeather(city, units);

    if (!weatherInfo) {
      return;
    }

    displayWeatherInfo(weatherInfo, units);
  });
};

export default addAPIEventBtn;
