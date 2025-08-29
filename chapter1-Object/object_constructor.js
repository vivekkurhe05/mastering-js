var person = new Object();
person.name = "John";
person.surname = "Smith";

console.log(person);
console.log(person.constructor === Object); // true

var number = new Object(12);
var anotherNumber = new Object(3*2);
var string = new Object("test");
var person = new Object({name:"John", surname:"Smith"});
console.log(number);
console.log(anotherNumber);
console.log(string);
console.log(person);