import { audio, audioPlayer, audioButtonPlay } from "./musicPlayer.js";
import { videoPlayer } from "./videoPlayer.js";
import { audioRadio, radio, radioStop } from "./radioPlayer.js";

export const addZero = (n) => (n < 10 ? "0" + n : n);

export const switchMusicPlayer = () => {
  if (!audioPlayer.paused) {
    audio.classList.remove("play");
    audioPlayer.pause();
    audioButtonPlay.classList.add("fa-play");
    audioButtonPlay.classList.remove("fa-pause");
  }
};

export const switchVideoPlayer = () => {
  videoPlayer.pause();
};

export const switchRadioPlayer = () => {
  if (!audioRadio.paused) {
    radio.classList.remove("play");
    radioStop.classList.add("fa-play");
    radioStop.classList.remove("fa-stop");
    audioRadio.pause();
  }
};
