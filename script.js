console.log("server is running");

// finding Last element in basicarray

// var arr =["a","b",3,4]
// console.log(arr.length);
// console.log(arr.length -1)
// console.log("array last element", arr[arr.length -1])

// 2D Array

// var twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, [2,"g",["c",10]]],
// ];


// console.log("twoDArray",twoDArray);

// ------practice end-----------


// 08-dec-25 class code practice

// ======= (1) ========
// Take user name and slice first 3 letters

// var myName = prompt("Enter your name");
// var myNameLenght = myName.length;

// if(myNameLenght > 3){
//     // 0 indicates the index num and 3 indicates Stop before index 3
// var result = myName.slice(0, 3);
// console.log(result);
// }

// ======= (2) ========
// Check if user typed double space (" ")

// checking double space entered  by user
// var cityName = prompt("Enter your city name");

// var cityNames = cityName.length;

// for(i=0; i < cityNames; i++){
//     if (cityName.slice(i, i+2) === "  "){
//             console.log("hey , double space not allowed");
//             break
//     }
//     else{
//         console.log("there is no double space try again");
//     }
// }

// ======= (3) ========
// Replace "World War II" with "The second World War" manually

// var cityName = "This is World War II story of the Past World War II";

// var cityNames = cityName.length;
// console.log(cityNames)
// for (i = 0; i < cityNames; i++) {
//     if (cityName.slice(i, i + 12) === "World War II") {
//         cityName = cityName.slice(0, i) + "The Second World War" + cityName.slice(i + 12);
//         console.log("CityName =>", cityName);
//     }
// }

// ======= (4) ========
//  indexOf example

// var authorName = "hassan";
// var checkName = authorName.indexOf("s");
// console.log(checkName);

// ======= (5) ========
// lastIndexOf + replace last occurrence

// var sentence = "Pakistan is the beautiful country and Pakistan also."
// var sentences = sentence.lastIndexOf("Pakistan");

// if(sentence !== -1){
//     var result = sentence.slice(0, sentences) + "Turkey" + sentence.slice(sentences + 8);
//     console.log(result);
// }


// let checkCities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

// console.log(checkCities.length,checkCities);

// checkCities.push("multan");
// checkCities.unshift("faizabad");
// checkCities.shift("faizabad");
// console.log(checkCities)


// console.log(checkCities.length,checkCities);

// let fruits = ["apple", "banana", "orange", "mango", "grapes"];

// let selectedFruits = fruits.slice(1,4);
// console.log("selectedFruits",selectedFruits);
// console.log("fruits",fruits);

// let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

// let removedCities = cities.splice(2,2,"faizabad","sialkot");
// console.log("removedCities",removedCities);
// console.log("cities",cities);

// let arr = [1,2,3,4,5];
// let result = arr.concat([6,7,8,,9,10]);
// console.log("result",result);
// console.log("arr",arr);

// let fName = "james";
// let lNmae = "bond";
// let fullName = fName + " " + lNmae;
// console.log(fullName);


// Js Objects

// let student ={
//     name: "hassan",
//     age: 25,
//     city: "karachi",
//     isMarried: false,
// }

// // accessing object properties
// console.log(student.name);
// student.address = "abc street";
// console.log(student)

// Adding properties to object
// let person ={ }

// person.name = "ali";
// person.age = 30;
// person.city = "lahore";
// console.log("person=>",person);

//  practice higher order functions
// function innerFunction(){
//  console.log("Hassan");
// }
// function outerFunction(lastName){
//     console.log(lastName)
// }
// outerFunction("Ahmed");

// function greet(uname) {
//     return `Hello ${uname}`;
// }
// // processUser is a higher-order function
// function processUser(fn) {
//     return fn("Hassan");
// }
// console.log(processUser(greet));

// const numbers = [1, 2, 3, 4, 5];
// // Using map to create a new array with each number squared
// const squares = numbers.map(num => num * num);
// console.log(squares);

// Output: [1, 4, 9, 16, 25]

// Using map to create a new array with languages in uppercase
// const lang = ["python","ruby","java"]

// const sort = lang.map(lang => lang.toUpperCase());
// console.log(sort);

// Using filter to create a new array with only even numbers
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
// Output: [2, 4]

//  suing reduce  to remove the duplicate items from array
// const techs = ["HTML", "React", "CSS", "React", "JS"];

// const removeDuplicate = techs.filter(
//         (item, index) => techs.indexOf(item) === index
//     );

// console.log(removeDuplicate);
// // ["HTML", "React", "CSS", "JS"]
// console.log("err not found");

// Higher Order Function practice
// A Higher-Order Function is a function that takes another function as an argument or returns a function.
// function fun() {
// console.log("Hello, World!")
// }
// function fun2(action){
// action();
// action();
// }
// fun2(fun);

// // Reduce method practice
// const numbers = [1, 2, 3, 4, 5];
// // Using reduce to calculate the sum of all numbers in the array
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 15

// Using reduce to find the maximum number in the array
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
// console.log(max); // Output: 5

// forEach method practice
// const num = [10, 20, 30, 40, 50];
// num.forEach((value, index) => {
//     console.log("value", value);
//     console.log("index", index);
// });

// Find method practice
//  let fnum = [1,2,3,4,5,6,7,8,9,10];
//  let evenNumber = fnum.find ((num)=> num % 2 === 0);
//  console.log("evenNumber",evenNumber);

// Some method practice
//  var num = [1,2,3,4,5];
//  var hasNeg = num.some((num)=> num < 0);
//  console.log("hasNeg",hasNeg);

