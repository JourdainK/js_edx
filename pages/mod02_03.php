<?php
?>


<div class="row">
    <h3>Handling events</h3>
    <div class="col-6 text-center align-middle">
        <p>Using the preventDefault behavior for a personalized context menu</p>
        <div>
            <nav id="context-menu" class="context-menu">
                <ul class="context-menu__items">
                    <li class="context-menu__item" id="context-menu-learn" onclick="menuItem1();">
                        Learn
                    </li>
                    <li class="context-menu__item" onclick="menuItem2();">
                        Clear
                    </li>
                    <li class="context-menu__item" onclick="toggleMenuOff();">
                        Close
                    </li>
                </ul>
            </nav>
        </div>
        <p>Try to right click on this div:</p>
        <div id="div1" class="div">A Div with a context menu</div>
        <p> This one does not have a context menu attached, try also a right click: </p>
        <div id="div2" class="div">Another Div without a context menu</div>
    </div>

    <div class="col-6 text-center align-middle">
        <p>Get mouse position in the console when clicking the button under</p>
        <button type="button" class="btn btn-primary" id="inInit">click me</button>
        <p id="mouseInfo"> </p>
    </div>

</div>

<div class="row m-5">

    <div class="col-6 text-center align-middle">
        <h4>Onload and resize</h4>
        <p>This page uses <code>window.onresize = resize;</code> in the JS code  to execute the resize function. Try to change the size of your window now!</p>

        <p>Curent page size: <span id="pageSize"></span></p>
        <p>Screen size: <span id="screenSize"></span></p>

    </div>

    <div class="col-6 text-center align-middle">


    </div>

</div>

<script src="../lib/js/mod2_03.js"></script>
