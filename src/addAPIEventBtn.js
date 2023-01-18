import getWeather from "./getWeatherData";
import displayWeatherInfo from "./displayWeatherInfo";

const addAPIEventBtn = (city, units) => {
  let body = document.querySelector("body");

  const button = document.createElement(`button`);
  button.innerText = "Call API";

  body.append(button);

  button.addEventListener("click", async () => {
    let weatherInfo = await getWeather(city, units);
    displayWeatherInfo(weatherInfo);
   
  });
};

export default addAPIEventBtn;
