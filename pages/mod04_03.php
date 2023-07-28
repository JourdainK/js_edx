<?php
?>
<br><br><br>

<div class="row">

    <div class="col-6 text-start align-middle p-4">
        <audio src = "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3"
               id="audioPlayer">
        </audio>
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


<script src="../lib/js/mod4_03.js"></script>
