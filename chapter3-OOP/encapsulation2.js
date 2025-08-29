// In JavaScript, encapsulation is achieved via closure

function TheatreSeats() {
    var seats = [];

    this.placePerson = function(...args) {
        seats.push(...args);
    }

    this.getPerson = function() {
        return seats;
    }
}

var theatreSeats = new TheatreSeats();
theatreSeats.placePerson("Darshana","Saili","Vaishnavi","Rani","Aishwarya","Sanjana");
console.log(theatreSeats.getPerson());

/**
 * Explanation (reference - mastering js book - pg no. 41)
 * 
 * When this constructor is invoked to create an object, the constructor's instance and its internal
 * environment are created. The constructor's environment holds the parameters, the local variables, and
 * functions created inside the constructor. These functions will retain a reference to the environement in
 * which they were created so that they will always have access to the environment, even after the constructor
 * execution terminates. This combination of function and environment, that is the closure, represents a data storage.
 */