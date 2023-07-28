//before 2015 (ES6) costructor function - template
function Hero(name, side) {
    this.name = name;
    this.side = side;
    this.describe = function () {
        return this.name + ' is ' + this.side;
    }

}

var hero1 = new Hero('Luke', 'good');
console.log(hero1.describe());

var hero2 = new Hero('Vader', 'bad');
console.log(hero2.describe());

//after 2015 (ES6) class - template

class Heroes {
    constructor(name,side) {
        this.name = name;
        this.side = side;
        Heroes.numberCreated++;
    }

    describe() {
        return this.name + ' is ' + this.side;
    }
    attack(hisEnemy) {
        return this.name + ' is attacking ' + hisEnemy.name;
    }

    static getNumberCreated() {
        return Heroes.numberCreated;
    }
}

Heroes.numberCreated = 0;

console.log('---------Creating with classes----------');
var hero3 = new Heroes('Luke', 'good');
console.log(hero3.describe());

var hero4 = new Heroes('Vader', 'bad');
console.log(hero4.describe());

console.log('---------Interaction with method of the Heroes class----------');
console.log(hero4.attack(hero3));


//static properties and methods
console.log('---------Static properties and methods----------');
console.log('heroes created : '+Heroes.getNumberCreated());


//setters and getters

class Person {
    constructor(givenName, familyName) {
        this.givenName = name;
        this._familyName = familyName;
    }

    get name() {
        return this.givenName;
    }

    set name(newName) {
        this.givenName = newName;
    }

    get familyName() {
        return this._familyName.toUpperCase();
    }

    set familyName(newFamilyName) {
        this._familyName = newFamilyName;
    }

    talk() {
        return 'Hi, my name is ' + this.name + ' ' + this.familyName;
    }
}

var person1 = new Person('John', 'Doe');
console.log(person1.talk());
person1.familyName= 'Smith';
console.log(person1.talk());

//comparing objects
var originalObject = { name:'John', age: 30 };

var copy = originalObject;

console.log('Comparing Objects');
console.log(originalObject === copy);

var anotherObject = { name:'John', age: 30 };

console.log('Comparing Objects with the same properties');
console.log(originalObject === anotherObject);

//those objects are not the same, because they are different instances





