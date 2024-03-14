var favorite_pizzas: string[] = ["Margherita", "Pepperoni", "BBQ Chicken"];

// Print the name of each pizza
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\n");

// Print a sentence using the name of each pizza
for (let pizza of favorite_pizzas) {
    console.log("I like " + pizza + " pizza.");
}

console.log("\n");

// Add a line at the end stating how much you like pizza
console.log("I really love pizza!");
