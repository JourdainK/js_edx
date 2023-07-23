var vid;
var playButton;
var pauseButton;
var rewindButton;

//multiple videos on one player
var sources = [
    "../images/pexel_goat.mp4",
    "../images/pexel_popcorn.mp4",
    "../images/pexel_prod.mp4"
];

var currentVid = 0;
var myVideo;

window.onload = init;

function init() {
    vid = document.querySelector("#myPlayer");
    playButton = document.querySelector("#playVideo");
    pauseButton = document.querySelector("#pauseVideo");
    rewindButton = document.querySelector("#rewindVideo");

    playButton.addEventListener("click", playVideo);
    pauseButton.addEventListener("click", pauseVideo);
    rewindButton.addEventListener("click", rewindVideo);
    myVideo = document.querySelector("#myVideo");
    myVideo.addEventListener("ended", loadAndPlayNextVideo, false);
    nextVideo();
}

function playVideo() {
    console.log("playVideo clicked");
    vid.play();
}

function pauseVideo() {
    vid.pause();
}

function rewindVideo() {
    vid.currentTime = 0;
}


//multiple videos on one player
function nextVideo() {
    myVideo.src = sources[currentVid];
    myVideo.load();
    currentVid++;
    if(currentVid == sources.length) {
        currentVid = 0;
    }
}

function loadAndPlayNextVideo() {
    console.log("On joue " + sources[currentVid % sources.length])
    nextVideo();
    myVideo.play();
}