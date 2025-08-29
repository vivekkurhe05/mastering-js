var person = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return this.name+" "+this.surname;
    },
    set fullName(name) {
        var names = name.split(" ");
        this.name = names[0],
        this.surname = names[1]
    }
}

console.log(person.fullName);
person.fullName = "Vivek Kurhe"
console.log(person.fullName);