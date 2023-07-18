
window.onload = init;
window.onkeydown = processKeyDown;

function init() {
    //https://css-tricks.com/snippets/javascript/javascript-keycodes/#keycode-values
    //ArrowLeft pressed event
    window.addEventListener('keydown',function(event){
       //keyCode is deprecated , now using .key or .code
        if(event.key === 'ArrowLeft'){
           let aimText = document.querySelector('#leftKey');
              aimText.innerHTML = 'left arrow pressed !';
       }

        if(event.key === 'Shift') {
            let aimText = document.querySelector('#shiftKey');
            aimText.innerHTML = 'shift key pressed !';
        }

    });
}


function processKeyDown(evt) {
    var keys = document.querySelector('#keys');

    keys.innerHTML += "keypress: " + evt.key +
        " code: " + evt.keyCode + " Modifiers : ";

    var modifiers = "";

    if(event.shiftKey)
        modifiers += "SHIFT ";

    if(event.altKey)
        modifiers += "ALT ";

    if(event.ctrlKey)
        modifiers += "CTRL ";

    if(modifiers === "")
        modifiers = "NONE";

    keys.innerHTML += modifiers + "<br>";

    let codes = document.querySelector('#codes');
    codes.innerHTML += "key = " + evt.key + "<br>";
    codes.innerHTML += "code = " + evt.code + "<br><br>";

}

