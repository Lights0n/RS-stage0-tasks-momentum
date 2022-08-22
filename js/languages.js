const langRu = document.querySelector('#lang-ru');
const langEng = document.querySelector('#lang-eng');
const formLangs = document.querySelector('.form-langs');

// langRu.addEventListener('click', () => {

// })

// langEng.addEventListener('click', () => {

// })


// if (langRu.checked) {

// }

// else if (langEng.checked) {

// }

// _________LANGUAGES_____________settings
const settingsLang = document.querySelector('.settings-pup__list-lang label')
const settingsPhoto = document.querySelector('.settings-pup__list-photo label')
const settingsElems = document.querySelector('.settings-pup__list-elements label')

const playerLabel = document.querySelector('.pup__hide-player label')
const weatherLabel = document.querySelector('.pup__hide-weather label')
const timeLabel = document.querySelector('.pup__hide-time label')
const dateLabel = document.querySelector('.pup__hide-date label')
const greetingLabel = document.querySelector('.pup__hide-greeting label')
const quotesLabel = document.querySelector('.pup__hide-quotes label')
const todoLabel = document.querySelector('.pup__hide-todo label')

const tagImgSearch = document.querySelector('#tag-img-search');

function settingsToEng() {
  settingsLang.innerHTML = 'Language'
  settingsPhoto.innerHTML = 'Photo source'
  settingsElems.innerHTML = 'Elements'

  timeLabel.innerHTML = 'Time'
  dateLabel.innerHTML = 'Date'
  greetingLabel.innerHTML = 'Greeting'
  quotesLabel.innerHTML = 'Quotes'
  weatherLabel.innerHTML = 'Weather'
  playerLabel.innerHTML = 'Audio player'
  todoLabel.innerHTML = 'Todo'

  tagImgSearch.placeholder = 'choose pics wisely'
}
langEng.addEventListener('click', settingsToEng)

function settingsToRu() {
  settingsLang.innerHTML = 'Язык'
  settingsPhoto.innerHTML = 'Источник фото'
  settingsElems.innerHTML = 'Элементы'

  timeLabel.innerHTML = 'Время'
  dateLabel.innerHTML = 'Дата'
  greetingLabel.innerHTML = 'Приветствие'
  quotesLabel.innerHTML = 'Цитаты'
  weatherLabel.innerHTML = 'Погода'
  playerLabel.innerHTML = 'Аудио плеер'
  todoLabel.innerHTML = 'Список дел'

  tagImgSearch.placeholder = 'выбирай картины с умом'
}
langRu.addEventListener('click', settingsToRu)

let chosenLang

function setLocalStorageLanguage() {
  if (langRu.checked) {
    chosenLang = 'ru'
  }
  else if (langEng.checked) {
    chosenLang = 'en'
  }
  localStorage.setItem('language', chosenLang);
}

function getLocalStorageLanguage() {
  if (localStorage.getItem('language') == 'ru') {
    langRu.checked = true
    settingsToRu()
  }
  else if (localStorage.getItem('language') == 'en') {
    langEng.checked = true
    settingsToEng()
  }
}

window.addEventListener('beforeunload', setLocalStorageLanguage)
window.addEventListener('load', getLocalStorageLanguage())
