<?php
?>

<div class="row">
    <h3>audio and video streams</h3>
    <div class="col-6 text-start align-middle p-4">
        <p>
            The < video > element is a DOM member, so CSS styling can be applied, as well as manipulation using the DOM
            API.
            <br><br>
            Restriction: you cannot embed a YouTube or a Daily Motion video using the < video > element
            <br>Instead, you often need to embed an < iframe >
            <br><br>
            <video controls="controls" poster="/static/posterVideoSPC.jpg">
                <!-- I have three versions of the video encoded with
                     different codecs.  The browser will automatically
                     choose the first one it knows it can play. -->
                <source src="http://html5doctor.com/demos/video-canvas-magic/video.webm" type="video/webm"/>
                <source src="http://html5doctor.com/demos/video-canvas-magic/video.ogg" type="video/ogg"/>
                <source src="http://html5doctor.com/demos/video-canvas-magic/video.mp4" type="video/mp4"/>
            </video>
        </p>

    </div>

    <div class="col-6 text-start align-middle p-4">
        <p>
            < audio > element is a DOM member, so CSS styling can be applied, as well as manipulation using the DOM API.
            <br><br>
            the Web Audio API is a pure javascript API for processing and synthesizing audio in web applications.
            <br>Used to add sound effects to game or musical applications
            <br><br>
            for further info about the Web Audio API, see <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" target="_blank">MDN Web Audio
                API</a>
        <h4>we'll focus on the < audio > element</h4>
        <br><br>
        <audio controls="controls" crossorigin="anonymous">
            <source src="https://mainline.i3s.unice.fr/mooc/week2p1/horse.ogg" type="audio/ogg"/>
            <source src="https://mainline.i3s.unice.fr/mooc/week2p1/horse.mp3" type="audio/mp3"/>
            Your browser does not support the audio element.
            Download the audio/video in
            <a href=”https://https://mainline.i3s.unice.fr/mooc/week2p1/horse.ogg”>OGG</a>
            or <a href=”https://mainline.i3s.unice.fr/mooc/week2p1/horse.mp3”>MP3</a>
            format.
        </audio>

        </p>

    </div>

</div>

<br><br><br>

<div class="row">
    <h4>Video and Audio API</h4>
    <div class="col-6 text-start align-middle p-4">

        <div class="text-center align-middle">

            <video id="myPlayer" controls="controls">
                <!-- I have three versions of the video encoded with
                     different codecs.  The browser will automatically
                     choose the first one it knows it can play. -->
                <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm
                        type=video/webm>
                <source src=http://html5doctor.com/demos/video-canvas-magic/video.ogg
                        type=video/ogg>
                <source src=http://html5doctor.com/demos/video-canvas-magic/video.mp4
                        type=video/mp4>
            </video>
        </div>

        <br>

        <div class="text-center align-middle">
            <button id="playVideo" class="btn btn-primary">Play</button>
            <button id="pauseVideo" class="btn btn-secondary">Pause</button>
            <button id="rewindVideo" class="btn btn-success">Rewind</button>
        </div>

    </div>

    <div class="col-6 text-start align-middle p-4">
        <p>
            More about Audio and video event (API)
            <br><br>
            <a href="https://www.w3.org/2010/05/video/mediaevents.html" alt="W3 website about video and audio API" target="_blank">
                W3 website about video and audio API
            </a>
        </p>
    </div>

</div>

<br><br><br>

<div class="row">
    <h4>Video and Audio API</h4>

    <div class="col-6 text-start align-middle p-4">
        <div class="text-center align-middle">
            <video id="myVideo" controls width="60%">
            </video>
        </div>

    </div>

    <div class="col-6 text-start align-middle p-4">
        <p>
            wait a bit for the videos to load
            <br>
            they'll loop
        </p>
    </div>

</div>


<script src="../lib/js/mod3_03.js"></script>
