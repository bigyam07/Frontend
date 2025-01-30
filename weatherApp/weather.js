const API = "7d9f0e29eb6c9dc415759327b143a9a1";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

async function fetchWeather(cityName) {
    try {
        let response = await fetch(`${url}${cityName}&appid=${API}`);
        let data =  await response.json();
        console.log(data);
        if(data.cod == 404) {
            console.log("Cannot find the City.");
             document.getElementById("city-name").innerText = "City not found!";
            return;
        }
        display(data);
    }
    catch {
        console.log("Fetching Error.");
    }
}

let button = document.getElementById("search-button");

button.addEventListener('click', () => {
    let city = document.getElementById("input-text").value;
    fetchWeather(city);
});

function display(data) {
    document.getElementById("city-name").innerText = data.name;
    let temperature = data.main.temp;
    temperature = temperature - 273.15;
    document.getElementById("temperature").innerText = `${temperature.toFixed(2)}°C`;
    document.getElementById("wind-speed").innerText = `${data.wind.speed} Km/hr`;
    document.getElementById("humidity").innerText = `${data.main.humidity} %`;

    let icon = document.getElementById("icon-image");
    let weatherCondition = data.weather[0].main.toLowerCase();

    if(weatherCondition === "clear") {
        icon.src = "sun.png";
    } else if(weatherCondition === "rain") {
        icon.src = "rainy-day.png";
    } else if(weatherCondition === "clouds") {
        icon.src = "cloudy.png";
    } else if(weatherCondition === "smoke") {
        icon.src = "cloudy.png";
    } 
    else {
        icon.src = "sun.png";
    }

}

