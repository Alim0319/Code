/*
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to that object (hint: the 'continue' keyword)

- Make a new key on ea ch person object in the array called "city" and set the value to a random city 
	from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

EXTRA CREDIT (not mandatory): Use your loop to also calculate the average age of all the people objects 
and store it in a variable outside the loop. Make sure that the code to calculate the average still
works even if we add or remove new people objects to the array.

*/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

let totalAge = 0;

for (let i = 0; i < people.length; i++) {
  // print out eche name

  if (people[i].name === "Otto") {
    continue;
  }
  people[i].city = cities[Math.floor(Math.random() * cities.length)];
  people[i].title = people[i].male ? "Mr." : "Ms.";

  totalAge += people[i].age;

  people[i].hobbies.unshift("coding");
  people[i].age += 2;
  console.log(people[i].name); // print out eche name
  console.log(people[i].age); //Increment the age by 2
  console.log(people[i].hobbies); // Add "coding" to the beginning of the hobby array on each object.
  console.log(people[i].city); // random city
  console.log(people[i].title); // titel MR or MS
}
const averAge = totalAge / people.length;
console.log(people);
console.log(averAge);

/*
2.

Write a function called diceRoller that takes in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the length of
the array is decided by the number the function receives as a parameter (think of it
as the number of dice we roll)

Examples: 
console.log(diceRoller(4)) should console log something like: [4, 1, 2, 6]
console.log(diceRoller(6)) should console log something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice should have.
(diceRoller(5, 20) should give an array of 5 random numbers ranging from 1-20) 
*/
function diceRoller(num1, num2 = 6) {
  const results = [];

  for (let i = 0; i < num1; i++) {
    const roll = Math.floor(Math.random() * num2) + 1;
    results.push(roll);
  }

  return results;
}
console.log(diceRoller(4)); // example output: [4, 1, 2, 6]
console.log(diceRoller(6)); // example output: [5, 5, 6, 2, 3, 4]
console.log(diceRoller(5, 20)); // example output: [17, 6, 9, 3, 15]
/*
3.

Write a loop that loops over the words array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single space between
the words (" "), then console.log the final string.

It should look like this: "this text needs to be cleaned up"
*/
const words = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].trim().toLowerCase();
}
const finalString = words.join(" ");
console.log(finalString);

for (let word of words) {
  word = word.trim().toLowerCase();
}
const finalString1 = words.join(" ");
console.log(finalString);

/*
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Write a function called 'helloChecker' that takes in 1 string as a parameter.

Write code that checks all the words in the string if they match the word for 'hello' in any of these
languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should return:
"HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the different languages,
your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' should be detected.

I have provided some string variables to test your function with.
*/
const test = ["hello", " ciao", "salut", "hallo", "hola", "czesc"];
//const language= ["english","italian","french","german","spanish","polish"];

const test1 = "It's always polite to say hello";
const test2 = "Ciao signore!";
const test3 = "Puedes decir hola";
const test4 = "Powiedz mi czesc";
const test5 = "Sag HALLO zur mir";
const test6 = "Salut mon ami";
function helloChecker(test) {
  for (let i = 0; i < test.length; i++) {
    console.log(test[i].toLowerCase().split(" "));
    //xs console.log(test);

    if (test[i] === "hello") {
      return "HELLO detected in english";
    } else if (test[i] === "ciao") {
      return "HELLO detected in italian." + test2;
    } else if (test[i] === "salut") {
      return "HELLO detected in french.";
    } else if (test[i] === "hallo") {
      return "HELLO detected in german.";
    } else if (test[i] === "hola") {
      return "HELLO detected in spanish.";
    } else if (test[i] === "czesc") {
      return "HELLO detected in polish.";
    }
  }
  return "No HELLO detected.";
}

/*
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the following alterations:
any letter in the string matching charA (the second parameter in the function) will be replaced with
charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,
and letters matching charB will be replaced with charA. See the expected console log comments below.

*/

function doubleSwap(string, charA, charB) {
  //your code here
}

//Un-comment these console logs to test your function:
//console.log(doubleSwap("this is a string", "i", "s"));
//console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
//console.log(doubleSwap("what is the point of this?", "o", "t"));
//console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
//console.log(doubleSwap("let's do one last test", "l", "e"));

/*
These should log the following:

"thsi si a itrsng"
"maybe another approach is necessary"
"whao is ohe ptino tf ohis?""
"C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg"
"elt's do onl east tlst"
*/
