# Classes and the `this` Keyword

## Basic Class Syntax

A class is a blueprint for creating objects. Classes encapsulate data (properties) and behavior (methods) together.

### Exercise: Create a Basic Class

Create a `Person` class with properties for name and age, and a method to introduce themselves.

```javascript
// Create a Person class with:
// - A constructor that accepts name and age
// - A method called introduce() that returns "Hi, I'm [name] and I'm [age] years old."
// Your code here

const person1 = new Person('Alice', 25);
console.log(person1.introduce()); // "Hi, I'm Alice and I'm 25 years old."

const person2 = new Person('Bob', 30);
console.log(person2.introduce()); // "Hi, I'm Bob and I'm 30 years old."
```

### Exercise: Class with Multiple Methods

Create a `Rectangle` class that can calculate area and perimeter.

```javascript
// Create a Rectangle class with:
// - A constructor that accepts width and height
// - A method getArea() that returns width * height
// - A method getPerimeter() that returns 2 * (width + height)
// - A method describe() that returns "Rectangle: [width]x[height]"
// Your code here

const rect = new Rectangle(5, 3);
console.log(rect.getArea()); // 15
console.log(rect.getPerimeter()); // 16
console.log(rect.describe()); // "Rectangle: 5x3"
```

### Exercise: Class with Default Values

Create a `Product` class with default values for some properties.

```javascript
// Create a Product class with:
// - Properties: name, price, quantity (default to 1), inStock (default to true)
// - A method getTotalValue() that returns price * quantity
// Your code here

const laptop = new Product('Laptop', 999, 2);
console.log(laptop.getTotalValue()); // 1998

const phone = new Product('Phone', 699); // Uses default quantity of 1
console.log(phone.getTotalValue()); // 699
console.log(phone.inStock); // true
```

## Understanding `this`

The `this` keyword refers to the current object. Its value depends on how a function is called.

### Exercise: Using `this` in Methods

Create a `Counter` class that demonstrates `this` in action.

```javascript
// Create a Counter class with:
// - A property 'count' starting at 0
// - A method increment() that adds 1 to count and returns this (for chaining)
// - A method decrement() that subtracts 1 from count and returns this
// - A method reset() that sets count to 0 and returns this
// - A method getValue() that returns the current count
// Your code here

const counter = new Counter();
console.log(counter.increment().increment().increment().getValue()); // 3
console.log(counter.decrement().getValue()); // 2
console.log(counter.reset().getValue()); // 0
```

### Exercise: `this` Context Problem

Identify and fix the `this` context issue in the following code:

```javascript
class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        // BUG: 'this' is undefined inside setInterval callback
        setInterval(function () {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
}

const timer = new Timer();
timer.start(); // This will throw an error or not work as expected

// Fix the Timer class using one of these approaches:
// 1. Arrow function
// 2. bind()
// 3. Store reference to this
// Your code here
```

### Exercise: `this` with Event Handlers

Given a Button class, fix the `this` binding issue:

```javascript
class Button {
    constructor(label) {
        this.label = label;
        this.clickCount = 0;
    }

    // BUG: When used as event handler, 'this' refers to the DOM element, not the Button instance
    handleClick() {
        this.clickCount++;
        console.log(`${this.label} clicked ${this.clickCount} times`);
    }

    attachTo(selector) {
        const element = document.querySelector(selector);
        // Fix the 'this' binding issue here
        element.addEventListener('click', this.handleClick);
    }
}

// Your fixed code here
```

## Getters and Setters

Getters and setters allow you to define computed properties and add validation when setting values.

### Exercise: Create Getters and Setters

Create a `Circle` class with getters and setters for radius, diameter, and area.

```javascript
// Create a Circle class with:
// - A private-like property _radius
// - A getter and setter for 'radius' (setter should validate positive numbers)
// - A getter for 'diameter' (radius * 2)
// - A getter for 'area' (Math.PI * radius^2)
// Your code here

const circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.diameter); // 10
console.log(circle.area); // 78.53981633974483

circle.radius = 10;
console.log(circle.diameter); // 20

circle.radius = -5; // Should throw an error or be ignored
```

### Exercise: Temperature Converter

Create a `Temperature` class that can convert between Celsius and Fahrenheit.

```javascript
// Create a Temperature class with:
// - A constructor that accepts a value in Celsius
// - A getter and setter for 'celsius'
// - A getter and setter for 'fahrenheit' (F = C * 9/5 + 32)
// Your code here

const temp = new Temperature(0);
console.log(temp.celsius); // 0
console.log(temp.fahrenheit); // 32

temp.fahrenheit = 212;
console.log(temp.celsius); // 100

temp.celsius = 25;
console.log(temp.fahrenheit); // 77
```

## Static Methods and Properties

Static methods and properties belong to the class itself, not instances.

### Exercise: Utility Class with Static Methods

Create a `MathUtils` class with static utility methods.

