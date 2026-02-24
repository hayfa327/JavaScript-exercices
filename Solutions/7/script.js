// ============================================================
// SOLUTIONS - Debug Challenge
// ============================================================

// ============================================================
// HTML ERRORS (in index.html)
// ============================================================

/*
LINE 4: Missing closing > on meta tag
  ERROR: <meta charset="UTF-8"
  FIX:   <meta charset="UTF-8">

LINE 70: Missing closing > on div tag
  ERROR: <div class="container"
  FIX:   <div class="container">

LINE 75: Misspelled tag name (diiv instead of div)
  ERROR: <diiv class="container">
  FIX:   <div class="container">

LINE 78: Missing closing quote on id attribute
  ERROR: <form id="registrationForm>
  FIX:   <form id="registrationForm">

LINE 79: input is self-closing, should not have closing tag
  ERROR: <input type="text" id="username" placeholder="Enter username"></input>
  FIX:   <input type="text" id="username" placeholder="Enter username">

LINE 82: Wrong attribute name (typ instead of type)
  ERROR: <input typ="email" id="email" placeholder="Enter email">
  FIX:   <input type="email" id="email" placeholder="Enter email">

LINE 85: Missing closing </label> tag
  ERROR: <label for="age">Your Age:
  FIX:   <label for="age">Your Age:</label>

LINE 89: onclick function name case doesn't match JS (RegisterUser vs registerUser)
  ERROR: onclick="RegisterUser()"
  FIX:   onclick="registerUser()"

LINE 91: Closing tag doesn't match opening tag (</diiv> should be </div>)
  ERROR: </diiv>
  FIX:   </div>

LINE 93: Extra space in class attribute (works but bad practice)
  ERROR: <div  class ="container">
  FIX:   <div class="container">

LINE 99: Missing closing quote on onclick attribute
  ERROR: <button onclick="addNumbers()>Add Numbers</button>
  FIX:   <button onclick="addNumbers()">Add Numbers</button>

LINE 103: Block element (p) nested inside inline element (span) - invalid HTML
  ERROR: <span>Result: <p id="calcResult">-</p></span>
  FIX:   <p>Result: <span id="calcResult">-</span></p>

LINE 108: Misspelled onclick attribute (onclik)
  ERROR: <button onclik="loadUsers()">Load Users</button>
  FIX:   <button onclick="loadUsers()">Load Users</button>

LINE 112: Missing closing </li> tag
  ERROR: <li>Click 'Load Users' to see the list
  FIX:   <li>Click 'Load Users' to see the list</li>

LINE 126: Missing id attribute on textarea (needed for JS to access it)
  ERROR: <textarea rows="4" cols="50" placeholder="Enter your message"></textarea>
  FIX:   <textarea id="messageInput" rows="4" cols="50" placeholder="Enter your message"></textarea>

LINE 132: Extra closing </div> tag
  ERROR: </div> (line 132 is extra)
  FIX:   Remove this line

LINE 137: img tag missing alt attribute (accessibility issue)
  ERROR: <img src="nonexistent-image.jpg" width="200">
  FIX:   <img src="nonexistent-image.jpg" width="200" alt="Image description">

LINE 138: Misspelled src attribute (scr instead of src)
  ERROR: <img scr="another-image.png" alt="Another image">
  FIX:   <img src="another-image.png" alt="Another image">

LINE 143: Misspelled href attribute (hrf instead of href)
  ERROR: <a hrf="https://developer.mozilla.org">MDN Web Docs</a>
  FIX:   <a href="https://developer.mozilla.org">MDN Web Docs</a>

LINE 154: Script src missing .js extension
  ERROR: <script src="script"></script>
  FIX:   <script src="script.js"></script>

LINE 168-169: Missing <td> for Bob's score in table
  ERROR: <tr><td>Bob</td></tr>
  FIX:   <tr><td>Bob</td><td>88</td></tr>

LINE 171: Missing closing </td> for Charlie
  ERROR: <td>Charlie<td>78</td>
  FIX:   <td>Charlie</td><td>78</td>
*/

// ============================================================
// CORRECTED JAVASCRIPT
// ============================================================

// ERROR 1: 'lte' should be 'let'
let counter = 0;

// ERROR 2: Missing closing quote on string
const welcomeMessage = 'Welcome to the Debug Challenge!';

// ERROR 3: 'class' is a reserved word - use a different name
const containerClass = 'container';

// ERROR 4: Missing semicolons (optional in JS but good practice)
let userName = 'Guest';
let userEmail = 'guest@example.com';

// ERROR 5: Cannot reassign const - use let if value changes
let maxUsers = 100;
maxUsers = 200;

// ERROR 6: Missing comma between "green" and "blue"
const colors = ['red', 'green', 'blue', 'yellow'];

// ERROR 7: Missing colon after 'name'
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
};

// ERROR 8: Missing closing braces (2 of them)
function greetUser(name) {
    console.log('Hello, ' + name);
    if (name === 'Admin') {
        console.log('Welcome, Admin!');
    }
}

