var Name: string = "John Smith";

// Print the person's name in lowercase
console.log("Lowercase:", Name.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", Name.toUpperCase());

// Convert the person's name to title case
let titleCaseName: string = Name.replace(/\b\w/g, (char: string) => char.toUpperCase());
console.log("Titlecase:", titleCaseName);
