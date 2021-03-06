export const audioRadio = new Audio();
export const radio = document.querySelector(".radio");
export const radioStop = document.querySelector(".radio-stop");
export const radioPlayerInit = () => {
  //const radio = document.querySelector(".radio");
  const radioCoverImg = document.querySelector(".radio-cover__img");
  const radioHeaderBig = document.querySelector(".radio-header__big");
  const radioNavigation = document.querySelector(".radio-navigation");
  const radioItem = document.querySelectorAll(".radio-item");
  // const radioStop = document.querySelector(".radio-stop");
  const radioVolume = document.querySelector(".radio-volume");
  const radioIcon = document.querySelector(".radio-icon");

  //const audio = new Audio();
  audioRadio.type = "audio/aac";

  radioStop.disabled = true;

  radioVolume.value = 50;

  const changeIconPlay = () => {
    if (audioRadio.paused) {
      radio.classList.remove("play");
      radioStop.classList.add("fa-play");
      radioStop.classList.remove("fa-stop");
    } else {
      radio.classList.add("play");
      radioStop.classList.remove("fa-play");
      radioStop.classList.add("fa-stop");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parent = target.closest(".radio-item");

    selectItem(parent);

    const title = parent.querySelector(".radio-name").textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parent.querySelector(".radio-img").src;
    radioCoverImg.src = urlImg;

    radioStop.disabled = false;
    audioRadio.src = target.dataset.radioStantion;
    audioRadio.play();
    changeIconPlay();
  });

  radioStop.addEventListener("click", () => {
    if (audioRadio.paused) {
      audioRadio.play();
    } else {
      audioRadio.pause();
    }
    changeIconPlay();
  });

  radioVolume.addEventListener("input", () => {
    audio.volume = radioVolume.value / 100;

    if (audioRadio.volume === 0) {
      radioIcon.classList.remove("fa-volume-down");
      radioIcon.classList.add("fa-volume-off");
    } else {
      radioIcon.classList.add("fa-volume-down");
      radioIcon.classList.remove("fa-volume-off");
    }
  });

  radioVolume.volume = audioRadio.value * 100;
};
