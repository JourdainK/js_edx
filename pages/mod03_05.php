<?php
?>

<div class="row">
    <h3>Geolocation API</h3>

    <div class="col-6 text-start align-middle p-4">
        <div class="text-center align-middle">
            <h4>Documentations</h4>
            <ul class="doc">
                <li class="doc"><a href="https://www.w3.org/TR/geolocation/" target="_blank">W3C Geolocation </a></li>
                <li class="doc"><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank">MDN Geolocation</a></li>
                <li class="doc"><a href="https://leafletjs.com/reference-1.6.0.html" target="_blank">Leaflet, JavaScript Library</a></li>
                <li class="doc"><a href="https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse" target="_blank">Google API</a></li>
            </ul>
        </div>


    </div>

    <div class="col-6 text-start align-middle p-4">
        <div class="align-middle">
            <p>
                See script mod3_05.js
                <br>
                leaflet script is loaded in index.php

            </p>

            <button class="btn btn-success" id="geolocate" >Click to show your location with OpenStreetMap</button>

            <div id="map" class="map" style="width: 50%"></div>

        </div>

    </div>

</div>

<br><br><br>

<div class="row">

    <div class="col-6 text-start align-middle p-4">


    </div>

    <div class="col-6 text-start align-middle p-4">


    </div>

</div>


<script src="../lib/js/mod3_05.js"></script>