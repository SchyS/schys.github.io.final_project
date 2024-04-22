document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('explore-btn').addEventListener('click', fetchAndDisplayWeather);
});

function fetchAndDisplayWeather() {
    const apiKey = 'b6e93efd1c1c8d46fafa7c32acb90ec4'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const city = 'New York'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherContainer.innerHTML = `<p>Current Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
}
