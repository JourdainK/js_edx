window.onload = init;

function init() {
    // we're sure that the DOM is ready
    // before querying it
    // this function runs once the page is loaded
    // add a shadow to all images
    // select all images
    var listImages = document.querySelectorAll("img");
    listImages.forEach(function(img) {
        // img = current image
        img.style.boxShadow = "5px 5px 15px 5px grey";
        img.style.margin = "10px";
    });

    var buttonBorder = document.querySelector("#buttonBorder");
    buttonBorder.onclick = addBorderToFirstImage;

    var buttonResize = document.querySelector("#buttonResize");
    buttonResize.addEventListener("click", resizeAllImages);

    //change all paragraphs to red
    var paragraph = document.querySelectorAll("p");
    paragraph.forEach(function(p) {
        p.style.color = "red";
    });

    var buttonCheckedItems = document.querySelector("#checkedItems");
    buttonCheckedItems.addEventListener("click", showCheckedItems);

    var buttonResetItems = document.querySelector("#resetItems");
    buttonResetItems.addEventListener("click", resetItems);

    var changePic = document.querySelector("#changePic");
    changePic.addEventListener("click", changePicture);

    var addListButton = document.querySelector("#addItem");
    addListButton.addEventListener("click", add);

    var resetListButton = document.querySelector("#resetItemList")
    resetListButton.addEventListener("click", resetItemsList);

    //dragging pictures ondragstart
    var cr = document.querySelector("#cr");
    cr.addEventListener("dragstart", function(evt) {
        drag(cr, evt);
    });

    var ff = document.querySelector("#ff");
    ff.addEventListener("dragstart", function(evt) {
        drag(ff, evt);
    });

    var ie = document.querySelector("#ie");
    ie.addEventListener("dragstart", function(evt) {
        drag(ie, evt);
    });

    var op = document.querySelector("#op");
    op.addEventListener("dragstart", function(evt) {
        drag(op, evt);
    });

    var sf = document.querySelector("#sf");
    sf.addEventListener("dragstart", function(evt) {
        drag(sf, evt);
    });



}

function addBorderToFirstImage() {
    // select the first image with id = img1
    var img1 = document.querySelector('#img1');

    // Add a red border, 3px wide
    img1.style.border = '3px solid purple';
}

function resizeAllImages() {
    // select all images
    var listImages = document.querySelectorAll("img");

    // change all their width to 100px
    listImages.forEach(function(img) {
        // img = current image
        img.width = 100;
    });
}

function showCheckedItems() {
    // all inputs that have been checked
    var listOfSelectedValues="";

    var list = document.querySelectorAll("#fruits input:checked");
    list.forEach(function(elm) {
        listOfSelectedValues += elm.value + " ";

        // get the li parent of the current selected input
        var liParent = elm.parentNode;
        // add the CSS class .checked
        liParent.classList.add("checked");
    });
    document.body.append("You selected: " + listOfSelectedValues);
}

function resetItems() {
    var list = document.querySelectorAll("#fruits input");
    list.forEach(function(elm) {
        // uncheck
        elm.checked = false;

        // remove CSS decoration
        var liParent = elm.parentNode;
        liParent.classList.remove("checked");
    });
}

function changePicture() {
    var img = document.querySelector("#changePic");
    img.src = "../images/pic02.jpg";
}

function add(){
    var val = document.querySelector("#newNumber").value;

    if(val !== undefined && val !== null && val !== ""){
        var ul = document.querySelector("#numbers");
        ul.innerHTML += "<li>" + val + "</li>";
    }
}

function resetItemsList() {
    document.querySelector("#numbers").innerHTML = "";
}

function drag(target, evt) {
    // When dragged, copy into the drag'n'drop clipboard
    // the id of the dragged elem (it's target.id)
    evt.dataTransfer.setData("browser", target.id);
}


function drop(target, evt) {
    // get the id of the element being dragged
    var id = evt.dataTransfer.getData("browser");

    target.appendChild(document.getElementById(id));
    // prevent default behavior
    evt.preventDefault();
}