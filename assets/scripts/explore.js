window.addEventListener('DOMContentLoaded', init);


const synth = window.speechSynthesis;

const inputForm = document.querySelector("select");
const inputTxt = document.getElementById("text-to-speak");
const voiceSelect = document.querySelector("select");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function play_sound() {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = 1
  utterThis.rate = 1;

  let main_img = document.querySelector('img');
  main_img.src = "assets/images/smiling-open.png";
  utterThis.onend = function(event)  { main_img.src = "assets/images/smiling.png";};
  synth.speak(utterThis);
  inputTxt.blur();
};



function init() {
  // TODO
  let main_selector = document.querySelector('select');
  let main_button = document.querySelector('button');
  main_button.addEventListener('click',function() {play_sound();})
}