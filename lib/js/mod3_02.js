var a = ['Monday', 'Tuesday', 'Wednesday'];
var printArea  = document.querySelector('#days');

a.forEach(function(day) {
    // day is the current element
    printArea.innerHTML += day +
        "<br>"; // will display Monday, Tuesday, Wednesday
})

var persons = [
    {name:'Michel', age:51},
    {name:'Henri', age:20},
    {name:'Francois', age:29}
];

var people = document.querySelector('#ppl');

people.innerHTML += '<br><br>ForEach loop<br><br>';

persons.forEach(function(person,index, array) {
    people.innerHTML += person.name + ' is ' + person.age + ' years old<br>' +
        'index: ' + index + '<br>' + 'array size ' + array.length + '<br><br>';
});

people.innerHTML += '<br><br>For loop<br><br>';

for(let i=0; i < persons.length; i++) {
    people.innerHTML += persons[i].name + ' is ' + persons[i].age + ' years old<br>' +
        'index: ' + i + '<br>' + 'array size ' + persons.length + '<br><br>';
}

