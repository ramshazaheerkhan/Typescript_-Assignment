function shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is " + size + " and it has the message: '" + message + "'.");
}
// Call the function to create shirts
shirt(); // Large shirt with default message
shirt("medium"); // Medium shirt with default message
shirt("small", "Hello, world!"); // Small shirt with custom message
