//simple array
var myArray =  ['blue', 'red', 'green', 'yellow'];
var persons = [
    {name: 'John',familyName: 'Doe' ,age: 25},
    {name: 'Jane',familyName: 'Doe'  ,age: 30},
    {name: 'Jim',familyName: 'Done'  ,age: 28},
    {name: 'Jill',familyName: 'Done'  ,age: 32},
    {name: 'Jack',familyName: 'Doe'  ,age: 27}
];

printArray(myArray);

printArray(myArray.sort());

console.log('typeof myArray: ' + typeof myArray);

console.log('Array sorted by age: ');
console.log(persons.sort(compareByAge));

console.log('Usage of pop on array , delete the last element: ');
console.log(myArray.pop());
printArray(myArray);

myArray.splice(2, 0, 'purple');
console.log('Usage of splice on array , add element at index 2: ');
printArray(myArray);

//string Arrays
var myString = 'Hello';
console.log('myString: ' + myString);
console.log('myString.length: ' + myString.length);
myString[6] = '!';
console.log('adding a ! to myString: ' + myString);
console.log('myString.length: ' + myString.length);
myString = myString + ' World!';
console.log("concatenated ( myString + ' World!' ) : " + myString);
var add = 'Hi';
var to = ' there';
var result = add.concat(to);
console.log("concatenated ( add.concat(to) ) : " + result);


var s = 'Michel';

function removeChars(s, startIndex, numberOfCharsToRemove) {
    return s.substring(0, startIndex) +
        s.substring(startIndex + numberOfCharsToRemove);
}

// remove 3 consecutive chars from s, starting at index = 1
s = removeChars(s, 1, 3);

console.log(s); // will display "Mel" in the console



function replaceAt(s, index, character) {
    return s.substring(0, index) + character + s.substring(index+character.length);
}

var s2 = "JavaScript";
s2 = replaceAt(s2, 1, "o");

console.log(s2); // will display "JovaScript"

// it also works with a string instead of a simple char
s2 = replaceAt(s2, 0, "Coca");
console.log(s2); // Will display "CocaScript"




//functions


function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(i + ': ' + array[i]);
    }
}

function compareByAge(a, b) {
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
}

