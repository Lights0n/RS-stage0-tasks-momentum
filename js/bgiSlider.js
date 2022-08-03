const body = document.querySelector('body')
body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/16.jpg')";

let bgNum = Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0');
let randomNum;
function setBg() {
  // =======================================   getTimeOfDay() from greeting.js FILE
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${bgNum}.jpg`
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url(${img.src})`
  })
}

function getSlidePrev() {
  bgNum = (bgNum - 1).toString().padStart(2, '0');
  if (bgNum == '00') { bgNum = '20' }
  setBg()
}
const sliderPrevbutton = document.querySelector('.slide-prev')
sliderPrevbutton.addEventListener('click', getSlidePrev)

function getSlideNext() {
  bgNum = (+bgNum + 1).toString().padStart(2, '0');
  if (bgNum == '21') { bgNum = '01' }
  setBg()
}
const sliderNextbutton = document.querySelector('.slide-next')
sliderNextbutton.addEventListener('click', getSlideNext)

