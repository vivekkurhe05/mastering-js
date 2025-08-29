// Object constructor

function Person() {
    this.name = "";
    this.surname = "";
    this.address = "";
    this.email = "";
}

// prototype keyword creates only single copy of the function with every new instance
Person.prototype.displayFullName = function () {
    return this.name + " " + this.surname;
}

var johnSmith = new Person();
johnSmith.name = "John";
johnSmith.surname = "Smith";

var marioRossi = new Person();
marioRossi.name = "Mario";
marioRossi.surname = "Rossi";

console.log(johnSmith.displayFullName());
console.log(marioRossi.displayFullName());

// object 2
var mankind = {

    Person: function(name, surname) {
        // 'use strict';
        this.name = name;
        this.surname = surname;
        this.displayFullName = function() {
            return this.name + " " + this.surname;
        }
    }
};

var johnDoe = new mankind.Person("John", "Doe");
console.log(johnDoe.displayFullName());