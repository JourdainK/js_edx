<?php
?>

<br><br><br>

<div class="row">

    <h3>Built-in JavaScript objects</h3>

    <div class="col-6 text-start align-middle p-4">
        <p>
            When this environment is a Web browser<br>
            (and this is the case for all examples we have seen in this course),<br>
            this global object is named window.<br>
            <br><br>
            The “global variables” defined with the keyword var are properties of this window object,<br>
            and we can say the same of predefined functions like prompt, alert, etc.<br>
            <br><br>
            However, at the top level of programs and functions,<br>
            let, unlike var, does not create a property on the global window object.<br>
        </p>

    </div>


    <div class="col-6 text-start align-middle p-4">
        <p>
            Prefined set of method and properties from the predifined object<br>
            <br><br>
            valueOf()	Returns the primitive value of the specified object<br>
            <br><br>
            toString()	Returns a string representing the specified object<br>
            <br><br>

        </p>

    </div>

</div>

<br><br><br>

<div class="row">


    <div class="col-6 text-start align-middle p-4">
        <h3>Arrays</h3>
        <p>
            var a = [1, 2, 3];<br>
            a.length; // 3<br>
            a.typeof; // object<br>
            a.push(4); // 4<br>
            a; // [1, 2, 3, 4]<br>
            a.pop(); // 4<br>
            a; // [1, 2, 3]<br>
            a.join(); // "1,2,3" //method creates and returns a new string by concatenating all of the elements in an array <br>
            <br><br><br>
            avoid making arrays with different types of elements<br>
            <br><br>
            slice()	Returns a shallow copy of a portion of an array into a new array object<br>
            <br><br>
            splice()	Adds and/or removes elements from an array<br>
            <br><br>

        </p>

    </div>


    <div class="col-6 text-start align-middle p-4">
        <h4>Other built-in objects</h4>
        <p>
            Number<br>
            String<br>
            Boolean<br>
            Date<br>
            RegExp<br>
            Error<br>
            Math<br>
            JSON<br>
            <br><br>
            <br><br>
            String useful methods<br>
            toUpperCase()	Converts a string to uppercase letters<br>
            toLowerCase()	Converts a string to lowercase letters<br>
            charAt()	Returns the character at the specified index (position)<br>
            indexOf()	Returns the position of the first found occurrence of a specified value in a string<br>
            lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string<br>
            <br><br>
            String are immutable<br>
        </p>

    </div>

</div>


<br><br><br>

<div class="row">


    <div class="col-6 text-start align-middle p-4">
        <h4>Math</h4>
        <p>
            Math.random()	Returns a random number between 0 and 1<br>
            Math.round(x)	Rounds x to the nearest integer<br>
            Math.min(x, y, z, ...)	Returns the number with the lowest value<br>
            Math.max(x, y, z, ...)	Returns the number with the highest value<br>

        </p>
    </div>


    <div class="col-6 text-start align-middle p-4">
        <h4>Dates</h4>
        <p>

        </p>

    </div>

</div>


<script src="../lib/js/mod5_01.js"></script>

