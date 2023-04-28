const car = {
  type: "BMW",
  model: "2021",
  color: "Black",
};

//Chenge a property
car.color = "red";

//Change car type or onther info

//Add a proprerty
car.owner = "Alim Erk";

console.log("This car type is: " + car.type);
console.log(" This car color is: " + car.color);
console.log(" this car owner is: " + car.owner);

const cars = ["BMW", "SAB", "Volvo", "Toyota"];
// Change cars index
cars[3] = "Tesla";

// Add new car type to cars

cars.push("Mercedes");

console.log(cars);

// Java script type are Dynamic

let x;
x = 10; //frist integer
x = " Alim"; // after String

console.log(x);

// Java script String

// Using double quotes
let carName = " BMW 5-Serie 520D";
// Using Single quotes
let carName1 = " Tesla S model";

// Single qoute inside double qutes
let answer1 = " It is OK";

// Single quotes inside double quotes:
let answer2 = "My name is 'Alim'";

//// Double quotes inside single quotes:

let answer3 = 'What is Your "name?"';

console.log(
  carName + "\n" + carName1 + "\n" + answer1 + "\n" + answer2 + "\n" + answer3
);

// JavaScript function
function myFunction(a, b) {
  return a + b;
}
console.log(" Great", "an account");

// JavaScript can use all operators
let x1 = myFunction(15, 5);
function myFunction(a, b) {
  return a + b; // can use ala operators -, *, /,
}
console.log(x1);

// funcrion keyword syntax
myFunction();

function myFunction() {
  console.log("Funksjonen har kjørt. 🤓");
}
myFunction();

//arrowfunction syntaax

const myArrowfunction = () => {
  console.log("Arrowfunction har kjørt.");
};

myArrowfunction();

// return statement

function myReturn() {
  return "God morgen";
}

//const myGreeting = myReturn();

console.log(myReturn());

// Scooe

let lives = 3;
const myScope = () => {
  lives--;
};
myScope();
console.log(lives);

// parameter / arguments.

function paramFunction(userName) {
  return `Good morning ${userName}`;
}

console.log(paramFunction("Bengt"));

const adder = (num1, num2) => {
  return num1 + num2;
};
const result = adder(2, 3);
console.log(result);

const calculator = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return `${operator} is not a valid operator`;
  }
};

console.log(calculator(4, 5, "/"));

