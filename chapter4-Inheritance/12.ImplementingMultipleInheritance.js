/**
 * What is multiple inheritance?
 * It is the ability to inherit features from more than one object or class at the same time. Suppose we have two
 * constructors or classes: Developer and Student. We want to be able to create objects that represent developers 
 * who study, that is, objects that inherit features both from the Developer and Student.
 */

function Person(name, surname) {
    this.name = name;
    this.surname =surname;
}

function Developer(name, surname, knownLanguage) {
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

function Student(name, surname, subjectOfStudy) {
    Person.apply(this, arguments);
    this.subjectOfStudy = subjectOfStudy;
}

/**
 * Both constructors inherit from the Person() constructor. The following constructor function will create objects
 * that share features from Developer and Student objects:
 */

function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
    Developer.call(this, name, surname, knownLanguage);
    Student.call(this, name, surname, subjectOfStudy);
}

var johnSmith = new DevStudent("John","Smith","C#","English");
console.log(johnSmith);