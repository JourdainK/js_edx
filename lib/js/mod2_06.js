window.onload = init;

function init() {

}

function validateName(field){
    var name = field.value;
    var output = document.querySelector('.nameTyped');
    if(name.length < 4){
        output.innerHTML = "<br>Username too short";
    }
    else{
        output.innerHTML = "<br>Valid username : " + name;
    }

}

function validateName2(inputField) {
    // this is the input field text content
    var key = inputField.value[inputField.value.length - 1];

    // get the output div
    var output = document.querySelector('#keyTyped');
    // display the value typed in the div
    output.innerHTML = "Valid key: " + key;

    // You can do validation here, set the input field to
    // invalid is the name contains forbidden characters
    // or is too short
    // for example, let's forbid names with length < 5 chars
    if (key === "!") {
        output.innerHTML = "This key is forbidden!";
        // remove the forbidden char
        // current typed value
        var name = inputField.value;
        // we use the substring JavaScript function
        // to remove the last character
        // first parameter = start index
        // second = last index
        inputField.value = name.substring(0, name.length - 1);
    }
}

function doSomething(inputField) {
    var key = inputField.value;

    var output = document.querySelector('#sliderValue');
    output.innerHTML = "Slider value: " + key;
}

function changePageBackgroundColor(color){
    document.body.style.backgroundColor = color;
    var output = document.querySelector('#choosedColor');
    output.innerHTML = "Choosed color: " + color;
}