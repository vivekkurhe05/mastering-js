/**
 * To overcome the limitation of the typeof operator on object values, we can impose a constraint on the objects
 * that can be passed to the hire() method by accepting only instances of the Person() constructor function. So, 
 * instead of checking data type, we will check instance type by using the instanceof operator:
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

var johnSmith = new Person("John","Smith");
console.log(johnSmith instanceof Person);

/**
 * Our definition of the software house will become as follows:
 */

class SoftwareHouse {
    constructor() {
        this.employees = [];
    }

    hire(dev) {
        if(dev instanceof Person) {
            this.employees.push(dev);
        }else{
            throw new Error('This software house hires only Persons!');
        }
    }
}

/**
 * Now, the hire() method will accept only Persons, throwing an exception if a different type of instance is passed
 * as an argument:
 */

var johnSmith = new Person("John","Smith");
var lassie = {name:"Lassie",breed:"Collie"};
var table = {type:"round", legsNumber:1};

var swHouse = new SoftwareHouse();

swHouse.hire(johnSmith);
swHouse.hire(lassie);
swHouse.hire(table);
console.log(swHouse.employees);