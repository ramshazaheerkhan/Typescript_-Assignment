var names = ["Grace", "Alice", "Bob", "Frank", "Eve", "David", "Hannah"];
var unableAttend = [];
// Specify guests who can't make it
unableAttend.push(names.pop());
unableAttend.push(names.pop());
// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people.\n");
// Remove guests who can't make it and apologize
for (var _i = 0, unableAttend_1 = unableAttend; _i < unableAttend_1.length; _i++) {
    var guest = unableAttend_1[_i];
    console.log("Sorry, " + guest + ", we can't invite you to dinner.");
}
// Print invitation messages to the remaining guests
for (var i = 0; i < names.length; i++) {
    console.log("Dear " + names[i] + ", you are still invited to the dinner!");
}
// Print the number of people invited to dinner
console.log("\nNumber of people invited to dinner:", names.length);
