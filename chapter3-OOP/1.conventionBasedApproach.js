// constructor function
function TheatreSeats() {
    this._seats = [];
}

TheatreSeats.prototype.placePerson = function(...person) {
    return this._seats.push(...person);
}

var t1 = new TheatreSeats();
t1.placePerson("Vivek", "Prasad", "Prasanna");
console.log(t1._seats.length); // 3
console.log(t1._seats);

var t2 = new TheatreSeats();
console.log(t2._seats); // 0

// the drawback is here seat variable can be publicly accessed