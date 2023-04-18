// Functions and Methods assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/

/*
2.

Write a function that takes in a string as a parameter and returns the string in upper
case with an exclamation mark at the end. Use the non-arrow function syntax (function keyword).

Example: console.log(yourFunction("this is cool")) should console log THIS IS COOL!
Console log the function a few times to show that it's working.
*/

/*
3.

Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/

/*
4.

Write a function that takes in an array as a parameter, and return the array with the first
and last index removed. Use arrow function syntax.

Example: console.log(yourFunction(["Red", "Green", "Blue", "Yellow"])) should console log
an array with just ["Green", "Blue"]

Console log the function a few times to show that it's working
*/

/*
5.

Use string methods on the text variable to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 - Split the string into an array where each word is an element

 Console log each method used.
*/
const text = "  Javascript is hard   ";

/*
6.

Use array methods to do the following:
 - Add a new hero to the end of the array
 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Thanos"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
*/
const marvelHeroes = [
	"Spider-Man",
	"Thor",
	"Hulk",
	"Doctor Strange",
	"Iron Man"
];

/*
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

/*
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Write a function that takes in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received. If it does,
remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the array and return it.

Examples:
console.log(yourFunction(["Red", "Green"], "Blue")) --> ["Red", "Green", "Blue"]
console.log(yourFunction(["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
*/
