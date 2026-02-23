// ============================================================
// JavaScript Errors and Error Handling - Complete Guide
// ============================================================

// WHY ERRORS MATTER:
// Errors are inevitable in programming - they help us identify and fix problems
// JavaScript provides built-in error types and mechanisms to handle them gracefully
// Understanding errors helps you write more robust, debuggable code
// Good error handling = better user experience + easier debugging

// ============ Types of Errors in JavaScript ============

// JavaScript has several built-in error types, all inheriting from the Error object
// Each error type indicates a specific category of problem
// The inheritance chain: SpecificError -> Error -> Object

// --------------------------------------------------------
// --- SyntaxError ---
// --------------------------------------------------------
// WHAT: The JavaScript engine cannot parse your code
// WHEN: Happens BEFORE code runs (at parse time, during compilation)
// WHY: Missing brackets, typos in keywords, invalid syntax
// NOTE: These are caught by the JavaScript parser, not at runtime
//       Your code won't even start if there's a SyntaxError!

// Examples of SyntaxError (these would prevent the ENTIRE file from running):
let x = ;          // Unexpected token ';' - missing value after =
function {}        // Missing function name between 'function' and '{'
const 123name = 5  // Invalid identifier - variable names can't start with numbers
if (true { }       // Missing closing parenthesis after 'true'
let obj = { a: 1 b: 2 }  // Missing comma between properties

// --------------------------------------------------------
// --- ReferenceError ---
// --------------------------------------------------------
// WHAT: You're trying to access a variable that doesn't exist in scope
// WHEN: At runtime, when JavaScript looks up a variable name
// WHY: Typos in variable names, using variables before declaration, wrong scope

const greeting = 'Hello';
console.log(greting)  // ReferenceError: greting is not defined
                      // Notice the typo: 'greting' instead of 'greeting'

// More examples:
console.log(undeclaredVar)     // ReferenceError - variable never declared
function foo() { console.log(x) }  // ReferenceError if x not in scope

// --------------------------------------------------------
// --- TypeError ---
// --------------------------------------------------------
// WHAT: A value is not of the expected type for an operation
// WHEN: At runtime, when performing operations on incompatible types
// WHY: Calling non-functions, accessing properties of null/undefined
// NOTE: This is the MOST COMMON error type in JavaScript!

// Examples of TypeError:
const num = 42;
num.toUpperCase()      // TypeError: num.toUpperCase is not a function
                       // Numbers don't have toUpperCase - that's for strings!

const obj = null;
obj.property           // TypeError: Cannot read property 'property' of null
                       // null has no properties - it's the absence of value

const func = 'not a function';
func()                 // TypeError: func is not a function
                       // Strings can't be called like functions

undefined.something    // TypeError: Cannot read property 'something' of undefined

// Common causes of TypeError:
// 1. Calling a method that doesn't exist on that type (num.toUpperCase)
// 2. Accessing properties on null or undefined (obj.property where obj is null)
// 3. Calling a non-function as a function (string(), number(), undefined())
// 4. Trying to reassign a const variable (const x = 1; x = 2)
// 5. Using 'new' on non-constructors (new 42)

// --------------------------------------------------------
// --- RangeError ---
// --------------------------------------------------------
// WHAT: A value is not within the expected/allowed range
// WHEN: At runtime, with numeric operations outside valid bounds
// WHY: Invalid array length, too many decimal places, recursion depth exceeded

// Example: Creating an array with negative length (impossible!)
const arr = new Array(-1)  // RangeError: Invalid array length
                           // Arrays can't have negative length

// Example: Too many decimal places for toFixed()
const bigNum = (1).toFixed(200)  // RangeError: toFixed() digits argument
                                 // must be between 0 and 100

// --------------------------------------------------------
// --- URIError ---
// --------------------------------------------------------
// WHAT: Global URI handling functions received malformed input
// WHEN: Using encodeURI, decodeURI, encodeURIComponent, decodeURIComponent
// WHY: Invalid URI characters that can't be encoded/decoded

decodeURIComponent('%')  // URIError: URI malformed
                         // '%' alone is incomplete - needs two hex digits after
decodeURIComponent('%ZZ')  // URIError - ZZ is not valid hex

// --------------------------------------------------------
// --- EvalError ---
// --------------------------------------------------------
// WHAT: Legacy error type related to the eval() function
// WHEN: Rarely - mostly a historical artifact
// WHY: Was intended for eval() errors, but those now throw other error types
// NOTE: eval() is generally discouraged for security reasons
//       eval("console.log('dangerous')") - executes arbitrary code!

// --------------------------------------------------------
// --- AggregateError ---
// --------------------------------------------------------
// WHAT: Multiple errors wrapped in a single error object
// WHEN: With Promise.any() when ALL promises reject
// WHY: You need to report multiple failures at once

// Example: Promise.any() rejects only if ALL promises reject
Promise.any([
    Promise.reject(new Error('Error 1')),
    Promise.reject(new Error('Error 2')),
    Promise.reject(new Error('Error 3'))
]).catch(error => {
    console.log(error)  // AggregateError: All promises were rejected
    console.log(error.errors)  // Array of all the individual errors
})

// ============ The Error Object ============

// Error objects contain information about what went wrong
// Syntax: new Error(message)
// All error types share these properties: name, message, stack

const myError = new Error('Something went wrong');

// --- Error Properties ---
console.log(myError.name); // 'Error' - The type/name of the error
console.log(myError.message); // 'Something went wrong' - Human-readable description
console.log(myError.stack); // Full stack trace showing where error was created
// Stack trace example:
// Error: Something went wrong
//     at Object.<anonymous> (/path/to/file.js:123:15)
//     at Module._compile (internal/modules/cjs/loader.js:999:30)
//     ...

// --- Creating Specific Error Types ---
// You can create any error type directly with 'new'
const typeError = new TypeError('Expected a string');
const rangeError = new RangeError('Value out of bounds');
const refError = new ReferenceError('Variable not found');

// The stack trace shows:
// 1. Error type and message (first line)
// 2. Function call chain that led to the error (subsequent lines)
// 3. File names and line numbers for each call
// This is EXTREMELY helpful for debugging!

// ============ Try/Catch/Finally ============

// try/catch - Primary mechanism for handling runtime errors
// Syntax: try { risky code } catch (error) { handle error }
// Use case: Gracefully handling errors WITHOUT crashing the program

// --------------------------------------------------------
// --- Basic try/catch ---
// --------------------------------------------------------
try {
    // Code that might throw an error goes in the 'try' block
    const data = JSON.parse('invalid json'); // This WILL throw SyntaxError
    console.log('This line never runs'); // Skipped after error
} catch (error) {
    // If ANY error occurs in try block, execution jumps here
    // The 'error' parameter contains the Error object
    console.error('Failed to parse JSON:', error.message);
    // Output: Failed to parse JSON: Unexpected token i in JSON at position 0
}

// Code continues to run after the error is caught!
// The program doesn't crash - that's the power of try/catch
console.log('Program continues...');

// --------------------------------------------------------
// --- try/catch/finally ---
// --------------------------------------------------------
// The 'finally' block ALWAYS runs, regardless of success or failure
// Syntax: try { } catch { } finally { }
// Use case: Cleanup code that MUST run no matter what

try {
    console.log('Attempting operation...');
    throw new Error('Operation failed'); // Manually throw an error
    console.log('This never runs'); // Skipped after throw
} catch (error) {
    console.error('Caught:', error.message); // Output: Caught: Operation failed
} finally {
    // This block runs NO MATTER WHAT happens above
    console.log('Cleanup: This always runs');
}

// finally runs even if:
// 1. No error occurs (success case)
// 2. An error is caught (handled error case)
// 3. A return statement is in try or catch (still runs before return!)
// 4. An error is re-thrown in catch (runs before propagation)

// Common use cases for finally:
// - Closing file handles or database connections
// - Hiding loading spinners (UI cleanup)
// - Releasing resources (memory, locks)
// - Logging completion (analytics, debugging)

// Example: finally with return
function testFinally() {
    try {
        return 'try';
    } finally {
        console.log('finally runs before return!');
    }
}
// testFinally() logs "finally runs before return!" then returns 'try'

// ============ Throwing Errors ============

// throw - Manually create and throw an error
// Syntax: throw expression
// Use case: Creating custom error conditions, input validation

// --------------------------------------------------------
// --- Throwing built-in error types ---
// --------------------------------------------------------
function divide(a, b) {
    // Validate input BEFORE attempting the operation
    if (b === 0) {
        // We throw an error because division by zero is mathematically undefined
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Usage:
// divide(10, 2)  // Returns 5
// divide(10, 0)  // Throws Error: Cannot divide by zero

// --------------------------------------------------------
// --- Throwing specific error types ---
// --------------------------------------------------------
// Use the appropriate error type to make debugging easier
function processAge(age) {
    // Check type first - wrong type = TypeError
    if (typeof age !== 'number') {
        throw new TypeError('Age must be a number');
    }
    // Check range second - out of range = RangeError
    if (age < 0 || age > 150) {
        throw new RangeError('Age must be between 0 and 150');
    }
    return `Age: ${age}`;
}

// Usage:
processAge(25)      // Returns "Age: 25"
processAge('old')   // Throws TypeError: Age must be a number
processAge(-5)      // Throws RangeError: Age must be between 0 and 150
processAge(200)     // Throws RangeError: Age must be between 0 and 150

// --------------------------------------------------------
// --- What can you throw? ---
// --------------------------------------------------------
// Technically, you can throw ANYTHING in JavaScript:
// throw 'Error string'        // Works but loses stack trace!
// throw { message: 'Error' }  // Works but no stack trace!
// throw 42                    // Works but not recommended!

// WHY always throw Error objects:
// 1. Provides stack trace for debugging (shows WHERE error occurred)
// 2. Consistent error handling pattern (error.message always works)
// 3. Works with instanceof checks (error instanceof TypeError)
// 4. Integrates with tooling (debuggers, error tracking services)

// ============ Custom Error Classes ============

// Creating custom errors for domain-specific error handling
// Syntax: class CustomError extends Error { }
// Use case: API errors, validation errors, business logic errors

// --------------------------------------------------------
// --- ValidationError ---
// --------------------------------------------------------
// For form validation, input checking, data validation
class ValidationError extends Error {
    constructor(message, field) {
        super(message); // Call parent constructor with message
        this.name = 'ValidationError'; // Override the error name
        this.field = field; // Add custom property: which field failed
    }
}

// --------------------------------------------------------
// --- APIError ---
// --------------------------------------------------------
// For HTTP/API related errors with status codes
class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode; // HTTP status code (404, 500, etc.)
    }
}

// --------------------------------------------------------
// --- Using custom errors ---
// --------------------------------------------------------
function validateUser(user) {
    // Check if email exists
    if (!user.email) {
        throw new ValidationError('Email is required', 'email');
    }
    // Check email format
    if (!user.email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
    // More validations could go here...
}

// --------------------------------------------------------
// --- Handling custom errors ---
// --------------------------------------------------------
try {
    validateUser({ name: 'John' }); // No email provided!
} catch (error) {
    // Use instanceof to check error type
    if (error instanceof ValidationError) {
        // We know it's a ValidationError, so we can access .field
        console.log(`Validation failed for ${error.field}: ${error.message}`);
        // Output: Validation failed for email: Email is required
    } else {
        // Unknown error type - re-throw it for higher-level handling
        throw error;
    }
}

// ============ Error Handling Patterns ============

// --------------------------------------------------------
// --- Pattern 1: Checking error types with instanceof ---
// --------------------------------------------------------
// Different error types may need different handling strategies
function handleErrors() {
    try {
        // Some risky operation
        throw new TypeError('Example error');
    } catch (error) {
        // Check each error type and handle appropriately
        if (error instanceof TypeError) {
            console.log('Type error occurred - check your data types');
        } else if (error instanceof RangeError) {
            console.log('Range error occurred - check your input values');
        } else if (error instanceof SyntaxError) {
            console.log('Syntax error occurred - check your JSON/code');
        } else {
            console.log('Unknown error:', error.message);
        }
    }
}

// --------------------------------------------------------
// --- Pattern 2: Re-throwing errors ---
// --------------------------------------------------------
// Sometimes you need to log/process an error, then let it propagate
function processWithLogging() {
    try {
        // risky operation
        throw new Error('Something broke');
    } catch (error) {
        // Do something with the error (logging, metrics, etc.)
        console.log('Logging error:', error.message);
        // Then re-throw to let calling code handle it
        throw error; // Error continues to propagate up the call stack
    }
}

// --------------------------------------------------------
// --- Pattern 3: Error wrapping ---
// --------------------------------------------------------
// Catch low-level errors and wrap them in higher-level, more meaningful errors
function fetchUserData(userId) {
    try {
        // ... fetch logic that might throw various errors
        throw new Error('Network timeout'); // Low-level error
    } catch (error) {
        // Wrap in a domain-specific error with more context
        throw new APIError(`Failed to fetch user ${userId}: ${error.message}`, 500);
    }
}

// --------------------------------------------------------
// --- Pattern 4: Fallback values ---
// --------------------------------------------------------
// When errors are recoverable, provide sensible defaults
function getConfig(key) {
    try {
        // Try to parse config from storage
        return JSON.parse(localStorage.getItem(key));
    } catch {
        // Note: catch without (error) parameter is valid in modern JS
        // If parsing fails, return a safe fallback value
        return null;
    }
}

// Usage:
getConfig('settings')  // Returns parsed object or null if invalid/missing

// ============ Async Error Handling ============

// Async code requires special error handling patterns!
// Errors in async code don't propagate the same way as sync code.

// --------------------------------------------------------
// --- With Promises - use .catch() ---
// --------------------------------------------------------
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse JSON
    .then(data => console.log(data)) // Use data
    .catch(error => {
        // This catches errors from fetch() OR either .then()
        console.error('Fetch failed:', error.message);
    });

// --------------------------------------------------------
// --- With async/await - use try/catch ---
// --------------------------------------------------------
// async/await makes error handling look synchronous again
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');

        // IMPORTANT: fetch() doesn't throw on HTTP errors!
        // You must check response.ok manually
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Catches: network errors, JSON parse errors, our thrown error
        console.error('Fetch failed:', error.message);
        return null; // Return fallback value
    }
}

