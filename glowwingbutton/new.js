let audio = document.getElementById('audio');
let videoContainer = document.getElementById('videoContainer');

function playAudioAndShowVideo() {
    audio.play(); // Play the audio
    videoContainer.style.display = 'block'; // Show the video container
}

function stopAudioAndHideVideo() {
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset audio to start
    videoContainer.style.display = 'none'; // Hide the video container
}