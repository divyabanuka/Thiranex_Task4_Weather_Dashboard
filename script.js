// Thiranex Task 4
// Asynchronous JavaScript & RESTful APIs
// Real-Time Weather Dashboard

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");
const errorMessage = document.getElementById("errorMessage");


// Convert weather codes into readable descriptions
function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Light snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Light rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Thunderstorm with heavy hail"
    };

    return weatherCodes[code] || "Unknown weather";
}


// Search for a city and get its coordinates
async function getCityCoordinates(city) {

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to search for the city.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found. Please enter a valid city name.");
    }

    return data.results[0];
}


// Get current weather
async function getWeather(latitude, longitude) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch weather data.");
    }

    return await response.json();
}


// Display weather information
function displayWeather(location, weatherData) {

    const current = weatherData.current;

    cityName.textContent =
        `${location.name}, ${location.country}`;

    temperature.textContent =
        `${current.temperature_2m}°C`;

    weatherDescription.textContent =
        getWeatherDescription(current.weather_code);

    humidity.textContent =
        `${current.relative_humidity_2m}%`;

    windSpeed.textContent =
        `${current.wind_speed_10m} km/h`;

    feelsLike.textContent =
        `${current.apparent_temperature}°C`;

    errorMessage.textContent = "";
}


// Main weather search function
async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent =
            "Please enter a city name.";
        return;
    }

    errorMessage.textContent = "Loading weather...";

    searchBtn.disabled = true;

    try {

        // Step 1: Find city coordinates
        const location = await getCityCoordinates(city);

        // Step 2: Fetch weather using coordinates
        const weatherData =
            await getWeather(
                location.latitude,
                location.longitude
            );

        // Step 3: Display weather
        displayWeather(location, weatherData);

    } catch (error) {

        errorMessage.textContent =
            error.message;

    } finally {

        searchBtn.disabled = false;
    }
}


// Search button
searchBtn.addEventListener(
    "click",
    searchWeather
);


// Press Enter to search
cityInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            searchWeather();
        }

    }
);