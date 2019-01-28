//Parser: check syntax. If there is no error, a data structure called Abstract Syntax Tree will be produced.
//Then translated to Machine Code: A set of instructions. If it is successfully translated to Machine code, then it proves that code runs

// Execution Context: A container that stores variables and in which a piece of ode is evaluated and executed
// Global Execution Context: code that is not inside any function, associated with the global object. In the browser, that's the window object
// lastName === wnindow.lastName; Properties are variables attached to object


//////////////////////////////////////////////////////////////////
// Hoisting: No need to declare the function first and then use it. This works in function declaration not function expression
// Hoisting works in: Function declaration
calculateAge(1990); //No error
function calculateAge(year) {
    console.log(2016 - year);

}
// calculateAge(1990);

// Hoisting does not work in : Function expression
// retirement(1990); // An error will occur
var retirement = function (year) {
    console.log(65 - (2018 - year));
};
retirement(1990);

// Hoisting does not work in: variables declaration
//console.log(age);// Undefined will show up
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);// global execution context

//output will be 65 23


//////////////////////////////////////////////////////////////////
// Scoping and the scope chain: To create a new scope is to write a new function
//1. Lexcical scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); // Error: b & c are not defined
}



///////////////////////////////////////
// Lecture: The this keyword: 'this' will only be assigned a value when an object calls a method

// Regular function call: 'this' keyword points at the global object or window object
// Method call: the 'this' variable points to the object that is calling the method. ie: call a function inside an object

console.log(this); //Output is window's information.
calculateAge(1865);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); //output: Window
}

var john = {
    name: 'john',
    yearOfBirth: 1996,
    calculateAge: function () {
        console.log(this); //'this' refers to the method
        console.log(2018 - this.yearOfBirth);
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();//output: Window
    }
}
john.calculateAge(); //this's output: object(name:'john', yearOfBirth:1996) 26

var mike = {
    name: 'Mike',
    yearOfBirth: 1984

};
mike.calculateAge = john.calculateAge;
mike.calculateAge();////this's output: object(name:'Mike', yearOfBirth:1984)  32



