// chaudharyruchi1900

//Arthimetic
// + addition
// - subtraction
// / division
// % modulus
// * multiplication

//console.log(3 % 2); // gives remainder

//console.log(3 / 2); // give complete division

//External Javascript
// console.log("This is external js file.");

/*
Data types in javascript
1. Number - integer,double, float.
2. String - one or more than one char collection
4. Boolean -  true or false (truthy or falsy)
5. Undefined - no value is given to variable
6. Null - empty value
3. Symbol - 
*/

// let a = null;
// console.log(a);

//Variables
// let num = 32;  num is a variable

// class. let, const ,double,
// rules of declaring variable
// 1. variable name must not be a keyword.
// 2. variable must not contain any special character ,!,@, #. exception _ and $;
// 3. varibale name must not start with a number;

// let _ss = 11;
// let w4w4 = "44";

/*---day 2---- */

// data type can be divided into two cat

// *. primitive data type
// 1. Number - integer,double, float.
// 2. String - one or more than one char collection
// 4. Boolean -  true or false (truthy or falsy)
// 5. Undefined - no value is given to variable
// 6. Null - empty value
// 3. Symbol -

//* we can compare two data types
//* we cannot modify the data inside these data types

// 2. Non primitive data type
// 1. Array
// 2. Object

//* we cannot compare two data types
//* we cannot modify the data inside these data types

// let personName = "Abhay";
// let anotherName = "Abhay";

// let p1Age = 22,
//   p2Age = 23;

// console.log(p1Age == p2Age); //false

// let name = "Rahul";
// name[0] = "r";

// console.log(name);

// data type which is derived from primitive data type
// let arr = [];
// let prr = [];

// console.log(arr == prr);
// let arr2 = [2, "Rahul", 22, 64.8];

// () -> paranthesis
// [] -> square bracket
// {} -> curly brases

// let jan = 300;
// let feb = 350;
// // .......
// let dec = 500;

// let profit = [300, 350, 450];

//object is basicly a key-value pair

// const person = {
//   name: "Ronit",
//   age: 24,
//   weight: 64.7,
//   mobile: "9999999",
// };

// let s1 = {
//   name: "Ankit",
//   age: 18,
//   addmissionNumber: 8018,
// };

// let s2 = {
//   name: "Ankit",
//   age: 18,
//   addmissionNumber: 8018,
// };
// s2.name = "Puneet";

// let sales = [200, 240, 350, 450];
// sales[0] = 240;

// console.log(sales);
// console.log(s1 == s2, "student comparison");

// let school = {
//   //properties
//   totalArea: 800,
//   totalStrength: 4000,
//   address: "New delhi, 408668",
//   //methods
//   callMyName: () => {
//     return "I am school";
//   },
// };
// console.log(school.callMyName());

/*---Math object---- */
// console.log(Math);

function calculateCircumfrance(r) {
  //2*PI*r;
  console.log(2 * r * Math.PI);
}

// calculateCircumfrance(4);

// Math Object
/*
abs
floor
ceil
round
PI,E,
random 
*/
// Math.random() -> generate a random value between 0 to 1;
// Math.floor(Math.random() * 6 + 1);

/*---day 3---- */
// Booleans

// true and false
//truthy and falsy

// truthy - All Numbers except 0, All strings except empty string ,true;
// falsy - 0, undefined, NaN,Null, false, empty string.

// let str = "tree";

// if (0) {
//   console.log("-2 is truthy value");
// } else console.log("-2 is falsy value");

// const s = parseInt("ab");
// console.log(s);

// Operators In JS

// 1. Assignment Operator
// let s = "summer";

// // let b = undefined;

// // b = s;

// console.log(b);

//assignment operators
// += *= -= /= %=

// let a = 2;
// let b = 4;
// // b += a;
// // b = b + a;
// // b -= a;
// b = b - a;

// console.log(b);

// right side value left side assigned

// Logical Operator

// console.log(4 == 3);

// let s = "4"; //String
// let b = 4; // Number

// console.log(s === b);

// double equal operator only value checking (Equality)
// triple equal operator both value and data-type checking (Strict Equality)

// >
// <
// ==
// <=
// >=
// !=
// ===

// Increment Operator
// let a = 2;
// a = a + 1;
// a += 1;
// post increment a++
// pre increment ++a;

// ++a;
// a++;

