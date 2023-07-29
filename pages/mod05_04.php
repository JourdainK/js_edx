<?php
?>

<br><br><br>

<div class="row">
    <h3>Contact Manager</h3>

    <div class="col-6 text-start align-middle p-4">
        <p>List of contacts</p>
        <div id="contacts"></div>
    </div>


    <div class="col-6 text-start align-middle p-4">

        <form onsubmit="return formSubmitted();">
            <fieldset>
                <legend>Personal informations</legend>
                <label>
                    Name :
                    <input type="text" id="name" required>
                </label>
                <label>
                    Email :
                    <input type="email" id="email" required>
                </label>
                <br>
                <button>Add new Contact</button>
            </fieldset>
        </form>

    </div>

</div>


<script src="../lib/js/mod5_04.js"></script>
