//One data type in JS is the 'numbers' data type

32

3.43556

Math.PI

//programs commonly use numbers for arithmetic
//artihmetic operators: +, - , / , *, %

3 + 4

3 + 2 * 2

//JS runs arithmetic using mathematic order of operations
//Think of PEMDAS (Parentheses, exponents, multiplication and division, addition and subraction)
//When there is more than one + or - sign, it's computed from elft to right. same for 8 and / 

3 + 2 * 2 / 2

//(3 + 2) * 2

//Modulo (the percent sign) returns the remainder after dividing the value on the left with 
//the value on the right

8 % 2 === 0

9 % 5 === 0

function mod(a, b) { // calling a function, naming the function, adding parameters
    return a % b //using return statement, a modulo b
}

mod(9, 5) // calling function and passing numbers as an argument

//NaN stands for not a number. NaN sometimes represents unrepresentable data. It may also get 
//returned if you attempt to do something like multiply a string by a number
NaN

//Math.random() reutrns a random floating point value from 0 to 1
Math.random()

//adding a * followed by a number at the end of Math.random() will give you random numbers
//from 0 up to  (but not including) the number you specified

Math.random() * 5

//Math.floor(Math.random()*3) returns an integer (as opposed to a floating point) less than the nubmer
//you sepcify after the *

Math.floor(Math.random() * 100)

//I WAS TOLD THERE WOULD BE NO MATH

// ASSIGNMENT
// 1. Generate a random number from 0-10
// 2. Find the remainder of 5/2

//Strings are another data type used to identify text/ They can be created with
//single or double quotes

'Kobe Bryant is better than lebron james'

"Cardi B should win all the grammys"

//the \ is an escape character. It can be sued for actions such as adding an apostrophe 
//or creating new lines

'His name\'s Thaddeus McGonagle'

'My name\'s Kobe. \n His name\'s cookie monster'

//concatenation can be used for combining strings
'concat' + 'enation'

'this is ' + 'a' + 'concatenated ' + 'string'

//strings vs numbers

'1' //is a string
1 //is a number (integer)

//unary operators are operators that take one calue as an argument
//the typeof operator tells you the data type of whatever value you pass

typeof 'hello'
//string

typeof 4
//integer

typeof Math.PI
    //integer - number

typeof {}
//object

typeof []
//object--trick question

var x;

//boolean values have two possible values: true or false

//one way of producing boolean values is by using the following comparison operators

== // checks if a value is equal to another
=== // checks if a value is 'strictly' equal to another (checks for type on top of what it is)
!= // ! means 'not. so this checks if one value is not equal to another
!== // ! means not also but is checking type of is also not equal
< // Checks if the value on left is less than the value on the right
> // Checks if the value on left is greater than the value on the right
<= // less than or equal to
>= //greater than or equal to

3 > 2 // true

    'tiger woods' > 'phil mickelson' //compares the lexical order of the strings

'skillspire'.length > 'stuff'.length

//true

NaN == NaN //NaN is the result of a statement that doesnt make sense, the reason this is false is that the 
    //result of oen nonsensical statement isn't equal tot he result of another

//when an operator is applied to unexpected data types
//javascript will sometimes automatically convert one of the data types

    'Kobe' + 5 // a string plus a nubmer will result in converting the number
    //to a string and concatenation it
    //'kobe5'

    '5' - 1 // a string nubmer subrtracted by a number will convert the string to a number and then
    //subtracting the two numbers

///4

    'kobe' * 5 //notice that type coercion doesn't work for everything. In some cases JS doesn't
    //know what it wants to convert

//NaN

    (('5' - 1) > 3) && (('10' + 1) > 100) // the left evaluates to true since 4 is greater than 3. the 
    // right is also true since 101 is greater than 100.

//Next week we will be going over functions again, operators, if else statements, variable creation