function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
