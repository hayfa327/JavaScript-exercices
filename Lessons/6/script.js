// Asynchronous JavaScript

// JavaScript is single-threaded - it can only execute one piece of code at a time
// But web apps need to handle things that take time: network requests, file reading, timers
// Asynchronous programming allows code to run without blocking the main thread

// ============ Synchronous vs Asynchronous ============

// Synchronous - Code executes line by line, each line waits for the previous to complete
// Syntax: Regular JavaScript code
// Use case: Simple operations that complete instantly
// Example output: First, Second, Third (in order)
console.log('First')
console.log('Second')
console.log('Third')

// Asynchronous - Code that doesn't block, allows other code to run while waiting
// Syntax: setTimeout, fetch, event listeners, etc.
// Use case: Operations that take time (network requests, timers, file I/O)
// Example output: First, Third, Second (Third doesn't wait for setTimeout)
console.log('first')
setTimeout(() => console.log('second'), 100)
console.log('third')
// ============ The Event Loop ============

// JavaScript uses an event loop to handle asynchronous operations
// 1. Call Stack - Where synchronous code executes (LIFO - Last In First Out)
// 2. Web APIs - Browser APIs that handle async operations (setTimeout, fetch, etc.)
// 3. Callback Queue - Where callbacks wait to be executed
// 4. Event Loop - Moves callbacks from queue to call stack when stack is empty

// Visualization of the event loop:
// console.log('Start')
// setTimeout(() => console.log('Timeout'), 0)
// console.log('End')
//
// Output: Start, End, Timeout
// Even with 0ms delay, setTimeout callback goes to queue and waits for stack to clear

// ============ Callbacks ============

// Callback - A function passed as an argument to another function
// Syntax: function doSomething(callback) { callback() }
// Use case: Execute code after an async operation completes
// Note: The "traditional" way to handle async operations
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback()
}
greet('Alice', function(){
    console.log('Greet done')
})

function fetchData(callback) {
    console.log('Fetching data')
    // const data = await result
    // callback(data)
    setTimeout(() => {
        const data = { id: 1, name: 'Alice' }
        callback(data)
    }, 1000)
}

// Error-first callback pattern (Node.js convention)
// Syntax: callback(error, result)
// Use case: Handling both success and error cases
// First argument is always the error (null if no error)
// Second argument is the result (null if error occurred)
// if (error) handleError(error)
// else doSomething(result)

// ============ Callback Hell (Pyramid of Doom) ============

// Callback Hell - Deeply nested callbacks that make code hard to read and maintain
// Happens when you need to perform multiple async operations in sequence
// Also called "Pyramid of Doom" due to the triangular shape of indentation
function getUser(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: 'John' });
    }, 1000)
}

function getOrders(userId, callback) {
    setTimeout(() => {
        callback([{ orderId: 1, item: 'Book' }, { orderId: 2, item: 'Pen' }]);
    }, 1000)
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        callback({ orderId, totalPrice: 20, status: 'Shipped' });
    }, 1000)
}

getUser(1, function(user) {
    console.log('User:', user)
    getOrders(user.id, function(orders) {
        console.log('Orders:', orders)
        getOrderDetails(orders[0].orderId, function(details) {
            console.log('Order Details:', details)

        })
    })
})

// Problems with callback hell:
// 1. Hard to read - Code flows right instead of down
// 2. Hard to debug - Stack traces are confusing
// 3. Hard to handle errors - Need error handling at each level
// 4. Hard to reuse - Tightly coupled code
// 5. "Inversion of control" - You trust the called function to call your callback correctly


async function fetchData(api, callback) {
    const result = await fetching from api
    callback(result) // manpiulates the result and calls the callback
}
// ============ Promises ============

// Promise - An object representing the eventual completion or failure of an async operation
// Syntax: new Promise((resolve, reject) => { })
// States: pending → fulfilled (resolved) OR rejected
// Use case: Modern way to handle async operations, avoids callback hell

// Creating a Promise:
const myPromise = new Promise((resolve, reject) => {
    const success = true
    if (success) {
        resolve('Operation succeeded!') // Promise fulfilled
    } else {
        reject('Operation failed!') // Promise rejected
    }
})

// Consuming a Promise with .then() and .catch()
// .then(callback) - Called when promise is fulfilled
// .catch(callback) - Called when promise is rejected
// .finally(callback) - Called regardless of outcome
myPromise.then(() => console.log('Successful API call!'))
    .catch(error => console.error(error))
    .finally(() => console.log('everything has ran!'))

