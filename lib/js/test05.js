//object with attributes
var p = {
    givenName: 'John',
    familyName: 'Doe'
};

console.log(p.givenName);
console.log(p['givenName']);
console.log(p);

//common object : window, doucment, console, navigator, location, history, screen, etc.
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(navigator);

//arrays

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(daysOfWeek[0]);
console.log(daysOfWeek);
console.log(daysOfWeek.length);

//functions, always return a value
//implicit return, no return statement (return value is undefined)

function add(a, b) {
    return a + b;
}

var sum = add(1, 2);
console.log('somme : ' + sum);

//function returns NaN -> undefined +   undefined
console.log('somme ' + add());

// in a function, an array called arguments is available automatically
// it contains all the arguments passed to the function
function f(){
    return arguments;
}

console.log(f(1,2,3,4,5,"bip bap boop"));

function newSum() {
    var i, res = 0;
    var numberOfParameters = arguments.length;
    for (i = 0; i < numberOfParameters; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(newSum(1,2,3,4,5,6,7,8,9,10));

function buildTable(){
    addLine('John','Doe');
    addLine('Jane','Doe');
    addLine('Jack','Doe');
    addLine('Jill','Doe');
}

function addLine(firstName,lastName){
    var tableBody = document.querySelector('table');
    var newRow = tableBody.insertRow();
    var firstNameCell = newRow.insertCell();
    firstNameCell.innerHTML = firstName;
    var lastNameCell = newRow.insertCell();
    lastNameCell.innerHTML = lastName;
}

var divElement;


function changeStyle(){
    divElement = document.querySelector('#cssModif');
    console.log(divElement + ' add background color');
    divElement.style.backgroundColor = 'red';
    divElement.style.padding = '10px';
    divElement.style.border = '1px solid purple';
}

//Mario animation
var marioElement;
var currentImage = 0;
var leftPos = 0;

function moveMario(){
    marioElement = document.querySelector('#mario');
    drawMario(currentImage);
    currentImage = (currentImage + 1) % 3;
    leftPos += 5;
    if(leftPos > 400){
        leftPos = 0;
    }
}

function drawMario(indexImage){
    marioElement.style.marginLeft = leftPos + 'px';
    marioElement.style.width = '22px';
    marioElement.style.height = '32px';
    marioElement.innerHTML = "";
    marioElement.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
    marioElement.style.backgroundColor = "transparent";
    var offset = indexImage * 24;
    marioElement.style.backgroundPosition = offset + "px";
}



