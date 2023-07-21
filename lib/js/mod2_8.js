window.onload = init;
//anim 1
var canvas, ctx;
//anim 2
var canvas2, ctx2;
var rectX = 0;

//anim 3
var canvas3, ctx3 , w, h;
var xMonster = 0;
var yMonster = 0;
var monsterSpeed = 5;

//anim 4
var canvas4, ctx4, w2,h2;
var ball = {
    x: 100,
    y:100,
    radius: 15,
    color:'green',
    speedX:5,
    speedY:4
}

var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red'
}


//anim 5
var canvas5, ctx5, w3,h3;
var balls = [];

var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red'
}


//init after the DOM has been loaded
function init() {
    //animation
    canvas = document.querySelector('#canvasExample');
    //context is the object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.
    ctx = canvas.getContext('2d');
    drawRectangles();


    //animation 2
    canvas2 = document.querySelector('#canvasExample2');
    ctx2 = canvas2.getContext('2d');
    requestAnimationFrame(animate);

    //animation 3
    canvas3 = document.querySelector('#canvasExample3');
    ctx3 = canvas3.getContext('2d');
    w = canvas3.width;
    h = canvas3.height;
    mainLoop();

    //animation 4
    canvas4 = document.querySelector('#canvasExample4');
    ctx4 = canvas4.getContext('2d');
    w2 = canvas4.width;
    h2 = canvas4.height;
    mainLoop2();

    //animation 5
    canvas5 = document.querySelector('#canvasExample5');
    ctx5 = canvas5.getContext('2d');
    w3 = canvas5.width;
    h3 = canvas5.height;
    balls = createBalls(10);
    mainLoop3();

}

//animation
function drawRectangles() {
    ctx.fillStyle = 'red';
    ctx.fillRect(10,10,100,100);

    ctx.fillStyle = 'cyan';
    ctx.fillRect(120,10,50,50);

    //wireframe rectangle
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.strokeRect(120,120,100,100);77

    // fill circle, will use current ctx.fillStyle
    ctx.beginPath();
    ctx.arc(380, 180, 10, 0, 2*Math.PI);
    ctx.fill();

    // some text
    ctx.fillStyle = "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Hello!", 320, 220);

}

//animation 2
function animate(){
    //clear the canvas
    ctx2.clearRect(0,0,canvas2.width, canvas2.height);
    //then draw the rectangle
    ctx2.fillStyle = 'red';
    ctx2.fillRect(rectX,10,100,100);
    //move the rectangle
    rectX += 1;
    requestAnimationFrame(animate);
}

//animation 3
function mainLoop() {
    // clear the canvas
    ctx3.clearRect(0, 0, w, h);

    // draw the monster
    drawMonster(xMonster, yMonster);

    // move the monster
    xMonster += monsterSpeed;

    // check the vertical boundaries (make it bounce off the walls)
    if ((xMonster + 100 > w) || (xMonster < 0)) {
        monsterSpeed = -monsterSpeed;
    }

    requestAnimationFrame(mainLoop);
}

function drawMonster(x,y){
    // GOOD practice: save the context, use 2D trasnformations
    ctx3.save();
    // translate the coordinate system, draw relative to it
    ctx3.translate(x,y);

    // (0, 0) is the top left corner of the monster.
    ctx3.strokeRect(0, 0, 100, 100);
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx3.fillRect(20, 20, 10, 10);
    ctx3.fillRect(65, 20, 10, 10);

    // nose
    ctx3.strokeRect(45, 40, 10, 40);

    // mouth
    ctx3.strokeRect(35, 84, 30, 10);

    // teeth
    ctx3.fillRect(38, 84, 10, 10);
    ctx3.fillRect(52, 84, 10, 10);

    // GOOD practice: restore the context
    ctx3.restore();
}


function mainLoop2() {
    //clear the canvas
    ctx4.clearRect(0,0,w2,h2);
    //draw the ball
    drawFilledRectangle(player);
    drawFilledCircle(ball);

    //move the ball
    moveBall(ball);

    requestAnimationFrame(mainLoop2);
}