// ============ Promises Under the Hood ============

// Understanding how promises work internally helps debug and reason about async code

// --- Promise States ---
// A promise is a state machine with THREE states:
// 1. pending   - Initial state, operation in progress
// 2. fulfilled - Operation completed successfully (has a value)
// 3. rejected  - Operation failed (has a reason/error)

// IMPORTANT: State transitions are ONE-WAY and IRREVERSIBLE
// pending → fulfilled (can never go back to pending or change to rejected)
// pending → rejected  (can never go back to pending or change to fulfilled)
// Once settled (fulfilled or rejected), the promise's value/reason is IMMUTABLE

// If you call resolve() twice, the second call is ignored
// If you call resolve() then reject(), the reject is ignored
// First one wins!
const stateTest = new Promise((resolve, reject) => {
    resolve('first')
    resolve('second') // ignored
    reject('error')
})

// --- The Executor Function ---
// The function passed to new Promise() is called the "executor"
// IMPORTANT: The executor runs SYNCHRONOUSLY (immediately)!

// console.log('1 - Before promise')
// const p = new Promise((resolve, reject) => {
//     console.log('2 - Inside executor (sync)')
//     resolve('done')
// })
// console.log('3 - After promise')
// Output order: 1, 2, 3 (executor runs synchronously)

// --- Callbacks are Always Asynchronous ---
// Even if a promise is already resolved, .then() callbacks run asynchronously
// They are scheduled to run AFTER the current synchronous code finishes

// const alreadyResolved = Promise.resolve('instant')
// console.log('A - Before .then()')
// alreadyResolved.then(val => console.log('C - Inside .then()'))
// console.log('B - After .then()')
// Output order: A, B, C (callback is async even for resolved promises)

// --- Microtask Queue vs Callback Queue ---
// JavaScript has TWO queues for async operations:
// 1. Microtask Queue (high priority) - Promise callbacks (.then, .catch, .finally)
// 2. Callback Queue (lower priority) - setTimeout, setInterval, DOM events

// Event Loop priority:
// 1. Execute all synchronous code (call stack)
// 2. Execute ALL microtasks (promise callbacks)
// 3. Execute ONE callback from callback queue
// 4. Repeat

// console.log('1 - Sync')
// setTimeout(() => console.log('4 - setTimeout'), 0)
// Promise.resolve().then(() => console.log('3 - Promise'))
// console.log('2 - Sync')
// Output: 1, 2, 3, 4
// Promise callback runs BEFORE setTimeout, even with 0ms delay!
// Because microtasks have higher priority than the callback queue

// Nested microtasks run before ANY callback queue items
// ALL microtasks (including nested ones) complete before setTimeout runs

// --- How .then() Works Internally ---
// When you call .then(), it:
// 1. Creates a NEW promise (that's why chaining works)
// 2. Stores your callback to run later
// 3. Returns the new promise immediately

const allDetails = new Promise((resolve, reject) => {
    // get the user/do first callback
    setTimeout(() => {
        callback({ id: userId, name: 'John' });
    }, 1000)
}).then(user => {
    // get the orders/do second callback
    setTimeout(() => {
        callback([{ orderId: 1, item: 'Book' }, { orderId: 2, item: 'Pen' }]);
    }, 1000)
}).then(orders => {
    // get the order details/do third callback
    setTimeout(() => {
        callback({ orderId, totalPrice: 20, status: 'Shipped' });
    }, 1000)
}).catch(error => {console.error(error)})

// Simplified internal representation:
// promise.then(onFulfilled) {
//     const newPromise = new Promise()
//
//     if (this.state === 'pending') {
//         // Store callback for later
//         this.callbacks.push({ onFulfilled, newPromise })
//     } else if (this.state === 'fulfilled') {
//         // Schedule callback as microtask
//         queueMicrotask(() => {
//             const result = onFulfilled(this.value)
//             newPromise.resolve(result)
//         })
//     }
//
//     return newPromise
// }

// --- Thenable Unwrapping (Promise Resolution) ---
// If you resolve a promise with ANOTHER promise (or thenable), it "unwraps"
// The outer promise adopts the state of the inner promise

// const inner = new Promise(resolve => setTimeout(() => resolve('inner'), 1000))
// const outer = new Promise(resolve => resolve(inner))
// outer.then(val => console.log(val)) // 'inner' (after 1 second)

