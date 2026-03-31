//======================================================  

// 28-mar-2026

// OOPs in JS
// Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. In JavaScript, you can create objects using constructor functions or ES6 classes.

// Constructor Function Example
// function Person(name, age) { // Constructor function to create a Person object
//     this.name = name; // Assigning the name parameter to the name property of the object
//     this.age = age;  // Assigning the age parameter to the age property of the object
//     this.greet = function() { // Method to greet using the object's properties
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  // Using template literals to create a greeting message 
//     }
// }
// var person1 = new Person("Hassan", 20);  // Creating an instance of the Person object
// person1.greet(); // Output: Hello, my name is Hassan and I am 20 years old.




// ES6 Class Example
// class Person {
//     constructor(name, age) {`
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// var person1 = new Person("Hassan", 25);
// person1.greet(); // Output: Hello, my name is Hassan and I am 25 years old.

//  Inheritance Example
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class constructor       
//         this.breed = breed; // Add a new property specific to Dog
//     }
//     speak() {
//         console.log(`${this.name} barks.`); // Override the speak method
//     }

// }

// var dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy barks.


// Encapsulation Example
// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this._balance = balance;
//     }

//     get balance() {
//         return this._balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//             console.log(`Deposited ${amount}. New balance: ${this._balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }
// }

// const acc1 = new BankAccount("Hassan", 1000);

// acc1.deposit(500);
// console.log(acc1.balance);


// 30-mar-26

// Polymorphism Example
// class Shape {
//     area() {
//         return 0;
//     }   
// }   

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius * this.radius;
//     }   
// }
 
// const rect = new Rectangle(5, 10);
// const circle = new Circle(7);
// console.log(`Area of Rectangle: ${rect.area()}`); // Output: Area of Rectangle: 50
// console.log(`Area of Circle: ${circle.area()}`); // Output: Area of Circle: 153.93804002589985
    
   
    // 31-may-26
//  Class code   
// Inheritance Example
// class Person{
//     constructor(name){
//         this.name = name;
//     }

    
// greet(){
//     console.log(`Hello ${this.name}`);
// }
// }

// class Teacher extends Person{
//  constructor(name, subject){
//     super(name);
//     this.subject = subject;
//  }

//  teach(){
//     console.log(`${this.name} is teaching ${this.subject}`);
//  }
// }

// const teacher1 = new Teacher("Hassan", "Math");
// teacher1.greet();
// teacher1.teach();
 