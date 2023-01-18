let body = document.querySelector("body");

const button = document.createElement(`button`);
button.innerText = "Call API";

body.append(button);

button.addEventListener("click", () => {
  getWeather();
});

async function getWeather() {
  let weatherApiKey = "829476d2286b70982ba80bde98cd8851";
  let city = "New York";
  let weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`;

  let response = await fetch(weatherURL, { mode: `cors` });

  let responseJSON = await parseWeatherAPIResponse(response);

  console.log(responseJSON);
}

const parseWeatherAPIResponse = async (response) => {
  let responseObj = await response.json();

  // Weather and City
  let weather = responseObj.weather[0];
  let city = responseObj.name;
  let country = responseObj.sys.country;

  //Temperatures
  let temps = convertTemps(responseObj.main.temp);

  //Humidity, Windspeed,

  let miscInfo = {
    humidity: responseObj.main.humidity,
    windSpeed: responseObj.wind.speed,
  };

  let weatherInfo = {
    city, 
    country,
    weather,
    temps,
    miscInfo
  };

  return weatherInfo;
};

//Converts Temps to Fahrenheit and Celsius
const convertTemps = (temp) => {
  fTemp = Math.round(10 * ((temp - 273.15) * 1.8 + 32)) / 10;
  cTemp = Math.round(10 * (temp - 273.15)) / 10;
  let temps = {
    fTemp: fTemp,
    cTemp: cTemp,
  };

  return temps;
};

//Example Response
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
