function city_country(city: string, country: string): string {
    return city + ", " + country;
}

// Call the function with city-country pairs
let pair1: string = city_country("Lahore", "Pakistan");
let pair2: string = city_country("Tokyo", "Japan");
let pair3: string = city_country("Rome", "Italy");

// Print the returned values
console.log(pair1);
console.log(pair2);
console.log(pair3);
