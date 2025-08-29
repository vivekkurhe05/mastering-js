/**
 * We can use Object.preventExtensions() method in a constructor in order to avoid property addition both to the
 * constructor instances and the derived constructors. For example, we can define the Person() constructor as 
 * follows:
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    Object.preventExtensions(this);
}

/**
 * With this definition any derived constructor will not be able to add new properties:
 */

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

var dev = new Developer("Mario","Rossi","JavaScript");
console.log(dev);
Object.seal(dev);
delete dev.name;
console.log('Object after name property deletion')
console.log(dev);

/**
 * Note: We cannot add or remove members to a sealed object nor modify their configuration, we can still change
 * its members value.
 * 
 * If necessary, we can make the object immutable using the Object.freeze() method. This is an extreme measure
 * when we want that the structure of an object will not change and its members should be read-only.
 */

var person = new Person("John","Smith");
Object.freeze(person);

person.age = 32;
console.log(person.age) // undefined

person.name = "Mario"
console.log(person.name) // John

delete person.name; // false
console.log(person.name) // John

Object.defineProperty(person, "name", {
    get: function() {
        return "Mario"
    }
}) // exception