// --------------------------------------------------------
// --- Unhandled promise rejections ---
// --------------------------------------------------------
// IMPORTANT: Always add .catch() to promises or wrap await in try/catch
// Unhandled rejections can crash Node.js processes!

// BAD - unhandled rejection (silent failure or crash):
fetch(url).then(r => r.json())  // If this fails, error is unhandled!

// GOOD - handled rejection:
fetch(url).then(r => r.json()).catch(e => console.error(e))

// ============ Global Error Handlers ============

// These catch errors that slip through all other error handling
// Use for logging, crash reporting, and last-resort handling

// --------------------------------------------------------
// --- window.onerror - Catches uncaught errors ---
// --------------------------------------------------------
// Parameters: message, source URL, line number, column number, error object
window.onerror = function (message, source, lineno, colno, error) {
    console.log('Global error:', message);
    console.log('Source:', source); // File URL
    console.log('Line:', lineno); // Line number
    console.log('Column:', colno); // Column number
    console.log('Error object:', error); // Full error (if available)

    // Return true to prevent the default browser error handling
    // (prevents error from showing in console again)
    return true;
};

// --------------------------------------------------------
// --- window.onunhandledrejection - Catches unhandled promise rejections ---
// --------------------------------------------------------
window.onunhandledrejection = function (event) {
    console.log('Unhandled rejection:', event.reason);
    // event.reason is the rejection value (usually an Error)
    event.preventDefault(); // Prevent default rejection handling
};

