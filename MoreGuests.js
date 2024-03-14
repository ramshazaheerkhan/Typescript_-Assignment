var names = ["Alice", "Bob", "Charlie", "David"];
var unableToAttend = "Charlie"; // Guest who can't make it
var replacementGuest = "Eve"; // New person to invite
// Replace the guest who can't make it
for (var i = 0; i < names.length; i++) {
    if (names[i] === unableToAttend) {
        console.log(names[i] + " can't make it to the dinner.");
        names[i] = replacementGuest;
    }
}
// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.\n");
// Add new guests
names.unshift("Grace"); // Add a new guest to the beginning of the array
names.splice(Math.floor(names.length / 2), 0, "Frank"); // Add a new guest to the middle of the array
names.push("Hannah"); // Add a new guest to the end of the array
// Print new set of invitation messages
for (var i = 0; i < names.length; i++) {
    console.log("Dear " + names[i] + ", you are invited to the dinner!");
}
