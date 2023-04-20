/* ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the various data types.
Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords */
let mySt = " Welcome to first javascript crash course";
mySt = " Welcome to jobloob full stack develepor crash course";
console.log(mySt);

let myText = "Please link me to the javascript file!";
console.log(myText);
//alert(myText);

let i = 25;
i = 15;
console.log(i);

const cars = ["BMW", "TOYOTA", "SAB", "HONDA"];
cars[1] = "Tesla";
cars.push("Audi");
console.log(cars);

const computer = { type: "Macbook Pro", color: "black", chip: "M2" };
console.log("computer color is " + computer.color);

/* ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=) */
let a = 15;
let b = 8;
let c = a + b; // we can use all aperators a-b , a*b a/b
console.log(c);

let z = 20;
z++; // we can use her onlig short aperators --
let x = z;
console.log(x);

let e = 25;
e += 5; // we can use her -,= also
console.log("Value of e is " + e);

let n = " Welcome to Javascript";
n += "creash courus"; // onlig true value +=
console.log("Courus name of n is " + n);

/* ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks whether username is empty, 
that the user age is 18+, and that the userIsBlocked is false. 

(HINT: Use the && (logical AND) to check several things in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true and 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly */

const userName = "Tom";
const userAge = 18;
let userIsLoggedIn = false; //can change true
let userIsBlocked = false;
let goToPage = "";
if (userName) {
  console.log("User name is :" + userName);
} else {
  console.log("User mame is emptiy");
}

//user age 18>=

if (userAge >= 18 && userAge < 18) {
  console.log("user Age is :" + userAge);
} else if (userAge < 18) {
  console.log("user Age is :" + userIsBlocked);
} else {
  console.log("Error Massage:Value is NOT display");
}
if (userIsLoggedIn !== userName) {
  console.log("user is logged in" + userName);
} else if (userIsBlocked) {
  console.log("Users should be " + userIsBlocked);
} else {
  console.log("Go back to home page:" + goToPage);
}

/* ASSIGNMENT 5

(NOTE: We didn't get around to cover this today (11.04), but we will cover this on thursday)

Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/
const userMale = true;
let user = (userMale) => (userMale === Mr ? "Mr" : "Mrs");
console.log(`User gender is ${user} = Mr ? " Mr" : "Mrs"`);

switch (userMale) {
  case true:
    console.log("this if true");
    break;

  case false:
    console.log("this if not true");

    break;
  default:
    console.log("this if true");
}
switch (true) {
  case userMale >= "Mr":
    console.log("this if true");
    break;

  case true:
    console.log("this if not true");
    break;
  default:
    console.log("it is flase");
}
