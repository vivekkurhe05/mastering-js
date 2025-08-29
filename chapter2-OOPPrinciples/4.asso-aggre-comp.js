// Association using constructor function

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

var johnSmith = new Person("John", "Smith");
var fredSmith = new Person("Fred", "Smith");
fredSmith.parent = johnSmith;

console.log(fredSmith);

// as we can see from the example, JavaScript allows us to define association between objects using a simple
// object reference through a property.

// Aggregation using constructor function

var company = {
    name: "ACME Inc.",
    employees: []
};

company.employees.push(johnSmith);
company.employees.push(fredSmith);

console.log(company);

/**
 * The person objects added to the employees collection help define the company object, but they are independent
 * from it. If the company object is deleted, each single person still lives. However, the real meaning of a 
 * company is bound to the presence of its employees.
 * 
 * It is important not to confuse the Association with the Aggregation. Even if the support of the two relationships
 * is syntactically identical, that is, the assignment of an object to a property, from a conceptual point of view
 * represent different situations.
 */


// Composition

var person = {
    name: "John",
    surname: "Smith",
    address: {
        street: "123 Duncannon street",
        city: "London",
        country: "United Kingdom"
    }
};

/**
 * This code defines a person with his address represented as an object. The address property is strictly bound
 * to the person object. Its life is dependent on the life of the person and it cannot have an independent life
 * without the person. If the person object is deleted, also the address object is deleted.
 */