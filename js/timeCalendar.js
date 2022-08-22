const timeCnt = document.querySelector('.time')

// const langRu = document.querySelector('#lang-ru');
// const langEng = document.querySelector('#lang-eng');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString()
  timeCnt.textContent = currentTime;
  let timerId = setTimeout(() => showTime(), 1000);
  showDate()
}

const dateCnt = document.querySelector('.date')
function showDate() {
  const date = new Date();
  let options = {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: 'long',
    weekday: "long",
    day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: "numeric"
  }

  // let currentDate = date.toLocaleDateString("ru-RU", options);
  // ______LANGUAGE______
  if (langRu.checked) {
    let currentDate = date.toLocaleDateString("ru", options);
    dateCnt.textContent = currentDate;
  }

  if (langEng.checked) {
    let currentDate = date.toLocaleDateString("en-US", options);
    dateCnt.textContent = currentDate;
  }
  setTimeout(showDate, 1000);
}
showTime()




// export default showTime(togg);


