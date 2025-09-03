/**
 * We can also add methods from different mixins and compose the public interface of our objects as needed.
 */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

var namingMixin = {
    getFirstName: function() {
        return this.name;
    },
    getLastName: function() {
        return this.surname;
    },
    getFullName: function() {
        return this.name+" "+this.surname;
    }
};

var movingMixin = {
    goLeft: function() {
        return "Go Left";
    },
    goRight: function() {
        return "Go Right";
    },
    goUp: function() {
        return "Go Up";
    },
    goDown: function() {
        return "Go Down";
    }
};

var studyingMixin = {
    readTopic: function() {
        return "Read Topic";
    },
    writeTopic: function() {
        return "Write Topic";
    },
    repeatTopic: function() {
        return "Repeat Topic";
    }
};

augment(Person.prototype, namingMixin);
augment(Person.prototype, movingMixin);
augment(Person.prototype, studyingMixin);

/**
 * A more accurate mixin function might allow us to select which members to add:
 */

function augment(destination, source, ...methodNames) {
    if(methodNames) {
        for(var methodName of methodNames) {
            if(source.hasOwnProperty(methodName)) {
                destination[methodName] = source[methodName];
            }
        }
    }else {
        for(var methodName in source) {
            if(source.hasOwnProperty(methodName)) {
                destination[methodName] = source[methodName];
            }
        }
    }

    return destination;
}

/**
 * In this case, we added the rest parameter methodNames to allow an indefinite number of parameters after the
 * source and destination ones. If a list of method names is passed, the function adds just them to the destination
 * object. This allows us to select members to add from a mixin, as in the following example:
 */

augment(Person.prototype, namingMixin, "getFullName");
augment(Person.prototype, movingMixin, "goLeft", "goRight");
augment(Person.prototype, studyingMixin, "readTopic", "writeTopic", "repeatTopic");

var marioRossi = new Person("Mario", "Rossi")
console.log(marioRossi.goLeft());
console.log(marioRossi.readTopic());
console.log(marioRossi.getFullName());