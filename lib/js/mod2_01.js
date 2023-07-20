//boolean and logical opearators
var a = 10;
var b = 20;


if(a > 5 && b > 10){
    console.log("a is greater than 5 and b is greater than 10");
}

if(a > 5 || b < 30){
    console.log("a is greater than 5 or b is less than 30");
}

/*
        Equal ==
        Not equal !=
        Greater than >
        Greater than or equal >=
        Less than <
        Less than or equal to <=
        Strict equal ===
        Strict not equal !==
 */


var e = 5;
var c = 6;

if ((e === 5) || (e === 6))  { //the second part is never tested
    console.log('e is equal to 5 or equal to 6');
}

if ((e === 5) && (c === 6)) {  // second part is evaluated
    console.log('e  is equal to 5 and c is equal to 6');
}

if ((e === 15) && (c === 6)) {  // second part is never evaluated
    console.log('e  is equal to 5 and c is equal to 6');
} else {
    console.log('e not equal to 15 or c not equal to 6');
}

//Ternary operator can be read as if (min < 10) then max = min+10, else max = min.
// The "then" part is after the "?" and the "else" part is after the ":" part.
var max;
var min = 3;
max = (min < 10)? min+10 : min;

console.log('max = ' + max);

var cloudColor = 'grey';

var gear = '';

switch (cloudColor) {
    case 'green':
        gear = 'spacesuit';
        break;

    case 'black':
        gear = 'boots';
        break;

    case 'grey':
        gear = 'umbrella';
        break;

    case 'white':
        gear = 'jacket';
        break;

    default:
        gear = 'watch';
        break; // useless if in the last case
} // end of the switch statement

console.log('gear = ' + gear);

function quadraticEquation(a,b,c){
    var delta = b*b - 4*a*c;
    if(delta === 0){
        console.log('delta = ' + delta);
    }
    else{
        console.log('delta is not equal to 0\ndelta : ' + delta);
    }
}

quadraticEquation(1,2,3);
quadraticEquation(1,2,1);

var rnd = Math.round(Math.random() * 10);
console.log('rnd: ' + rnd);
function checkGuess() {


    var guess = parseInt(document.querySelector('#number').value);
    console.log('guess: ' + guess);

    var result = document.querySelector('#resultGuess');

    if (isNaN(guess)) {
        result.innerHTML = 'Please enter a valid number';
    } else if (guess === rnd) {
        result.innerHTML = 'You win';
    } else if (guess < rnd) {
        result.innerHTML = 'too low';
    } else {
        result.innerHTML = 'too high';
    }
}

function addNumbers(a,b){
    return a+b;
}

function displayInPage(){
    var sum = addNumbers(2,3);

    var resultSum = document.querySelector('#functionResult');

    resultSum.innerHTML = 'sum = ' + sum;
}
//call the function
displayInPage();

//function callback
//function that is passed as an argument to another function
//callback function: a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//higher order function: a function that receives another function as an argument, that returns a new function, or both.
function callbackFunction(){
    console.log('callback function');
}

function callCallback(callback){
    callback();
}

callCallback(callbackFunction);


//2nd callback example
window.addEventListener('click', processClick);

function processClick(event) {
    var aim = document.querySelector('#callbck');
    aim.innerHTML += "page clicked<br>";
}

// We could have written this, with the body of the callback as an argument of the addEventListener function
window.addEventListener('click', function(evt) {
    aim.innerHTML += "page clicked version 2<br>";
});










