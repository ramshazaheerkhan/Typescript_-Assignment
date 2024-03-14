function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
}
// Define an array of magician's names
var magician = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great to modify the array of magicians
make_great(magician);
// Call show_magicians to see that the list has actually been modified
show_magicians(magician);
