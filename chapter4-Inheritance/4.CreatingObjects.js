/**
 * We can create an object without a prototype in the following way:
 */

var myObject = Object.create(null);
console.log(Object.getPrototypeOf(myObject)); // null
console.log(myObject.name); // undefined

/**
 * In this case, the myObject variable will contain an object without a prototype. It will not
 * inherit the empty object features, so it will not have toString() and other standard methods.
 * Object.getPrototypeOf() returns the properties and methods of inherited object. For example,
 */

var person = {
    name:"Vivek",
    surname: "Kurhe",
    getFullName: function() {
        return this.name+" "+this.surname;
    }
};

console.log(Object.getPrototypeOf(person));
var myObj = Object.create(person);
console.log(Object.getPrototypeOf(myObj));

myObj.age = "31";
myObj.lang = ["JavaScript", "Python"];
console.log(myObj);
myObj.age = "25";
console.log(myObj.name);