function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        car_info[option[0]] = option[1];
    }
    return car_info;
}
// Call the function with required information and additional name-value pairs
var car = store_car_info("Toyota", "Corolla", ["color", "red"], ["year", 2022], ["sunroof", true]);
// Print the object to ensure all information was stored correctly
console.log(car);
