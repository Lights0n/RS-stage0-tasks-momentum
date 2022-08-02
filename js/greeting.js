const GoodTimeGreeting = document.querySelector('.greeting');
const yourInputName = document.querySelector('.name')
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 6) {
    timeOfDay = 'night'
  }
  else if (hours >= 6 && hours < 12) {
    timeOfDay = 'morning'
  }
  else if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon'
  }
  else if (hours >= 18 && hours < 24) {
    timeOfDay = 'evening'
  }

  GoodTimeGreeting.textContent = `Good ${timeOfDay},`;
  setTimeout(getTimeOfDay, 1000)
  return timeOfDay;
}
getTimeOfDay()

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