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

const fruits = ["Apple", "Banana", "Peach", "Melon", "Cherry"];

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
