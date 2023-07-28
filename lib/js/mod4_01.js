window.onload = init;


let book1 = {
    title: "Le Seigneur des Anneaux",
    published: 1954,
    author: {
        name: "J.R.R. Tolkien",
        country: "Royaume-Uni",
        birth: 1892,
        death: 1973
    }
};

console.log(book1.author.name);
console.log(book1['title']);
console.log(book1);
console.log('--------Author country, 2 different way----------');
console.log(book1.author.country);
console.log(book1.author['country']);


let dog1 = {
    name: "Rex",
    bark: function() {
        console.log("Woof!");
        alert("Woof! a function inside an object");
    }
}

dog1.bark();


let darVador = {
    name: "Darth Vader",
    job: "Sith Lord",
    talk: function() {
        console.log('talk function ');
        return "Luke, I am your father!";
    },
    describeYourself: function() {
        console.log('describeYourself function ');
        return "I am " + this.name  + " a " + this.job;
    }
}

console.log(darVador.talk());
console.log(darVador.describeYourself());


console.log('adding properties to an object after it has been created');
darVador.age = 45;
console.log(darVador.age);

console.log('Result');
console.log(darVador);

//deleting properties
console.log('deleting properties');
delete darVador.age;
console.log(darVador.age);
console.log(darVador);


//rework of previous code into object with methods
var canvas, ctx, w, h;
var mousePos;

var player = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: 'red',
    move: function(x, y) {
        this.x = x;
        this.y = y;
    },
    draw: function(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }
}



function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;
    canvas.addEventListener('mousemove', mouseMoved);
     mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, w, h);
    player.draw(ctx);
    if(mousePos !== undefined) {
        player.move(mousePos.x, mousePos.y);
    }
    requestAnimationFrame(mainLoop);
}

function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
