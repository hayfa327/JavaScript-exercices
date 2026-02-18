// The "this" Keyword

// "this" refers to the object that is executing the current function
// Its value depends on HOW the function is called, not WHERE it's defined
// Understanding "this" is crucial for OOP in JavaScript

// ============ "this" in Different Contexts ============

// 1. Global Context - "this" refers to the global object
// In browsers: window object
// In Node.js: global object
// Syntax: console.log(this)
// Use case: Rarely useful, usually indicates a bug
// console.log(this)

// 2. Object Method - "this" refers to the object calling the method
// Syntax: object.method() → this = object
// Use case: Accessing other properties/methods of the same object
const person = {
    name: 'Alice',
    greet(){
        console.log(`Hello, ${this.name}`)
    }
}

// person.greet()

// 3. Regular Function - "this" depends on strict mode
// Non-strict mode: this = window (global object)
// Strict mode: this = undefined
// Use case: Understanding why your "this" is undefined
function anyFunction(){
    console.log(this)
}

// anyFunction()

// 4. Arrow Function - "this" is inherited from enclosing scope (lexical)
// Syntax: () => { }
// Use case: Callbacks where you need to preserve "this" from outer scope
// Note: Arrow functions do NOT have their own "this"
const person2 = {
    name: "John",
    greet: () => {
        console.log(this.name)
    },

    greetDelayed() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`)
        }, 1000)
    }
}

// person2.greetDelayed()

// 5. Constructor Function - "this" refers to the new object being created
// Syntax: new FunctionName()
// Use case: Creating multiple objects with the same structure
function Car(make, model){
    this.make = make
    this.model = model
}

const myCar = new Car('Ford', 'Mustang')

// 6. Class - "this" refers to the instance of the class
// Syntax: class ClassName { constructor() { this.prop = value } }
// Use case: Object-oriented programming in JavaScript
class Animal {
    constructor(name){
        this.name = name
    }
}

const cat = new Animal('Buddy')

// 7. Event Handler - "this" refers to the element that received the event
// Syntax: element.addEventListener('event', function() { this })
// Use case: Accessing the clicked/triggered element
// Note: Arrow functions will NOT have "this" as the element!
const button = document.querySelector('.button')

button.addEventListener('click', function(){
    console.log(this)
})

// ============ Controlling "this" with call, apply, bind ============

// call() - Invokes function with specified "this" value and arguments
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Returns: The result of the function
// Use case: Borrowing methods from other objects
const personA = {name: 'Alice'}
const personB = {name: 'Bob'}

function introduce(greeting, punctuation){
    console.log(`${greeting}, I'm ${this.name}${punctuation}`)
}

introduce.call(personA, 'Hello', '!') // "Hello, I'm Alice!"
introduce.call(personB, 'Hi', '.') // "Hi, I'm Bob."

// apply() - Same as call(), but arguments passed as an array
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
// Returns: The result of the function
// Use case: When you have arguments in an array
introduce.apply(personA, ['Hey', '?']) // "Hey, I'm Alice?"

const args = ['Hey', '?']
introduce.call(personA, args[0], args[1]) // this is equivalent to
introduce.apply(personA, args) // this row

// bind() - Creates a NEW function with "this" permanently set
// Syntax: function.bind(thisArg, arg1, arg2, ...)
// Returns: A new function (does not invoke immediately)
// Use case: Creating callbacks with fixed "this", partial application
const introduceAlice = introduce.bind(personA, 'Yo')
// "this" is permanently bound to personA, which is name: Alice
// first argument is prefilled/defined as "Yo"
introduceAlice('...') // "Hello, I'm Alice..."

// Summary of call, apply, bind:
// | Method | Invokes Immediately? | Arguments Format | Returns          |
// |--------|----------------------|------------------|------------------|
// | call   | Yes                  | Comma-separated  | Function result  |
// | apply  | Yes                  | Array            | Function result  |
// | bind   | No                   | Comma-separated  | New function     |

// ============ Common "this" Pitfalls ============

// Pitfall 1: Losing "this" when passing method as callback
const user = {
    name: 'Charlie',
    greet(){
        console.log(`Hello, ${this.name}`)
    }
}
// user.greet()

// BAD: "this" is lost when method is passed as reference
setTimeout(user.greet, 100); // "Hello, undefined"

// GOOD: Use bind() or arrow function wrapper
setTimeout(user.greet.bind(user), 100) // "Hello, Charlie"
setTimeout(() => user.greet(), 100) // "Hello, Charlie"

// Pitfall 2: Using regular function in callback when you need outer "this"
const counter = {
    count: 0,
    start(){
        // BAD: this becomes undefined/window
        setInterval(function(){
            this.count++; // "this" is window, not counter
        }, 100)

        // GOOD: Use arrow function callback to inherit "this", "this" is inherited from start()
        setInterval(() => {
            this.count++; // "this" is counter
        }, 100)
    }
}

// ============================================================
// Object-Oriented Programming (OOP) in JavaScript
// ============================================================

