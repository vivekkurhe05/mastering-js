/**
 * In OOP, association, aggregation, and composition are types of relationships between objects/classes. These
 * concepts describe how objects are related to each other.
 */

/**
 * Association is a relationship between two or more objects where each object is independent of each other. This
 * means that an object can exist without the other and no object owns the other.
 */

// Example1: Association using objects

//Two independent objects
let student1 = {name: "Alice"};
const course1 = {title: "JavaScript"};

student1.course = course1;
console.log(student1);
console.log(student1.course.title);

delete student1.course;
console.log(student1);
console.log(course1.course);

// Explanation: student1 and course1 exist independently. Removing one doesn't affect the other.

// Example2: Association using classes

console.log("\nExample using classes");

class Student {
    constructor(name) {
        this.name = name;
    }

    enroll(course) {
        console.log(`${this.name} enrolled in ${course.title}`);
    }
}

class Course {
    constructor(title) {
        this.title = title;
    }
}

let student = new Student("Alice");
let course = new Course("Mathematics");

student.enroll(course); // Association: Student uses Course
student.course = course; // Association: Student uses Course

console.log(student.course.title); // Mathematics

student = null; // Delete student
// console.log(student.course.title); // Error: cannot read properties of null (reading 'course')
console.log(course.title); // Mathematics

// Note: Both Student and Course can exist independently
// Explanation: Course lives independently of Student