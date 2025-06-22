const prompt = require('prompt-sync')({ sigint: true });

// Counter to track actions
let actionCount = 0;

// Function for current date and time as a string
function timestamp() {
    return new Date().toLocaleString();
}

// === MENU OPTION FUNCTIONS ===

// Greet the user
function greetUser() {
    console.log(`[${timestamp()}] Hii Macuzoo!! Hope you're having an amazing day!`);
}

// Tell a programming joke
function tellJoke() {
    console.log(`[${timestamp()}] I asked my code to commit. It ghosted me. `);
}

// Show the current time
function showCurrentTime() {
    console.log(`[${timestamp()}] Current time is: ${new Date().toLocaleTimeString()}`);
}

// Reverse a word 
function reverseWord() {
    const word = prompt("Enter a word: ");
    console.log(`[${timestamp()}] Reversed word: ${word.split('').reverse().join('')}`);
}

// Check if a number is even or odd
function checkEvenOdd() {
    const num = prompt("Enter a number: ");
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    const number = parseInt(num);
    const type = number % 2 === 0 ? "even" : "odd";
    console.log(`[${timestamp()}] ${number} is ${type}.`);
}

// Square a number
function squareNumber() {
    const num = prompt("Enter a number: ");
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    const number = Number(num);
    console.log(`[${timestamp()}] The square of ${number} is ${number * number}.`);
}

// Repeat a phrase a given number of times
function repeatPhrase() {
    const phrase = prompt("Enter a phrase: ");
    const times = prompt("How many times should I repeat it? ");
    if (isNaN(times)) {
        console.log("Invalid repetition count. Please enter a valid number.");
        return;
    }
    for (let i = 0; i < Number(times); i++) {
        console.log(`[${timestamp()}] ${phrase}`);
    }
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit() {
    const celsius = prompt("Enter temperature in Celsius: ");
    if (isNaN(celsius)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    const fahrenheit = (Number(celsius) * 1.8 + 32).toFixed(2);
    console.log(`[${timestamp()}] ${celsius}°C is ${fahrenheit}°F.`);
}

// Count down from a number to 0
function countDown() {
    const num = prompt("Enter a number to count down from: ");
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    let number = parseInt(num);
    console.log(`[${timestamp()}] Counting down:`);
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Secret Option (42): Easter egg
function secretOption() {
    console.log(`[${timestamp()}]  Welcome to the secret realm! Congratulations You've unlocked Easter Egg `);
}

// Exit the program
function exitProgram() {
    console.log(`\nYou performed ${actionCount} action(s).`);
    console.log("Goodbye! ");
    process.exit(); // Terminates
}
// === MENU DISPLAY ===
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

// Continuously show the menu until the user chooses to exit
function main() {
    while (true) {
        showMenu(); // Display options
        const choice = prompt("Enter your choice (1-10): ");

        //  using a switch statement
        switch (choice) {
            case "1":
                greetUser();
                break;
            case "2":
                tellJoke();
                break;
            case "3":
                showCurrentTime();
                break;
            case "4":
                reverseWord();
                break;
            case "5":
                checkEvenOdd();
                break;
            case "6":
                squareNumber();
                break;
            case "7":
                repeatPhrase();
                break;
            case "8":
                celsiusToFahrenheit();
                break;
            case "9":
                countDown();
                break;
            case "42":
                secretOption(); // Easter egg
                break;
            case "10":
                exitProgram();
                break;
            default:
                console.log("Invalid option. Please choose a number from 1 to 10.");
                continue; // Skip incrementing actionCount for invalid input
        }

        actionCount++; // Tracking successful actions
    }
}

main();
