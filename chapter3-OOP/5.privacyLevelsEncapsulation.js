/**
 * Three privacy levels
 * 1. A private member must be implemented as a local variable or function of the constructor.
 * 2. A public member must be implemented as a member of "this" keyword, if it is a property, or as a member of
 * the constructor's prototype, if it is a method.
 * 3. A privileged member must be implemented as a member of "this" keyword inside the constructor.
 * 
 * The following code shows a version of the TheatreSeats() constructor that implements the 
 * three privacy levels:
 */

function TheatreSeats() {
    var seats = []; // private member

    this.placePerson = function(...person) { // privileged member
        seats.push(...person);
    }

    this.countOccupiedSeats = function() { // privileged member
        return seats.length;
    }

    this.maxSize = 5; // public member
}

TheatreSeats.prototype.isSoldOut = function() { // public member
    return this.countOccupiedSeats() >= this.maxSize;
}

TheatreSeats.prototype.countFreeSeats = function() { // public member
    return this.maxSize - this.countOccupiedSeats();
}

var t1 = new TheatreSeats();
t1.placePerson("Rahul","Pratham","Hrishi","Priti","Nisha","Rani");
console.log(`How many T1 seats are occupied ${t1.countOccupiedSeats()}`); // 5
console.log(`is T1 sold out? ${t1.isSoldOut()}`); // true
console.log(`How many seats are available? ${t1.countFreeSeats()}`); // 0

console.log("====================================");

var t2 = new TheatreSeats();
console.log(`How many T2 seats are occupied ${t2.countOccupiedSeats()}`); // 0
console.log(`is T2 sold out? ${t2.isSoldOut()}`); // false
console.log(`How many seats are available? ${t2.countFreeSeats()}`); // 5

/**
 * As we know, the seats variable is a private member, and it is not accessible from outside 
 * the constructor's closure. The placePerson() and countOccupiedSeats() methods are privileged
 * members, since they can access the private variable seats. The maxSize property and the
 * isSoldOut() and countFreeSeats() methods are public members since they do not directly access
 * private members. However, they access the seats variables indirectly through the privileged methods.
 */


