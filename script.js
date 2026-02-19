async function getWeather() {

    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY";   // 🔑 Put your OpenWeather API key here

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                🌡 Temperature: ${data.main.temp} °C <br>
                ☁ Weather: ${data.weather[0].description} <br>
                💧 Humidity: ${data.main.humidity}%
            `;
        } else {
            document.getElementById("result").innerHTML = "❌ City not found!";
        }

    } catch (error) {
        document.getElementById("result").innerHTML = "⚠ Error fetching data!";
    }
}
