<?php
?>

<div class="row" onload="plot();">
    <h2>Interactive function plotter</h2>

    <div class="col-6 text-center align-middle">
        <section id="plotSettings">
            <label for="xMin">xMin: </label>
            value: <input type=number id="xMin" value=0 step=0.5
                          oninput="plot();">
            <p></p>
            <label for="xMax">xMax: </label>
            value: <input type=number id="xMax" value=6.28 step=0.5
                          oninput="plot();">

            <p></p>
            <label for="yMin">yMin: </label>
            value: <input type=number id="yMin" value=-1 step=0.5
                          oninput="plot();">
            <p></p>
            <label for="yMax">yMax: </label>
            value: <input type=number id="yMax" value=1 step=0.5
                          oninput="plot();">
            <p></p>
            <label for="color">Color: </label>
            value: <input type=color id="color"
                          onchange="plot();">
            <p></p>
            <label for="function">Function to plot: </label>
            <input id="function" type="text"
                   value="sin(x)"
                   onchange="plot();">
            <p></p>
            <button onclick="plot();">Plot it!</button>

        </section>
    </div>

    <div class="col-6 text-center align-middle">
        <section id="plot" class="text-center align-middle">
            <div id="myFunction"></div>
        </section>
    </div>





    <script src="../lib/js/test03.js"></script>

</div>
