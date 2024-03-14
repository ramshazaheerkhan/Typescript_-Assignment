let personName: string = "Ramsha Zaheer";

// Uppercase
console.log(personName.toUpperCase());

// Lowercase
console.log(personName.toLowerCase());

// Title case
const toTitleCase = (str: string): string => {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
};

console.log(toTitleCase(personName));
