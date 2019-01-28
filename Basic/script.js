
// /*****************************
// * Variables and data types
// */

// console.log('Hello World');
// //Data types: Number(floating point numbers), String, Boolean, Undefined, Null
// var firstName = 'John';
// var lastName = 'Smith';
// var age = 28;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);
// job = 'teacher';

// console.log(job);

// /*
// Variable naming rules:names start with _ and $ will be accepted
// */


// var _3years = 3;
// var johnMark = 'john and mark';

// //var if = 23; //Wrong


// /*****************************
// * Variable mutation and type coercion
// */
// // type coercion: There is no need to convert data types, JS will automatically help convert from one data type to the other
// var firstName = 'John';
// var age = 29;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Variable mutation: force change data type
// age = 'twenty eight';
// job = 'driver';
// //Alert will show a pop-up window. The page will be loading until hitting ok
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// //Prompt will show a pop-up window and a input box. The typed value will be store in lastName
// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);

// /******************************
// * Basic operators
// */

// var now, yearJohn, yearMark, ageJohn, ageMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;


// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// //logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);


// // typeof operator
// console.log(typeof johnOlder);//output is boolean
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john');
// var x;
// console.log(typeof x);

// /**********************
//  * Operator precedence: which operator is excuted first
//  * Check this resource to see more: https://codingheroes.io/resources/
//  */
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 28;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// //More operators
// x *= 2;
// console.log(x);
// x += 18;
// console.log(x);
// x += 1;
// x++;
// console.log(x);



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var heightMark = 1.8,
    heightJohn = 1.85,
    massMark = 70,
    massJohn = 85;

var bmiMark = massMark / heightMark * heightMark;
var bmiJohn = massJohn / heightJohn * heightJohn;
var markHJohn = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHJohn);