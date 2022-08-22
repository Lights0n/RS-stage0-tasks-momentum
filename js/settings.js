const settingsBtn = document.querySelector('.footer__settings')
const settingsPopup = document.querySelector('.footer__settings-pup')
settingsBtn.addEventListener('click', () => {
  settingsPopup.classList.toggle('visable')
})

const setName = document.querySelectorAll('.set-name')
const mainSet = document.querySelectorAll('.main-set')
const setNameInput = document.querySelectorAll('.set-name input')

takeVisable = (arr) => {
  arr.forEach((arrItem) => {
    arrItem.classList.remove('visable')
  })
}

// setlist-names toggler
setName.forEach((el, ind) => {
  el.addEventListener('click', () => {
    console.log();
    setNameInput[ind].checked = true
    takeVisable(mainSet)
    mainSet[ind].classList.add('visable')
  })
})

// settings hide stuff
// global containers
// const timeCnt = document.querySelector('.time')
// const dateCnt = document.querySelector('.date')
const greetingCnt = document.querySelector('.greeting-container')
const quoteCnt = document.querySelector('.footer__quote')
const weatherCnt = document.querySelector('.weather')
const playerCnt = document.querySelector('.player')
const todoCnt = document.querySelector('.footer__todo')

// inputs
const timeInput = document.querySelector('.pup__hide-time input')
const dateInput = document.querySelector('.pup__hide-date input')
const greetingInput = document.querySelector('.pup__hide-greeting input')
const quotesInput = document.querySelector('.pup__hide-quotes input')
const weatherInput = document.querySelector('.pup__hide-weather input')
const playerInput = document.querySelector('.pup__hide-player input')
const todoInput = document.querySelector('.pup__hide-todo input')

// curr hiddent state object
const hiddenState = {
  timeInput: '1',
  dateInput: '1',
  greetingInput: '1',
  quotesInput: '1',
  weatherInput: '1',
  playerInput: '1',
  todoInput: '1'
}

function toggleHiddenClass(checkBox, hideItem) {
  if (checkBox.checked) {
    hideItem.classList.remove('hidden')
  }
  else if (!checkBox.checked) {
    hideItem.classList.add('hidden')
  }
}

timeInput.addEventListener('click', () => {
  toggleHiddenClass(timeInput, timeCnt)
  if (timeInput.checked) { hiddenState.timeInput = '1' }
  else if (!timeInput.checked) { hiddenState.timeInput = '0' }
})
dateInput.addEventListener('click', () => {
  toggleHiddenClass(dateInput, dateCnt)
  if (dateInput.checked) { hiddenState.dateInput = '1' }
  else if (!dateInput.checked) { hiddenState.dateInput = '0' }
})
greetingInput.addEventListener('click', () => {
  toggleHiddenClass(greetingInput, greetingCnt)
  if (greetingInput.checked) { hiddenState.greetingInput = '1' }
  else if (!greetingInput.checked) { hiddenState.greetingInput = '0' }
})
quotesInput.addEventListener('click', () => {
  toggleHiddenClass(quotesInput, quoteCnt)
  if (quotesInput.checked) { hiddenState.quotesInput = '1' }
  else if (!quotesInput.checked) { hiddenState.quotesInput = '0' }
})
weatherInput.addEventListener('click', () => {
  toggleHiddenClass(weatherInput, weatherCnt)
  if (weatherInput.checked) { hiddenState.weatherInput = '1' }
  else if (!weatherInput.checked) { hiddenState.weatherInput = '0' }
})
playerInput.addEventListener('click', () => {
  toggleHiddenClass(playerInput, playerCnt)
  if (playerInput.checked) { hiddenState.playerInput = '1' }
  else if (!playerInput.checked) { hiddenState.playerInput = '0' }
})
todoInput.addEventListener('click', () => {
  toggleHiddenClass(todoInput, todoCnt)
  if (todoInput.checked) { hiddenState.todoInput = '1' }
  else if (!todoInput.checked) { hiddenState.todoInput = '0' }
})

function setLocalTimeCheckbox() { localStorage.setItem('time', hiddenState.timeInput) }
function getLocalTimeCheckbox() {
  if (localStorage.getItem('time') == '1') {
    timeInput.checked = true
  }
  else if (localStorage.getItem('time') == '0') {
    timeInput.checked = false
  }
  hiddenState.timeInput = localStorage.getItem('time')
  toggleHiddenClass(timeInput, timeCnt)
}