function calculator2(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(
  calculator2(545625445644534646642358, 6567545456456546545456456321, "*")
);

const fiveChecker = (num) => {
  if (num % 5 === 0) {
    return "Tallet er delelig på 5!";
  } else {
    return "Tallet er IKKE delelig på 5!";
  }
};
//prettier-ignore
const fiveCheckerV2 = (num) => num % 5 === 0 ? "Tallet er delelig på 5!" : "Tallet er ikke delelig på 5!";

console.log(fiveChecker(12));
console.log(fiveCheckerV2(12));

//The () Operator Invokes the Function

function a(b) {
  return (25 / 9) * (b - 9); // frist (25/9=2.6... )*(39-9=30)  ,2.6*30  we can change all operators if we need
}
console.log(a(39)); // b=39

//Functions Used as Variable Values

function a(b) {
  return (25 / 9) * (b - 9); // frist (25/9=2.6... )*(39-9=30)  ,2.6*30  we can change all operators if we need
}
console.log(" the operator value is :" + a(39) + " ok"); // b=39

const person = {
  firstName: "Alim ",
  lastName: "ERK",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

function myFunction() {
  carType = document.getElementById("mySelect").value;
  document.getElementById("demo").value;

  console.log("You selected: " + carType);
}

/*const mySelect = document.querySelector("#mySelect");

mySelect.addEventListener("change", function () {
  carType = document.getElementById("mySelect").value;
  document.getElementById("demo").value;

  console.log("You selected: " + carType);
});
*/

const fname = document.querySelector("#fname");
fname.addEventListener("change", function () {
  const name = document.getElementById("fname");
  name.value = name.value.toUpperCase(); // can use toLowerCase also
});

//document.getElementById("fname").onchange = function () {
// myFunction();
//};

//function myFunction() {
// const name = document.getElementById("fname");
// name.value = name.value.toUpperCase(); // can use toLowerCase also
//}

if ((hour = new Date().getHours() < 8)) {
  console.log("GOOD DAY");
} else {
  console.log("GOOD MORNING");
}

// trim method

const trim = "            Hello       World     ";
console.log(trim.trim());
console.log(trim.length);
console.log(trim.trim().length);
console.log(trim.trim().toUpperCase());
console.log(trim.toLowerCase());

//JavaScript String padEnd()

const alim = "Alim ";
console.log(alim.padStart(8, "ERK"));
console.log(alim.padEnd(8, "ERK"));

console.log(alim.charAt(0)); // charAt() from index 0
//JavaScript String charCodeAt()
console.log(alim.charCodeAt(2)); //The method returns a UTF-16 code (an integer between 0 and 65535).

const fruits = [
  "Apple",
  "Banana",
  "Pear",
  "Pineapple",
  "Grapes",
  "Cherry",
  "Melon",
  "Mango",
];

console.log(fruits.join(" "));
fruits.push("Lemon");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);
fruits[3] = "Peach";
console.log(fruits);
fruits[fruits.indexOf("Pineapple")] = "Peach";
console.log(fruits);
fruits.splice(1, 2, "Lemon", "Peach");
console.log(fruits);

// Chaining

// Endre --> E*N*D*R*E

function starText(str) {
  return str.toUpperCase().split("").join("*");
}
console.log(starText("Endre"));

const fruits2 = ["Apple", "Banana", "Peach", "Melon", "Cherry"];

const fruitHandler = (array) => {
  return array.includes("Apple");
};

console.log(fruitHandler(fruits));

const appleChecker = (array) => {
  if (array.includes("Apple")) {
    return "The array includes apple! YAY!";
  } else {
    return "No apples 🫤";
  }
};
console.log(fruitHandler(fruits));

const appleChecker1 = (array) => {
  return `The array ${
    array.includes("Apple") ? "does" : "doesn't"
  } include apples`;
};

console.log(appleChecker1(fruits));
// Number methods

const x11 = 4.3124312423145354;

console.log(x11.toPrecision(5));
console.log(Math.round(x11));
console.log(Math.floor(x11));
console.log(Math.ceil(x11));

const randomNumber = Math.random(); //Math.ceil(Math.random() * 100); , Math.floor(Math.random() * 100)+1
console.log(randomNumber);

const returnRandom = (array) => {
  //const returnRandom = (array) => array[Math.floor(Math.random() * array.length)];
  return array[Math.floor(Math.random() * array.length)];
};

console.log(returnRandom(fruits2));

const y = 674235; //"674235"

console.log(y.toString); //+y, Number(y), parselnt(y),~~y

// LOOPS

//prettier-ignore
const names = [ "Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick" ];

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);

for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

for (let name of names) {
  console.log(name);
}
console.log("The correct number was " + randomNumber);

// BREAK / CONTINUE

for (let i = 0; i < 10; i++) {
  if (i === 7) break; // continue isteden break , not inculedet 7
  console.log(i);
}

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Scott") {
    console.log("Scott, you suck.");
    continue;
  }
  console.log(`Hello ${names[i]}`);
}

for (let i = 1; i <= 10; i++) {
  for (let j = i; j <= 10; j++) {
    let result = i * j;
    console.log(`${i}*${j}=${result}`);
  }
}

// WHILE loop

const xLoop = 10;

let yLoop = 0;

while (xLoop !== yLoop) {
  console.log(yLoop);
  yLoop++;
}

// while (true) {
// 	console.log(y);
// 	y++;
// }

const fruits = [
  "Lemon",
  "Mangos",
  "Apple",
  "Pear",
  "Grapes",
  "Kiwi",
  "Fig",
  "Peach",
  "Grapefruit",
  "Watermelon",
  "Orange",
  "Banana",
];

