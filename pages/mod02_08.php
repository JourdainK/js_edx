<?php
?>
<br><br><br>
<div class="row ms-3">
    <h3>Drawing</h3>

    <div class="col-6 text-center align-middle">
        <canvas id="canvasExample" width="400" height="400">

        </canvas>
    </div>


    <div class="col-6 text-center align-middle">
        <?php echo "ctx.fillStyle = 'red';<br>
    ctx.fillRect(10,10,100,100);<br>

    ctx.fillStyle = 'cyan';<br>
    ctx.fillRect(120,10,50,50);<br><br>

    //wireframe rectangle<br>
    ctx.strokeStyle = 'green';<br>
    ctx.lineWidth = 5;<br>
    ctx.strokeRect(120,120,100,100);<br><br>
    // fill circle, will use current ctx.fillStyle<br>
    ctx.beginPath();<br>
    ctx.arc(380, 180, 10, 0, 2*Math.PI);<br>
    ctx.fill();<br><br>

    // some text<br>
    ctx.fillStyle = 'purple';<br>
    ctx.font = '20px Arial';<br>
    ctx.fillText('Hello!', 320, 220);" ?>

    </div>

</div>

<br><br><br>
<div class="row ms-3">
    <h3>Animation 2</h3>

    <div class="col-6 text-center align-middle">
        <canvas id="canvasExample2" width="400" height="400">

        </canvas>
    </div>


    <div class="col-6 text-center align-middle">
        <p>Simple rectangle moving</p>
        <br>
        <p>
            A typical animation loop does the following at regular intervals:
            <br>
            <br>Clear the canvas
            <br>Draw graphic objects / shapes
            <br>Move graphic shapes / objects
            <br>Go to step 1
            <br><br>
            Optional steps can be:
            <br><br>
            <br>Look at the keyboard / mouse / gamepad if we need to do something according to their status (i.e. if the left arrow is pressed: move the player to the left)
            <br>Test collisions: the player collided with an enemy, remove one life
            <br>Test game states: if there are no more lives, then go to the "game over" state and display a "game over" menu.
        </p>
    </div>

</div>



<br><br><br>
<div class="row ms-3">
    <h3>Animation 3 et 4</h3>

    <div class="col-6 text-center align-middle">
        <h4>Moving robot</h4>
        <canvas id="canvasExample3" width="400" height="400">

        </canvas>
    </div>


    <div class="col-6 text-center align-middle">
        <h4>Bouncing ball</h4>
        <canvas id="canvasExample4" width="400" height="400">

    </div>

</div>

<div class="row-8">
    <canvas id="canvasExample5" width="400" height="400">

</div>


<script src="../lib/js/mod2_8.js"></script>