function drawFilledRectangle(rectangle) {
    //save the context, use 2D transformations
    ctx4.save();
    //translate the coordinate system, draw relative to it
    ctx4.translate(rectangle.x, rectangle.y);
    //draw the rectangle relative to the top left corner of the monster
    ctx4.fillStyle = rectangle.color;
    ctx4.fillRect(0, 0, rectangle.width, rectangle.height);
    ctx4.restore();
}

function drawFilledCircle(circle) {
    //save the context, use 2D transformations
    ctx4.save();
    //translate the coordinate system, draw relative to it
    ctx4.translate(circle.x, circle.y);
    //draw the circle relative to the top left corner of the monster
    ctx4.fillStyle = circle.color;
    ctx4.beginPath();
    ctx4.arc(0, 0, circle.radius, 0, 2*Math.PI);
    ctx4.fill();
    ctx4.restore();
}

function moveBall(b) {
    b.x += b.speedX;
    b.y += b.speedY;

    testCollisionBallWithWalls(b);
}

function testCollisionBallWithWalls(b) {
    // COLLISION WITH VERTICAL WALLS ?
    if((b.x + b.radius) > w) {
        // the ball hit the right wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = w - b.radius;
    } else if((b.x -b.radius) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = b.radius;
    }

    // COLLISIONS WTH HORIZONTAL WALLS ?
    // Not in the else as the ball can touch both
    // vertical and horizontal walls in corners
    if((b.y + b.radius) > h) {
        // the ball hit the right wall
        // change horizontal direction
        b.speedY = -b.speedY;

        // put the ball at the collision point
        b.y = h - b.radius;
    } else if((b.y -b.radius) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        b.speedY = -b.speedY;

        // put the ball at the collision point
        b.Y = b.radius;
    }
}

//last animation

function mainLoop3() {
    // 1 - clear the canvas
    ctx5.clearRect(0, 0, w, h);

    // draw the ball and the player
    drawFilledRectangle2(player);
    drawAllBalls(balls);

    // animate the ball that is bouncing all over the walls
    moveAllBalls(balls)

    // ask for a new animation frame
    requestAnimationFrame(mainLoop3);
}

function createBalls(n) {
    // empty array
    var ballArray = [];

    // create n balls
    for(var i=0; i < n; i++) {
        var b = {
            x:w/2,
            y:h/2,
            radius: 5 + 30 * Math.random(), // between 5 and 35
            speedX: -5 + 10 * Math.random(), // between -5 and + 5
            speedY: -5 + 10 * Math.random(), // between -5 and + 5
            color:getARandomColor(),
        }
        // add ball b to the array
        ballArray.push(b);
    }
    // returns the array full of randomly created balls
    return ballArray;
}

function getARandomColor() {
    var colors = ['red', 'blue', 'cyan', 'purple', 'pink', 'green', 'yellow'];
    // a value between 0 and color.length-1
    // Math.round = rounded value
    // Math.random() a value between 0 and 1
    var colorIndex = Math.round((colors.length-1)*Math.random());
    var c = colors[colorIndex];

    // return the random color
    return c;
}

function drawAllBalls(ballArray) {
    ballArray.forEach(function(b) {
        drawFilledCircle2(b);
    });
}

function moveAllBalls(ballArray) {
    // iterate on all balls in array
    ballArray.forEach(function(b) {
        // b is the current ball in the array
        b.x += b.speedX;
        b.y += b.speedY;

        testCollisionBallWithWalls(b);
    });
}

function drawFilledRectangle2(rectangle) {
    //save the context, use 2D transformations
    ctx5.save();
    //translate the coordinate system, draw relative to it
    ctx4.translate(rectangle.x, rectangle.y);
    //draw the rectangle relative to the top left corner of the monster
    ctx4.fillStyle = rectangle.color;
    ctx4.fillRect(0, 0, rectangle.width, rectangle.height);
    ctx4.restore();
}

function drawFilledCircle2(circle) {
    //save the context, use 2D transformations
    ctx5.save();
    //translate the coordinate system, draw relative to it
    ctx5.translate(circle.x, circle.y);
    //draw the circle relative to the top left corner of the monster
    ctx5.fillStyle = circle.color;
    ctx5.beginPath();
    ctx5.arc(0, 0, circle.radius, 0, 2*Math.PI);
    ctx5.fill();
    ctx5.restore();
}



