function calculate(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    }
    if (operation === 'subtract') {
        return a - b;
    }
    if (operation === 'multiply') {
        return a * b;
    }
    if (operation === 'divide') {
        return a / b;
    }

    return 'Invalid operation';
}

console.log(calculate(10, 5, 'add'));
console.log(calculate(10, 5, 'multiply'));

// ============================================
// HOISTING EXERCISES - Answers
// ============================================

// Snippet A:
// console.log(a);  // undefined (var is hoisted, but not the value)
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// var a = 1;
// let b = 2;

// Explanation: var declarations are hoisted and initialized to undefined.
// let declarations are hoisted but remain in the "temporal dead zone" until
// the declaration is reached, causing a ReferenceError if accessed before.

// Snippet B:
// sayHello();    // "Hello!" - works because function declarations are fully hoisted
// sayGoodbye();  // TypeError: sayGoodbye is not a function

// function sayHello() {
//   console.log('Hello!');
// }

// var sayGoodbye = function() {
//   console.log('Goodbye!');
// };

// Explanation: Function declarations are fully hoisted (both name and body).
// Function expressions assigned to var are only hoisted as undefined,
// so calling them before assignment results in a TypeError.

// Snippet C:
// var x = 10;
// function foo() {
//   console.log(x);  // undefined (not 10!)
//   var x = 20;
//   console.log(x);  // 20
// }
// foo();

// Explanation: The local var x is hoisted to the top of foo(), shadowing
// the outer x. At the first console.log, x is declared but not yet assigned,
// so it's undefined. This is called "variable shadowing".

// ============================================
// CLOSURE EXERCISES - Solutions
// ============================================

// Counter Factory
function createCounter(startValue = 0) {
    let count = startValue; // Private variable - only accessible via closure

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        },
    };
}

// Test Counter Factory
const counter = createCounter(5);
console.log(counter.getCount()); // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getCount()); // 6

const counter2 = createCounter(); // starts at 0
console.log(counter2.getCount()); // 0

// ============================================
// The Classic Loop Problem
// ============================================

// Part A - The problem:
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// Output: 4, 4, 4 (not 1, 2, 3!)
// Explanation: var has function scope, so there's only ONE i variable.
// By the time the setTimeout callbacks run, the loop has finished
// and i is 4. All callbacks reference the same i.

// Part B - Fix using closure (IIFE):
console.log('Part B - Using closure (IIFE):');
for (var i = 1; i <= 3; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    })(i);
}
// Each iteration creates a new function scope with its own copy of j

// Part C - Fix using let:
console.log('Part C - Using let:');
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
// let has block scope, so each iteration gets its own i variable