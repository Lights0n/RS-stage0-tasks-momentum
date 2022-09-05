const body = document.querySelector('body')
let url = 'assets\img\bg.jpg'
let bgNum = Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0');
let randomNum;
// =======================================   getTimeOfDay() from greeting.js FILE
let imageTag = getTimeOfDay()
const img = new Image();
function setBg() {

  if (gitRadio.checked) {
    imageTag = getTimeOfDay()
    img.src = `https://raw.githubusercontent.com/Lights0n/stage1-tasks-stage0/assets/images/${imageTag}/${bgNum}.jpg`

  }
  else if (unslashRadio.checked) {
    getUnsplashImage()
    console.log('UNSPLASH');
  }
  else if (flickerRadio.checked) {
    geFlickerImage()
    console.log('FLICKER');
  }
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url(${img.src})`
  })
}
async function getUnsplashImage() {
  if (tagImgSearch.value.trim() == '') {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${imageTag}&client_id=IYc3MJmPJOWiG9SukOt7pbtxPpFNoXgOI3IEtlvNytw`;
  }
  else {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tagImgSearch.value}&client_id=IYc3MJmPJOWiG9SukOt7pbtxPpFNoXgOI3IEtlvNytw`;
  }
  const res = await fetch(url);
  const data = await res.json();
  if (data.errors) {
    alert('no images with this tag')
    // tagImgSearch.value = getTimeOfDay()
  }
  img.src = await data.urls.regular
  // return img.src
}
async function geFlickerImage() {
  if (tagImgSearch.value.trim() == '') {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3d0a577340f3878cb2529b2a34336b87&tags=${imageTag}&extras=url_l&format=json&nojsoncallback=1`;
  }
  else {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3d0a577340f3878cb2529b2a34336b87&tags=${tagImgSearch.value}&extras=url_l&format=json&nojsoncallback=1`;
  }

  const res = await fetch(url);
  const data = await res.json();
  let flickerRand = Math.floor(Math.random() * data.photos.photo.length + 1)
  console.log(data.photos.photo.length);
  console.log(flickerRand);
  if (data.photos.total == 0) {
    alert('no images with this tag')
    // tagImgSearch.value = getTimeOfDay()
  }
  img.src = await data.photos.photo[flickerRand].url_l
}


window.addEventListener('load', () => {
  setBg()
})


function getSlidePrev() {
  bgNum = (bgNum - 1).toString().padStart(2, '0');
  if (bgNum == '00') { bgNum = '20' }
  setBg()
}
const sliderPrevbutton = document.querySelector('.slide-prev')
sliderPrevbutton.addEventListener('click', () => {
  if (gitRadio.checked) {
    getSlidePrev()
  }
  else {
    // todo 
    setBg()
  }

})

function getSlideNext() {
  bgNum = (+bgNum + 1).toString().padStart(2, '0');
  if (bgNum == '21') { bgNum = '01' }
  setBg()
}
const sliderNextbutton = document.querySelector('.slide-next')
sliderNextbutton.addEventListener('click', () => {
  if (gitRadio.checked) {
    getSlideNext()
  }
  else {
    setBg()
  }
})

// imageTag
function setLocalStorageImageTag() {
  localStorage.setItem('tagImgSearch', tagImgSearch.value);
}

function getLocalStorageImageTag() {
  if (localStorage.getItem('tagImgSearch')) {
    tagImgSearch.value = localStorage.getItem('tagImgSearch')
    // setBg()
  }
}
window.addEventListener('beforeunload', setLocalStorageImageTag)
window.addEventListener('load', getLocalStorageImageTag)
// localStorage.clear()  