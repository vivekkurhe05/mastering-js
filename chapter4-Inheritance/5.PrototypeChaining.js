/**
 * When creating an object, we have the opportunity to specify its prototype with Object.create() method. This
 * allows the new object to inherit features of the prototype.
 * 
 * For example
 */

var person = {name:"John", surname:"Smith"}
var developer = Object.create(
    person, {
        knownLanguage: {
            writable: true,
            configurable: true
        }
    }
)

console.log(developer);

/**
 * When using the developer object, we can access the knownLanguage property, as it was added during the object's 
 * creation, and the name and surname properties, as they are inherited from its prototype, the person object.
 * However the person object has its own prototype. Since it has been created using the literal notation, its
 * prototype is the empty object {}. So, the person object inherits the standard object's members, such as the
 * toString() method.
 * 
 * This shows that inheritance is a relationship among many objects, not just between two objects. An object
 * inherits all members of its prototype and the ones of the prototype's prototype, and so on. This sequence is
 * called prototype chain.
 * 
 * But, what does inheriting members from the prototype mean exactly?
 * 
 * When we try to access an object's member, the system searches first among the object's members. If the member
 * is not found, the system searches among the members of the object's prototype. If again it is not found, the 
 * system goes up the prototype chain until it finds the searched member or it finds a null value. In the first case,
 * the found member's value is returned; otherwise, an undefined value is returned. The following picture shows how
 * JavaScript goes up the prototype chain in order to access the toString() method.
 */