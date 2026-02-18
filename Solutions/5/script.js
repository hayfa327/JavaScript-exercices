// ============================================
// EXERCISE 5: Classes and the `this` Keyword
// ============================================

// ============================================
// Basic Class Syntax
// ============================================

// Exercise: Create a Basic Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person1 = new Person('Alice', 25);
console.log(person1.introduce()); // "Hi, I'm Alice and I'm 25 years old."

const person2 = new Person('Bob', 30);
console.log(person2.introduce()); // "Hi, I'm Bob and I'm 30 years old."

// Exercise: Class with Multiple Methods
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    describe() {
        return `Rectangle: ${this.width}x${this.height}`;
    }
}

const rect = new Rectangle(5, 3);
console.log('Area:', rect.getArea()); // 15
console.log('Perimeter:', rect.getPerimeter()); // 16
console.log('Description:', rect.describe()); // "Rectangle: 5x3"

// Exercise: Class with Default Values
class Product {
    constructor(name, price, quantity = 1, inStock = true) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.inStock = inStock;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }
}

const laptop = new Product('Laptop', 999, 2);
console.log('Laptop Total:', laptop.getTotalValue()); // 1998

const phone = new Product('Phone', 699);
console.log('Phone Total:', phone.getTotalValue()); // 699
console.log('Phone in Stock:', phone.inStock); // true

// ============================================
// Understanding `this`
// ============================================

// Exercise: Using `this` in Methods (Method Chaining)
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    decrement() {
        this.count--;
        return this;
    }

    reset() {
        this.count = 0;
        return this;
    }

    getValue() {
        return this.count;
    }
}

const counter = new Counter();
console.log('After 3 increments:', counter.increment().increment().increment().getValue()); // 3
console.log('After decrement:', counter.decrement().getValue()); // 2
console.log('After reset:', counter.reset().getValue()); // 0

// Exercise: `this` Context Problem - Fixed with Arrow Function
class Timer {
    constructor() {
        this.seconds = 0;
    }

    // Solution 1: Using Arrow Function (preferred)
    start() {
        setInterval(() => {
            this.seconds++;
            console.log('Seconds (arrow):', this.seconds);
        }, 1000);
    }

    // Solution 2: Using bind()
    startWithBind() {
        setInterval(
            function () {
                this.seconds++;
                console.log('Seconds (bind):', this.seconds);
            }.bind(this),
            1000
        );
    }

    // Solution 3: Store reference to this
    startWithSelf() {
        const self = this;
        setInterval(function () {
            self.seconds++;
            console.log('Seconds (self):', self.seconds);
        }, 1000);
    }
}

// Uncomment to test (will run indefinitely):
// const timer = new Timer();
// timer.start();

// Exercise: `this` with Event Handlers - Fixed
class Button {
    constructor(label) {
        this.label = label;
        this.clickCount = 0;
    }

    handleClick() {
        this.clickCount++;
        console.log(`${this.label} clicked ${this.clickCount} times`);
    }

    // Solution 1: Using bind in attachTo
    attachTo(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('click', this.handleClick.bind(this));
        }
    }

    // Solution 2: Using arrow function in attachTo
    attachToArrow(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('click', () => this.handleClick());
        }
    }

    // Solution 3: Define handleClick as an arrow function property
    // handleClick = () => {
    //     this.clickCount++;
    //     console.log(`${this.label} clicked ${this.clickCount} times`);
    // }
}

// ============================================
// Getters and Setters
// ============================================

// Exercise: Create Getters and Setters
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

const circle = new Circle(5);
console.log('Radius:', circle.radius); // 5
console.log('Diameter:', circle.diameter); // 10
console.log('Area:', circle.area); // 78.53981633974483

circle.radius = 10;
console.log('New Diameter:', circle.diameter); // 20

try {
    circle.radius = -5; // Should throw an error
} catch (e) {
    console.log('Error:', e.message); // "Radius must be positive"
}

