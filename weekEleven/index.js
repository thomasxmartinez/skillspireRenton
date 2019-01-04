'use strict';
// An array is a list of data.
// An array is not a data type. It is simply a way to organize data.


var contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];
var nums = [3, 2, 6, 4];
var mixedData = ['silly string', 5, 'some string', 2343, undefined, true];


// What if I want to access one of the elements in an array?
// Each element in an array has an index. An element's index is a number used to identify it.

//                      0         1       2         3          4
var contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];

// If I want to grab the 0th value in an array:
console.log(contactList[0]); // Jon Snow


// We can use code to add new elements to an array

// push() appends data to the end of an array
contactList.push('Theon Greyjoy');
console.log(contactList);
// pop() removes data from the end of an array
contactList.pop();
console.log(contactList);


// We can also add data to the beginning of the array

// unshift() prepends elements to the beginning of the array.
contactList.unshift('Ned Stark');
console.log(contactList);
// shift() deletes elements from the beginning of the array.
contactList.shift();
console.log(contactList);

// Create a list of groceries to buy. It should contain 4 items. 
// Log this to the console.
// Append another item to the end of the list.
// Prepend another item to the beginning of the list.
// Log this to the console.
// Remove the first and last items from the list.
// Log this to the console again.

/*
	What is an object in the real world?  A chair, a table, a book. These are objects. In programming, 
	an object is a collection of properties that are tied to a variable. This is similar to how we
	define an object in the real world. What is a table? It's a thing with a flat surface, has one or 
	more legs, and is stable enough that we can place things on it (these are all properties that define 
	a table).
*/

// An object is a data type just like a string, number, boolean, and function.

// The person object has 3 properties
var person = {
    name: 'Marshawn Lynch',
    heightInInches: 71,
    occupation: 'American football running back'
}


// Objects can also have functions attached to them. Functions attached to an object are called methods.
let shelter = {
    type: 'dog',
    location: 'bellevue',
    typeCall: function() {
        return 'the type of shelter is  ' + this.type; // in this.type, "this" refers to the variable shelter
    }
};


// dot notation and bracket notation are used to access properties of objects.
shelter.type = 'high shelter'; // dot notation
shelter['location'] = 'Bellevue'; // bracket notation


// To access an object's method, dot notation must be used. For this reason, developers rarely use bracket notation
// since dot notation allows them to keep their code consistent.
shelter.typeCall()


// We've already worked with other objects with methods attached to them.
console.log()


//Create an object that has a function built in. Your object must be a vehicle with four properties, including a function that makes the sound of the vehicle, example: Train would have a function that prints 'choo choo'

let airplane = {
    name: 'Alaska',
    environment: 'sky',
    color: 'white',
    sound: 'whoo',
    call: function() {
        return airplane.sound;
    }
};

console.log(airplane.call());

var sportsCar = {
    type: 'converter',
    color: 'Red',
    year: 2019,
    sound: 'Wooorrrrrr',
    carfunct: function() {
        return 'Sound of car is like beast animal ' + this.sound;
    }
};

console.log(sportsCar.carfunct());