console.log("Server Is running");

// 1. What is the difference between var, let, and const?

// Ans) var is function-scoped and hoisted to top of function. let and const are block-scoped ({}). const cannot be reassigned. Use const by default, let when you need to change the value, avoid var.

Ex:  var x = 1
let y = 2;
const z = 3;

// 2. What is a closure in JavaScript?

// Ans) A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after that scope has finished executing.

Ex: function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
var myClosure = outer();
myClosure();