// outer doesn't resolve with the inner promise object
// It waits for inner to resolve, then adopts its value

// A "thenable" is any object with a .then() method
// Promises will unwrap thenables too (not just Promise instances)
console.log('start')
setTimeout(() => console.log('timeout'), 0)
Promise.resolve()
    .then(() => console.log('promise 1'))
    .then(() => console.log('promise 2'))
console.log('end')
// --- Why This Matters ---
// 1. Executor is sync - side effects happen immediately
// 2. Callbacks are async - code after .then() runs first
// 3. Microtasks before callbacks - promises resolve before setTimeout
// 4. State is immutable - first resolve/reject wins
// 5. Thenable unwrapping - enables clean promise chaining

// Common interview question: What's the output?
// console.log('start')
// setTimeout(() => console.log('timeout'), 0)
// Promise.resolve()
//     .then(() => console.log('promise 1'))
//     .then(() => console.log('promise 2'))
// console.log('end')

// Answer: start, end, promise 1, promise 2, timeout
// - Sync code first: 'start', 'end'
// - Microtasks next: 'promise 1', 'promise 2'
// - Callback queue last: 'timeout'

// ============ Promise Chaining ============

// Promise Chaining - Solving callback hell
// Each .then() returns a new Promise, allowing chaining
// Errors propagate through the chain until caught by .catch()

getUserPromise(1)
    .then(user => getOrdersPromise(user.id))
    .then(orders => getOrderDetailsPromise(orders[0].orderId))
    .then(details => console.log(details))
    .catch(error => console.error(error.message)) // Single error handler!

// ============ Promise Instance Methods (.then, .catch, .finally) ============

// .then(onFulfilled, onRejected) - Handles fulfilled (and optionally rejected) promise
// Syntax: promise.then(successCallback, errorCallback)
// Returns: A new Promise (enabling chaining)
// Use case: Processing resolved values, transforming data

// What you return from .then() matters:
// 1. Return a value → next .then() receives that value
// 2. Return a Promise → next .then() waits for it and receives its resolved value
// 3. Return nothing → next .then() receives undefined
// 4. Throw an error → skips to next .catch()
Promise.resolve(1)
    .then(val => val + 1) // returns 2
    .then(val => val * 2) // returns 4

// .catch(onRejected) - Handles rejected promise
// Syntax: promise.catch(errorCallback)
// Returns: A new Promise
// Use case: Error handling, recovery from failures
// Note: .catch(fn) is equivalent to .then(null, fn)

// .finally(onFinally) - Runs regardless of success or failure
// Syntax: promise.finally(callback)
// Returns: A new Promise (passes through the previous value/error)
// Use case: Cleanup code (closing connections, hiding loaders)
// Note: finally callback receives NO arguments and doesn't affect the value
let isLoading = true
if(isLoading) console.log('is loading...')
const fetchData = new Promise((resolve, reject) => {
    // api call
}).then(() => console.log('data fetched'))
    .catch(() => console.log('error fetching data'))
    .finally(() => {
        isLoading = false
        console.log('loading complete')
    })
// ============ Error Propagation in Promise Chains ============

// Errors "bubble up" through the chain until caught by a .catch()
// Like try/catch - if an error isn't caught, it propagates up
Promise.reject(new Error('Initial error'))
    .then(val => console.log('This will be skipped'))
    .then(result => console.log('This will also be skipped'))
    .catch(error => console.error('Caught error:', error.message)) // Catches the initial error

Promise.resolve('start')
    .then(val => {
        throw new Error('Something went wrong') // Throws an error
    }).then(result => throw new Error('Something went wrong with the result'))
    .catch(error => console.error('Caught error:', error.message)) // Something went wrong

// Key concepts:
// 1. Errors skip .then() handlers and go to the next .catch()
// 2. Throwing inside .then() triggers error propagation
// 3. .catch() placement matters - it only catches errors BEFORE it
// 4. .catch() can return a value to "recover" and continue the chain
// 5. Re-throw in .catch() to propagate errors you can't handle

// Recovering from errors:
// Promise.reject(new Error('Failed'))
//     .catch(error => 'default value')  // Recovery value
//     .then(val => console.log(val))    // "default value"

// Re-throwing errors:
// .catch(error => {
//     if (error.message.includes('Critical')) {
//         throw error  // Can't recover, propagate it
//     }
//     return 'recovered'
// })

