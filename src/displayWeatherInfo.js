//Sets Data in the Card based off the API Response
const displayWeatherInfo = (weatherInfo, units) => {
  let location = document.getElementById("location");
  location.innerText = `${weatherInfo.city}, ${weatherInfo.country}`;

  let description = document.getElementById("description");
  description.innerText = `${weatherInfo.weather}`;

  let weatherIcon = document.getElementById("weatherIcon");
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo.icon}.png`;

  let humidity = document.getElementById("humidity");
  humidity.innerText = `${weatherInfo.humidity}%`;

  if (units == "&units=imperial") {
    let temperature = document.getElementById("temperature");
    temperature.innerText = `${Math.round(weatherInfo.temperature)}°F`;

    let windspeed = document.getElementById("windspeed");
    windspeed.innerText = `${weatherInfo.wind}mph`;
  } else {
    let temperature = document.getElementById("temperature");
    temperature.innerText = `${Math.round(weatherInfo.temperature)}°C`;

    let windspeed = document.getElementById("windspeed");
    windspeed.innerText = `${weatherInfo.wind}km`;
  }
};

export default displayWeatherInfo;
