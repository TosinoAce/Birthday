const btnStart = document.getElementById("click-to-Continue");
const popup = document.querySelector(".popup-wrapper");

console.log(openLetter)


btnStart.addEventListener("click", () => {
  popup.classList.add("close");
})

function enableAudioPlayback() {
  const audio = document.getElementById("sound");

  function playSound() {
    audio.play().catch(error => {
      console.error("Error playing the audio: ", error);
    });
  }

  // Play immediately after interaction
  playSound();

  // Repeat every 66 seconds
  setInterval(playSound, 500);

  // Remove event listener after first interaction
  document.removeEventListener("click", enableAudioPlayback);
}

// Attach to any user interaction (click, keypress, etc.)
document.addEventListener("click", enableAudioPlayback);
