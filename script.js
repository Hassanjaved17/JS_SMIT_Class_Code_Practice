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
// var myName = prompt("Enter your name");
// var myNameLenght = myName.length;

// if(myNameLenght > 3){
//     // 0 indicates the index num and 3 indicates Stop before index 3
// var result = myName.slice(0, 3); 
// console.log(result);
// }

// ======= (2) ========

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

var cityName = "This is World War II story of the Past World War II";

var cityNames = cityName.length;
console.log(cityNames)
for (i = 0; i < cityNames; i++) {
    if (cityName.slice(i, i + 12) === "World War II") {
        cityName = cityName.slice(0, i) + "The Second World War" + cityName.slice(i + 12);
        console.log("CityName =>", cityName);
    }
}