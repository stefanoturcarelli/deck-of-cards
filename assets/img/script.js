"use strict";

// ? The spred operator (...)
// Use the spread operator (...) to add cards to the array

// ? The keys() method
// Use the keys() method to return a new array iterator object that contains
// the keys for each index in the array.
// We can use the keys() method to generate an array with 0 to n values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
// keys are the indexes, not the values (keys 0 -> 51, values 0 -> 51)
// We can also use the from method: const deck Array.from(new Array(52).keys());

// ? The sort() method
// Example array with names to show how sort() shuffles
// You can change the behavior of sort() using a function
const fruits = ["Banana", "Apple", "Grapes", "Kiwi", "Peaches"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Grapes', 'Kiwi', 'Peaches' ]

// ? Math.random()
// Math.random() returns a number (double) between 0 and 1 (not inclusive)
console.log(Math.random()); // 0.873158246507518
console.log(Math.random()); // 0.7526616550218173
console.log(Math.random()); // 0.027621161299991703

// ? The padStart() method
// The padStart() method pads a string with another string (multiple times)
// until it reaches a given length.
// Pad a string with "0" until it reaches the length 4:
let text = "5";
let padded = text.padStart(4, "0");
console.log(padded); // 0005

// ! We know the following information
// cardNumber / 13 = 0 1 2 3
// cardNumber % 13 = 2 3 4 5 6 7 8 9 10 Jack Queen King Ace

// Array for suits
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

// Array for ranks
const ranks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// Array iterator object with the keys for each index in the array
const deck = [...new Array(52).keys()];

// Up to here we have a deck of cards from 0 to 51

// Shuffle the array of cards using sort() or Math.random() methods
// - 0.5 will give you negative numbers, which will improve the shuffle
deck.sort(() => Math.random() - 0.5);

// Select the first four cards from the shuffled deck
const selectedCards = deck.slice(0, 4);

// Display the information for each selected card
let count = 0;
selectedCards.forEach((cardNumber) => {
  const suit = suits[Math.trunc(cardNumber / 13)];
  const rank = ranks[cardNumber % 13];
  count++;
  console.log(`Card ${count}: ${rank} of ${suit}`);
});

// * Using a for loop
console.log(`Using a for loop`)
let countCard = 0;
for (let i = 0; i < 4; i++) {
  let suitOfCard = suits[Math.trunc(deck[i] / 13)];
  let rank = ranks[deck[i] % 13];
  let number = String((deck[i] % 13) + 1).padStart(2, "0");
  countCard++;

  console.log(`Card ${countCard} ${number}: ${rank} of ${suitOfCard}`);
}
