import playList from './playList.js'
const play = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
// #COOL
let playerTimeLength = document.querySelector('.player__time-length');
// let playerTrackName = document.querySelector('.player__track-name');
const playerTrackName = document.querySelector('.player__track-name');
const songDurationRange = document.querySelector('.player-song-range');
let playNum = 0;
let isPlay = false;

function isPlayRN() {
  if (!isPlay) {
    isPlay = true
    play.classList.toggle('pause');
  }
  else if (isPlay) {
    isPlay = false;
    play.classList.toggle('pause');
  }
}

// ------------HTML-TrackList-generator----------------- //
playList.forEach(element => {
  const li = document.createElement('li');
  const playListContainer = document.querySelector('.play-list');
  playListContainer.append(li)
  li.textContent = element.title
  li.classList.add('play-item')
});

const audio = new Audio();
let timePassed = 0
function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = timePassed;
  audio.playbackRate = 1
  if (!isPlay) {
    // console.log(audio.currentTime);
    audio.play();
    isPlayRN();
    play.classList.add('pause');
  }
  else if (isPlay) {
    audio.pause()
    isPlayRN();
    play.classList.remove('pause');
  }

  for (let i = 0; i < launchedPlayList.length; i++) {
    launchedPlayList[i].classList.remove('item-active')
    launchedPlayList[i].classList.remove('active')
  }

  //  get song duration #COOL
  audio.addEventListener('loadedmetadata', () => {
    // COOL
    songDurationRange.addEventListener('change', () => {
      audio.currentTime = songDurationRange.value
    })
    var songDurationAll = Math.round(audio.duration);
    var songDurationMins = Math.floor(songDurationAll / 60);
    var songDurationSecs = songDurationAll - songDurationMins * 60;
    playerTimeLength.textContent = `${songDurationMins.toString().padStart(2, 0)}:${songDurationSecs.toString().padStart(2, 0)}`;
    songDurationRange.setAttribute('max', songDurationAll)
  })

  moveSongRadio()
  playerTrackName.textContent = playList[playNum].title;
  launchedPlayList[playNum].classList.add('item-active')
  launchedPlayList[playNum].classList.add('active')

}

play.addEventListener('click', () => {
  // console.log(audio.currentTime);
  timePassed = audio.currentTime
  playAudio()
})

audio.onended = function () {
  playNext();
};

function playPrev() {
  playNum == 0
    ? playNum = playList.length - 1
    : playNum--
  isPlay = false;
  timePassed = 0
  playAudio()
}
playPrevBtn.addEventListener('click', playPrev)

function playNext() {
  playNum == playList.length - 1
    ? playNum = 0
    : playNum++
  isPlay = false;
  timePassed = 0
  playAudio()
}
playNextBtn.addEventListener('click', playNext)

// click on track to play it
const launchedPlayList = document.querySelectorAll('.play-item');
for (let [ind, pItem] of launchedPlayList.entries()) {
  pItem.addEventListener('click', () => {
    if (pItem.classList.contains('item-active')) {
      timePassed = audio.currentTime
      playAudio()
    }
    else {
      timePassed = 0
      playNum = ind
      isPlay = false;
      playAudio()
    }

  })
}

// cool player starts here
const playVolume = document.querySelector('.play-volume');
const playVolumeRange = document.querySelector('.player-volume-range');
const songDurationCurrent = document.querySelector('.player__time-current');

function moveSongRadio() {
  songDurationRange.value = audio.currentTime
  let mins = Math.floor(audio.currentTime / 60)
  let sec = Math.round(audio.currentTime - mins * 60)
  if (sec >= 60) {
    mins++
    sec = 0
  }
  songDurationCurrent.textContent = `${mins.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`
  if (isPlay) {
    setTimeout(moveSongRadio, 1000)
  }
}

//      -----кнопка громкости
const volumeBtn = document.querySelector('.play-volume');
volumeBtn.addEventListener('click', () => {
  volumeBtn.classList.toggle('active')
})
audio.volume = 0.2
let currentVolume = audio.volume
playVolumeRange.addEventListener('input', () => {
  audio.volume = +playVolumeRange.value / 100
  currentVolume = audio.volume
})

playVolume.addEventListener('click', () => {
  if (audio.volume != 0) {
    audio.volume = 0
    playVolumeRange.style.boxShadow = 'none'
  }
  else if (audio.volume == 0) {
    audio.volume = currentVolume
  }
})
