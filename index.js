document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    const apiKey = '8f4485f5f505ef4d2ad72e90b213a15f'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const weatherResult = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
          document.getElementById('weatherResult').innerHTML = weatherResult;
        } else {
          document.getElementById('weatherResult').innerHTML = '<p>City not found. Please try again.</p>';
        }
      })
      .catch(error => {
        document.getElementById('weatherResult').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
      });

      document.getElementById('cityInput').value=''
  });
  