// differents events : type, target, preventDefault(), stopPropagation(), stopImmediatePropagation()...

//prevent default menu (right click) from showing up

var menu = document.querySelector("#context-menu");
var menuIsVisible = false;

/* to attache a context menu to all divs, you can do this:

var divs = document.querySelectorAll(".div");

divs.forEach(function(d) {
    addContextMenu(d);
});
*/

var div1 = document.querySelector("#div1");

addContextMenu(div1);

// Clicking anywhere on the window toggle the menu off
window.addEventListener('click', toggleMenuOff);

function addContextMenu(elem) {
    elem.addEventListener("contextmenu", function(e) {
        //console.log("contextmenu activated");
        e.preventDefault();
        toggleMenuOn();
        positionMenu(e);
    });
}

function toggleMenuOn() {
    if(!menuIsVisible) {
        menuIsVisible = true;
        menu.classList.add("context-menu--active");
    }
}

function toggleMenuOff() {
    if(menuIsVisible) {
        menuIsVisible = false;
        menu.classList.remove("context-menu--active");
    }
}


function positionMenu(e) {
    // Mouse position is relative to the element clicked

    // We make the coords absolute in the page
    var clickCoordsX = e.pageX;
    var clickCoordsY = e.pageY;


    var menuWidth = menu.offsetWidth + 1;
    var menuHeight = menu.offsetHeight + 1;

    var elementWidth = e.target.innerWidth;
    var elementHeight = e.target.innerHeight;

    if ((elementWidth - clickCoordsX) < menuWidth) {
        menu.style.left = elementWidth - menuWidth + "px";
    } else {
        menu.style.left = clickCoordsX + "px";
    }

    if ((elementHeight - clickCoordsY) < menuHeight) {
        menu.style.top = elementHeight - menuHeight + "px";
    } else {
        menu.style.top = clickCoordsY + "px";
    }
}

// Actions called when a menu item is choosen

function menuItem1() {
    console.log('learn');
    toggleMenuOff();
}

function menuItem2() {
    console.log('clear');
    toggleMenuOff();
}
//instead of <body onload ="init();"> in the HTML file
window.onload = init;

function init() {
    console.log('init done');

}

//getting info about the event in the console
let b = document.querySelector('#inInit');
//getting info about the event in the console
b.addEventListener('click', function(evt) {
    console.log('pos of the mouse x = ' + evt.clientX + '\t y = ' + evt.clientY);
    var aim = document.querySelector('#mouseInfo');
    aim.innerHTML += 'pos of the mouse x = ' + evt.clientX + '\t y = ' + evt.clientY + '<br>';
});


//event about the page life cycle : load, resize, scroll, unload ...

//resize example
window.onload = resize;
window.onresize = resize;

function resize(evt) {
    console.log("resize");
    var pageSizeSpan = document.querySelector('#pageSize');
    pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;

    // screen size
    var screenSizeSpan = document.querySelector('#screenSize');
    screenSizeSpan.innerHTML = "Width: " + screen.width + " Height: " + screen.height;

}



