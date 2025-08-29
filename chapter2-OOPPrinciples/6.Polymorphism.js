/**
 * JavaScript implicitly supports Polymorphism
 */

function Person() {
    this.name = "Jane";
    this.surname = "Doe";
}

function Programmer() {
    this.knownLanguage = "";
}

Programmer.prototype = new Person();

function writeFullName(p) {
    console.log(p.name+" "+p.surname);
}

var a = new Person();
a.name = "John";
a.surname = "Smith";

var b = new Programmer();
b.knownLanguage = "JavaScript";

console.log(a);
writeFullName(a);
writeFullName(b);