// Exercise: Temperature Converter
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        this._celsius = value;
    }

    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }

    set fahrenheit(value) {
        this._celsius = ((value - 32) * 5) / 9;
    }
}

const temp = new Temperature(0);
console.log('Celsius:', temp.celsius); // 0
console.log('Fahrenheit:', temp.fahrenheit); // 32

temp.fahrenheit = 212;
console.log('Celsius after setting F to 212:', temp.celsius); // 100

temp.celsius = 25;
console.log('Fahrenheit after setting C to 25:', temp.fahrenheit); // 77

// ============================================
// Static Methods and Properties
// ============================================

// Exercise: Utility Class with Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static max(...numbers) {
        return Math.max(...numbers);
    }

    static randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

console.log('Add:', MathUtils.add(5, 3)); // 8
console.log('Multiply:', MathUtils.multiply(4, 7)); // 28
console.log('Max:', MathUtils.max(1, 5, 3, 9, 2)); // 9
console.log('Random:', MathUtils.randomBetween(1, 10)); // Random number between 1 and 10

// Exercise: Instance Counter
class User {
    static count = 0;

    constructor(name) {
        User.count++;
        this.id = User.count;
        this.name = name;
    }

    static getCount() {
        return User.count;
    }
}

const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Charlie');

console.log('User 1 ID:', user1.id); // 1
console.log('User 2 ID:', user2.id); // 2
console.log('User 3 ID:', user3.id); // 3
console.log('Total Users:', User.getCount()); // 3

// ============================================
// Class Inheritance
// ============================================

// Exercise: Basic Inheritance
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Some generic sound';
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        return `${this.name} says: Woof!`;
    }

    fetch() {
        return `${this.name} is fetching the ball!`;
    }
}

class Cat extends Animal {
    constructor(name, age, indoor) {
        super(name, age);
        this.indoor = indoor;
    }

    speak() {
        return `${this.name} says: Meow!`;
    }

    scratch() {
        return `${this.name} is scratching the furniture!`;
    }
}

const dog = new Dog('Buddy', 3, 'Golden Retriever');
console.log('Dog speak:', dog.speak()); // "Buddy says: Woof!"
console.log('Dog fetch:', dog.fetch()); // "Buddy is fetching the ball!"

const cat = new Cat('Whiskers', 5, true);
console.log('Cat speak:', cat.speak()); // "Whiskers says: Meow!"
console.log('Cat scratch:', cat.scratch()); // "Whiskers is scratching the furniture!"

// Exercise: Using `super`
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    start() {
        return 'Vehicle starting...';
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }

    start() {
        return `${super.start()} Car engine running!`;
    }
}

const car = new Car('Toyota', 'Camry', 2023, 4);
console.log('Car Info:', car.getInfo()); // "2023 Toyota Camry"
console.log('Num Doors:', car.numDoors); // 4
console.log('Car Start:', car.start()); // "Vehicle starting... Car engine running!"

// Exercise: Multi-level Inheritance
class Shape {
    constructor(color) {
        this.color = color;
    }

    describe() {
        return `A ${this.color} shape`;
    }
}

class Polygon extends Shape {
    constructor(color, sides) {
        super(color);
        this.sides = sides;
    }

    describe() {
        return `A ${this.color} polygon with ${this.sides} sides`;
    }
}

class Triangle extends Polygon {
    constructor(color, base, height) {
        super(color, 3);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }

    describe() {
        return `A ${this.color} polygon with ${this.sides} sides and area of ${this.getArea()}`;
    }
}

const triangle = new Triangle('blue', 10, 5);
console.log('Triangle Description:', triangle.describe()); // "A blue polygon with 3 sides and area of 25"
console.log('Triangle Area:', triangle.getArea()); // 25
console.log('Triangle Color:', triangle.color); // "blue"
console.log('Triangle Sides:', triangle.sides); // 3

