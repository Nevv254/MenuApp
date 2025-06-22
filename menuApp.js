const prompt = require('prompt-sync')({ sigint: true });

// Counter to track how many actions the user performs
let actionCount = 0;

// Function to return current date and time as a string
function timestamp() {
    return new Date().toLocaleString();
}
// === MENU DISPLAY FUNCTION ===
function showMenu() {
    console.log("\n=== Main Menu ===");
    console.log("1. Greet Me");
    console.log("2. Tell a Joke");
    console.log("3. Show Current Time");
    console.log("4. Reverse a Word");
    console.log("5. Check if a Number is Even or Odd");
    console.log("6. Calculate the Square of a Number");
    console.log("7. Repeat a Phrase");
    console.log("8. Convert Celsius to Fahrenheit");
    console.log("9. Count Down from a Number");
    console.log("10. Exit");
}