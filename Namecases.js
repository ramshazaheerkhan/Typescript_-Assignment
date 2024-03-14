var Name = "John Smith";
// Print the person's name in lowercase
console.log("Lowercase:", Name.toLowerCase());
// Print the person's name in uppercase
console.log("Uppercase:", Name.toUpperCase());
// Convert the person's name to title case
var titleCaseName = Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:", titleCaseName);
