var names: string[] = ["Grace", "Alice", "Bob", "Frank", "Eve", "David", "Hannah"];
var unableAttend: string[] = [];

// Specify guests who can't make it
unableAttend.push(names.pop()!);
unableAttend.push(names.pop()!);

// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people.\n");

// Remove guests who can't make it and apologize
for (let guest of unableAttend) {
    console.log("Sorry, " + guest + ", we can't invite you to dinner.");
}

// Print invitation messages to the remaining guests
for (let i = 0; i < names.length; i++) {
    console.log("Dear " + names[i] + ", you are still invited to the dinner!");
}

// Print the number of people invited to dinner
console.log("\nNumber of people invited to dinner:", names.length);