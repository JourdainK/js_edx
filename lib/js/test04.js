//variables in javascript
//Javascript variables are weakly typed (unlike Java)
//Javascript does not allow you to declare a type for its variables

//primitive data types ( number, string, boolean, null, undefined)
// if the variable is null it is still defined
//var not in a function is global

var x = 10;


//complex data types ( object, array, function)

// object , defined by {}
var michel = { firstName : 'Michel', lastName : 'Buffa', age : 50, address : { street : 'rue de la paix', city : 'Paris' } };

// array, defined by []
var numbers = [1,2,3,4,5];

// function, defined by function keyword
function add(a,b) {
    return a+b;
}

// function, defined by function keyword
var add2 = function(a,b) {
    return a+b;
}

// function, defined by function keyword
var add3 = new Function('a','b','return a+b;');

//typeof operator is used to know the type of a variable
console.log('type of x is ' + typeof x);
console.log('type of michel is ' + typeof michel);
console.log('type of add is ' + typeof add);
console.log('type of add2 is ' + typeof add2);


//numbers integer, signed integer, decimal ...

var n = 1;

console.log('type of n is ' + typeof n);

//decimal , number with a decimal point
var n2 = 1.2324;

console.log('type of n2 is ' + typeof n2);


//scientific notation
var n3 = 1.2324e+2;
console.log('n3 = ' + n3);
console.log('type of n3 is ' + typeof n3);

var n4 = 1e1;
console.log('n4 = ' + n4);

var n5 = 2e+3;
console.log('n5 = ' + n5);


//octal notation, starting an integer with 0 (zero)

var octal1 = 010;
//010 equal 8, which means 1 * 8^1 + 0 * 8^0 = 8
console.log('octal1 = ' + octal1);
console.log('type of octal1 is ' + typeof octal1);


//hexadecimal notation, starting an integer with 0x (zero x)
//0xF3 = 15 * 16^1 + 3 * 16^0 = 243
var hexa1 = 0xF3;
console.log('hexa1 = ' + hexa1);
console.log('type of hexa1 is ' + typeof hexa1);


//special values
//Infinity, epresents all number values greater than 1.79769313486231570e+308 and -Infinity represents values smaller than -1.79769313486231570e+308.

var inf = 1/0;
console.log('inf = ' + inf);
console.log('type of inf is ' + typeof inf);


//NaN, not a number
var nan = 0/0;
console.log('nan = ' + nan);
console.log('type of nan is ' + typeof nan);

//In JavaScript numbers are represented as 64-bit floating point numbers.
//This means that there are no integers in JavaScript, only floating point numbers.
//floating point numbers are not precise, like in java
//0.1 + 0.2 = 0.30000000000000004
var f1 = 0.1;
console.log('f1 = ' + f1);
var f2 = 0.2;
console.log('f2 = ' + f2);
var f3 = f1 + f2;
console.log('f3 = ' + f3);
console.log('type of f3 is ' + typeof f3);


//operators
// +, -, *, /, %, ++, --, +=, -=, *=, /=, %=
// ==, ===, !=, !==, >, <, >=, <=, &&, ||, !
// &, |, ^, ~, <<, >>, >>>
