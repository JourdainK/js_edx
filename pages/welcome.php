<?php

?>

<h2>Welcome</h2>

<div class="row">
    <div class="col-6">
        <h2 class="d-inline">Sin and Cos Functions</h2>

        <div id="myFunction"></div>


    </div>

    <div class="col-6 text-center align-middle">
        <h2 id="mainTitle" >Title</h2>
        <button onclick="changeTitle();">Click to change the title</button>
        <br> <br>
        <button onclick="customize();">Click here to add colors to the title</button>

    </div>
</div>

<br><br>

<div class="row align-middle">
    <div class="col-6 text-center align-middle">
        <h3>Geolocation API</h3>
        <button id="find-me">Show my location</button><br />
        <p id="status"></p>
        <a id="map-link" target="_blank"></a>


    </div>

    <div class="col-6 text-center align-middle">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.js"></script>
        <h3>Working with remote data</h3>
        <p class="align-middle">
            Type in the name of a Rock Band (ex: "The Rolling Stones", "Metallica", "The Who", "The Beatles", "Led Zeppelin", "Van Halen", "Grateful Dead").</p>

        <label for="bandName">Band Name: </label>
        <input type="text" id="bandName" value="Metallica">
        <button onclick="search();">Look for members</button>

        <div class="table align-middle" id="members"></div>

    </div>

</div>


<script src="../lib/js/test01.js"></script>