// OOP is a programming paradigm based on "objects" that contain:
// - Data (properties/attributes)
// - Behavior (methods/functions)

// Four Pillars of OOP:
// 1. Encapsulation - Bundling data and methods that operate on that data
// 2. Abstraction - Hiding complex implementation, exposing simple interface
// 3. Inheritance - Creating new classes based on existing ones
// 4. Polymorphism - Objects of different types responding to same method

// ============ Creating Objects ============

// 1. Object Literal - Simplest way to create an object
// Syntax: const obj = { key: value }
// Use case: One-off objects, configuration objects
const catObj = {
    name: 'Whiskers', // property name
    age: 3, // property age
    meow(){
        // method
        console.log('Meow!')
    }
}

// 2. Factory Function - Function that returns a new object
// Syntax: function createObj() { return { ... } }
// Use case: Creating multiple similar objects without "new" keyword
// Limitation: Methods are recreated for each object (memory inefficient)
function createPerson(name, age) {
    // return a new object each time its called
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
        }
    }
}

const alice = createPerson('Alice', 30)
const bob = createPerson('Bob', 25)

// 3. Constructor Function - Function used with "new" keyword
// Syntax: function ClassName() { this.prop = value }
// Use case: Creating objects before ES6 classes
// Convention: PascalCase for constructor function names
function Person(name, age){
    this.name = name;
    this.age = age;
    // Methods should not be defined here to avoid memory inefficiency
}