// Common mistake: Forgetting that .catch() returns a promise
// If you don't return or re-throw, next .then() receives undefined
// BAD
    .catch(err => console.error(err))
    .then(val => console.log(val)) // val is undefined, not the error

// GOOD
    .catch(err => new Error('breaks the chain'))
// ============ Promise Static Methods ============

// Promise.resolve(value) - Creates a fulfilled promise
// Syntax: Promise.resolve(value)
// Use case: Wrapping a value in a promise, starting a chain

// Promise.reject(reason) - Creates a rejected promise
// Syntax: Promise.reject(reason)
// Use case: Returning a rejection in a chain, testing error handling

// Promise.all(iterable) - Waits for ALL promises to fulfill
// Syntax: Promise.all([promise1, promise2, ...])
// Returns: Array of all results when ALL succeed
// Rejects: Immediately if ANY promise rejects (fail-fast)
// Use case: Parallel operations where you need all results
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)

Promise.all([promise1, promise2, promise3]).then().catch()

// Promise.allSettled(iterable) - Waits for ALL promises to settle (fulfill OR reject)
// Syntax: Promise.allSettled([promise1, promise2, ...])
// Returns: Array of objects with status and value/reason
// Use case: When you need results of all promises regardless of success/failure
// Output format: [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]
Promise.allSettled([promise1, promise2, promise3]).then().catch()

// Promise.race(iterable) - Returns first promise to settle (fulfill OR reject)
// Syntax: Promise.race([promise1, promise2, ...])
// Returns: Result of the first settled promise
// Use case: Timeout patterns, getting fastest response
Promise.race([promise1, promise2, promise3]).then().catch()

// Promise.any(iterable) - Returns first promise to FULFILL
// Syntax: Promise.any([promise1, promise2, ...])
// Returns: Result of the first fulfilled promise
// Rejects: Only if ALL promises reject (AggregateError)
// Use case: Getting first successful result from multiple sources
Promise.any([promise1, promise2, promise3]).then().catch()

// Summary of Promise static methods:
// | Method             | Waits for     | Returns                         | Rejects when   |
// |--------------------|---------------|---------------------------------|----------------|
// | Promise.all        | ALL fulfill   | Array of values                 | ANY rejects    |
// | Promise.allSettled | ALL settle    | Array of {status, value/reason} | Never          |
// | Promise.race       | FIRST settle  | First result                    | First rejects  |
// | Promise.any        | FIRST fulfill | First success value             | ALL reject     |

// ============ Async/Await ============

// async/await - Syntactic sugar for Promises, makes async code look synchronous
// async - Declares an async function (always returns a Promise)
// await - Pauses execution until Promise settles (can only be used inside async function)
// Use case: Cleaner, more readable async code

// Basic syntax:
async function fetchData() {
    const animal = {name: 'Buddy'}
    const animalResult = funcName(animal)
    const user = await getUserPromise(1)
    const orders = await getOrdersPromise(user.id)
    return orders
}

// Error handling with try/catch:
async function fetchDataSafe() {
    try {
        const user = await getUserPromise(-1)
    } catch (error) {
        console.error(error.message)
    } finally {
        console.log('Cleanup')
    }
}

// Async arrow function:
// const fetchData = async () => { ... }
const fetchData = async () => {
    const data = await getUserPromise(1)
    return data
}

// Parallel execution with async/await:
// BAD - Sequential (slow):
// const result1 = await promise1  // Wait
// const result2 = await promise2  // Wait again
// Total: time1 + time2
async function sequential() {
    const result1 = await promise1
    const result2 = await promise2
}

// GOOD - Parallel (fast):
// const p1 = promise1  // Start immediately
// const p2 = promise2  // Start immediately
// const result1 = await p1
// const result2 = await p2
// Total: max(time1, time2)
async function parallel() {
    const promise1 = getUserPromise(1)
    const promise2 = getOrdersPromise(1)
    const result1 = await promise1
    const result2 = await promise2
}

// Even better - Using Promise.all:
const [result1, result2] = await Promise.all([promise1, promise2])

// ============ Fetch API ============

// fetch() - Modern API for making HTTP requests
// Syntax: fetch(url, options)
// Returns: Promise that resolves to a Response object
// Use case: Making API calls, loading data from servers

// Basic GET request:
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))

