var metallica = {
    name: 'Metallica', albums: [{name: "Master of Puppets", year: 1986},
        {name: "Black Album", year: 1991}]
};
console.log('Metallica var (object type):');
console.log(metallica);

var metallicaJSON = JSON.stringify(metallica);

console.log('Metallica JSON (string type):');
console.log(metallicaJSON);

console.log('MetallicaJSON.name : ' + metallicaJSON.name);
console.log('metallica.name : ' + metallica.name);

var obj = JSON.parse(metallicaJSON);
console.log('(back to object) obj : ');
console.log(obj);
console.log('obj.name : ' + obj.name);
console.log('obj.albums[0].name : ' + obj.albums[0].name);

var stringyfied = JSON.stringify(obj);
console.log('(back to JSON )stringyfied : ' + stringyfied);

//working with JSON remote data
function search(){
     var queryURL = "https://jsonplaceholder.typicode.com/users";
     var xhr = new XMLHttpRequest();
        xhr.open('GET', queryURL, true);
        xhr.onload = function (e) {
            var users = JSON.parse(xhr.response);
            displayUsersAsATable(users);
        }

        xhr.send();
}

function displayUsersAsATable(users){
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    users.forEach(function(currentUser) {
        var row = table.insertRow();
        row.innerHTML = "<td>"+ currentUser.name+ "</td><td>"
            + currentUser.email + "</td>";
    });

    usersDiv.append(table);
}

function search2() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
        .then(function (response) {
            // response.json() returns a json string,
            // returning it will convert it
            // to a pure JavaScript
            // object for the next then's callback
            return response.json();
        })
        .then(function (users) {
            // users is a JavaScript object here
            displayUsersAsATable2(users);
        })
        .catch(function (error) {
            console.log('Error during fetch: ' + error.message);
        });
}

function displayUsersAsATable2(users) {
    // users is a JavaScript object

    // empty the div that contains the results
    var usersDiv = document.querySelector("#users2");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    // iterate on the array of users
    users.forEach(function (currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });

    // adds the table to the div
    usersDiv.appendChild(table);
}



// store data
localStorage.lastName = "Bunny";
localStorage.firstName = "Bugs";

// retrieve data
var lastName = localStorage.lastName;
var firstName = localStorage.firstName;


console.log('localStorage : ');
console.log('lastName : ' + lastName);
console.log('firstName : ' + firstName);

