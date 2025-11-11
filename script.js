document.addEventListener("DOMContentLoaded", () => {
    const story = document.querySelector(".story");
    story.style.opacity = 0;
    story.style.transition = "opacity 2s";

    setTimeout(() => {
        story.style.opacity = 1;
    }, 500);

    // Audio play/pause logic
    const playButton = document.getElementById("playStory");
    const audio = document.getElementById("storyAudio");

    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "⏸️ Pause Story";
        } else {
            audio.pause();
            playButton.textContent = "🎙️ Listen to the Story";
        }
    });

    // Reset button text when audio ends
    audio.addEventListener("ended", () => {
        playButton.textContent = "🎙️ Listen to the Story";
    });
});
