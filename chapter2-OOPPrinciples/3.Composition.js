/**
 * Composition is a stronger "has-a" relationship where one object owns another. If the container object is
 * destroyed, so are the contained objects.
 * or
 * Composition is the object's capability to embed one or more dependent objects.
 */

// Example1: Composition using objects

let house1 = {
    rooms: [
        {name: "kitchen"},
        {name: "Bedroom"}
    ]
};

console.log(house1.rooms[0].name);

house1 = null;

console.log(house1);

try {
    console.log(house1.rooms[0].name);
}catch(e) {
    console.log("House is deleted, rooms are lost");
}

/**
 * Explanation: In composition, rooms are part of house and created inside it. 
 * If house is deleted (or its internal structure is lost), the rooms are gone.
 */


// Example2: Composition using classes

console.log("\nExample using classes");

class Room {
    constructor(name) {
        this.name = name;
    }
}

class House {
    constructor() {
        this.rooms = [
            new Room("Living Room"),
            new Room("Bedroom"),
            new Room("Kitchen")
        ];
    }
}

let house = new House();

// Keep reference to a room
let firstRoom = house.rooms[0];
console.log(house.rooms.length);

// Delete house
house = null;


// Rooms are no longer accessible unless we kept a separate reference
console.log(firstRoom.name);

try {
    console.log(house.rooms); // throws error, house is null
}catch(e) {
    console.log("House is deleted, rooms inaccessible");
}

/**
 * Note: Room instances are created and managed within the House. If the House is destroyed, so are the rooms.
 * 
 * Explanation: Room objects are owned by the House. Without the House, you lose access to the Room unless you have
 * saved a reference elsewhere.
 */