// --------------------------------------------------------
// --- addEventListener versions ---
// --------------------------------------------------------
// These allow MULTIPLE handlers (unlike the direct assignment above)
window.addEventListener('error', event => {
    console.log('Error event:', event.message);
    // event.error - the Error object
    // event.filename - source URL
    // event.lineno, event.colno - location
});

window.addEventListener('unhandledrejection', event => {
    console.log('Unhandled rejection event:', event.reason);
    // event.reason - the rejection value
    // event.promise - the rejected Promise
});

// ============ Debugging Errors ============

// Tips for debugging when errors occur:

// --------------------------------------------------------
// --- 1. Read the error message carefully ---
// --------------------------------------------------------
// - Error TYPE tells you the category (TypeError, ReferenceError, etc.)
// - Error MESSAGE describes what went wrong specifically
// - STACK TRACE shows exactly where it happened (file + line number)

// --------------------------------------------------------
// --- 2. Use console methods for debugging ---
// --------------------------------------------------------
const sampleVariable = { key: 'value' };
const sampleMessage = 'This is a warning';
const sampleArray = [1, 2, 3];

console.log('Value:', sampleVariable); // Basic logging
console.error('Error:', myError); // Error logging (red in console)
console.warn('Warning:', sampleMessage); // Warning logging (yellow)
console.trace('Trace'); // Shows call stack at this point
console.table(sampleArray); // Displays data in table format

