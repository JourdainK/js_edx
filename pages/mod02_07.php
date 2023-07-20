<?php
?>
<style>
    .node {
        cursor: pointer;
    }

    .node circle {
        fill: #fff;
        stroke: red;
        stroke-width: 3px;
    }

    .node text {
        font: 24px sans-serif; /* Font size */
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 2px;
    }
</style>


<div class="row ms-3">
    <h1>DOM API</h1>

    <div class="col-6 text-center align-middle">
        <button class="btn btn-primary" id="buttonBorder">
            Add a border to the first image
        </button>
        <br><br>
        <button class="btn btn-primary" id="buttonResize"">
            Resize all images
        </button>
        <br>
        <p>Click one of the buttons above!</p>
    </div>


    <div class="col-6 text-center align-middle">
        <img src="https://mainline.i3s.unice.fr/mooc/Ntvj5rq.png"
             id="img1"
             width=200 alt="image #1">
        <img src="https://mainline.i3s.unice.fr/mooc/yiU59oi.gif"
             width=200 alt="image #2">
        <img src="https://mainline.i3s.unice.fr/mooc/6FstYbc.jpg"
             width=200 alt="image #3">
        <img src="https://mainline.i3s.unice.fr/mooc/L97CyS4.png"
             width=200 alt="image #4">
    </div>

</div>

<br><br><br>
<div class="row ms-3">

    <p> Bla bla bla all the &ltp&gt are now red </p>

</div>

<br><br><br>
<div class="row ms-3">
    <h3></h3>

    <div class="col-6 text-center align-middle">
        <ul id="fruits">
            <li>
                <input type="checkbox" name="fruit" value="apples">Apples
            </li>
            <li>
                <input type="checkbox" name="fruit" value="oranges">
                Oranges
            </li>
            <li>
                <input type="checkbox" name="fruit" value="bananas">
                Bananas
            </li>
            <li>
                <input type="checkbox" name="fruit" value="grapes">
                Grapes
            </li>
        </ul>
    </div>


    <div class="col-6 text-center align-middle">
        <button id="checkedItems">Show Checked items</button>
        <button id="resetItems">Reset list</button>
        <br>
    </div>

</div>

<br><br><br>
<div class="row ms-3">

    <p> Bla bla bla all the &ltp&gt are now red </p>

</div>

<br><br><br>
<div class="row ms-3">

    <div class="col-6 text-center align-middle">
        <h3>Click on the picture to change it</h3>
        <img src="../images/pic01.jpg" class="img img-fluid" width="50%" id="changePic" >
    </div>


    <div class="col-6 text-center align-middle">
        <h3>Adding new elements to the DOM</h3>
        <label for="newNumber">Please enter a number</label>
        <input type="number" id="newNumber" value=0>
        <button id="addItem">Add to the list</button>
        <br>
        <button id="resetItemList">Reset list</button>


        <p>You entered:</p>
        <ul id="numbers"></ul>
    </div>

</div>

<br><br><br>

<div class="row">
    <div class="col-6 text-center align-middle">
        <p id="text" ondragstart="drag(this, event)">Drag and drop browser images in a zone:</p><br/>
        <img src="https://mainline.i3s.unice.fr/mooc/ABiBCwZ.png" id="cr" alt="Logo Chrome">
        <img src="https://mainline.i3s.unice.fr/mooc/n7xo93U.png" id="ff" alt="Logo Firefox">
        <img src="https://mainline.i3s.unice.fr/mooc/ugUmuGQ.png" id="ie" alt="Logo IE">
        <img src="https://mainline.i3s.unice.fr/mooc/jfrNErz.png" id="op" alt="Logo Opera">
        <img src="https://mainline.i3s.unice.fr/mooc/gDJCG0l.png" id="sf" alt="Logo Safari"><br/>
    </div>

    <div class="col-6 text-center align-middle">


        <div class="box text-center align-middle" ondragover="return false" ondrop="drop(this, event)">
            <p>Cool Web browsers</p>
        </div>

        <div class="box text-center align-middle" ondragover="return false" ondrop="drop(this, event)">
            <p>Web browsers from the 90's</p>
        </div>

    </div>

</div>


<script src="../lib/js/mod2_07.js"></script>
<script src="../lib/js/mod_2_07_2_DOM.js"></script>