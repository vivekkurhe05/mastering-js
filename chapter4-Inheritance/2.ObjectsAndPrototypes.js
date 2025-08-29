/**
 * There are two ways to create objects in JS
 * 1. The first is based on the literal notation.
 * 2. The second is based on the constructor function.
 * 
 * In both cases, we created a derived object - an object derived from an instance of the built-in
 * Object() constructor. Every object created using the literal notation or a constructor inherits all properties
 * and methods of an instance of the empty object.
 * 
 * We can verify it by trying to call the toString() method:
 */

var person = {name:"John", surname:"Smith"};
console.log(person.toString()); // result: "[object Object]"