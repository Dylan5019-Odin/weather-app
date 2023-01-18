import parseWeatherAPIResponse from "./parseWeatherData";

async function getWeather(city, units) {
  let weatherApiKey = "829476d2286b70982ba80bde98cd8851";
  let weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}${units}`;
  let response = await fetch(weatherURL, { mode: `cors` });
  let responseData = await parseWeatherAPIResponse(response);

  return await responseData;
}

export default getWeather;
