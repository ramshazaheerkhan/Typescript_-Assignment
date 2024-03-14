function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function and pass the array of magician's names
show_magicians(magicians);