// Methods added to prototype (shared across all instances - memory efficient)
Person.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name}`)
}

const person3 = new Person('Charlie', 21)

// 4. ES6 Class - Modern syntax for constructor functions (syntactic sugar)
// Syntax: class ClassName { constructor() { } }
// Use case: Preferred way to create objects in modern JavaScript
// Note: Classes are NOT hoisted like function declarations

class PersonClass {
    constructor(name, age) {
        // "this" refers to the new instance being created
        this.name = name;
        this.age = age;
    }

    // instance method - shared across all instances (automatically defined on prototype)
    greet(){
        console.log(`Hello, ${this.name}`)
    }
}

// create an instance
const person4 = new PersonClass('Dave', 29)

// ============ ES6 Classes in Depth ============

// Class Declaration
// Syntax: class ClassName { ... }
// Note: Not hoisted - must declare before use
class Rectangle {
    // Constructor - Called when creating new instance with "new"
    // Syntax: constructor(params) { this.prop = value }
    // Use case: Initialize instance properties

    // constructor is an initialzation method that's called automatically
    // set up initial property values for each instance
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Instance Method - Available on each instance
    // Syntax: methodName() { ... }
    // Use case: Operations that use instance data
    getArea(){
        return this.width * this.height
    }

    // Getter - Computed property accessed like a property (not a method call)
    // Syntax: get propertyName() { return value }
    // Use case: Derived values, lazy computation
    get perimeter(){
        return 2 * (this.width + this.height)
    }

    // Setter - Custom logic when setting a property
    // Syntax: set propertyName(value) { ... }
    // Use case: Validation, side effects when setting values
    // rect.dimension('20x10')
    set dimensions(value) {
        [this.width, this.height] = value.split('x').map(Number)
    }

    // Static Method - Called on the class itself, not instances
    // Syntax: static methodName() { ... }
    // Use case: Utility functions, factory methods
    static createSquare(side) {
        // Factory method, creates and returns a new Rectangle instance
        return new Rectangle(side, side)
    }

    // Static Property - Property on the class itself
    // Syntax: static propertyName = value
    // Use case: Constants, shared configuration
    static defaultColor = 'blue'
}

const rect = new Rectangle(5, 10)
console.log(rect.getArea())
console.log(rect.perimeter)
const square = Rectangle.createSquare(5)


// Class Expression - Classes can also be expressions
// Syntax: const ClassName = class { ... }
// Use case: Assigning classes to variables, passing as arguments
const Circle = class {
    constructor(radius) {
        this.radius = radius
    }
}

const circ = new Circle(10)

// ============ Private Fields and Methods (ES2022+) ============

// Private fields - Only accessible within the class
// Syntax: #fieldName
// Use case: Encapsulation - hiding internal implementation details
class BankAccount {
    #balance = 0
    #pin;

    constructor(initialBalance, pin) {
        this.#balance = initialBalance
        this.#pin = pin
    }

    #validatePin(pin) {
        return pin === this.#pin
    }

    // public method accessible from outside the class
    getBalance(pin){
        if(this.#validatePin(pin)){
            return this.#balance
        }

        return 'Invalid PIN'
    }
}

const account = new BankAccount(1000, '1234')
console.log(account.getBalance('1111')) // invalid pin
console.log(account.getBalance('1234')) // returns the value of balance

// ============ Inheritance ============

// Inheritance - Creating a class based on another class
// Parent class = Superclass = Base class
// Child class = Subclass = Derived class

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.isRunning = false
    }

    start(){
        this.isRunning = true;
        console.log(`${this.make} ${this.model} started.`)
    }

    stop(){
        this.isRunning = false;
        console.log(`${this.make} ${this.model} stopped.`)
    }
}

// extends keyword - Creates a subclass
// Syntax: class Child extends Parent { ... }
// Use case: Sharing common functionality, creating specialized versions
class ElectricCar extends Vehicle {
    constructor(make, model, batteryCapacity) {
        super(make, model);

        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100;
    }

    start() {
        // super.method()
        super.start()
        console.log('Electric car is silent.')
    }

    charge(){
        this.batteryLevel = 100;
        console.log('Fully charged!')
    }
}

const tesla = new ElectricCar('Tesla', 'Model S', '150kWh')
tesla.start()
tesla.charge()
tesla.stop()
// super keyword - Refers to the parent class
// super() - Calls parent's constructor (REQUIRED in child constructor)
// super.method() - Calls parent's method

// ============ Polymorphism ============

// Polymorphism - Different objects responding to the same method differently
// Use case: Writing code that works with objects of different types

// Polymorphic function - Works with any Shape
class Shape {
    getArea(){
        throw new Error('getArea must be implemented by subclass')
    }
}

class CircleShape extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class RectangleShape extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height
    }
}

function printArea(shape){
    console.log(`Area: ${shape.getArea()}`)
}

const shapes = [new CircleShape(5), new RectangleShape(4, 6)]

shapes.forEach(printArea)

// ============ instanceof Operator ============

// instanceof - Checks if object is an instance of a class
// Syntax: object instanceof ClassName
// Returns: true or false
// Use case: Type checking, conditional behavior based on type
console.log(tesla instanceof ElectricCar)
console.log(tesla instanceof Vehicle)
console.log(tesla instanceof Shape)

// ============ Object.getPrototypeOf() ============

// getPrototypeOf() - Returns the prototype of an object
// Syntax: Object.getPrototypeOf(object)
// Use case: Inspecting the prototype chain
Object.getPrototypeOf(tesla) === ElectricCar.prototype;
console.log(Object.getPrototypeOf(Object.getPrototypeOf(tesla))) === Vehicle.prototype

// ============ Composition vs Inheritance ============

// Composition - Building objects by combining smaller pieces
// "Has-a" relationship (a car HAS an engine)
// Often preferred over deep inheritance hierarchies

// Inheritance: "is-a" relationship
// class Dog extends Animal { }  // Dog IS an Animal

// Composition: "has-a" relationship

const canWalk = {
    walk(){
        console.log(`${this.name} is walking.`)
    }
}

const canSwim = {
    swim(){
        console.log(`${this.name} is swimming.`)
    }
}

// Using Object.assign to compose behaviors
function createDuck(name){
    const duck = { name }

    return Object.assign(duck, canWalk, canSwim)
}

function createFish(name) {
    const fish = { name };

    return Object.assign(fish, canSwim);
}

const duckyy = createDuck('Duckyy')
duckyy.walk()
duckyy.swim()

// ============================================================
// Best Practices for OOP in JavaScript
// ============================================================

// 1. Prefer composition over deep inheritance
// - Deep inheritance hierarchies are hard to maintain
// - Composition is more flexible

// 2. Use private fields for encapsulation
// - Hide internal state from outside access
// - Expose only what's necessary through public methods

// 3. Keep classes focused (Single Responsibility Principle)
// - Each class should do one thing well
// - If a class is doing too much, split it

// 4. Use getters/setters for computed properties and validation
// - Getters for derived values
// - Setters for validation before assignment

// 5. Use static methods for utility functions
// - Methods that don't need instance data
// - Factory methods that create instances

// 6. Always call super() first in subclass constructors
// - Required before using "this"
// - Initializes parent class properties

// 7. Be careful with "this" in callbacks
// - Use arrow functions or bind() to preserve "this"
// - Common source of bugs

// 8. Use instanceof for type checking
// - Check inheritance chain
// - Useful for polymorphic behavior

// Summary Table:
// | Concept              | Syntax                           | Use Case                        |
// |----------------------|----------------------------------|---------------------------------|
// | this (object)        | this.property                    | Access object's own properties  |
// | this (class)         | this.property                    | Access instance properties      |
// | call()               | fn.call(thisArg, args)           | Invoke with specific "this"     |
// | apply()              | fn.apply(thisArg, [args])        | Invoke with args as array       |
// | bind()               | fn.bind(thisArg)                 | Create function with fixed this |
// | class                | class Name { }                   | Define a class                  |
// | constructor          | constructor() { }                | Initialize instance             |
// | extends              | class Child extends Parent       | Inheritance                     |
// | super()              | super(args)                      | Call parent constructor         |
// | super.method()       | super.method()                   | Call parent method              |
// | static               | static method() { }              | Class-level method              |
// | #privateField        | #field = value                   | Private property                |
// | get                  | get prop() { }                   | Computed property               |
// | set                  | set prop(val) { }                | Property setter with logic      |
// | instanceof           | obj instanceof Class             | Type checking                   |
