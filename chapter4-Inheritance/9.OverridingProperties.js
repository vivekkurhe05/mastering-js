/**
 * Property overriding is a common operation in JS. Every time we define a constructor that inherits from some 
 * other constructor, we are overriding the parent's properties. Let's consider again the Developer constructor
 * definition:
 */

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

Developer.prototype = new Person();
Developer.prototype.constructor = Developer;

/**
 * When we call the Person constructor through the apply() method, we are asking the parent object to replicate its 
 * properties on the Developer instance, identified by the this keyword. So, the Developer instance's name and 
 * surname properties are overriding the Person function's properties.
 * 
 * This makes sense, since we usually do not want to share properties with the parent. Each instance usually 
 * should have its own properties. So, the simplest way to override a parent property is redefine it in the child
 * construtor.
 * 
 * However, there are situations where a property can be conveniently shared among all instances of an object
 * constructor and all object children. By referring to our Person constructor, when we want to have a fullName
 * property whose value is dependent on the name and surname properties. We are talking about implementing the
 * getFullName() method functionality as a property. We can do it as follows:
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function() {return this.name+" "+this.surname;}
});

/**
 * Here we define a read-only property using Object.defineProperty() and attaching it to the Person function's
 * prototype. The fullName property will be available to any instance and will be inherited by derived constructors.
 * 
 * If we want to change the fullName property behaviour in the Developer constructor so that it attaches the Dev
 * title, we can proceed as in the following example:
 */

Object.defineProperty(Developer.prototype, "fullName", {
    get: function() {return "Dev "+this.name+" "+this.surname;}
});

/**
 * As we can see, we simply redefined the property using Object.defineProperty(). Here, we attached the fullName
 * property to the Developer prototype and changed the output of the get descriptor.
 * 
 * This allows us to have different values of the fullName property depending on the object's prototype.
 */

var johnSmith = new Person("John","Smith");
var marioRossi = new Developer("Mario","Rossi","JavaScript");

console.log(johnSmith.fullName);
console.log(marioRossi.fullName);