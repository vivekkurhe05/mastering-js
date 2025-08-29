/**
 * When creating a derived object, we usually want to give it a slightly different behaviour from parent object.
 * This new behaviour can be implemented by adding new methods or properties, but sometimes we need to redefine
 * a method or a property of the parent object. In this case, we are talking about overriding.
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function() {
    return this.name+" "+this.surname;
}

/**
 * Now, we want Developer inheriting from Person, but the getFullName() method should display the Dev prefix as 
 * title, as in Dev John Smith. We could create a new method, such as getFullName(), but it would be not intuitive
 * and redundant. Instead, we can override the getFullName() method as shown below.
 * 
 */

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

Developer.prototype = new Person();
Developer.prototype.constructor = Developer;
Developer.prototype.getFullName = function() {
    return 'Dev '+ Person.prototype.getFullName.call(this);
}

/**
 * The highlighted code shows how to override the getFullName() method of the Person() constructor. We attach to 
 * the Developer prototype property a method with the same name. In this case, the overriding method internally
 * uses the parent's method, so we have to pay attention to the way we call it. Since, we want that the method 
 * refers to the current Developer instance and not to the Person instance, we invoke the Person's getFullName() 
 * method using the call() method and passing the this keyword. This way ensure us that the Person function's
 * getFullName() method will act on the Developer instance's name and surname properties.
 * 
 * So, when we use the Person function's getFullName() method, we will obtain the concatenation of name and surname
 * properties. When we use the Developer instance's getFullName() method, we will get the same result preceded by the
 * title Dev:
 */

var johnSmith = new Person("John", "Smith");
var marioRossi = new Developer("Mario","Rossi","JavaScript");
console.log(johnSmith.getFullName());
console.log(marioRossi.getFullName());

/**
 * As we would expect, the new ECMAScript 6 syntax allows us to simplify the way we can override a method. In fact,
 * we can simply redefine the overriding method in our derived class and, if necessary, call the parent class using
 * the super keyword. The following example shows how we can override the Person function's getFullName() method
 * obtaining the same result seen earlier:
 */

class Developer extends Person {
    constructor(name, surname, knownLanguage) {
        super(name, surname);
        this.knownLanguage = knownLanguage;
    }

    getFullName() {
        return "Dev "+ super.getFullName();
    }
}