const GoodTimeGreeting = document.querySelector('.greeting');
const yourInputName = document.querySelector('.name')

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  let timeOfDayShort;

  if (langEng.checked) {
    yourInputName.placeholder = '[Enter your name]'
    if (hours < 6) {
      timeOfDay = 'Good night'
      timeOfDayShort = 'night'
    }
    else if (hours >= 6 && hours < 12) {
      timeOfDay = 'Good morning'
      timeOfDayShort = 'morning'
    }
    else if (hours >= 12 && hours < 18) {
      timeOfDay = 'Good afternoon'
      timeOfDayShort = 'afternoon'
    }
    else if (hours >= 18 && hours < 24) {
      timeOfDay = 'Good evening'
      timeOfDayShort = 'evening'
    }
  }
  // ______LANGUAGES__________
  if (langRu.checked) {
    yourInputName.placeholder = '[Введите имя]'
    if (hours < 6) {
      timeOfDay = 'Доброй ночи'
      timeOfDayShort = 'night'
    }
    else if (hours >= 6 && hours < 12) {
      timeOfDay = 'Доброе утро'
      timeOfDayShort = 'morning'
    }
    else if (hours >= 12 && hours < 18) {
      timeOfDay = 'Добрый день'
      timeOfDayShort = 'afternoon'
    }
    else if (hours >= 18 && hours < 24) {
      timeOfDay = 'Добрый вечер'
      timeOfDayShort = 'evening'
    }
  }

  GoodTimeGreeting.textContent = `${timeOfDay},`;
  setTimeout(getTimeOfDay, 1000)
  return timeOfDayShort;
}
getTimeOfDay()



yourInputName.onchange = function () {
  if (!yourInputName.value.toString().endsWith('!')) {
    yourInputName.value = `${yourInputName.value}!`
  }
};

function setLocalStorageName() {
  localStorage.setItem('name', yourInputName.value);
}

function getLocalStorageName() {
  if (localStorage.getItem('name')) {
    yourInputName.value = localStorage.getItem('name')
  }
}

window.addEventListener('beforeunload', setLocalStorageName)
window.addEventListener('load', getLocalStorageName)