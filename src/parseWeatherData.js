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









//Example Response From API
// {
//     "coord": {
//         "lon": -74.006,
//         "lat": 40.7143
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 280.26,
//         "feels_like": 277.82,
//         "temp_min": 278.21,
//         "temp_max": 281.45,
//         "pressure": 1004,
//         "humidity": 44
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 3.6,
//         "deg": 230
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1673997562,
//     "sys": {
//         "type": 2,
//         "id": 2008101,
//         "country": "US",
//         "sunrise": 1673957823,
//         "sunset": 1673992477
//     },
//     "timezone": -18000,
//     "id": 5128581,
//     "name": "New York",
//     "cod": 200
// }
