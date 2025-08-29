/**
 * The solution based on the use of instanceof operator might seem quite satisfactory at first sight. However,
 * usually a software house is interested in hiring people who are able to write code, not just any person. From
 * our example's perspective, the software house class might need some method of its employees in order to work
 * properly. In the following code, we added the createSoftware() method that uses the writeCode() method of its
 * employees to create a new software product:
 */

class SoftwareHouse {
    constructor() {
        this.employees = [];
    }

    hire(dev) {
        if(dev instanceof Person) {
            this.employees.push(dev)
        }else{
            throw new Error('This software house hires only Persons!');
        }
    }

    createSoftware() {
        var newSoftware = [];
        var employee;
        var module;

        for(var i=0; i<this.employees.length; i++) {
            employee = this.employees[i];
            module = employee.writeCode();
            newSoftware.push(module);
        }

        return newSoftware;
    }
}

/**
 * Our Person() constructor does not define such a method. So if a person object is passed to the hire() method,
 * it will be included in the employees array, but it will generate an exception when the createSoftware() method
 * runs, since the person object does not have a writeCode() method.
 * 
 * How can we impose this new constraint on the hire() method? We might think of creating a more specialized 
 * constructor or class than the Person() constructor, for example Developer, having the required method. So, the
 * hire() method might accept only instances of the Developer() constructor. But this might not be sufficient.
 * 
 * In fact we might fail to check whether people can be hired because of multiple inheritance. Let's consider the 
 * following definitions:
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

function Student(name, surname, subjectOfStudy) {
    Person.apply(this, arguments);
    this.subjectOfStudy = subjectOfStudy;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
    Developer.call(this, name, surname, knownLanguage);
    Student.call(this, name, surname, subjectOfStudy);
}

DevStudent.prototype.writeCode = function() {
    console.log("Writing code...");
    return {module: "..."};
}

/**
 * Here, we defined a Developer() constructor inheriting from Person(), a Student() constructor inheriting from
 * Person(), and a DevStudent() constructor inheriting from Developer() and Student(). Only instances of Developer()
 * will have the writeCode() method. But, since the DevStudent() constructor inherits from Developer(), its instances
 * will have the writeCode() method as well.
 * 
 * So, we will expect that instances of both Developer() and DevStudent() constructors will be valid candidates
 * to be hired by our software house. However, since the hire() method is based on the instanceof operator, it will
 * fail to hire a DevStudent() instance.
 * 
 * In fact a DevStudent() instance is not an instance of Developer().
 */

var johnSmith = new DevStudent("John","Smith","C#","JavaScript");
console.log(johnSmith instanceof Student) // false
console.log(johnSmith instanceof Developer) // false
console.log(johnSmith instanceof Person) // false

/**
 * We might set the prototype of the DevStudent() constructor to an instance of Developer(),
 * but this leads us to make a choice-an instance of DevStudent() will be also considered an
 * instance of Developer() but not an instance of Student(). This might work in this specific
 * case, but might break another case.
 */