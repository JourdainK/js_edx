<?php
?>

<div class="row ms-3">
    <h3>Mouse interactions 01</h3>

    <div class="col-6 text-center align-middle">
        <br><br><br><br>
        <canvas id="canvasExample01" width="400" height="400"></canvas>
        <p id="buttonPressed01">
            <br>0 -> left click<br>1 -> middle click<br>2 -> right click<br><br>
        </p>
    </div>


    <div class="col-6 text-center align-middle">
        <?php echo 'The different mouse events (reminder)<br>

In the last example, we saw how to detect the mouseup and mousedown events.<br>
<br>
There are other events related to the mouse:<br>
      <br><br>mouseleave: similar to mouseout, fired when the mouse leaves the surface of the element. The difference between mouseleave and mouseout is that mouseleave does not fire when the cursor moves over descendant elements, and mouseout is fired when the element the cursor moves to is outside the bounds of the original element or is a child of the original element.
      <br><br>mouseover: the mouse cursor is moving over the element that listens to that event. A mouseover event occurs on an element when you are over it - coming from either its child OR parent element, but a mouseenter event only occurs when the mouse moves from the parent element to the child element.
      <br><br>mousedown: fired when a mouse button is pressed.
      <br><br>mouseup: fired when a mouse button is released.
      <br><br>mouseclick: fired after a mousedown and a mouseup have occured.
      <br><br>mousemove: fired while the mouse moves over the element. Each time the mouse moves, a new event is fired, unlike with mouseover or mouseenter, where only one event is fired.
      <br><br>mousewheel: fired when the mouse wheel is rotated.'
        ?>
    </div>

</div>

<br><br><br>
<div class="row ms-3">
    <h3>Collision detection</h3>




    <div class="col-6 text-center align-middle">
        <div id="controls">
            <label for="nbBalls">Number of balls: </label>
            <input type="number" min=1 max=30
                   value=10 id="nbBalls"
                   oninput="changeNbBalls(this.value);">
            <p></p>
            <label for="colorChooser">Player color: </label>
            <input type="color" value='#FF0000'
                   oninput="changePlayerColor(this.value);" id="colorChooser">
            <p></p>
            <label for="selectColorOfBallToEat">Color of ball to eat: </label>
            <select onchange="changeColorToEat(this.value);" id="selectColorOfBallToEat">
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='green'>green</option>
            </select>
            <p></p>

            <label for="ballSpeed">Change ball speed: </label>
            - <input type="range" value='1'
                     min=0.1 max=3 step=0.1
                     oninput="changeBallSpeed(this.value);"
                     id="ballSpeed"> +
            <p></p>

        </div>
    </div>

    <div class="col-6 text-center align-middle">
        <canvas id="myCanvas"  width="400" height="400">
    </div>

</div>

<br><br><br>
<div class="row ms-3">
    <h3>Mouse interactions</h3>

    <div class="col-6 text-center align-middle">

    </div>


    <div class="col-6 text-center align-middle">

    </div>

</div>

<script src="../lib/js/mod2_09.js"></script>