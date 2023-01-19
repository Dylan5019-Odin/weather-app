const parseWeatherAPIResponse = async (response) => {
  let responseObj = await response.json();

  // Weather and City
  let weather = responseObj.weather[0].main;
  let icon = responseObj.weather[0].icon;
  let city = responseObj.name;
  let country = responseObj.sys.country;

  //Temperatures
  let temperature = responseObj.main.temp;

  //Humidity, Windspeed,
  let humidity = responseObj.main.humidity;
  let wind = Math.round(responseObj.wind.speed * 10) / 10;

  let weatherInfo = {
    city,
    country,
    weather,
    icon,
    temperature,
    humidity,
    wind,
  };

  return weatherInfo;
};

export default parseWeatherAPIResponse;
