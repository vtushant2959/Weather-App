async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "21b569f876f1684ed461195c630e28ea"; // 🔴 Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = `Weather in ${data.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherCondition").innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    } catch (error) {
        alert("Error fetching weather data");
    }
}