// ============================================
// Private Fields
// ============================================

// Exercise: Bank Account with Private Fields
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            return 'Insufficient funds';
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
console.log('Initial Balance:', account.getBalance()); // 100
console.log('After Deposit:', account.deposit(50)); // 150
console.log('After Withdraw 30:', account.withdraw(30)); // 120
console.log('Withdraw 200:', account.withdraw(200)); // "Insufficient funds"
console.log('Final Balance:', account.getBalance()); // 120

// This won't work:
// console.log(account.#balance); // SyntaxError
console.log('Direct balance access:', account.balance); // undefined

// Exercise: Private Methods
class PasswordValidator {
    #hasMinLength(password) {
        return password.length >= 8;
    }

    #hasUppercase(password) {
        return /[A-Z]/.test(password);
    }

    #hasNumber(password) {
        return /[0-9]/.test(password);
    }

    validate(password) {
        const errors = [];

        if (!this.#hasMinLength(password)) {
            errors.push('Password must be at least 8 characters');
        }
        if (!this.#hasUppercase(password)) {
            errors.push('Password must contain an uppercase letter');
        }
        if (!this.#hasNumber(password)) {
            errors.push('Password must contain a number');
        }

        return {
            valid: errors.length === 0,
            errors,
        };
    }
}

const validator = new PasswordValidator();

console.log('Validate "abc":', validator.validate('abc'));
// { valid: false, errors: ['Password must be at least 8 characters', 'Password must contain an uppercase letter', 'Password must contain a number'] }

console.log('Validate "Abcdefgh1":', validator.validate('Abcdefgh1'));
// { valid: true, errors: [] }

// ============================================
// Method Chaining
// ============================================

// Exercise: Query Builder
class QueryBuilder {
    constructor() {
        this._select = '';
        this._from = '';
        this._where = '';
        this._orderBy = '';
    }

    select(fields) {
        this._select = fields;
        return this;
    }

    from(table) {
        this._from = table;
        return this;
    }

    where(condition) {
        this._where = condition;
        return this;
    }

    orderBy(field, direction) {
        this._orderBy = `${field} ${direction}`;
        return this;
    }

    build() {
        let query = `SELECT ${this._select} FROM ${this._from}`;
        if (this._where) {
            query += ` WHERE ${this._where}`;
        }
        if (this._orderBy) {
            query += ` ORDER BY ${this._orderBy}`;
        }
        return query;
    }
}

const query = new QueryBuilder()
    .select('name, email')
    .from('users')
    .where('age > 18')
    .orderBy('name', 'ASC')
    .build();

console.log('Query:', query);
// "SELECT name, email FROM users WHERE age > 18 ORDER BY name ASC"

// Exercise: String Builder
class StringBuilder {
    constructor() {
        this._string = '';
    }

    append(str) {
        this._string += str;
        return this;
    }

    prepend(str) {
        this._string = str + this._string;
        return this;
    }

    toUpperCase() {
        this._string = this._string.toUpperCase();
        return this;
    }

    toLowerCase() {
        this._string = this._string.toLowerCase();
        return this;
    }

    reverse() {
        this._string = this._string.split('').reverse().join('');
        return this;
    }

    toString() {
        return this._string;
    }
}

const result = new StringBuilder()
    .append('Hello')
    .append(' ')
    .append('World')
    .toUpperCase()
    .toString();

console.log('StringBuilder Result 1:', result); // "HELLO WORLD"

const result2 = new StringBuilder().append('abc').reverse().prepend('123').toString();

console.log('StringBuilder Result 2:', result2); // "123cba"

// ============================================
// Challenging Exercises
// ============================================

// Challenge: State Machine
class TrafficLight {
    static STATES = ['red', 'green', 'yellow'];
    #state;

    constructor() {
        this.#state = 'red';
    }

    getState() {
        return this.#state;
    }

