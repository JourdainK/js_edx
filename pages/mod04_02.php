<?php
?>


<br><br><br>

<div class="row">
    <h3>Classes</h3>

    <div class="col-6 text-start align-middle p-4">
        <p>
            Classes are a template for creating objects. They encapsulate data with code to work on that data.
            <br><br>
            Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
            <br><br>
            <h4>Check Script mod4_02 and console </h4>
            <br><br>
            Old way (function) vs new way (class)
        </p>

    </div>


    <div class="col-6 text-start align-middle p-4">
        <h4>Better to use classes nowadays !</h4>
        <p>
            One constructor per class !
            <br><br>
            the keyword function is not needed to defined methods inside the class
            <br>
            classes must be defined befre using them !
            <br>

        </p>

    </div>

</div>


<br><br><br>

<div class="row">

    <div class="col-6 text-start align-middle p-4">
    <h3>Creating objects with functions (factories)</h3>


        function getMousePos(event, canvas) {<br>
        var rect = canvas.getBoundingClientRect();<br>
        var mxx = event.clientX - rect.left;<br>
        var my = event.clientY - rect.top;<br>
        <br>
        return { // the getMousePos function returns an object. It’s a factory<br>
        x: mx,<br>
        y: my<br>
        }<br>
        }<br>



    </div>


    <div class="col-6 text-start align-middle p-4">
        <h3>Static properties and method</h3>
        <p>
            The static keyword defines a static method for a class.<br>
            <br>
            Static methods are called without instantiating their class<br>
            and can not be called through a class instance.<br>
            <br><br>
            Consequence: do not use instance properties in their body!<br>
            <br><br>
            Static methods are often used to create utility functions for an application (source: MDN).<br>
        </p>


    </div>

</div>


<br><br><br>

<div class="row">
    <h4>Comparing objects</h4>
    <div class="col-6 text-start align-middle p-4">


    </div>


    <div class="col-6 text-start align-middle p-4">


    </div>

</div>


<script src="../lib/js/mod4_02.js"></script>
