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

function innerFunction(){
 console.log("Hassan");   
}
function outerFunction(lastName){
    console.log(lastName)
}
outerFunction("Ahmed");
  