// console.log vs console.error:
// - console.error outputs to stderr (useful for piping/filtering)
// - console.error is styled red in browser console
// - Use console.error for actual errors, console.log for info

// --------------------------------------------------------
// --- 3. Use the debugger statement ---
// --------------------------------------------------------
function buggyFunction() {
    const x = 1;
    debugger; // Execution PAUSES here when DevTools is open
    // You can:
    // - Inspect all variables in scope
    // - Step through code line by line
    // - Evaluate expressions in the console
    return x + 1;
}

// --------------------------------------------------------
// --- 4. Browser DevTools ---
// --------------------------------------------------------
// - Sources tab: Set breakpoints, step through code, watch expressions
// - Console tab: See errors, test expressions, interact with page
// - Network tab: Check failed requests, see response codes, inspect data
// - Performance tab: Find slow code that might be causing timeout errors

// ============ Common Error Scenarios and Solutions ============

// --------------------------------------------------------
// --- Scenario 1: "Cannot read property 'x' of undefined" ---
// --------------------------------------------------------
// Problem: Accessing a property on undefined or null
// This is THE most common error in JavaScript!

const user = undefined;
// user.name  // TypeError: Cannot read property 'name' of undefined

// FIX 1: Optional chaining (?.) - returns undefined instead of throwing
const userName = user?.name; // Returns undefined, no error!

