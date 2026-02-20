// ============================================================
// DEBUG CHALLENGE - Find and Fix All the JavaScript Errors!
// ============================================================

// ERROR 1
lte counter = 0;

// ERROR 2
const welcomeMessage = "Welcome to the Debug Challenge!;

// ERROR 3
const class = "container";

// ERROR 4
let userName = "Guest"
let userEmail = "guest@example.com"

// ERROR 5
const MAX_USERS = 100;
MAX_USERS = 200;

// ERROR 6
const colors = ["red", "green" "blue", "yellow"];

// ERROR 7
const user = {
    name "John",
    age: 25,
    email: "john@example.com"
};

// ERROR 8
function greetUser(name) {
    console.log("Hello, " + name);
    if (name === "Admin") {
        console.log("Welcome, Admin!");
    

// ERROR 9
const multiply = (a, b) > {
    return a * b;
};

// ERROR 10
function addNumbers() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = parseInt(num1) + parseInt(num2);
    document.getElementById("calcResult".textContent = result;
}

// ERROR 11
function multiplyNumbers() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = num1 * num2;
    document.getElementById("calcresult").textContent = result;
}

// ERROR 12
function divideNumbers() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = num1 + num2;
    document.getElementById("calcResult").textContent = result;
}

// ERROR 13 & 14 & 15
function registeruser() {
    const username = document.getElementByld("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    
    if (username = "") {
        alert("Please enter a username");
        return;
    }
    
    console.log("User registered:", username, email, age);
}

// ERROR 16
incrementCounter() {
    counter++;
    document.getElementById("counter-display").textContent = counter;
}

// ERROR 17
function decrementCounter() {
    countr++;
    document.getElementById("counter-display").textContent = counter;
}

// ERROR 18
function resetCounter() {
    while (counter >= 0) {
        counter = 0;
    }
    document.getElementById("counter-display").textContent = counter;
}

// ERROR 19
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// ERROR 20
function loadUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    
    users.forEach(function(usr, index) {
        const li = document.createElement("li");
        li.textContent = user.name + " - Age: " + user.age;
        userList.appendChild(li);
    });
}

// ERROR 21
function clearUsers() {
    const userList = document.getElementById("userlist");
    userList.innerHTML = "";
}

// ERROR 22
function postMessage() {
    const textarea = document.getElementById("messageInput");
    const message = textarea.value;
    const board = document.getElementById("messageBoard");
    
    const messageHTML = "<div class='user-card'>${message}</div>";
    board.innerHTML += messageHTML;
}

// ERROR 23
function checkAge(age) {
    if (age == "18") {
        return "You are exactly 18";
    }
    return "You are not 18";
}

// ERROR 24
function fetchData() {
    fetch("https://api.nonexistent-url.com/data")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

// ERROR 25
async function getUserData() {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json()
    return data;
}

// ERROR 26
document.addEventListener("DOMContentload", function() {
    console.log("Page loaded!");
});

// ERROR 27
function delayedGreeting() {
    setTimeout(console.log("Hello after delay!"), 1000);
}

// ERROR 28
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest...] = numbers;

// ERROR 29
const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: (num) => {
        this.value -= num;
        return this;
    }
};

// ERROR 30
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ..arr2];

// ERROR 31
function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price;
    });
}

// ERROR 32
function hoistingExample() {
    console.log(myVar);
    var myVar = "Hello";
    
    console.log(myLet);
    let myLet = "World";
}

// ERROR 33
function parseUserData() {
    const jsonString = "{ name: 'John', age: 30 }";
    const userData = JSON.parse(jsonString);
    return userData;
}

// ERROR 34
function processData(callback) {
    getData(function(data) {
        processStep1(data, function(result1) {
            processStep2(result1, function(result2) {
                processStep3(result2, function(result3)
                    callback(result3);
                });
            });
        });
    });
}

// ERROR 35
class Person {
    constuctor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// ERROR 36
function getDayName(dayNum) {
    let dayName;
    switch(dayNum) {
        case 1:
            dayName = "Monday";
        case 2:
            dayName = "Tuesday";
            break;
        case 3
            dayName = "Wednesday";
            break;
        default:
            dayName = "Unknown";
    }
    return dayName;
}

// ERROR 37
function validateInput(value) {
    if (value !== null & value !== undefined) {
        return true;
    }
    return false;
}

// ERROR 38
function formatNumber(num) {
    return num.toUpperCase();
}

// ERROR 39
function removeEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// ERROR 40
function validateEmail(email) {
    const regex = /[a-z]+@[a-z]+\.[a-z]+/;
    return regex.test(email;
}

console.log("Script loaded successfully!");
