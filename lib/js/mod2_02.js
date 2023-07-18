//events : mouse position(x,y),button pressed, key pressed, mouse wheel, window resize...
//event listener: function that performs an action based on an event. It waits for an event to happen.
//event handler: the code that runs in response to an event.
//event object: contains information about the event, and the element it happened upon.
//event delegation: putting the listener on one of the parent elements and using logic inside the event handler to target the element that we actually want that event to happen on.
//event bubbling: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//event capturing: the event goes down to the element, then up to the ancestors.
//event propagation: event bubbling and event capturing together.
//event loop: takes callback functions from the message queue and puts them in the call stack to be executed.

//classic version
/*
addEventListener('click', processClick);

function processClick(event) {
    var aim = document.querySelector('#callbck');
    aim.innerHTML += "page clicked<br>";
}

 */


//anonymous function version
addEventListener('click', function(evt) {
    var aim = document.querySelector('#anonymousFunction');
    aim.innerHTML += "page clicked<br>";
    //removing the event listener after having clicked once !!!
    removeEventListener('click', arguments.callee);
});

window.onclick = function(evt) {
    var aim = document.querySelector('#anonymousFunction');
    aim.innerHTML += "page clicked v2<br>";
};

function processClic(){
    var aim = document.querySelector('#buttonExample');
    aim.innerHTML += "button clicked, used onclick=\"\" <br>";
}

//get reference to the button
let buttonExample = document.querySelector('#selectorExample');

//add event listener
buttonExample.addEventListener('click', addTxtClick);

function addTxtClick(){
    let aim = document.querySelector('#slctExmp');
    aim.innerHTML += "button clicked, used addEventListener <br> and querySelector <br> then removing the Event listener when it has been clicked once<br>";
    buttonExample.removeEventListener('click', addTxtClick);
}