// FIX 2: Nullish coalescing (??) - provide a default value
const displayName = user?.name ?? 'Guest'; // 'Guest' if name is null/undefined

// FIX 3: Traditional check
const safeName = user && user.name ? user.name : 'Guest';

// Nested optional chaining works too:
const city = user?.address?.city ?? 'Unknown';

// --------------------------------------------------------
// --- Scenario 2: "x is not a function" ---
// --------------------------------------------------------
// Problem: Trying to call something that isn't callable

const notAFunction = 'string';
// notAFunction()  // TypeError: notAFunction is not a function

// FIX: Check if it's a function before calling
if (typeof notAFunction === 'function') {
    notAFunction();
}

// Common cause: Wrong import/export
// import { myFunction } from './module'  // Make sure it's exported!

// --------------------------------------------------------
// --- Scenario 3: "x is not defined" ---
// --------------------------------------------------------
// Problem: Using a variable that doesn't exist in scope
// Fix: Check your spelling, ensure variable is declared and in scope

console.log(undeclaredVariable)  // ReferenceError: undeclaredVariable is not defined

// --------------------------------------------------------
// --- Scenario 4: JSON parsing errors ---
// --------------------------------------------------------
const badJson = '{ invalid json }'; // Missing quotes around keys/values

try {
    JSON.parse(badJson);
} catch (error) {
    console.log('Invalid JSON:', error.message);
    // Output: Invalid JSON: Unexpected token i in JSON at position 2
}

