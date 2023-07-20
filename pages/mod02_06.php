<?php
?>

<div class="row ms-3">
    <h1>Form Event</h1>
    <a href="https://www.coderepublics.com/JavaScript/JavaScript-form-events.php" target="_blank">Documentation Code republic</a>
    <a href="https://linuxhint.com/user-interface-events-javascript-2/#1" target="_blank">Documentation LinuxHint</a>

    <div class="col-6 text-center align-middle">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" oninput="validateName(this)" required>
            <br>

        </div>
    </div>

    <div class="col-6 text-center align-middle">
        <div>
            <p class="nameTyped">

            </p>
        </div>

    </div>

</div>

<br><br>

<div class="row ms-3">
    <h3>Simple input field validation using the 'input' event</h3>

    <div class="col-6 text-center align-middle">
        <p>Just type a name in the input field and see what happens! <span style="color:red"> TRY TO TYPE A "!" too</span></p>
        <label>
            <span>Name (required):</span>
            <input type="text"
                   name="nom"
                   maxlength="32"
                   required
                   onkeyup = "validateName2(this)">
        </label>


    </div>

    <div class="col-6 text-center align-middle">
        <br><br>
        <p>
            <span id="keyTyped"></span>
        </p>


    </div>

</div>
<br><br>

<div class="row ms-3">
    <h3>Simple input range field validation using the 'input' event</h3>

    <div class="col-6 text-center align-middle">
        <label for="customRange1" class="form-label">Example range</label>
        <input type="range" class="form-range" id="customRange1"  min=1
               max=12
               step=0.1 oninput="doSomething(this)">
    </div>


    <div class="col-6 text-center align-middle">
        <p id="sliderValue">
            Value :
        </p>
    </div>



</div>
<br><br><br>
<div class="row ms-3">
    <h3>Simple input type=color use</h3>

    <div class="col-6 text-center align-middle">

        <label for="exampleColorInput" class="form-label">Color picker</label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" onchange = "changePageBackgroundColor(this.value);">

    </div>


    <div class="col-6 text-center align-middle">
        <p id="choosedColor">

        </p>
    </div>

</div>
<br><br><br>
<div class="row-6 align-middle">
    <img src="../images/events.png" alt="events" class="img-fluid">

</div>


<script src="../lib/js/mod2_06.js"></script>
