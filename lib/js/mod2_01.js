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


