var Person = (function() {

    function PersonConstructor() {
        var _email = ""; // private variable

        this.name = ""; // public variable
        this.surname = ""; // public variable

        Object.defineProperty(this, "fullName", {
            get: function() {
                return this.name+" "+this.surname;
            },
            set: function(value) {
                var parts = value.split(" ");
                this.name = parts[0] || "";
                this.surname = parts[1] || "";
            }
        });

        Object.defineProperty(this, "email", {
            get: function() {
                return _email;
            },
            set: function(value) {
                const re = /\w+@\w+\.\w{2,4}/gi;
                if(re.test(value)) {
                    _email = value;
                }else{
                    throw new Error("Invalid email address!")
                }
            }
        })
    }

    return PersonConstructor;
}());

var person = new Person();
person.name = "Vivek";
person.surname = "Kurhe";
console.log(person.fullName);
console.log(person.email);
person.email = "vivekgmail.com"
console.log(person.email);