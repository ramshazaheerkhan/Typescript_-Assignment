function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        car_info[option[0]] = option[1];
    }

    return car_info;
}

// Call the function with required information and additional name-value pairs
let car = store_car_info("Toyota", "Corolla", ["color", "red"], ["year", 2022], ["sunroof", true]);

// Print the object to ensure all information was stored correctly
console.log(car);
