window.onload = init;

var table = document.querySelector("#myTable");

function init() {
    var insertButton = document.querySelector("#insertRow");
    var deleteButton = document.querySelector("#deleteFirstRow");

    insertButton.addEventListener("click", insertRow);
    deleteButton.addEventListener("click", deleteFirstRow);

}

function insertRow() {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
    cell3.innerHTML = "New Cell3";
}

function deleteFirstRow() {
    table.deleteRow(1);
}

function checkPasswords() {
    var password1 = document.querySelector("#password1");
    var password2 = document.querySelector("#password2");
    var message = document.querySelector("#confirmMessage");

    if (password1.value == password2.value) {
        message.innerHTML = "Passwords match";
    } else {
        message.innerHTML = "Passwords do not match";
    }
}