```javascript
// Create a MathUtils class with static methods:
// - static add(a, b) - returns sum
// - static multiply(a, b) - returns product
// - static max(...numbers) - returns the largest number
// - static randomBetween(min, max) - returns random number between min and max
// Your code here

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 7)); // 28
console.log(MathUtils.max(1, 5, 3, 9, 2)); // 9
console.log(MathUtils.randomBetween(1, 10)); // Random number between 1 and 10
```

### Exercise: Instance Counter

Create a `User` class that tracks how many instances have been created.

```javascript
// Create a User class with:
// - A static property 'count' starting at 0
// - A constructor that increments count and assigns an id to each instance
// - A static method getCount() that returns the total number of users
// Your code here

const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Charlie');

console.log(user1.id); // 1
console.log(user2.id); // 2
console.log(user3.id); // 3
console.log(User.getCount()); // 3
```

## Class Inheritance

Classes can extend other classes to inherit their properties and methods.

### Exercise: Basic Inheritance

Create an `Animal` base class and extend it with `Dog` and `Cat` classes.

```javascript
// Create an Animal class with:
// - Properties: name, age
// - Method: speak() that returns "Some generic sound"
//
// Create a Dog class that extends Animal:
// - Additional property: breed
// - Override speak() to return "[name] says: Woof!"
// - Method: fetch() that returns "[name] is fetching the ball!"
//
// Create a Cat class that extends Animal:
// - Additional property: indoor (boolean)
// - Override speak() to return "[name] says: Meow!"
// - Method: scratch() that returns "[name] is scratching the furniture!"
// Your code here

const dog = new Dog('Buddy', 3, 'Golden Retriever');
console.log(dog.speak()); // "Buddy says: Woof!"
console.log(dog.fetch()); // "Buddy is fetching the ball!"

const cat = new Cat('Whiskers', 5, true);
console.log(cat.speak()); // "Whiskers says: Meow!"
console.log(cat.scratch()); // "Whiskers is scratching the furniture!"
```

### Exercise: Using `super`

Create a `Vehicle` class and extend it with a `Car` class that uses `super`.

```javascript
// Create a Vehicle class with:
// - Properties: brand, model, year
// - Method: getInfo() that returns "[year] [brand] [model]"
// - Method: start() that returns "Vehicle starting..."
//
// Create a Car class that extends Vehicle:
// - Additional property: numDoors
// - Use super() in the constructor
// - Override start() to call parent's start() and add "Car engine running!"
// Your code here

const car = new Car('Toyota', 'Camry', 2023, 4);
console.log(car.getInfo()); // "2023 Toyota Camry"
console.log(car.numDoors); // 4
console.log(car.start()); // "Vehicle starting... Car engine running!"
```

### Exercise: Multi-level Inheritance

Create a shape hierarchy: Shape → Polygon → Triangle.

```javascript
// Create a Shape class with:
// - Property: color
// - Method: describe() that returns "A [color] shape"
//
// Create a Polygon class that extends Shape:
// - Property: sides
// - Override describe() to return "A [color] polygon with [sides] sides"
//
// Create a Triangle class that extends Polygon:
// - Properties: base, height
// - Constructor should set sides to 3 automatically
// - Method: getArea() that returns (base * height) / 2
// - Override describe() to include area
// Your code here

const triangle = new Triangle('blue', 10, 5);
console.log(triangle.describe()); // "A blue polygon with 3 sides and area of 25"
console.log(triangle.getArea()); // 25
console.log(triangle.color); // "blue"
console.log(triangle.sides); // 3
```

## Private Fields

