// 4. Functions:
// .  Set up two different variables with different value.
// .  Call a function with these variables as arguments and output the result using console.log.
// .  Create a second call two the function with two more numbers as arguments.
// Set up two different numbers with different values
var num1 = 10;
var num2 = 20;
// Define a function that takes two arguments
function addValues(num1, num2) {
    // Return the sum of the arguments
    return num1 + num2;
}
// Call the function with the numbers as arguments and output the result
console.log(addValues(num1, num2));
// Create a second call to the function with two more numbers as arguments
console.log(addValues(20, 25));