// ERROR 9: Missing = in arrow function (should be =>)
const multiply = (a, b) => {
    return a * b;
};

// ERROR 10: Missing closing parenthesis after "calcResult"
function addNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseInt(num1) + parseInt(num2);
    document.getElementById('calcResult').textContent = result;
}

// ERROR 11: Wrong element id case (calcresult vs calcResult)
function multiplyNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseFloat(num1) * parseFloat(num2);
    document.getElementById('calcResult').textContent = result;
}

// ERROR 12: Using + instead of / for division
function divideNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseFloat(num1) / parseFloat(num2);
    document.getElementById('calcResult').textContent = result;
}

// ERROR 13: Function name should match HTML onclick (case sensitive)
// ERROR 14: getElementByld should be getElementById (lowercase L vs uppercase I)
// ERROR 15: Using = (assignment) instead of === (comparison)
function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (username === '') {
        alert('Please enter a username');
        return;
    }

    console.log('User registered:', username, email, age);
}

// ERROR 16: Missing 'function' keyword
function incrementCounter() {
    counter++;
    document.getElementById('counter-display').textContent = counter;
}

// ERROR 17: Misspelled variable name (countr) and wrong operator (++ instead of --)
function decrementCounter() {
    counter--;
    document.getElementById('counter-display').textContent = counter;
}

// ERROR 18: Infinite loop - condition always true when counter = 0
function resetCounter() {
    counter = 0;
    document.getElementById('counter-display').textContent = counter;
}

// ERROR 19: No error in array, but sets up for ERROR 20 and ERROR 21
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

// ERROR 20: Using wrong variable name in forEach (user instead of usr)
function loadUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(function (usr, index) {
        const li = document.createElement('li');
        li.textContent = usr.name + ' - Age: ' + usr.age;
        userList.appendChild(li);
    });
}

// ERROR 21: Wrong element id case (userlist vs userList)
function clearUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
}

// ERROR 22: Using regular quotes instead of backticks for template literal
function postMessage() {
    const textarea = document.getElementById('messageInput');
    const message = textarea.value;
    const board = document.getElementById('messageBoard');

    const messageHTML = `<div class='user-card'>${message}</div>`;
    board.innerHTML += messageHTML;
}

// ERROR 23: Using == instead of === (type coercion issue - works but bad practice)
function checkAge(age) {
    if (age === 18) {
        return 'You are exactly 18';
    }
    return 'You are not 18';
}

// ERROR 24: Missing .catch() for error handling
function fetchData() {
    fetch('https://api.nonexistent-url.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// ERROR 25: async/await without try/catch
async function getUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

// ERROR 26: Wrong event name (DOMContentload vs DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded!');
});

// ERROR 27: Function is executed immediately instead of passed as reference
function delayedGreeting() {
    setTimeout(() => console.log('Hello after delay!'), 1000);
}

// ERROR 28: Extra dots in rest operator (...rest... should be ...rest)
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// ERROR 29: Arrow function loses 'this' context - use regular function
const calculator = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this;
    },
    subtract: function (num) {
        this.value -= num;
        return this;
    },
};

// ERROR 30: Missing one dot in spread operator (..arr2 should be ...arr2)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// ERROR 31: Missing return statement
function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price;
    });
    return total;
}

// ERROR 32: Accessing let variable before declaration (TDZ - Temporal Dead Zone)
function hoistingExample() {
    var myVar = 'Hello';
    console.log(myVar);

    let myLet = 'World';
    console.log(myLet);
}

// ERROR 33: Invalid JSON - keys need double quotes, not single quotes
function parseUserData() {
    const jsonString = '{ "name": "John", "age": 30 }';
    const userData = JSON.parse(jsonString);
    return userData;
}

// ERROR 34: Missing opening brace { after function(result3)
function processData(callback) {
    getData(function (data) {
        processStep1(data, function (result1) {
            processStep2(result1, function (result2) {
                processStep3(result2, function (result3) {
                    callback(result3);
                });
            });
        });
    });
}

// ERROR 35: Misspelled constructor (constuctor)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// ERROR 36: Missing break after case 1, and missing colon after case 3
function getDayName(dayNum) {
    let dayName;
    switch (dayNum) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        default:
            dayName = 'Unknown';
    }
    return dayName;
}

// ERROR 37: Using single & (bitwise AND) instead of && (logical AND)
function validateInput(value) {
    if (value !== null && value !== undefined) {
        return true;
    }
    return false;
}

// ERROR 38: Numbers don't have toUpperCase - convert to string first
function formatNumber(num) {
    return num.toString().toUpperCase();
}

// ERROR 39: Modifying array while iterating causes skipped elements
function removeEvens(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// ERROR 40: Missing closing parenthesis in regex.test(email
function validateEmail(email) {
    const regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+/i;
    return regex.test(email);
}

// Helper function for clearing messages (referenced in HTML)
function clearMessages() {
    const board = document.getElementById('messageBoard');
    board.innerHTML = '';
}

console.log('Script loaded successfully!');