Private fields (prefixed with #) are only accessible within the class.

### Exercise: Bank Account with Private Fields

Create a `BankAccount` class with private balance.

```javascript
// Create a BankAccount class with:
// - Private field #balance
// - Constructor accepts initial balance (default 0)
// - Method: deposit(amount) - adds to balance, returns new balance
// - Method: withdraw(amount) - subtracts from balance if sufficient funds, returns new balance or error message
// - Method: getBalance() - returns current balance
// - The balance should not be directly accessible from outside the class
// Your code here

const account = new BankAccount(100);
console.log(account.getBalance()); // 100
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.withdraw(200)); // "Insufficient funds"
console.log(account.getBalance()); // 120

// This should not work:
// console.log(account.#balance); // SyntaxError
// console.log(account.balance); // undefined
```

### Exercise: Private Methods

Create a `PasswordValidator` class with private helper methods.

```javascript
// Create a PasswordValidator class with:
// - Private method #hasMinLength(password) - checks if length >= 8
// - Private method #hasUppercase(password) - checks for uppercase letter
// - Private method #hasNumber(password) - checks for a number
// - Public method validate(password) - returns object with:
//   { valid: boolean, errors: string[] }
// Your code here

const validator = new PasswordValidator();

console.log(validator.validate('abc'));
// { valid: false, errors: ['Password must be at least 8 characters', 'Password must contain an uppercase letter', 'Password must contain a number'] }

console.log(validator.validate('Abcdefgh1'));
// { valid: true, errors: [] }
```

## Method Chaining

Method chaining allows multiple method calls in a single statement by returning `this`.

### Exercise: Query Builder

Create a `QueryBuilder` class that builds SQL-like queries using method chaining.

```javascript
// Create a QueryBuilder class with:
// - Method: select(fields) - stores fields to select
// - Method: from(table) - stores table name
// - Method: where(condition) - stores where condition
// - Method: orderBy(field, direction) - stores order by clause
// - Method: build() - returns the complete query string
// All methods except build() should return 'this' for chaining
// Your code here

const query = new QueryBuilder()
    .select('name, email')
    .from('users')
    .where('age > 18')
    .orderBy('name', 'ASC')
    .build();

console.log(query);
// "SELECT name, email FROM users WHERE age > 18 ORDER BY name ASC"
```

### Exercise: String Builder

Create a `StringBuilder` class for building strings with method chaining.

```javascript
// Create a StringBuilder class with:
// - Method: append(str) - adds string to the end
// - Method: prepend(str) - adds string to the beginning
// - Method: toUpperCase() - converts current string to uppercase
// - Method: toLowerCase() - converts current string to lowercase
// - Method: reverse() - reverses the current string
// - Method: toString() - returns the final string
// Your code here

const result = new StringBuilder()
    .append('Hello')
    .append(' ')
    .append('World')
    .toUpperCase()
    .toString();

console.log(result); // "HELLO WORLD"

const result2 = new StringBuilder()
    .append('abc')
    .reverse()
    .prepend('123')
    .toString();

console.log(result2); // "123cba"
```

## Challenging

### Challenge: State Machine

Create a `TrafficLight` class that implements a state machine.

```javascript
// Create a TrafficLight class with:
// - Private field #state (starts as 'red')
// - Method: getState() - returns current state
// - Method: next() - transitions to next state (red → green → yellow → red)
// - Method: canGo() - returns true if green
// - Method: shouldPrepareToStop() - returns true if yellow
// - Static property STATES with all valid states
// Your code here

const light = new TrafficLight();
console.log(light.getState()); // "red"
console.log(light.canGo()); // false

light.next();
console.log(light.getState()); // "green"
console.log(light.canGo()); // true

light.next();
console.log(light.getState()); // "yellow"
console.log(light.shouldPrepareToStop()); // true

light.next();
console.log(light.getState()); // "red"
```

### Challenge: Observable Class

Create an `Observable` class that implements the observer pattern.

```javascript
// Create an Observable class with:
// - Private field #value
// - Private field #observers (array of callback functions)
// - Constructor accepts initial value
// - Method: getValue() - returns current value
// - Method: setValue(newValue) - sets value and notifies all observers
// - Method: subscribe(callback) - adds observer, returns unsubscribe function
// Your code here

const observable = new Observable(0);

const unsubscribe1 = observable.subscribe((value) => {
    console.log('Observer 1:', value);
});

const unsubscribe2 = observable.subscribe((value) => {
    console.log('Observer 2:', value);
});

observable.setValue(5);
// Output:
// "Observer 1: 5"
// "Observer 2: 5"

unsubscribe1();

observable.setValue(10);
// Output:
// "Observer 2: 10"
```

### Challenge: Mixin Pattern

Implement mixins to add functionality to classes without inheritance.

```javascript
// Create mixins:
// - Flyable: adds fly() method that returns "[name] is flying!"
// - Swimmable: adds swim() method that returns "[name] is swimming!"
//
// Create a function applyMixins(targetClass, ...mixins) that applies mixins to a class
//
// Create a Duck class that uses both mixins:
// - Properties: name
// - Has both fly() and swim() methods from mixins
// Your code here

const duck = new Duck('Donald');
console.log(duck.fly()); // "Donald is flying!"
console.log(duck.swim()); // "Donald is swimming!"

// A Bird class might only use Flyable
const bird = new Bird('Tweety');
console.log(bird.fly()); // "Tweety is flying!"
// bird.swim() would not exist
```

### Challenge: Immutable Class

Create an immutable `Point` class where all operations return new instances.

```javascript
// Create a Point class with:
// - Properties: x, y (should be read-only after construction)
// - Method: add(point) - returns NEW Point with summed coordinates
// - Method: subtract(point) - returns NEW Point with difference
// - Method: scale(factor) - returns NEW Point with scaled coordinates
// - Method: distanceTo(point) - returns distance between points
// - Method: equals(point) - returns true if coordinates match
// - Use Object.freeze() to make instances truly immutable
// Your code here

const p1 = new Point(3, 4);
const p2 = new Point(1, 2);

const p3 = p1.add(p2);
console.log(p3.x, p3.y); // 4, 6
console.log(p1.x, p1.y); // 3, 4 (unchanged)

const p4 = p1.scale(2);
console.log(p4.x, p4.y); // 6, 8

console.log(p1.distanceTo(p2)); // ~2.83 (sqrt of 8)

// This should throw an error or be silently ignored:
// p1.x = 10;
```
