var TheatreSeats = (function() {
    var priv = {};
    var id = 0;

    function TheatreSeatsConstructor() {
        this.id = id++;
        this.maxSize = 10;

        priv[this.id] = {};
        priv[this.id].seats = [];
    }

    TheatreSeatsConstructor.prototype.placePerson = function(...person) {
        priv[this.id].seats.push(...person);
    }

    TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
        return priv[this.id].seats.length;
    }

    TheatreSeatsConstructor.prototype.isSoldOut = function() {
        return priv[this.id].seats.length >= this.maxSize;
    }

    TheatreSeatsConstructor.prototype.countFreeSeats = function() {
        return this.maxSize - priv[this.id].seats.length;
    }

    return TheatreSeatsConstructor;

}());

var t1 = new TheatreSeats();
var t2 = new TheatreSeats();
t1.placePerson("Vivek","Raghu","Sanjeet");
console.log(`Total occupied seats in T1 are ${t1.countOccupiedSeats()}`);
console.log(`Are all T1 seats sold out? ${t1.isSoldOut()}`);
console.log(`Total available seats in T1 are ${t1.countFreeSeats()}`);

console.log("====================================");

console.log(`Total occupied seats in T2 are ${t2.countOccupiedSeats()}`);
console.log(`Are all T2 seats sold out? ${t2.isSoldOut()}`);
console.log(`Total available seats in T2 are ${t2.countFreeSeats()}`);

// There are two drawbacks with the above approach. To overcome them we use WeakMaps. Refer WeakMaps.js