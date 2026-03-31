// Q1 Changing Case
var uname = "hassan";
var upperCaseName = uname.toUpperCase();
console.log(upperCaseName); // Output: "HASSAN"

// Q2 String Length & Extracting
var sentence = "The quick brown fox jumps over the lazy dog.";
var word = "fox";
var startIndex = sentence.indexOf(word);
var endIndex = startIndex + word.length;
var extractedWord = sentence.slice(startIndex, endIndex);
console.log(extractedWord); // Output: "fox"
