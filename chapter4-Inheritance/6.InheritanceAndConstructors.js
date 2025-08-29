function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

// Here, we can see that the instance of Developer is not also considered also an instance of Person. We should
// fix this issue by explicitly assign a prototype the Developer() constructor:

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

var johnSmith = new Developer("John", "Smith", "JavaScript");
console.log(johnSmith instanceof Developer);
console.log(johnSmith instanceof Person);
console.log(johnSmith instanceof Object);