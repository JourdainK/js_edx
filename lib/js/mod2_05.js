window.onload = init;

function init() {
    window.onclick = processClick;
    window.onmousemove = processMouseMove;
    var canvas = document.querySelector('#myCanvas');
    canvas.addEventListener('mousemove', processMouseMouve2);
}

function processClick(evt) {
    var clicks = document.querySelector('#clicks');
    var target = evt.target.id;

    if (target === "") {
        clicks.innerHTML += "<br>Click on the window, not on a particular element<br>";
    } else {
        clicks.innerHTML += "<br>Click on " + target + "<br>";
    }

    evt.stopPropagation()
}

function processMouseMove(evt) {
    var mousePositions = document.querySelector('#mousePositions');
    mousePositions = mousePositions.innerHTML = "client x = " + evt.clientX + "client y = " + evt.clientY + "<br> page x " + evt.pageX + " page y" + evt.pageY + "<br>";


    var mouseScreenPositions = document.querySelector('#mouseScreenPositions');
    mouseScreenPositions = mouseScreenPositions.innerHTML = "<br> screen x = " + evt.screenX + " screen y = " + evt.screenY + "<br>";
}

function processMouseMouve2(evt) {
    var mousePositions = document.querySelector('#mousePositions2');
    var rect = evt.target.getBoundingClientRect()
    var mouseX = evt.clientX - rect.left;
    var mouseY = evt.clientY - rect.top;

    mousePositions.innerHTML = "mouse pos X: " + mouseX +
        " mouse pos Y: " + mouseY +
        "<br>"
}