    next() {
        const currentIndex = TrafficLight.STATES.indexOf(this.#state);
        const nextIndex = (currentIndex + 1) % TrafficLight.STATES.length;
        this.#state = TrafficLight.STATES[nextIndex];
        return this;
    }

    canGo() {
        return this.#state === 'green';
    }

    shouldPrepareToStop() {
        return this.#state === 'yellow';
    }
}

const light = new TrafficLight();
console.log('Initial State:', light.getState()); // "red"
console.log('Can Go:', light.canGo()); // false

light.next();
console.log('After Next:', light.getState()); // "green"
console.log('Can Go:', light.canGo()); // true

light.next();
console.log('After Next:', light.getState()); // "yellow"
console.log('Should Prepare to Stop:', light.shouldPrepareToStop()); // true

light.next();
console.log('After Next:', light.getState()); // "red"

// Challenge: Observable Class
class Observable {
    #value;
    #observers;

    constructor(initialValue) {
        this.#value = initialValue;
        this.#observers = [];
    }

    getValue() {
        return this.#value;
    }

    setValue(newValue) {
        this.#value = newValue;
        this.#observers.forEach((callback) => callback(this.#value));
    }

    subscribe(callback) {
        this.#observers.push(callback);
        // Return unsubscribe function
        return () => {
            const index = this.#observers.indexOf(callback);
            if (index > -1) {
                this.#observers.splice(index, 1);
            }
        };
    }
}

const observable = new Observable(0);

const unsubscribe1 = observable.subscribe((value) => {
    console.log('Observer 1:', value);
});

const unsubscribe2 = observable.subscribe((value) => {
    console.log('Observer 2:', value);
});

console.log('Setting value to 5:');
observable.setValue(5);
// Output:
// "Observer 1: 5"
// "Observer 2: 5"

unsubscribe1();

console.log('Setting value to 10 (after unsubscribe1):');
observable.setValue(10);
// Output:
// "Observer 2: 10"

// Challenge: Mixin Pattern
const Flyable = {
    fly() {
        return `${this.name} is flying!`;
    },
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming!`;
    },
};

function applyMixins(targetClass, ...mixins) {
    mixins.forEach((mixin) => {
        Object.getOwnPropertyNames(mixin).forEach((name) => {
            targetClass.prototype[name] = mixin[name];
        });
    });
}

class Duck {
    constructor(name) {
        this.name = name;
    }
}
applyMixins(Duck, Flyable, Swimmable);

class Bird {
    constructor(name) {
        this.name = name;
    }
}
applyMixins(Bird, Flyable);

const duck = new Duck('Donald');
console.log('Duck fly:', duck.fly()); // "Donald is flying!"
console.log('Duck swim:', duck.swim()); // "Donald is swimming!"

const bird = new Bird('Tweety');
console.log('Bird fly:', bird.fly()); // "Tweety is flying!"
// bird.swim() would throw an error

// Challenge: Immutable Class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Object.freeze(this);
    }

    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    subtract(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }

    scale(factor) {
        return new Point(this.x * factor, this.y * factor);
    }

    distanceTo(point) {
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    equals(point) {
        return this.x === point.x && this.y === point.y;
    }
}

const p1 = new Point(3, 4);
const p2 = new Point(1, 2);

const p3 = p1.add(p2);
console.log('p3 (p1 + p2):', p3.x, p3.y); // 4, 6
console.log('p1 (unchanged):', p1.x, p1.y); // 3, 4 (unchanged)

const p4 = p1.scale(2);
console.log('p4 (p1 * 2):', p4.x, p4.y); // 6, 8

console.log('Distance p1 to p2:', p1.distanceTo(p2).toFixed(2)); // ~2.83

// Try to modify (will silently fail in non-strict mode, or throw in strict mode)
// p1.x = 10;
console.log('p1 after attempted modification:', p1.x, p1.y); // 3, 4 (still unchanged)
