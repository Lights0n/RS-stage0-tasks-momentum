const GoodTimeGreeting = document.querySelector('.greeting');
const yourInputName = document.querySelector('.name')
function getTimeOfDay() {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 6) {
    timeOfDay = 'Good night,'
  }
  else if (hours >= 6 && hours < 12) {
    timeOfDay = 'Good morning,'
  }
  else if (hours >= 12 && hours < 18) {
    timeOfDay = 'Good afternoon,'
  }
  else if (hours >= 18 && hours < 24) {
    timeOfDay = 'Good evening,'
  }
  GoodTimeGreeting.textContent = timeOfDay;
  setTimeout(getTimeOfDay, 1000)
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