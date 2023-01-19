import getWeather from "./getWeatherData";
import displayWeatherInfo from "./displayWeatherInfo";

const toggleUnitsBtn = () => {
  const button = document.querySelector(`.toggle-btn`);

  button.addEventListener("click", async () => {
    let currentUnit = button.value;

    if (button.value == "&units=imperial") {
      button.value = "&units=metric";
    } else {
      button.value = "&units=imperial";
    }

    if (currentUnit != button.value) {
      let city = document.getElementById("search").value;
      let weatherInfo = await getWeather(city, button.value);
      console.log(weatherInfo);

      if (!weatherInfo) {
        return;
      }

      displayWeatherInfo(weatherInfo, button.value);
    }
  });
};

export default toggleUnitsBtn;
