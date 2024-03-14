// Tests for equality and inequality with strings
var str1: string = "apple";
var str2: string = "banana";
console.log("Is str1 == 'apple'? I predict True.");
console.log(str1 == 'apple');

console.log("Is str2 != 'apple'? I predict True.");
console.log(str2 != 'apple');

// Tests using the lower case function
var mixedCaseString: string = "Hello";
console.log("Is mixedCaseString.toLowerCase() == 'hello'? I predict True.");
console.log(mixedCaseString.toLowerCase() == 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1: number = 10;
var number2: number = 20;
console.log("Is number1 == 10? I predict True.");
console.log(number1 == 10);

console.log("Is number2 != 10? I predict True.");
console.log(number2 != 10);

console.log("Is number1 > 5? I predict True.");
console.log(number1 > 5);

console.log("Is number2 < 30? I predict True.");
console.log(number2 < 30);

console.log("Is number1 >= 10? I predict True.");
console.log(number1 >= 10);

console.log("Is number2 <= 20? I predict True.");
console.log(number2 <= 20);

// Tests using "and" and "or" operators
var p: number = 5;
var q: number = 10;
console.log("Is p > 0 and q > 0? I predict True.");
console.log(p > 0 && q > 0);

console.log("Is p > 0 or q < 0? I predict True.");
console.log(p > 0 || q < 0);

// Test whether an item is in an array
var animals: string[] = ["dog", "cat", "lion"];
console.log("Is 'lion' in the animals array? I predict True.");
console.log(animals.includes("lion"));

// Test whether an item is not in an array
console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(!animals.includes("elephant"));