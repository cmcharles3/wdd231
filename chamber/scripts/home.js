// ========== WEATHER ==========
const weatherContainer = document.getElementById('weather-container');
const WEATHER_API_KEY = '8bd96330fff05eb1e0c04e750c1446d2'; // My key
const CITY = 'Benoni';
const COUNTRY = 'ZA';

async function getWeather() {
  try {
    // Current weather
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=imperial&appid=${WEATHER_API_KEY}`
    );
    if (!currentRes.ok) throw new Error('Weather data unavailable');
    const current = await currentRes.json();

    // 3-day forecast (5-day/3-hour endpoint, take one per day)
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY}&units=imperial&appid=${WEATHER_API_KEY}`
    );
    if (!forecastRes.ok) throw new Error('Forecast data unavailable');
    const forecast = await forecastRes.json();

    displayWeather(current, forecast);
  } catch (error) {
    console.error('Weather error:', error);
    weatherContainer.innerHTML = '<p>Weather data currently unavailable.</p>';
  }
}

function displayWeather(current, forecast) {
  const temp = Math.round(current.main.temp);
  const desc = current.weather[0].description;

  // Get 3 daily forecasts (every 8th entry = 24 hours)
  const dailyForecasts = [];
  for (let i = 0; i < forecast.list.length; i += 8) {
    if (dailyForecasts.length >= 3) break;
    const item = forecast.list[i];
    const date = new Date(item.dt * 1000);
    dailyForecasts.push({
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      temp: Math.round(item.main.temp)
    });
  }

  let forecastHTML = dailyForecasts.map(
    (f) => `<div class="forecast-day"><span>${f.day}</span><span>${f.temp}°F</span></div>`
  ).join('');

  weatherContainer.innerHTML = `
    <div class="current-weather">
      <p class="temp">${temp}°F</p>
      <p class="desc">${desc}</p>
    </div>
    <div class="forecast">
      <h3>3-Day Forecast</h3>
      <div class="forecast-grid">${forecastHTML}</div>
    </div>
  `;
}

// ========== SPOTLIGHTS ==========
const spotlightContainer = document.getElementById('spotlight-container');

async function getSpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Member data unavailable');
    const members = await response.json();

    // Filter gold (3) and silver (2) members
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);

    // Shuffle and pick 2-3
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(3, shuffled.length));

    displaySpotlights(selected);
  } catch (error) {
    console.error('Spotlight error:', error);
    spotlightContainer.innerHTML = '<p>Spotlights currently unavailable.</p>';
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = members.map(member => {
    const levelText = member.membership === 3 ? 'Gold' : 'Silver';
    return `
      <div class="spotlight-card">
        <h3>${member.name}</h3>
        <p class="level">${levelText} Member</p>
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      </div>
    `;
  }).join('');
}

// Initialize both
getWeather();
getSpotlights();