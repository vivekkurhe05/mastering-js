/**
 * Aggregation is a "has-a" relationship where an object contains another but the contained object can exist
 * independently of the container.
 * or
 * Aggregation is the object's capability to embed one or more independent objects.
 */

// Example1: Aggregation using objects

// Independent employee objects
const e1 = {name:"John"};
const e2 = {name:"Jane"};

// Department "has" employees
let department = {
    name: "HR",
    employees: [e1, e2]
};

console.log(department.employees);
console.log(department.employees.length);

// Delete department
department = null;

console.log(department);
console.log(e1.name);
console.log(e2.name);

/**
 * Explanation: Even though department had a list of employees, e1 and e2 are still accessible because they are
 * not owned or created within department.
 */


// Example2: Aggregation using classes

console.log("\nExample using classes");

class Employee {
    constructor(name) {
        this.name = name;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

}

const emp1 = new Employee("John");
const emp2 = new Employee("Jane");

let dept = new Department("Engineering");
dept.addEmployee(emp1);
dept.addEmployee(emp2);

console.log(dept.employees.length);

// Delete department
dept = null;

// Employees still exist
console.log(emp1.name);
console.log(emp2.name);

// Note: If Department is deleted, Employee objects still exist.
// Explanation: Employees are independent; deleting the Department doesn't affect them.