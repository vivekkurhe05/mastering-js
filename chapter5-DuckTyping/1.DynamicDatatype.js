/**
 * Duck typing allows for implementing something similar to interfaces supported by many classical object
 * oriented programming languages.
 * 
 * The topics covered by the chapter are:
 * 1. Chaecking dynamic data types
 * 2. Contracts between software components
 * 3. Using duck typing
 * 4. Emulating interfaces with duck typing
 * 
 * JavaScript is a dynamic language - it does not require you to declare a specific data type for a variable.
 */

function square(n) {

    if(typeof n === 'number')
        return n * n;
    else
        throw new Error('Wrong data type!')
}

console.log(square(3));
console.log(square("3"));
console.log(square("three"));
console.log(square(true));
console.log(square({a:3}));

