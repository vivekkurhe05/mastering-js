/**
 * This will not work because seats cannot be accessed outside the TheatreSeats constructor func.
 */

function TheatreSeats() {
    var seats = [];

}
TheatreSeats.prototype.placePerson = function(person) {
    seats.push(person);
}

var theatreSeats = new TheatreSeats();
theatreSeats.placePerson("Vivek");

console.log(theatreSeats);