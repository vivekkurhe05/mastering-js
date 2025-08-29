/**
 * What is Closure?
 * 
 * A closure is a feature where an inner function has access to variables from an outer function,
 * even after the outer function has finished executing.
 * 
 * Think of a scope as a container for variables. When a scope is destroyed, all the values stored in the scope's
 *  variables are forgotten. There is only one global scope, and it is created when your program begins. When your
 * program terminates, the global scope is destroyed, and all its variables are forgotten. Otherwise, the next time
 * you ran your program, the variables would remember their values from the last time you ran it.
 * 
 * A local scope is created whenever a function is called. Any variables assigned in this function exist within the
 * local scope. When the program execution returns from the function, the local scope is destroyed, and those
 * variables are forgotten.
 */

var greeting = "Good morning";
var displayGreeting;

function greets(person) {
    var fullName = person.name+" "+person.surname;

    return function() {
        console.log(greeting+" "+fullName);
    }
}

displayGreeting = greets({name:"John", surname:"Smith"});
displayGreeting();

/**
 * In this case, the greets() function does not show the greeting string, but it returns a function that is
 * able to show the string. We assigned the result of the greets() function to the variable displayGreeting and
 * called the function it contains. We will get again the greeting string as before. Even if the execution context
 * of the greets() function does not exist anymore, the resulting function can still access its scope, in particular
 * the fullName variable.
 * 
 * 1. Global scope
 * - greeting is declared in the global scope.
 * - displayGreeting is declared to later hold a function.
 * 
 * 2. Function call: greets({name:"John", surname:"Smith"})
 * when greets is called:
 * - It creates a local variable fullName = "John Smith"
 * - It returns an anonymous function that, when called, logs the message using greeting and fullName.
 * 
 * 3. Closure happens here:
 * That returned function remembers:
 * - The variable fullName from the greets function (even after greets finishes executing).
 * - The variable greeting from the global scope.
 * 
 * This is closure in action: the inner function "closes over" the variables it need from the outer scopes.
 */
