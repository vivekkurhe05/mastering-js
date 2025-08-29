/**
 * A WeakMap is a collection of key and value pairs where the key must be an object.
 */

var TheatreSeats = (function() {
    var priv = new WeakMap();

    function TheatreSeatsConstructor() {
        var privateMembers = {seats: []};
        priv.set(this, privateMembers);

        this.maxSize = 10;
    }

    TheatreSeatsConstructor.prototype.placePerson = function(...person) {
        priv.get(this).seats.push(...person);
    };
    TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
        return priv.get(this).seats.length;
    };
    TheatreSeatsConstructor.prototype.isSoldOut = function() {
        return priv.get(this).seats.length >= this.maxSize;
    };
    TheatreSeatsConstructor.prototype.countFreeSeats = function() {
        return this.maxSize - priv.get(this).seats.length;
    };

    return TheatreSeatsConstructor;
}());

var t1 = new TheatreSeats();
t1.placePerson("Vivek","Raghu","Sanjeet");
console.log(`Total occupied seats are ${t1.countOccupiedSeats()}`);
console.log(`Are all seats sold out? ${t1.isSoldOut()}`);
console.log(`Total available seats are ${t1.countFreeSeats()}`);

console.log("====================================");

var t2 = new TheatreSeats();
t1.placePerson("Raghav","Raghu","Mohamed","Vijay","Sudha","Mallikarjun","Ram","Chetana","Pulla","Ambar");
console.log(`Total occupied seats in T2 are ${t2.countOccupiedSeats()}`);
console.log(`Are all T2 seats sold out? ${t2.isSoldOut()}`);
console.log(`Total available seats in T2 are ${t2.countFreeSeats()}`);

/**
 * 1. Inside the constructor
 * this refers to the new instance being created. E.g., t1
 * priv.set(this, privateMembers); associates that specific instance (this) with a private data object via the WeakMap.
 * 
 * 2. Inside the Prototype Methods:
 * All these methods are defined on the prototype and refer to the specific instance on which the method is called:
 * Here, this refers to the specific instance calling placePerson, e.g. t1.placePerson('Alice)
 * It retrieves the private seats array associated with that instance and adds a person.
 */