function setLocalDateCheckbox() { localStorage.setItem('date', hiddenState.dateInput) }
function getLocalDateCheckbox() {
  if (localStorage.getItem('date') == '1') {
    dateInput.checked = true
  }
  else if (localStorage.getItem('date') == '0') {
    dateInput.checked = false
  }
  hiddenState.dateInput = localStorage.getItem('date')
  toggleHiddenClass(dateInput, dateCnt)
}

function setLocalGreetingCheckbox() { localStorage.setItem('greeting', hiddenState.greetingInput) }
function getLocalGreetingCheckbox() {
  if (localStorage.getItem('greeting') == '1') {
    greetingInput.checked = true
  }
  else if (localStorage.getItem('greeting') == '0') {
    greetingInput.checked = false
  }
  hiddenState.greetingInput = localStorage.getItem('greeting')
  toggleHiddenClass(greetingInput, greetingCnt)
}

function setLocalQuoteCheckbox() { localStorage.setItem('quote', hiddenState.quotesInput) }
function getLocalQuoteCheckbox() {
  if (localStorage.getItem('quote') == '1') {
    quotesInput.checked = true
  }
  else if (localStorage.getItem('quote') == '0') {
    quotesInput.checked = false
  }
  hiddenState.quotesInput = localStorage.getItem('quote')
  toggleHiddenClass(quotesInput, quoteCnt)
}

function setLocalWeatherCheckbox() { localStorage.setItem('weather', hiddenState.weatherInput) }
function getLocalWeatherCheckbox() {
  if (localStorage.getItem('weather') == '1') {
    weatherInput.checked = true
  }
  else if (localStorage.getItem('weather') == '0') {
    weatherInput.checked = false
  }
  hiddenState.weatherInput = localStorage.getItem('weather')
  toggleHiddenClass(weatherInput, weatherCnt)
}

function setLocalPlayerCheckbox() { localStorage.setItem('player', hiddenState.playerInput) }
function getLocalPlayerCheckbox() {
  if (localStorage.getItem('player') == '1') {
    playerInput.checked = true
  }
  else if (localStorage.getItem('player') == '0') {
    playerInput.checked = false
  }
  hiddenState.playerInput = localStorage.getItem('player')
  toggleHiddenClass(playerInput, playerCnt)
}

function setLocalTodoCheckbox() { localStorage.setItem('todo', hiddenState.todoInput) }
function getLocalTodoCheckbox() {
  if (localStorage.getItem('todo') == '1') {
    todoInput.checked = true
  }
  else if (localStorage.getItem('todo') == '0') {
    todoInput.checked = false
  }
  hiddenState.todoInput = localStorage.getItem('todo')
  toggleHiddenClass(todoInput, todoCnt)
}

window.addEventListener('beforeunload', () => {
  setLocalTimeCheckbox()
  setLocalDateCheckbox()
  setLocalGreetingCheckbox()
  setLocalQuoteCheckbox()
  setLocalWeatherCheckbox()
  setLocalPlayerCheckbox()
  setLocalTodoCheckbox()
})
window.addEventListener('load', () => {
  getLocalTimeCheckbox()
  getLocalDateCheckbox()
  getLocalGreetingCheckbox()
  getLocalQuoteCheckbox()
  getLocalWeatherCheckbox()
  getLocalPlayerCheckbox()
  getLocalTodoCheckbox()
})


// ________images APIS


const gitRadio = document.querySelector('#radio-git');
const unslashRadio = document.querySelector('#radio-unslash');
const flickerRadio = document.querySelector('#radio-flicker');


let chosenImgSrc
gitRadio.addEventListener('click', setBg)
unslashRadio.addEventListener('click', getUnsplashImage)
flickerRadio.addEventListener('click', setBg)
function setLocalStorageImgSrc() {
  if (gitRadio.checked) {
    chosenImgSrc = 'git'
  }
  else if (unslashRadio.checked) {
    chosenImgSrc = 'unslash'
  }
  else if (flickerRadio.checked) {
    chosenImgSrc = 'flicker'
  }
  localStorage.setItem('imageSrc', chosenImgSrc);
}

function getLocalStorageImgSrc() {
  if (localStorage.getItem('imageSrc') == 'git') {
    gitRadio.checked = true
    // settingsToRu()
  }
  else if (localStorage.getItem('imageSrc') == 'unslash') {
    unslashRadio.checked = true
    // settingsToEng()
  }
  else if (localStorage.getItem('imageSrc') == 'flicker') {
    flickerRadio.checked = true
    // settingsToEng()
  }
}

window.addEventListener('beforeunload', setLocalStorageImgSrc)
window.addEventListener('load', getLocalStorageImgSrc())

