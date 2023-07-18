<?php
?>

<div class="row">
    <h3>See script mod2_04</h3>
    <div class="col-6">
        <p>Press the left arrow on your keyboard</p>
        <p id="leftKey"></p>
    </div>

    <div class="col-6 text-center align-middle">
        <p>Press shift</p>
        <p id="shiftKey"></p>
    </div>
</div>

<br><br><br>
<div class="row">
    <div class="col-6">
        <p>Example of the 'keypress' event on the window object, awith shift, meta and alt</p>
        <p>Please type some keys and see what happens. Try typing key modifiers at the same time: shift, alt, control</p>
        <br><br>
        <div id="keys"></div>

    </div>

    <div class="col-6 text-center align-middle">
        <p>Press some keys on your keyboard and see the corresponding evt.key and evt.code values. If you are not using a QWERTY keyboard, notice that the values might be different. This is because an 'a' on an AZERTY keyboard, will correspond to the KeyQ code on the reference keyboard.</p>
        <br><br>
        <p id="codes">  You typed: </p>
    </div>
</div>

<script src="../lib/js/mod2_04.js"></script>