// Common JSON mistakes:
'{ name: "John" }'     // Keys must be quoted: '{ "name": "John" }'
"{ 'name': 'John' }"   // Must use double quotes, not single
'{ "name": "John", }'  // Trailing commas not allowed in JSON

// ============================================================
// Best Practices for Error Handling
// ============================================================

// 1. DON'T IGNORE ERRORS
// BAD: catch (e) { }  // Silent failure - bugs become invisible!
// GOOD: catch (e) { console.error(e); handleError(e) }

// 2. BE SPECIFIC ABOUT WHAT YOU CATCH
// Catch specific error types when possible
// Re-throw errors you can't handle

// 3. USE DESCRIPTIVE ERROR MESSAGES
// BAD: throw new Error('Error')
// GOOD: throw new Error('User ID must be a positive integer')

// 4. DON'T USE TRY/CATCH FOR FLOW CONTROL
// Errors are for EXCEPTIONAL situations, not regular logic
// BAD: try { array[index] } catch { return default }
// GOOD: if (index < array.length) { return array[index] } else { return default }

// 5. CLEAN UP IN FINALLY BLOCKS
// Resources should be released regardless of success/failure

// 6. LOG ERRORS WITH CONTEXT
// Include relevant data that helps debugging
// console.error('Failed to process order:', { orderId, userId, error })

// 7. HANDLE ASYNC ERRORS PROPERLY
// Use .catch() with promises
// Use try/catch with async/await

// 8. USE CUSTOM ERROR CLASSES FOR DOMAIN LOGIC
// Makes error handling more precise
// Adds context-specific information

// ============================================================
// Summary Tables
// ============================================================

// | Error Type      | Cause                                    | Common Fix                      |
// |-----------------|------------------------------------------|---------------------------------|
// | SyntaxError     | Invalid code syntax                      | Fix syntax (IDE usually helps)  |
// | ReferenceError  | Variable doesn't exist                   | Check spelling, declare var     |
// | TypeError       | Wrong type for operation                 | Check types, use optional chain |
// | RangeError      | Value outside valid range                | Validate input ranges           |
// | URIError        | Invalid URI encoding                     | Encode/decode properly          |
// | AggregateError  | Multiple errors (Promise.any)            | Handle individual errors        |
// |-----------------|------------------------------------------|---------------------------------|
// | Technique       | Syntax                                   | Use Case                        |
// |-----------------|------------------------------------------|---------------------------------|
// | try/catch       | try { } catch (e) { }                    | Handle runtime errors           |
// | finally         | try { } catch { } finally { }            | Cleanup code                    |
// | throw           | throw new Error(msg)                     | Create custom error conditions  |
// | Custom errors   | class X extends Error { }                | Domain-specific errors          |
// | instanceof      | error instanceof TypeError               | Check error type                |
// | optional chain  | obj?.prop                                | Avoid "undefined" errors        |
// | nullish coal.   | value ?? default                         | Provide fallback values         |
// |-----------------|------------------------------------------|---------------------------------|