// Funksjon som tar i mot et string array og returner
//arrayet med alle strings reversert.
//må kun godta arrays med lengde på 10-100

const stringArrayReverser = (arr) => {
  if (arr.length < 10 || arr.length > 100)
    return "Array too short, or too long";

  const reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const reversedFruit = arr[i].split("").reverse().join("");
    reversedArray.push(reversedFruit);
  }
  return reversedArray;
};
const reversedFruits = stringArrayReverser(fruits);
console.log(reversedFruits);

const person1 = {
  firstName: "Yngve",
  lastName: "Olsen",
  age: 31,
  postCode: 4014,
  hobbies: ["coding", "movies", "jogging"],
};

person1.firstName = "Bengt";
person1.age++;
person1.city = "Stavanger";

console.log(person1);

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
    hobbies: ["coding", "games", "memes"],
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

for (let i = 0; i < people.length; i++) {
  //if (people[i].name === "Cathy") console.log(people[i].age);
  console.log(people[i].name);
}

// Funksjon skal generere en setning for hver person i arrayet:
// "X is a (age) year old (man/woman) who likes (random hobby) among other things"

function personSummarizer(arr) {
  for (let person of people) {
    console.log(person.name);
    console.log(
      `${person.name} is a ${person.age} year old ${
        person.male ? "man" : "woman"
      } who likes ${
        person.hobbies[Math.floor(Math.random() * 3)]
      } among other things.`
    );
  }
}
personSummarizer();

function personSummarizer(arr) {
  const summaries = [];
  for (let person of arr) {
    person.hobbies.push("coding");
    person.age++;
    const randomHobby =
      person.hobbies[Math.floor(Math.random() * person.hobbies.length)];
    const pronoun = person.male ? "man" : "woman";
    const name = person.name;
    const age = person.age;

    const summary = `${name} is a ${age} year old ${pronoun} who likes ${randomHobby} among other things.`;

    summaries.push(summary);
  }
  return summaries;
}
personSummarizer(people);
console.log(people);

let countEl = document.getElementById("count-el"); // pass in arguments

console.log(countEl);

let count = 100;

function increment() {
  count = count - 1;
  countEl.innerText = count;
}

const personA = {
  firstName: "Bengt",
  lastName: "Leiknes",
  age: 43,
};
personA.nyTing = "Ny ting";
console.log(personA);

// Funksjon som genererer et array med random tall.
// 2 parametre: 1. Hvor mange tall? 2. Hvor store tall?

const makeNumberArray = (size, maxNum) => {
  const numArray = [];
  for (let i = 0; i < size; i++) {
    numArray.push(Math.floor(Math.random() * maxNum) + 1);
  }
  return numArray;
};
const myRandomNumbers = makeNumberArray(20, 50);
console.log(myRandomNumbers);

//Funksjon som finner høyeste tallet i et number array

const maxFinder = (arr) => {
  let biggest = 0;
  for (let value of arr) {
    if (value > biggest) biggest = value;
  }
  return `The biggest number in the array is ${biggest}`;
};
console.log(maxFinder(myRandomNumbers));

//for (let char of myText.split(""))    opgave 5 .

// Funksjon som lager et random password
// 1.lengden p[ password]

function generatePassword(size) {
  let password = " ";
  let possibleChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
  let currentSize = 0;

  while (password.length < size) {
    console.log();
    const randomNum = math.floor(math.random() * possibleChars.length);
    password += possibleChars.split("")[randomNum];
    currentSize++;
  }
  return password;
}
console.log(generatePassword(10)),
  function generatePassword1(size) {
    let password = " ";
    let possibleChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789"; // can we sett touppercase and number AB« Z, 0123456789
    let currentSize = 0;

    for (let i = 0; i < size; i++) {
      console.log();
      const randomNum = math.floor(math.random() * possibleChars.length);
      password += possibleChars.split("")[randomNum];
      currentSize++;
    }
    return password;
  };
console.log(generatePassword1(10));
