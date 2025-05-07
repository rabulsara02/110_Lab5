// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');
  
  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) =>{
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
    speechSynthesis.addEventListener('voiceschanged', populateVoices);
    populateVoices();

    talkButton.addEventListener('click', () => {
      const utterance = new SpeechSynthesisUtterance(textInput.value);
      const selectedIndex = voiceSelect.value;

      if(voices[selectedIndex]){
        utterance.voice = voices[selectedIndex];
      }

      faceImage.src = 'assets/image/smiling-open.png';

      utterance.addEventListener('end', () =>{
        faceImage.src = 'assets/images/smiling.png';
      });

      speechSynthesis.speak(utterance);
    });
}