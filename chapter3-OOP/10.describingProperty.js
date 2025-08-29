/**
 * Object.defineProperty()
 * This method takes three arguments: the first argument is the object to add the property to,
 * the second is the name of the property, and the third is the prototype's descriptor.
 */

var person = (function() {

    function PersonConstructor() {
        this.name = "";
        this.surname = "";
        this.email = "";

        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this.name+" "+this.surname;
            },
            set: function(value) {
                var parts = value.split(" ");
                this.name = parts[0] || "";
                this.surname = parts[1] || "";
            }
        })
    }

    return PersonConstructor;
}());