function TheatreSeats2() {
    var seats = [];
    this.placePerson = function(...person) {
        seats.push(...person);
    }
    this.getSeatInfo = function() {
        return seats;
    }
}

var ts1 = new TheatreSeats2();
ts1.placePerson("Vivek","Prasad","Vijay");
console.log(ts1);
console.log(ts1.seats); // undefined
console.log(ts1.getSeatInfo); // ["Vivek","Prasad","Vijay"]

var ts2 = new TheatreSeats2();
console.log(ts2);
console.log(ts2.getSeatInfo()); // []

// The drawback with this approach is that here methods (placePerson, getSeatInfo)
// are created with every new instance which is not memory efficient.