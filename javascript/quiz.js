// // Q1 Changing Case
// var uname = "hassan";
// var upperCaseName = uname.toUpperCase();
// console.log(upperCaseName); // Output: "HASSAN"

// // Q2 String Length & Extracting
// var sentence = "The quick brown fox jumps over the lazy dog.";
// var word = "fox";
// var startIndex = sentence.indexOf(word);
// var endIndex = startIndex + word.length;
// var extractedWord = sentence.slice(startIndex, endIndex);
// console.log(extractedWord); // Output: "fox"

// // Q3 Finding Segments
// var str = "JavaScript is a powerful programming language.";
// console.log(str.indexOf("Script")); // Output: 4
// console.log(str.indexOf("Java"));   // Output: 0
// console.log(str.indexOf("Python")); // Output: -1

// Q4 Character at Position
// var str = "Hello, World!";
// console.log(str.charAt(0));
// console.log(str.charAt(7));
// console.log(str.charAt(4));

// Q5 Replacing Characters
// var str = "I love JavaScript!";
// var newStr = str.replace("JavaScript", "JS");
// console.log(newStr); // Output: "I love JS!" 

// Q6 Rounding Numbers
// var num1 = 3.7;     
// var num2 = 3.2;
// console.log(Math.round(num1)); // Output: 4
// console.log(Math.round(num2)); // Output: 3

// Q7 Random Numbers
// var randomNum = Math.random();
// console.log(randomNum); // Output: A random number between 0 (inclusive) and 1 (exclusive)
// var randomNum1to10 = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum1to10); // Output: A random integer between 1 and 10 (inclusive)
 
// Q8 Conversions
// var numStr = "123.45";
// var num = parseFloat(numStr);
// console.log(num); // Output: 123.45
// var intStr = "42";
// var intNum = parseInt(intStr);
// console.log(intNum); // Output: 42
 
// Q9 Decimal Length
var num = 3.14159;
var decimalPart = num.toString().split(".")[1]; // Split the number into integer and decimal parts
console.log(decimalPart.length); // Output: 5

