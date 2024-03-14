var personName = "Ramsha Zaheer";
// Uppercase
console.log(personName.toUpperCase());
// Lowercase
console.log(personName.toLowerCase());
// Title case
var toTitleCase = function (str) {
    return str.split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(' ');
};
console.log(toTitleCase(personName));
