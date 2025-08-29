/**
 * We can easily check primitive data types by using the typeof operator. But can we use it for objects?
 * Let's consider a constructor that represents a software house:
 */

function SoftwareHouse() {
    this.employees = [];
}

SoftwareHouse.prototype.hire = function(dev) {
    this.employees.push(dev);
}

/**
 * As we know, we can also define it using the ECMAScript 6 class construct:
 */

class SoftwareHouse2 {
    constructor() {
        this.employees = [];
    }

    hire(dev) {
        this.employees.push(dev);
    }
}

/**
 * Regardless of the syntax used, we defined a constructor of objects that has a list of employees and a method
 * that hires developers.
 * 
 * The hire() method does no checking on the values passed. This seems unlikely, since the software house would
 * hire just persons, not every type of object:
 */

var johnSmith = {name:"John", surname:"Smith"}
var lassie = {name:"Lassie",breed:"Collie"}
var table = {type:"round",legsNumber:1};

var swHouse = new SoftwareHouse();

swHouse.hire(johnSmith);
swHouse.hire(lassie);
swHouse.hire(table);

console.log(swHouse.employees.length);

/**
 * Even if we use the typeof operator, we will not be able to distinguish persons from other type of objects:
 */

console.log(typeof johnSmith)
console.log(typeof lassie)
console.log(typeof table)

/**
 * Moreover, the typeof operator returns the "object" value also for null:
 */

console.log(typeof null);

/**
 * So, it is, therefore, completely useless for our purposes.
 */