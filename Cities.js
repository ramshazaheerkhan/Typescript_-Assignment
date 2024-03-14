function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log(city + " is in " + country + ".");
}
// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York"); // Using default country value
