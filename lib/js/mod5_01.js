var a = 1;
console.log(a);
console.log(window.a);

let z = 44;
console.log(z);
console.log('window.z : ');
console.log(window.z);

document === window.document; // true

navigator === window.navigator; // true

parseInt('123 ships'); // 123
window.parseInt('123 ships');

prompt === window.prompt; // true

window.addEventListener === addEventListener; // true

let t = [1, 2, 3];
console.log('t as an array :');
console.log(t);
console.log('t.toString() :');
console.log(t.toString());

let p =  {
    name: 'John',
    age: 32
}

console.log('p as an object :');
console.log(p);
console.log('p.toString() :');
console.log(p.toString());



var a = [8, 4, 9, 2];
console.log('a :');
console.log(a);
console.log('a.toString() :');
console.log(a.toString());
console.log('a.length :');
console.log(a.length);
console.log('a.sort() :');
a.sort();
console.log(a.sort());

var b = [8, 4, 9, 2];
console.log('b :');
console.log(b);
console.log('Modifying b length to 3 :');
b.length = 3;
console.log('b :');
console.log(b);

b.push('test');
console.log('b.push(\'test\') :');
console.log(b);
b.pop();
console.log('b.pop() :');
console.log(b);

console.log('b.join(\'-\') :');
console.log(b.join('- - '));

c = b.slice(1, 3);
console.log('c = b.slice(1, 3) :');
console.log(c);

c.splice(1, 0, 'a', 'b');
console.log('c.splice(1, 0, \'a\', \'b\') :');
console.log(c);

decimalNumber = new Number(1232.4568);

console.log('decimalNumber :');
console.log(decimalNumber);
console.log('decimalNumber.toFixed(1) :');
console.log(decimalNumber.toFixed(1));
console.log('decimalNumber.toExponential(1) :');
console.log(decimalNumber.toExponential(1));


var word = 'Hello';
console.log('word :');
console.log(word);
word[2] = 'a';
console.log('word :');
console.log(word);

//string are immutable

var secondeWord = word + ' World';
console.log('secondeWord :');
console.log(secondeWord);
console.log(secondeWord.toUpperCase());
//chain methods
console.log(secondeWord.charAt(2).toUpperCase());

console.log('secondeWord.substring(2, 5) :');
console.log(secondeWord.substring(2, 5));

console.log('secondeWord.slice(2, 5) :');
console.log(secondeWord.slice(2, 5));

console.log('secondeWord.split(W)');
console.log(secondeWord.split('W'));

var rdn = Math.random();
console.log('rdn :');
console.log(rdn);

var rdn2 = 100* Math.random();
console.log('rdn2 :');
console.log(rdn2);
console.log(Math.round(rdn2));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('number minimum :');
console.log(Math.min(...numbers));
console.log('number maximum :');
console.log(Math.max(...numbers));

var date = new Date();
console.log('date :');
console.log(date);

var date2 = new Date(2018, 11, 24);
console.log('date2 :');
console.log(date2);