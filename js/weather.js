const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

city.value = 'Minsk'

async function getWeather() {
  // if (city.value == '') {
  //   city.value = 'Minsk'
  // }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value.trim()}&lang=en&appid=6837c3e245014d18afbde35e9570ecb2&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  let errorCode = data.cod;
  
  if (errorCode == '404') {
    weatherDescription.textContent = `Sorry, city "${city.value}" not found :(`
    windSpeed.textContent = ''
    humidity.textContent = ''
    temperature.textContent = ''
  } else if (city.value.trim() == '') {
    weatherDescription.textContent = `Sorry, empty input :( `
    windSpeed.textContent = ''
    humidity.textContent = ''
    temperature.textContent = ''
  }
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`

  // console.log(data.main.humidity);
}

function setLocalStorageCity() {
  localStorage.setItem('cityVal', city.value);
}

function getLocalStorageCity() {
  if (localStorage.getItem('cityVal')) {
    city.value = localStorage.getItem('cityVal')
  }else {
    city.value = 'Minsk'
  }
}

window.addEventListener('beforeunload', setLocalStorageCity)
window.addEventListener('load', () => {
  getLocalStorageCity();
  getWeather()
})

city.addEventListener('change', getWeather)
// localStorage.clear();