// Understanding the Response object:
// response.ok - true if status is 200-299
// response.status - HTTP status code (200, 404, 500, etc.)
// response.statusText - Status message ('OK', 'Not Found', etc.)
// response.headers - Response headers
// response.json() - Parse body as JSON (returns Promise)
// response.text() - Get body as text (returns Promise)
// response.blob() - Get body as binary data (returns Promise)

// IMPORTANT: fetch only rejects on network errors, NOT on HTTP errors (404, 500)
// Always check response.ok or response.status!

// Proper error handling pattern:
const response = await fetch(url)
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
}
const data = await response.json()

// POST request with fetch:
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify(data)
})

// HTTP Methods:
// GET    - Retrieve data (default)
// POST   - Create new resource
// PUT    - Update entire resource (replace)
// PATCH  - Partial update
// DELETE - Remove resource

// ============ Fetch with AbortController ============

// AbortController - Allows you to cancel fetch requests
// Syntax: const controller = new AbortController()
// Use case: Canceling requests on component unmount, timeout patterns

// Basic usage:
// const controller = new AbortController()
// fetch(url, { signal: controller.signal })
// controller.abort()  // Cancel the request

// Detecting cancellation:
// .catch(error => {
//     if (error.name === 'AbortError') {
//         console.log('Fetch was cancelled')
//     }
// })

// Timeout pattern:
// const controller = new AbortController()
// const timeoutId = setTimeout(() => controller.abort(), 5000)
// try {
//     const response = await fetch(url, { signal: controller.signal })
//     clearTimeout(timeoutId)
// } catch (error) {
//     clearTimeout(timeoutId)
//     if (error.name === 'AbortError') throw new Error('Request timed out')
// }

// ============ Common Async Patterns ============

// Pattern 1: Retry logic with exponential backoff
// for (let i = 0; i < maxRetries; i++) {
//     try {
//         return await fetch(url)
//     } catch (error) {
//         await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)))
//     }
// }

// Pattern 2: Loading state management
// const state = { loading: true, data: null, error: null }
// try {
//     state.data = await fetchData()
// } catch (error) {
//     state.error = error.message
// } finally {
//     state.loading = false
// }

// Pattern 3: Debounced fetch (for search inputs)
// Only fetches after user stops typing for specified delay
// Prevents excessive API calls on every keystroke

// ============================================================
// Best Practices for Async JavaScript
// ============================================================

// 1. Always handle errors
// - Use try/catch with async/await
// - Use .catch() with Promises
// - Never leave rejected promises unhandled

// 2. Check response.ok with fetch
// - fetch doesn't reject on HTTP errors (404, 500)
// - Always check if (!response.ok) throw new Error(...)

// 3. Use async/await for readability
// - Cleaner than .then() chains for complex logic
// - Easier to debug and reason about

// 4. Run independent operations in parallel
// - Use Promise.all() for independent async operations
// - Don't await sequentially when you can run in parallel

// 5. Clean up resources
// - Cancel pending requests when component unmounts
// - Use AbortController for fetch cancellation

// 6. Handle loading and error states
// - Show loading indicators during async operations
// - Display meaningful error messages to users

// 7. Avoid callback hell
// - Use Promises or async/await
// - Keep nesting shallow

// 8. Set timeouts for fetch requests
// - Network requests can hang indefinitely
// - Use AbortController with setTimeout

// Summary Table:
// | Concept            | Syntax                               | Use Case                     |
// |--------------------|--------------------------------------|------------------------------|
// | Callback           | fn(callback)                         | Basic async (legacy)         |
// | Promise            | new Promise((resolve, reject) => {}) | Modern async handling        |
// | .then()            | promise.then(onFulfilled)            | Handle fulfilled promise     |
// | .catch()           | promise.catch(onRejected)            | Handle rejected promise      |
// | .finally()         | promise.finally(onSettled)           | Cleanup code                 |
// | Promise.all        | Promise.all([p1, p2])                | Parallel, need all results   |
// | Promise.allSettled | Promise.allSettled([p1, p2])         | Parallel, get all outcomes   |
// | Promise.race       | Promise.race([p1, p2])               | First to settle wins         |
// | Promise.any        | Promise.any([p1, p2])                | First to fulfill wins        |
// | async              | async function() {}                  | Declare async function       |
// | await              | await promise                        | Wait for promise             |
// | fetch              | fetch(url, options)                  | HTTP requests                |
// | AbortController    | new AbortController()                | Cancel fetch requests        |
