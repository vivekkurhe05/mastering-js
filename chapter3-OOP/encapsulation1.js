function TheatreSeats() {
    this._seats = [];
}

TheatreSeats.prototype.placePerson = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.forEach(el => this._seats.push(el));
}

var theatreSeats = new TheatreSeats();
theatreSeats.placePerson("vivek","prasad","rahul","ram","sagar","vishal","prasanna");
console.log(theatreSeats._seats);