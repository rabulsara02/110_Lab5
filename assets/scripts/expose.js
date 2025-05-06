// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("img");
  const hornAudio = document.querySelector("audio");
  const volumeLevel = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");


  // horn selection dropdown
  hornSelect.addEventListener("change", () =>{
    const horn = hornSelect.value;
    hornImage.src = 'assets/images/' + horn + '.svg';
    hornAudio.src = 'assets/audio/'+ horn + '.mp3';
    console.log(horn);
  });


  // volume slider element
  volumeLevel.addEventListener("input", () =>{
    const volumeValue = volumeLevel.value;
    hornAudio.volume = volumeValue / 100;

    if(volumeValue == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if(volumeValue < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if(volumeValue < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn'){
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  })
}