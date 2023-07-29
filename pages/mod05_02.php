<?php
?>
<br><br><br>

<div class="row">


    <div class="col-6 text-start align-middle p-4">
        <h3>Tables</h3>
        <div class="text-center align-middle">
            <table id="myTable" class="table table-primary">
                <caption>A typical HTML table</caption>
                <tr>
                    <th scope="col">Given Name</th>
                    <th scope="col">Family Name</th>
                    <th scope="col">Age</th>
                </tr>
                <tr>
                    <td>Michel</td>
                    <td>Buffa</td>
                    <td>52</td>
                </tr>
                <tr>
                    <td>Dark</td>
                    <td>Vador</td>
                    <td>Unknown</td>
                </tr>
                <tr>
                    <td>Luke</td>
                    <td>Skywalker</td>
                    <td>Unknown</td>
                </tr>
            </table>
            <p>Click to add a new row</p>
            <button id="insertRow">Add a new row</button>
            <p>Click to delete the first row of the table</p>
            <button id="deleteFirstRow">Delete first row</button>

        </div>
    </div>


    <div class="col-6 text-start align-middle p-4">
        <h3>Forms</h3>
        <div class="text-center align-middle">
            <a href="https://www.w3.org/WAI/tutorials/forms/grouping/" alt="WAI information" target="_blank">WAI,
                grouping documentation</a><br>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
               alt="ARIA accessible rich internet application" target="_blank">MDN ARIA documentation</a>
            <br><br>
            <form class="myForm" onsubmit="return submitForm();">
                <fieldset>
                    <legend>Example use of the validation API: try to submit with different passwords, and with same
                        passwords
                    </legend>
                    <div class="mb-3">
                        <label for="password1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password1" oninput="checkPasswords()">
                    </div>
                    <div class="mb-3">
                        <label for="password2" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password2" oninput="checkPasswords()">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                    <p id="confirmMessage"></p>
                </fieldset>
            </form>
        </div>

    </div>

</div>


<script src="../lib/js/mod5_02.js"></script>
