/**
 * A prototype is an object that acts as a template for another object. We have no classes in JS, so features
 * are shared between objects through other objects taken as reference. In other words, if we need an object
 * that is similar to an existing object A, we create a new object B saying that its prototype is the existing
 * object A. This is the basic mechanism of JavaScript's inheritance.
 * 
 * All objects in JS have a prototype, including functions. When we create an object using the literal notation, 
 * the prototype of the new object is the empty object {}. When we create an object using a constructor function, 
 * the prototype of the new object is the prototype of the constructor function.
 */

function ObjectAPerson() {
    this.name = "";
    this.surname = "";
}

function ObjectBProgrammer() {
    this.knownLanguage = [];
}

ObjectBProgrammer.prototype = new ObjectAPerson();

var programmer = new ObjectBProgrammer();
programmer.name = "Vivek";
programmer.surname = "Kurhe";
programmer.knownLanguage.push("JavaScript");
console.log(programmer)
var b = Object.getPrototypeOf(ObjectBProgrammer);
console.log(b.isPrototypeOf(ObjectBProgrammer));
