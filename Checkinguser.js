var current_users = ["john", "alice", "bob", "charlie", "david"];
var new_users = ["eric", "John", "harry", "Alice", "susan"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert the new username to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase username exists in the current_users list
    if (current_users.map(function (user) { return user.toLowerCase(); }).indexOf(lowercase_new_user)) {
        console.log("Sorry, " + new_user + " is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations! " + new_user + " is available.");
    }
}
