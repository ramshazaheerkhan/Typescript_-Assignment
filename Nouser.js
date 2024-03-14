var usernames = ["admin", "Eric", "John", "Alice", "Bob"];
if (usernames.length > 0) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + username + ", thank you for logging in again.");
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames
usernames = [];
// Check if the list is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
