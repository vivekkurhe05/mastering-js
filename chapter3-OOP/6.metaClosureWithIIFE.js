/**
 * The problem with this approach is that we created static private variable which is shared between all
 * instances of this constructor.
 */

var TheatreSeats = (function() {
    var seats = [];

    function TheatreSeatsConstructor() {
        this.maxSize = 10;
    }

    TheatreSeatsConstructor.prototype.placePerson = function(...person) {
        seats.push(...person);
    }

    TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
        return seats.length;
    }

    TheatreSeatsConstructor.prototype.isSoldOut = function() {
        return this.countOccupiedSeats() >= this.maxSize;
    }

    TheatreSeatsConstructor.prototype.countFreeSeats = function() {
        return this.maxSize - this.countOccupiedSeats();
    }

    return TheatreSeatsConstructor;
}());

var t1 = new TheatreSeats();
t1.placePerson("Vivek","Raghu","Sanjeet");
console.log(`Total occupied seats in T1 are ${t1.countOccupiedSeats()}`);
console.log(`Are all T1 seats sold out? ${t1.isSoldOut()}`);
console.log(`Total available seats in T1 are ${t1.countFreeSeats()}`);

console.log("====================================");

var t2 = new TheatreSeats();
console.log(`Total occupied seats in T2 are ${t2.countOccupiedSeats()}`);
console.log(`Are all T2 seats sold out? ${t2.isSoldOut()}`);
console.log(`Total available seats in T2 are ${t2.countFreeSeats()}`);