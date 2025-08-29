/**
 * Inheritance is defined as a is-a relationship between objects or classes. For example, consider a generic
 * person and a student. We can say that the student is a person that is a student inherits all features of a 
 * generic person, but he has a specialized profile - he studies. This is true for other specialized profiles 
 * such as a teacher, a lawyer, a singer, and so on. The is-a relationship keyword says that if an object A 
 * inherits from Object B, then we say that A is a specialized version of B.
 * 
 * But why do we need inheritance in OOP? Since a derived object has all features of the base object, inheritance
 * can help to reduce code redundancy between similar objects by sharing common features. In other words, a base 
 * object contains the common features and shares them with its derived objects. This allows us to create more 
 * maintainable code, since we can change a feature just on the base object and share it instantly with all
 * derived objects.
 */

var person = {
    name: "John",
    surname: "Smith"
}

console.log(person.toString());
console.log(person.constructor.name);
console.log(person instanceof Object);