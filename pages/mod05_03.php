<?php
?>

<br><br><br>

<div class="row">
    <h3>JSON</h3>

    <div class="col-6 text-start align-middle p-4">
        <h4>Check script mod5_03.js</h4>
        <p>
            <br>
            JSON stands for JavaScript Object Notation<br>
            Two methods are used to convert a JavaScript object into a JSON string:<br>
            <br>
            <b>JSON.stringify()</b> Transform any JavaScript Object into JSON<br>
            <b>JSON.parse()</b> gives a JavaScript Object, we can access his properties. (Transform JSON String into a JS object)<br>
            <br>

        </p>
    </div>


    <div class="col-6 text-start align-middle p-4">
        <h4>AJAX request and remote data</h4>
        <b>JSON data from a REST Web Service</b>
        <br><br>
        <a href="https://jsonplaceholder.typicode.com/" target="_blank" alt="Free fake API for testing and prototyping">JSONplaceholder free fake API (REST)</a>
        <br><br>
        <p>Working with remote data suing XhR2</p>
        <button onclick="search();">Get a remote list of users' names and emails</button>
        <br><br>
        <div id="users"></div>

    </div>

</div>

<br><br><br>

<div class="row">
    <h3>JSON</h3>

    <div class="col-6 text-start align-middle p-4">
        <h4>Fetch() API</h4>
        <br><br>
        <a href="https://javascript.info/fetch-api" target="_blank" alt="Fetch api documentation">Fetch API documentation</a>
        <br><br>
        <button onclick="search2();">Get remote list of users' names and emails using the fetch API</button>
        <div id="users2"></div>
    </div>


    <div class="col-6 text-start align-middle p-4">
        <h4>LocalStorage API</h4>
        <br><br>
        <a href="https://javascript.info/localstorage" target="_blank" alt="LocalStorage api documentation">LocalStorage API documentation</a>
        <br><br>

        // store data<br>
        localStorage.lastName = "Bunny";<br>
        localStorage.firstName = "Bugs";<br>
        localStorage.location = "Earth";<br>
        // retrieve data<br>
        var lastName = localStorage.lastName;<br>
        var firstName = localStorage.firstName;<br>
        var location = localStorage.location;<br>

    </div>

</div>


<script src="../lib/js/mod5_03.js"></script>
