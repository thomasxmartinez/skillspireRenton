'use strict';

// Boolean Values have two possible values: true or false.

// One way of producing boolean values is by using the following comparison operators:

//  ==     -Checks if a value is equal to another
//  ===    -Checks if a value is 'strictly' equal to another
//  !=     -! means 'not'. So this checks if one value is not equal to another
//  !==    -Checks if a value is strictly not equal to another
//  <      -Checks if the value on left is less than the value on the right
//  >      -Checks if the value on left is greater than the value on the right
//  <=     -Checks if the value on left is less than or equal to the value on right
//  >=     -Checks if the value on left is greater than or equal to value on right

console.log(3 > 2) //true

// Checks if Unicode value of the first letter is great than the value of the first
// letter on the right. The Unicode standard assigns a number to every character.
// This evaluates to true because the Unicode value of 's' is less than 'b'.

console.log('Hulkamania' > 'Undertaker'); //true

console.log('Kobe Bryant' > 'Lebron'); //false

// We can also use these comparison operators to compare the length of one string
// with another string.

console.log('Kobe Bryant'.length > 'Lebron'.length) //true

// NaN is the result of a statement that doesn't make sense. The reason this is
// false is that the result of one nonsensical statement isn't equal to the result
// of another.

NaN == NaN // false

//    Logical operators can be used with boolean values (or with using comparison
//	  operators to create boolean values)
/*
      Logical operators are binary operators just like arithmetic operators.
      Arithmetic operators: +, -, *, /, %
      Logical operators: &&, ||, !
&&    This operator means 'and'
||    This operator means 'or'
!     This operator means 'not'
*/
// && returns true only if BOTH values on left and right equate to true
console.log(true && true) // true
console.log(true && false) // false
console.log(true && !false) // true

// || returns true if EITHER of the values on the left or right are true
console.log(true || false) // true 
console.log(false || false) // false
console.log(true || true) // true

console.log(2 > 1 && 4 === 4) // this will evaluate as true since both sides are true
console.log(true && !(3 > 5)) // this will evaluate to false since the value on the right is false

// Logical operators ask a question:

//is it the case that both these values on the left and right are true
true && false // false

//is it the case that either of these are true
true || false // true
false || false // false

//variables are used to save data by assigning values to a variable. Variables must begin with a letter and cannot special characters

//DECLARING VARIABLES
//the following line declares a variable without assigning a value

var name

//the following line declares a variable and defines it by assigning a value
var name = 'marshawn'

//the following line declares and assigns values to multiple variables
var stuff = 'namaste'
otherstuff = 'lastname'

//you can also use variables to assign values to a variable
var username = stuff + otherstuff;

console.log(username) //  'namaste lastname'

var username = 'magic johnson';
console.log(username) // magic johnson

//assigning values to variables
//below we'll write code to maek it easier to find the area of a square
//are equals length * width
var length = 5
var width = 5

var area = length * width;

console.log(length)
console.log(width)
console.log(area)

//we can also change the value of variables we create by assigning
//new values to them

length = 7

area = length * width; //area 7 * 5

//create variables concatenating variables
//create variables using math equations or operators

// Functions allow us to wrap a piece of a program into a statement that we can just call. The
// data within the parenthesis is called an "argument". Here are some examples of functions:

console.log('big baller brand'); // will simply print whatever is in the parentheses

alert('only big ballers allowed') // this will alert the user with a pop up

confirm('are you LaMelo Ball?') // this function will ask the user to confirm something by creating 
    //a pop=up that they can say 'ok or 'cancel' to

prompt('enter your age') // this function creates a pop-up that asks for input

// you can assign user feedback to variables
var username = prompt('enter your name')

//conditional execution allows certain code statements to be executed only under certain conditions

//lets say you only want a user to be abel to play a game if they're at least 13 years old
var userAge = prompt('what is your age?')

//by using the keyword 'if' the following code will only be executed if the condition
//within the parentheses evaluates to true

if (userAge < 13) {
    console.log('you are too young to play this game')
} else {
    console.log('cool lets play')
}
// We've covered 'if' statements and 'if-else' statements for when you want
// to perform a different task if the condition is false. What if you need
// multiple conditions? You can use if-else-if chains

//this takes the if else example further/ If the 
//user leaves the prompt blank, it informs the user that they must 
//input a number

var userAge = prompt('what is your age?')
console.log(userAge);

if (userAge < 13) {
    alert('you are too young to play this game')
} else if (userge >= 13) {
    alert('welcome to the game')
} else {
    alert('your input must be a number')
}

/*
- Generate a random number from 0-3
- User to guess that number
- If they guess it, it should tell them they're right
- If they're wrong, the app should tell them they're wrong.
*/

var fname = prompt('what is your first name?') //asks for name on page

function greetTheUser() { //
    alert('welcome ' + fname) //welcome user blah whatever the prompt entered
}

greetTheUser(); //runs function

//i'm creating a function called timesTwo with the parameter num
function timesTwo(num) {
    console.log(num * 2)
}

timesTwo(4) // 8
timesTwo(5) //10
timesTwo(20) //40

//a function can have multiple parameters
function rectangleArea(length, width) {
    return length * width;
}
//calling a function
rectangleArea(4, 5) // 20

//functions can be assigned to variables
var rectangleOne = rectangleArea(2, 4)

//argument vs parameter

//when you are creating a function the part between the parentheses is called a parameter,
// in example below num is a parameter
function timesTwo(num) {
    console.log(num * 2)
}

// However, when you call a function, the data between parenthesis is called
// an argument. In the below example, we are invoking the timesTwo function
// and passing 5 as an argument.

timesTwo(5);