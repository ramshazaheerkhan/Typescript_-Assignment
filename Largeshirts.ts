function shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log("The shirt size is " + size + " and it has the message: '" + message + "'.");
}

// Call the function to create shirts
shirt(); // Large shirt with default message
shirt("medium"); // Medium shirt with default message
shirt("small", "Hello, world!"); // Small shirt with custom message
