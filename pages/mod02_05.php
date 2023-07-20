<?php
?>

<div class="row ms-3">
    <h1>See script mod2_05</h1>
    <div class="col-6 text-center align-middle">
        <button class="btn btn-primary p-4" id="button1" onclick="processClick(evt)">Button1</button>
        <br><br>
        <div class="p-4" id="myDiv" onclick="processClick(evt)">
            Click also on this div! (myDiv)
        </div>

    </div>

    <div class="col-6 text-center align-middle">

        <div id="clicks"></div>
    </div>
</div>

<br><br>

<div class="row ms-3">
    <h3>Mouse the mouse on this window</h3>

    <div class="col-6 text-center align-middle">
        <div id="mousePositions">

        </div>
    </div>

    <div class="col-6 text-center align-middle">
        <div id="mouseScreenPositions">

        </div>
    </div>

</div>

<br><br>

<div class="row ms-3">
    <h3>Move the mouse of the grey canvas</h3>

    <div class="col-6 text-center align-middle">
        <canvas id="myCanvas" width=300 height=50></canvas>
    </div>

    <div class="col-6 text-center align-middle">
        <div id="mousePositions2"></div>

        <div id="mouseScreenPositions2"></div>
    </div>

</div>



<script src="../lib/js/mod2_05.js"></script>