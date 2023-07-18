<?php
?>
<title>Handling events</title>

<div class="row">
    <h3>Handling events</h3>
    <div class="col-6 text-center align-middle">
        <button type="button" class="btn btn-primary" id="hoverExample">hover me</button>
        <p>Css Modif</p>
    </div>


    <div class="col-6 text-center align-middle">
        <h4>Anonymous function</h4>
        <p>
            click on the page, check script mod2_02
        </p>
        <p id="anonymousFunction"></p>
    </div>

</div>

<div class="row">
    <div class="col-6 text-center align-middle">
        <h4>Event listener on a button</h4>
        <button type="button" class="btn btn-primary" onclick="processClic();">Click me</button>
        <p id="buttonExample"> </p>
    </div>

    <div class="col-6 text-center align-middle">
        <h4>Event listener/ button with querySelector</h4>
        <button type="button" class="btn btn-primary" id="selectorExample">click me v2</button>
        <p id="slctExmp"> </p>
    </div>

</div>


<script src="../lib/js/mod2_02.js"></script>