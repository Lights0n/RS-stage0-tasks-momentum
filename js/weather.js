const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {
  let lang = 'en'
  let url
  if (langRu.checked) {
    lang = 'ru'
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value.trim()}&lang=${lang}&appid=47ef5350608581ff2e77de126739e049&units=metric`;
  }

  else if (langEng.checked) {
    lang = 'en'
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value.trim()}&lang=${lang}&appid=47ef5350608581ff2e77de126739e049&units=metric`;
  }
  const res = await fetch(url);
  const data = await res.json();
  let errorCode = data.cod;

  if (errorCode == '404') {
    if (langEng.checked) {
      weatherDescription.textContent = `Sorry, city "${city.value}" not found :(`
    }
    else if (langRu.checked) {
      weatherDescription.textContent = `Извините, город "${city.value}" не найден :(`
    }
    windSpeed.textContent = ''
    humidity.textContent = ''
    temperature.textContent = ''
  } else if (city.value.trim() == '') {
    if (langEng.checked) {
      weatherDescription.textContent = `Sorry, empty input :( `
    }
    else if (langRu.checked) {
      weatherDescription.textContent = `Извините, пустой ввод :( `
    }
    windSpeed.textContent = ''
    humidity.textContent = ''
    temperature.textContent = ''
  }
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  if (langEng.checked) {
    windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
    city.placeholder = 'Enter city'
  }

  if (langRu.checked) {
    windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`
    city.placeholder = 'Введите город'
  }
  city.value = data.name
}


function setLocalStorageCity() {
  localStorage.setItem('cityVal', city.value);
}

function getLocalStorageCity() {
  if (localStorage.getItem('cityVal')) {
    city.value = localStorage.getItem('cityVal')
  } else {
    // Город по умолчанию
    if (langRu.checked) {
      city.value = 'Минск'
    }
    else if (langEng.checked) {
      city.value = 'Minsk'
    }
  }
}

window.addEventListener('beforeunload', setLocalStorageCity)
window.addEventListener('load', () => {
  getLocalStorageCity();
  getWeather()
})

city.addEventListener('change', getWeather)

langRu.addEventListener('change', getWeather)
langEng.addEventListener('change', getWeather)
// localStorage.clear();