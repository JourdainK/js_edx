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