// Every method practice
// The every function checks if all array elements satisfy a condition.
// var n = [1, 2, 3, 4, 5];
// var allPos = n.every((num)=> num > 0);
// console.log("allPos", allPos);

// Advanced Techniques with Higher Order Functions
// 1. Function Composition.
// Function composition is the process of combining multiple functions to create a new function. The composed function applies multiple operations in sequence.

// function add(x){
//     return x + 2;
// }
// function multiply(x){
//     return x * 3;
// }

// function compose(f, g){
//     return function(x){
//         return f(g(x));
//     }
// }
// var res = compose(multiply, add)(4);
// console.log(res);
// Output: 15 ( (x + 2) * 3 when x = 1 )(1);

// 2. Currying
// Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.
// function curryAdd(x){
//     return function(y){

//         return x + y;
//     }
// }
// var add5 = curryAdd(5);
// console.log(add5(3)); // Output: 8 (5 + 3)
// console.log(curryAdd(2)(4)); // Output: 6 (2 + 4)

//  3. Using for...of Loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// var arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// //  4. Using Spread Operator
// // The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var combined = [...arr1, ...arr2];
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Fetch API practice
// fetch('https://dummyjson.com/test')
//     .then(res => res.json())
//     .then(console.log);

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(json => console.log(json))

// DOM Manipulation practice
// function cli(){
//     alert("Button clicked!");

// }

// function greet(website){
//     alert(`Hello, welcome to our ${website} website!`);
// }
// greet("JS SMIT Class");

// function practice(){
// for(let i =0; i<=5; i++){
//     console.log(i);
// }
// }
// practice();

// Diffence between Parameter and Argument
// A parameter is a variable in a function definition that acts as a placeholder for the value that will be passed to the function when it is called. An argument, on the other hand, is the actual value that is passed to the function when it is invoked.
// Example 1
// function greeting(name){
//     console.log(`Hello, ${name} ! Welcome to our website.`);
// }
// greeting("Hassan"); // "Hassan" is the argument passed to the function

//  Example 2
// var makeJuice = (fruit) => {
// console.log(`Making juice from ${fruit}`);
// // }
// // makeJuice("Mango");
// // makeJuice("Orange");
// // makeJuice("Banana");
// "Mango", "Orange", and "Banana" are the arguments passed to the function

// Example 3
// function add(a, b) { // a and b are parameters
//     return a + b;
// }
// var sum = add(5, 10); // 5 and 10 are arguments
// console.log(sum); // Output: 15

// alert("Hassan You have done great job!");
// // Higher Order Function Map method practice again
// // The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// var num = [1, 2, 3]
// var newNum = num.map((n) => n * n);
// console.log("newNum", newNum);
// Output: newNum [1, 4, 9]

//  Filter method practice again
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = numbers.filter((n) => n % 2 === 0);
// console.log("evenNumbers", evenNumbers);
// Output: evenNumbers [2, 4, 6, 8, 10]

// Reduce method practice again
//  A reduce method executes a reducer function on each element of the array, resulting in a single output value.
// var nums = [1, 2, 3, 4, 5];
// var sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log("sum", sum);
// Output: sum 15

// forEach method practice again
// The forEach method executes a provided function once for each array element.
// var fNumbers = [10, 20, 30, 40, 50];
// fNumbers.forEach((value, index) => {
//     console.log("value", value);
//     console.log("index", index);
// });
// Filter method with console log practice
// var fNumbers = [10,20,30,40,50,60,70,80,90,100];
// var newNumber = fNumbers.filter((value, index) => {
//     console.log("value", value);
//     console.log("index", index);
//     return value > 50;
// });

// Call method practice
// The call() method is a built-in JavaScript function that allows you to call a function with a specified this value and arguments provided individually. It is used to invoke a function and explicitly set the this context for that function.
// var newObj = {
//     stdData: function(message){
//         console.log(message + this.name, this.age);
//     }
// }
// var std ={
//     name: "Hassan",
//     age: 20
// }
// var result = newObj.stdData.call(std, "Hello ");
// Output: Hello Hassan 20

// Apply method practice
// The apply() method is a built-in JavaScript function that allows you to call a function with a specified this value and arguments provided as an array (or an array-like object). It is similar to the call() method, but instead of passing arguments individually, you pass them as an array.

// IIFE (Immediately Invoked Fuction Expression)
// An IIFE function is defined and executed at the same time.
// (function (){
//     console.log("IIFE function")
// })()
//

// (function (name) {
//     console.log(`hello ${name}`)
// })("hassan");


// (function () {
//     let hidden = 20;
// })()
// let result = hidden; output: Error: hidden is not defined

//POINTS TO BE NOTED
// You can only self-invoke a function expression.
// You can not self-invoke a function declaration.

// // IIFE With Return Value
//  let result = (function (){
//     return 5 + 5;
//  })();
//  console.log("result=>",result);

// // Arrow Function IIFE
// var name = "Hassan";
// (()=>{
//     let text = "Hello " + name + " Nice To Meet You";
//     console.log(text);
// })();


//  Interview Tip (Important)
// Variables declared inside a function are not accessible outside unless returned.
// JS Function Definitions
// function myFunction (x,y){
//  return x * y;
// }
// var result = myFunction(7,8);
// console.log(result);


// Clousers in JS
//  Clousers are functions that have access to variables defined in the parent scope, even after the parent function has finished executing.    
//  The inner function has access to the variables and functions defined in the outer function, even after the outer function has finished executing.
function outer() {
    var uname = "Hassan";

    function inner() {
        console.log(uname);
    }
    return uname;
}
var myName = outer();
console.log(myName);





