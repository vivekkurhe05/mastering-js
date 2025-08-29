/**
 * Most of the classical OOP languages provide another category of members that involve inheritance: protected
 * members. In general, a protected member is a private member only visible to derived objects.
 * 
 * Once again, JS does not have built-in support for protected members, so we need to implement it ourselves.
 * 
 * Suppose that our Person() constructor has a private utility function that capitalizes the first letter of the
 * values of the name and surname properties:
 */

var Person = (function() {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function PersonConstructor(name, surname) {
        this.name = capitalize(name);
        this.surname = capitalize(surname);
    }

    return PersonConstructor;
}());

/**
 * The capitalize() function is implemented as a private member and it is not publicly accessible. It allows us to
 * pass a name and surname to the constructor without worry about upper or lower case:
 */

var p = new Person("vivek","kurhe");
console.log(p.name);
console.log(p.surname);

/**
 * If we want to make this function available to all derived objects, that is, to make it protected, we can
 * implement it as follows:
 */

var person2 = (function() {
    var protectedMembers;

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function PersonConstructor(name, surname, protected) {
        protectedMembers = protected || {};
        protectedMembers.capitalize = capitalize;

        this.name = capitalize(name);
        this.surname = capitalize(surname);
    }    

    return PersonConstructor;
}());

/**
 * The highlighted code shows that we have defined a private variable named protectedMembers. We also added a new
 * parameter to the internal constructor, named protected. This parameter is the means that allows the derived 
 * constructor to ask the parent constructor for the protected members. Inside the PersonConstructor() function,
 * we ensure that the protected parameter is not empty and add to it the capitalize() method.
 * 
 * Now, we define the Developer constructor so that it asks uts parent constructor for protected members.
 */

function Developer(name, surname, knownLanguage) {
    var protectedMembers = {};
    Person.call(this, name, surname, parentProtected);
    this.knownLanguage = parentProtected.capitalize(knownLanguage);
}

var d = new Developer("john","smith","javascript");
console.log(d.name)
console.log(d.surname)
console.log(d.knownLanguage)

/**
 * Since the private variable parentProtected is an object, it is passed by reference to the Person() function.
 * So, the changes made by the parent constructor to the parentProtected variable are available inside the
 * Developer() constructor. This allows us to use the capitalize() function attached to the parentProtected object.
 */