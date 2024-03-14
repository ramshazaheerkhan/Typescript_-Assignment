var names: string[] = ["Alice", "Bob", "Charlie", "David"];
var unableToAttend: string = "Charlie"; // Guest who can't make it
var replacementGuest: string = "Eve"; // New person to invite

// Print personalized message to each person
for (let i = 0; i < names.length; i++) {
    if (names[i] === unableToAttend) {
        console.log(names[i] + " can't make it to the dinner.");
        names[i] = replacementGuest;
    }
}

console.log("\n"); // Adding a new line for better readability

// Print second set of invitation messages
for (let i = 0; i < names.length; i++) {
    console.log("Dear " + names[i] + ", you are invited to the dinner!");
}
