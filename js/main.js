console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Name: Aryan Bhattarai
Student Number: 200499425
 */

// Step 2: Create a block scoped, immutable variable that stores an empty array
let arrayContainer = [];

// Step 3: Add the 3 people's names to the array
arrayContainer.push('Mausam','Ram','Aryan')
// Step 4: Remove the second array item from the array
arrayContainer.splice([1],1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let namesUpper = arrayContainer.toUpperCase;
console.log(namesUpper);
// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const alertMsg = document.querySelector('aside h2');

alertMsg.addEventListener("click", function(){
    alert("Hello from Boo the World's Cutest Dog!");
});