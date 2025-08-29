/**
 * If we want to make a padding method available to all strings, we should attach it to the prototype of the
 * String() constructor, as shown below:
 */

String.prototype.padLeft = function(width, char) {
    var result = this; // this refers to the original string on which padLeft is called, variable result stores the current string.
    char = char || " ";

    if(this.length < width) { // for example, this refers to "abc"
        result = new Array(width - this.length + 1).join(char) + this; // this refers to "abc" string
    }

    return result;
}

console.log("abc".padLeft(10, "x"));