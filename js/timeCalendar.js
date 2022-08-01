const timeCnt = document.querySelector('.time')
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString()
  timeCnt.textContent = currentTime;
  setTimeout(showTime, 1000);
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
  const currentDate = date.toLocaleDateString("en-US", options);
  dateCnt.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showTime()


