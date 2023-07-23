<?php
?>

<br><br><br>
<div class="row ms-3">
    <h3>APIs : Arrays</h3>
    <h3>Check the console (script mod3_01)</h3>

    <div class="col-6 text-center align-middle">
        <h4>Simple Arrays</h4>
        <p>
            <br>Different methods with the "." dot operator
            <br>
            var myArray = ['blue', 'red', 'green', 'yellow'];
            <br>
            myArray.length => 4
            <br>
            myArray[0] => 'blue'
            <br>
            myArray.push('purple'); => Add an element to the end of the array
            <br>
            myArray[myArray.length] = 'purple'; => Add an element to the end of the array
            <br>
            myArray.pop(); => Remove the last element of the array
            <br>
            myArray.sort(); => Sort the array, alphabetically
            <br><br><br>
            Sort on an array of object which have multiple properties
            <br>===> Make a function to compare the properties (see script)
            <br><br>
            The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
            <br>
            array.splice(start)
            array.splice(start, deleteCount)
            <br><br>
            myArray.splice(2, 0, 'purple'); => Add 'purple' at index 2
            <br><br><br>
            <h4>When using indexes, be careful not to leave "holes" in the array</h4>

        </p>

    </div>


    <div class="col-6 text-center align-middle">
        <h4>String Arrays</h4>
        <p>
            <br><br>
            String og arrays have some dedicated methods
            <br><br>
            You cannot add elements to strings using a non-existent index, you cannot use the push/pop methods for adding/removing  characters at the end of the string:
            <br><br>
            var myString = 'Hello';
            myString[5] = '!'; ==> WILL NOT WORK
            <br><br>
            You can't even modify a character using an index. Strings are "read only" when using brackets to access individual characters
            <br><br>
            You also can't remove characters using the array's splice method:
            <br><br>
            You can use the '+' operator to concatenate strings
            <br> Or use concat() method
            <br><br>

        </p>
    </div>

</div>

<script src="../lib/js/mod3_01.js"></script>