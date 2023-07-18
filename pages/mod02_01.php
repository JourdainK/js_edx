<?php

?>

<div class="row">
    <div class="col-6 text-center align-middle">
        <h3>--</h3>
        <p>press f12, check console ( script mod2_01 )</p>
    </div>

    <div class="col-6 text-center align-middle">
        <h3>--</h3>
        <label for="number" class="form-label">Guess a number (between 0 and 10)</label>
        <input type="number" id="number" class="form-control" aria-describedby="passwordHelpBlock">
        <div id="passwordHelpBlock" class="form-text">
            enter a number
        </div>
        <div>
            <p id="resultGuess"></p>
        </div>
        <button onclick="checkGuess()">Check Guess</button>
    </div>
</div>
<br><br>

<div class="row">
    <div class="col-6 text-center align-middle">
        <p id="functionResult">

        </p>
    </div>

    <div class="col-6 text-center align-middle">
        <h3>Callback function</h3>
        <p>Click in the page!</p>
        <p id="callbck"></p>
    </div>

</div>

<script src="../lib/js/mod2_01.js"></script>
