console.log("Js is running")

// variables in js the difference between var, let and const are that var is function scoped and can be re-declared and updated, let is block scoped and can be updated but not re-declared, const is block scoped and cannot be updated or re-declared. 
// var is used to declare a variable that can be re-declared and updated, let is used to declare a variable that can be updated but not re-declared, const is used to declare a variable that cannot be updated or re-declared.

// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// let x = 10;
// x = 20;
// console.log(x); 

var bolean = true;
var a = 10;
var c = a + bolean;
console.log(c); // 11 because true is treated as 1 in arithmetic operations.

var tsunami = "Tsunami is a natural disaster that occurs when there is a sudden and large displacement of water, usually caused by an earthquake, volcanic eruption, or landslide. Tsunamis can cause significant damage to coastal areas and can be deadly if people are not prepared. It is important to have a tsunami evacuation plan in place if you live in a coastal area.";
console.log(tsunami.length); // 354 because the length property of a string returns the number of characters in the string, including spaces and punctuation.


// Array practice
var arr = ["a", "b", 3, 4];
console.log(arr.length);
console.log(arr.length - 1);
console.log("array last element", arr[arr.length - 1]);

// 2D Array
var twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, [2, "g", ["c", 10]]],
];
console.log("twoDArray", twoDArray);

// practice end