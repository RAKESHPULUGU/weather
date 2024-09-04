

function getWeather() {
    const apiKey = '89b2c359c6554fc38e6184402240309';  // Replace with your WeatherAPI.com API key
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Current Weather Data:', data);  // Debug log
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Forecast Data:', data);  // Debug log
            displayForecast(data.forecast.forecastday[0].hour);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('Error fetching forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const forecastInfoDiv = document.getElementById('forecast-info');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
    forecastInfoDiv.innerHTML = '';

    if (data.error) {
        weatherInfoDiv.innerHTML = `<p>${data.error.message}</p>`;
    } else {
        const cityName = data.location.name;
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;
        const iconUrl = `https:${data.current.condition.icon}`;
        
        // Get current date and time
        const now = new Date();
        const date = now.toLocaleDateString(); // Format date
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time

        const temperatureHTML = `<p>${temperature}°C</p>`;
        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
            <p>${date} ${time}</p> <!-- Display date and time -->
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        weatherIcon.style.display = 'block'; // Ensure the image is displayed
    }
}


function displayForecast(data) {
    const forecastInfoDiv = document.getElementById('forecast-info');

    // Clear previous forecast data
    forecastInfoDiv.innerHTML = '';

    data.forEach(item => {
        const dateTime = new Date(item.time);
        const date = dateTime.toLocaleDateString(); // Format date
        const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time
        const temperature = item.temp_c; // Temperature in Celsius
        const iconUrl = `https:${item.condition.icon}`; // Full URL for the icon

        const forecastItemHtml = `
            <div class="forecast-item">
                <span>${date}</span>
                <span>${time}</span>
                <img src="${iconUrl}" alt="Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        forecastInfoDiv.innerHTML += forecastItemHtml;
    });
}
