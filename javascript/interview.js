console.log("Server Is running");

// 1. What is the difference between var, let, and const?

// Ans) var is function-scoped and hoisted to top of function. let and const are block-scoped ({}). const cannot be reassigned. Use const by default, let when you need to change the value, avoid var.

 Ex: 


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
 
// 3. What is the event loop in JavaScript?

// Ans) The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs. It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.

// 4. What is the difference between == and === in JavaScript?

// Ans) == is the loose equality operator that performs type coercion, while === is the strict equality operator that does not perform type coercion. === checks for both value and type equality, while == only checks for value equality after converting types if necessary.     

 