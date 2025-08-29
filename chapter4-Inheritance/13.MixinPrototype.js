/**
 * The term mixin is usually used to specify a collection of functions available to be shared among objects or
 * classes. It can be somehow considered similar to abstract classes in classical OOP languages. Usually, the
 * mixin functions are not directly used, but they are borrowed to other objects or classes in order to extend them
 * without creating a strict relationship as it could be with inheritance.
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

/**
 * consider a simple object literal implementing a getFullName() method that returns the full name based on the 
 * existing name and surname properties.
 */

var myMixin = {
    getFullName: function() {
        return this.name+" "+this.surname;
    }
}

/**
 * This object is our mixin. It implements a generic function, not bound to a specific object constructor and 
 * available to be mixed with the members of other objects. In order to enable the mixing of the members, we need a 
 * specific function as the following:
 */

function augment(destination, source) {
    for(var methodName in source) {
        if(source.hasOwnProperty(methodName)) {
            destination[methodName] = source[methodName];
        }
    }

    return destination;
}

/**
 * The goal of this function is to add (or replace) methods of object passed as second argument to the object
 * represented by the first argument.
 */

augment(Person.prototype, myMixin);

/**
 * Now, when we will create a Person instance, it will include the getFullName() method taken from the mixin:
 */

var johnSmith = new Person("John","Smith");
console.log(johnSmith.getFullName());