function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magician: string[]): void {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
}

// Define an array of magician's names
let magician: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great to modify the array of magicians
make_great(magician);

// Call show_magicians to see that the list has actually been modified
show_magicians(magician);
