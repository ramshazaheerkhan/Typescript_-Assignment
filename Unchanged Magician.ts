function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }

    return great_magicians;
}

// Define an array of magician's names
let magicia: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great with the original array of magicians' names
let great_magicians: string[] = make_great(magicians.slice()); // Create a shallow copy using slice()

// Call show_magicians with each array to show the original names and the names with "the Great" added
console.log("Original magicians:");
show_magicians(magicians);

console.log("\nMagicians with 'the Great':");
show_magicians(great_magicians);
