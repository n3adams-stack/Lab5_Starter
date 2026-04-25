// expose.js

window.addEventListener('DOMContentLoaded', init);


function update_image(main_selector,main_img,main_audio) {
    if (main_selector.value == "select") {
        main_img.src = "assets/images/no-image.png";
    } else if (main_selector.value == "air-horn") {
        main_img.src = "assets/images/air-horn.svg";
        main_audio.src = "assets/audio/air-horn.mp3";
    } else if (main_selector.value == "car-horn") {
      main_img.src = "assets/images/car-horn.svg";
      main_audio.src = "assets/audio/car-horn.mp3";
    } else {
      main_img.src = "assets/images/party-horn.svg";
      main_audio.src = "assets/audio/party-horn.mp3";
    }
    console.log(main_audio.src);
}

function update_audio(audio_slider,main_audio) {
    let curr_volume = audio_slider.querySelector("input").value;
    let audio_image = audio_slider.querySelector("img");
    console.log(curr_volume);
    if (curr_volume == 0) {
      audio_image.src = "assets/icons/volume-level-0.svg";
    } else if (curr_volume < 33) {
      audio_image.src = "assets/icons/volume-level-1.svg";
    } else if (curr_volume < 67) {
      audio_image.src = "assets/icons/volume-level-2.svg";
    } else {
      audio_image.src = "assets/icons/volume-level-3.svg";
    }
    let vol_setting = parseFloat(curr_volume / 100);
    console.log(vol_setting);
    main_audio.volume = vol_setting;
}

function  play_audio(main_audio,jsConfetti,main_selector) {
  main_audio.play();
  if (main_selector.value == "party-horn") {
    jsConfetti.addConfetti();
  }
}

function init() {

  const jsConfetti = new JSConfetti();
  let main_img = document.querySelector("img");
  let main_selector = document.querySelector("select");
  let main_audio = document.querySelector("audio");
  let audio_slider = document.getElementById("volume-controls");
  let main_button = document.querySelector("button")
  main_selector.addEventListener('change',function () {update_image(main_selector,main_img,main_audio)});
  audio_slider.addEventListener('change',function() {update_audio(audio_slider,main_audio)})
  main_button.addEventListener('click',function () {play_audio(main_audio,jsConfetti,main_selector)})
}
