console.log("Server Is running");

// 1. What is the difference between var, let, and const?

// Ans) var is function-scoped and hoisted to top of function. let and const are block-scoped ({}). const cannot be reassigned. Use const by default, let when you need to change the value, avoid var.

// Ex: 
//   var x = 10;
//     let y = 20;
//     const z = 30;
//     console.log(x);

// 2. What is a closure in JavaScript?

// Ans) A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after that scope has finished executing.

// Ex:
//  function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }
// var myClosure = outer();
// myClosure();


// Q) What is hoisting in JavaScript?

// Ans) Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// example:
 console.log(a); // undefined
var a = 5;    
 
// 3. What is the event loop in JavaScript?

// Ans) The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs. It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.

// 4. What is the difference between == and === in JavaScript?

// Ans) == is the loose equality operator that performs type coercion, while === is the strict equality operator that does not perform type coercion. === checks for both value and type equality, while == only checks for value equality after converting types if necessary.     

  