// let b =a++;

// let b = ++a;
// form left to right

// Decrement Operator
// let a = 5,
//   b = 0;

// // a = a - 1;
// // a -= 1;
// // --a;

// b = --a;

// console.log({ a, b });

// Ternary Operator

// sort-hand syntx for writting conditions

// let a = 4;

// if (a % 2 == 0) {
//   //something
//   console.log("a is even");
// } else {
//   // else something
//   console.log("a is not even");
// }

// const res = condition ? somthing : else something.
// const res = a % 2 == 0 ? "a is even" : "a is not even";

// console.log(res);

// let a = 3 * (2 + 4);
// let a = 3 + 2 - 4;
// console.log(a);

// exponential operator

let a = 2;
// 2 ^ 4;
// let res = 2 * 2 * 2 * 2;
let res = 2 ** 5;

// console.log(res);

//operator precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

/*---Exercise---- */
// q1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// q2. Check if a day is weekend day or a working day. Your script will take day as an input
// q3. Write a program which tells the number of days in a month.

/* ----day 4---- */

// Date Object
// let today = new Date(); //2022-06-15T10:49:12.227Z

//methods
// 1. get full year
// console.log(today.getFullYear());
// 2. get Month
// console.log(today.getMonth()); // 0-11
// 3.get Date 1-31
// 4. get Hours 0-23
// 5. get Minutes 0-59
// 6. get Seconds 0-59
// 7. get Millisecond 0-999
// 8. get Day 0-6 (week days) sunday- saturday

// console.log("Date string: ", today.toDateString());
// console.log("Iso String: ", today.toISOString());

//conditions
// 1. If else, If else if else,
// 2. switch

let today = new Date();

// if (today.getDay() == 0) {
//   console.log("today is sunday");
// } else if (today.getDay() == 1) {
//   console.log("today is monday");
// }
// let day = today.getDate();

// switch (day) {
//   case 0: {
//     console.log("Sunday");
//     break;
//   }
//   case 1: {
//     console.log("Monday");
//     break;
//   }
//   case 2: {
//     console.log("Tuesday");
//     break;
//   }
//   case 3: {
//     console.log("Wednesday");
//     break;
//   }
//   case 4: {
//     console.log("Thursday");
//     break;
//   }
//   case 5: {
//     console.log("Friday");
//     break;
//   }
//   case 6: {
//     console.log("Saturday");
//     break;
//   }

//   default: {
//     console.log("Invalid day input");
//   }
// }

// Array

// store a liner data

// declare an Array
// 1. using Array constructor
// 2. using Square braces

// let arr = new Array(5).fill(2);
// console.log(arr); // [2, 2, 2, 2, 2]

// let arr = [2, 4, 6, 8];
// console.log(arr);

let str = "2,4,6,8,10";
// let arr = [];

// arr = str.split(",");
// console.log(arr); // [2,4,6,8,10]

//array destructuring
let name = "Sneha singh";
let [firstName, lastName] = name.split(" "); //[Sneha, Singh]

// console.log({ firstName, lastName });
//0  1  2
// let arr = [2, 3, 4];
// let [, second] = arr;
// 2        3       4
// console.log(second);

// let arr = [2, 3, 4];
// let arr2 = [8, 10, 12];
// // 0 1 2 3 4 5
// arr = arr.concat(arr2); // 2,3,4,8,10,12;
// // console.log(arr);

// // if (arr.includes(41)) {
// //   console.log("41 is present");
// // } else console.log("41 is not there!");
// // console.log(arr.slice(1, 5));

// arr.push(14); // 2,3,4,8,10,12,14;
// arr.pop(); // 2,3,4,8,10,12;
// arr.shift(); //3,4,8,10,12;
// arr.unshift(2); //2,3,4,8,10,12

// // console.log(arr);

// //1-D array
// // console.log(arr[0]); // 2

// //2-D array
// let arr2d = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// arr2d.push([7, 8, 9]);

// console.log(arr2d);

/*----day 5---- */

// Loops

// print number from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// *
// **
// ***
// ****

for (let i = 1; i <= 10; i++) {
  let step = "";
  for (let j = 1; j <= i; j++) {
    step += "*";
  }
  // console.log(step);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//resultant array
// [2, 4,6,8,10,12,14,16];

let result = arr.map((e) => {
  return e * 2;
});

// console.log(result);
