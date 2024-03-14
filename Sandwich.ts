function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");

    for (let item of items) {
        console.log("- " + item);
    }

    console.log("Enjoy your sandwich!\n");
}

// Call the function with different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
