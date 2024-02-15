import axios from "axios";
import chalk from "chalk";

const API_KEY = "YOUR_API_KEY";

function displayWeather(city, weatherData) {
  consolejson.log(
    chalk.blue(`El clima en ${city} es de ${weatherData.main.temp}°C`)
  );
  console.log(chalk.blue(`La humedad es de ${weatherData.main.humidity}%`));
  console.log(chalk.blue(`La presión es de ${weatherData.main.pressure} hPa`));
  console.log(
    chalk.blue(`La velocidad del viento es de ${weatherData.wind.speed} m/s`)
  );
  console.log(
    chalk.blue(`La temperatura máxima es de ${weatherData.main.temp_max}°C`)
  );
  console.log(
    chalk.blue(`La temperatura mínima es de ${weatherData.main.temp_min}°C`)
  );
  console.log(chalk.blue(`La visibilidad es de ${weatherData.visibility} m`));
}

function handleError() {
  console.log(chalk.red("Error al obtener el clima"));
  process.exit(1);
}

async function getWeather(city) {
  try {
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log(chalk.red("Error al obtener el clima"));
    throw new Error("Error al obtener el clima");
  }
}

function getData() {
  let city = process.argv[2];
  if (!city) {
    console.log(chalk.red("proporciona un nombre de ciudad o lugar"));
  }
  getWeather(city)
    .then((weatherData) => displayWeather(city, weatherData))
    .catch(handleError);
}

getData();
