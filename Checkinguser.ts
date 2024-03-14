var current_users: string[] = ["john", "alice", "bob", "charlie", "david"];
var new_users: string[] = ["eric", "John", "harry", "Alice", "susan"];

for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let lowercase_new_user: string = new_user.toLowerCase();

    // Check if the lowercase username exists in the current_users list
    if (current_users.map(user => user.toLowerCase()).indexOf(lowercase_new_user)) {
        console.log("Sorry, " + new_user + " is already taken. Please enter a new username.");
    } else {
        console.log("Congratulations! " + new_user + " is available.");
    }
}
