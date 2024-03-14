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
    if (i < 2) {
        console.log("Dear " + names[i] + ", you are still invited to the dinner!");
    } else {
        names.pop();
    }
}

// Ensure only two names remain in the list
console.log("\nRemaining guest list:", names);

