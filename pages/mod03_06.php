<?php
?>


<br><br><br>

<div class="row">

    <div class="col-6 text-start align-middle p-4">

        <div class="text-center align-middle">

            <h3>Audio</h3>
            <br><br>
            <a href="https://pixabay.com/music" alt="no copyright music website" target="_blank">Pixabay copyright free</a><br>
            <audio src="../images/tension113643.mp3" id="audio1" controls></audio><br>
            <button class="btn btn-primary" id="playAudio1">Play</button>
            <button  class="btn btn-secondary" id="pauseAudio1">Pause</button>
            <br><br>

            <p>
                Nowadays -> autoplay audio is not allowed (autoplay policy), not to annoy the user.

            </p>

        </div>

    </div>


    <div class="col-6 text-start align-middle p-4">
        <div class="text-center align-middle">
            <h3>Howler Js library</h3>
            <a href="https://howlerjs.com" alt="Howler documentation" target="_blank">Howler JS</a>
            <p>
                Howler is a javascript library that allows to play audio in a more flexible way.
                using callbacks, and other features. (see script mod3_06.js)
                <br><br>
            </p>

            <button id="howlerClick" class="btn btn-primary" disabled>Play sound with Howler</button>

        </div>
    </div>
</div>


<br><br><br>

<div class="row">
    <audio src = "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3"
           id="audioPlayer">
    </audio>

    <div class="col-6 text-start align-middle p-4">

        <div id="controls">
            <label for="nbBalls">Number of balls: </label>
            <input type="number" min=1 max=30
                   value=10 id="nbBalls"
                   oninput="changeNbBalls(this.value);">
            <p></p>
            <label for="colorChooser">Player color: </label>
            <input type="color" value='#FF0000'
                   oninput="changePlayerColor(this.value);" id="colorChooser">
            <p></p>
            <label for="selectColorOfBallToEat">Color of ball to eat: </label>
            <select onchange="changeColorToEat(this.value);" id="selectColorOfBallToEat">
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='green'>green</option>
            </select>
            <p></p>

            <label for="ballSpeed">Change ball speed: </label>
            - <input type="range" value='1'
                     min=0.1 max=3 step=0.1
                     oninput="changeBallSpeed(this.value);"
                     id="ballSpeed"> +
            <p></p>

        </div>

    </div>


    <div class="col-6 text-start align-middle p-4">

        <canvas id="myCanvas"  width="400" height="400"></canvas>
    </div>

</div>



<script src="../lib/js/mod3_06.js"></script>