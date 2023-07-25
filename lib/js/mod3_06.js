window.onload = init;

function init() {
    var playBut1 = document.querySelector("#playAudio1");
    var pauseBut1 = document.querySelector("#pauseAudio1");

    playBut1.addEventListener("click", playAudio);
    pauseBut1.addEventListener("click", pauseAudio);

    //howler

}

function playAudio() {
    let audio = document.querySelector("#audio1");
    audio.play();
}

function pauseAudio() {
    let audio = document.querySelector("#audio1");
    audio.pause();
}
