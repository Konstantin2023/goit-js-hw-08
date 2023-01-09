import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

setCurrentTime();

function setCurrentTime() {
  let localSt = localStorage.getItem(CURRENT_TIME);
  if (localSt) {
    player.setCurrentTime(localSt);
  }
}
