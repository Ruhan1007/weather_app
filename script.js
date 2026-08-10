const apiKey = "03d0aeb4a69639901c0306c40dcc8ddc";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        const weatherHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temp: ${data.main.temp} °C</p>
            <p>🌥️ Weather: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;

        document.getElementById("weatherResult").innerHTML = weatherHTML;

    } catch (error) {
        console.log(error);
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}