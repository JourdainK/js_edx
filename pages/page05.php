<?php

?>


<div class="row">

    <div class="col-6 text-center align-middle">
        <h2>Objects</h2>
        <p>check console and script 05</p>
    </div>

    <div class="col-6 text-center align-middle">
        <h3>arrays</h3>
        <p>Stuff</p>
    </div>
</div>

<div class="row">
    <div class="col-6 text-center align-middle">
        <h3>Functions</h3>
        <p>Stuff</p>
    </div>

    <div class="col-6 text-center align-middle">
        <h4>Stuff</h4>
        <button onclick="buildTable();">Click here to build a table</button>
        <table class="table table-info align-middle">
            <thead>
            <tr>
                <th>Given name</th>
                <th>Family name</th>
            </tr>
            </thead>
            <tbody id="tableContactBody">
            </tbody>
        </table>
    </div>
</div>

<div class="row">

    <div class="col-6 text-center align-middle">
        <div id="cssModif">
            <p>Modifying style (css) with JavaScript</p>
            <button onclick="changeStyle();" class="btn btn-primary">Click here to change the style</button>
        </div>
    </div>

    <div class="col-6 text-center align-middle">
        <h3>It's a me</h3>
        <button class="btn btn-primary" onclick="moveMario();">Click here to move Mario</button>
        <div id="mario">

        </div>
        <div>
            <p>Here is the Mario sprite sheet image used in this example:</p>
            <img src="https://mainline.i3s.unice.fr/mooc/marioSprite.png"  alt="mario picture">
        </div>

    </div>
</div>

<script src="../lib/js/test05.js"></script>


