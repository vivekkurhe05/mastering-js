/**
 * In order to correctly protect our private members, we need to use again an IIFE in order to
 * exploit(leverage) its closure and WeakMaps to store private members. The following is a definition
 * of the TheatreSeats class with private members protection:
 */

var TheatreSeats = (function() {
    var priv = new WeakMap();

    class TheatreSeatsClass {
        constructor() {
            var privateMembers = {seats: []};
            priv.set(this, privateMembers);
            this.maxSize = 10;
        }

        placePerson(...person) {
            priv.get(this).seats.push(...person);
        }

        countOccupiedSeats() {
            return priv.get(this).seats.length;
        }

        isSoldOut() {
            return this.countOccupiedSeats() >= this.maxSize;
        }
        
        countFreeSeats() {
            return this.maxSize - this.countOccupiedSeats();
        }
    }

    return TheatreSeatsClass;
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
 * ES6 syntax allows us to define properties as well. All we need is to prepend the get and set keywords
 * to a method in order to define a getter and setter for that property.
 */

var person = (function() {
    var priv = new WeakMap();

    class PersonClass {
        constructor() {
            var privateMembers = {email: ""};
            priv.set(this, privateMembers);
            this.name = "";
            this.surname = "";
        }

        get fullName() {
            return this.name+" "+this.surname;
        }

        get email() {
            return priv.get(this).email;
        }

        set email(value) {
            const re = /\w+@\w+\.\W{2,4}/gi;
            if(re.test(value)) {
                priv.get(this).email = value;
            }else {
                throw new Error("Invalid email address!");
            }
        }
    }

    return PersonClass;
}());

console.log("===================================");
var p1 = new Person();
p1.name = "Vivek";
p1.surname = "Kurhe";
p1.email = "vivek@gmail.com"
console.log(p1.name);
console.log(p1.surname);
console.log(p1.email);