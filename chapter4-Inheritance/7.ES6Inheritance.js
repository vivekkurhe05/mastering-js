/**
 * The super keyword can be used in two ways:
 * 1. In a class constructor method, to call the parent constructor.
 * 2. Inside a method of a class, to use methods of the parent class.
 */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name+" "+this.surname;
    }
}

class Developer extends Person {
    constructor(name, surname, knownLanguage) {
        super(name, surname);
        this.knownLanguage = knownLanguage;
    }

    displayCompetency() {
        console.log(super.getFullName() + " knows " + this.knownLanguage);
    }
}

var johnSmith = new Developer("John", "Smith", "JavaScript");
console.log(johnSmith instanceof Developer);
console.log(johnSmith instanceof Person);
console.log(johnSmith instanceof Object);
console.log(johnSmith.displayCompetency());