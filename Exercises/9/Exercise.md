# Asynchronous JavaScript Practice

These exercises will help you practice core asynchronous JavaScript concepts including callbacks, promises, async/await, and the Fetch API. Complete each exercise in `script.js`.

---

## Callbacks

### Exercise 1: Understanding Callback Order

Predict the output of each code snippet before running it. Then explain why.

**Snippet A:**

```javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
```

<details>
<summary>Hint</summary>
Even with a 0ms delay, setTimeout callbacks wait for the call stack to clear before running.
</details>

**Snippet B:**

```javascript
console.log('1');
setTimeout(() => console.log('2'), 100);
setTimeout(() => console.log('3'), 0);
console.log('4');
```

<details>
<summary>Hint</summary>
Callbacks run in order of their delay time, after all synchronous code finishes.
</details>

### Exercise 2: Create a Delay Function

Write a function `delay` that takes a callback and a time in milliseconds, then executes the callback after the delay.

```javascript
function delay(callback, ms) {
    // Your code here - just one line using setTimeout
}

delay(() => console.log('Hello after 1 second!'), 1000);
```

<details>
<summary>Hint</summary>
This is a thin wrapper around setTimeout - just pass the callback and ms directly to it.
</details>

### Exercise 3: Countdown

Write a function `countdown` that takes a number `n` and logs numbers from `n` down to 1, with a 1-second delay between each, then logs "Blast off!".

```javascript
function countdown(n) {
    // Your code here
}

countdown(3);
// Output (1 second apart each):
// 3
// 2
// 1
// Blast off!
```

<details>
<summary>Hint</summary>
Use a for loop to schedule multiple setTimeout calls. Calculate the delay for each: the first number logs immediately (0ms), the second after 1000ms, etc. Use the formula `(n - i) * 1000` for the delay.
</details>

---

## Promises

### Exercise 4: Create a Promise

Write a function `wait` that takes a number of milliseconds and returns a Promise that resolves after that time.

```javascript
function wait(ms) {
    return new Promise(resolve => {
        // Your code here - use setTimeout to call resolve after ms
    });
}

wait(1000).then(() => console.log('1 second passed'));
```

<details>
<summary>Hint</summary>
Inside the Promise, use `setTimeout(resolve, ms)` to resolve after the delay.
</details>

### Exercise 5: Promise That Can Reject

Write a function `randomSuccess` that returns a Promise which randomly resolves with "Success!" or rejects with "Failed!" (50/50 chance).

```javascript
function randomSuccess() {
    return new Promise((resolve, reject) => {
        // Your code here
        // Use Math.random() > 0.5 to decide
    });
}

randomSuccess()
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

<details>
<summary>Hint</summary>
Use an if statement: if `Math.random() > 0.5`, call `resolve('Success!')`, otherwise call `reject('Failed!')`.
</details>

### Exercise 6: Promise Chaining

Write a function `multiplyAsync` that takes a number and returns a Promise that resolves with the number multiplied by 2 after 500ms.

```javascript
function multiplyAsync(n) {
    return new Promise(resolve => {
        // Your code here - resolve with n * 2 after 500ms
    });
}

multiplyAsync(5)
    .then(result => multiplyAsync(result))
    .then(result => multiplyAsync(result))
    .then(result => console.log(result)); // 40 (5 * 2 * 2 * 2)
```

<details>
<summary>Hint</summary>
Similar to Exercise 4, but instead of just calling resolve(), call `resolve(n * 2)`.
</details>

### Exercise 7: Converting Callbacks to Promises

Given this callback-based function, create a Promise-based version called `getUserPromise`:

```javascript
function getUser(id, callback) {
    setTimeout(() => {
        if (id <= 0) {
            callback(new Error('Invalid ID'), null);
        } else {
            callback(null, { id, name: `User ${id}` });
        }
    }, 500);
}

function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        // Call getUser with a callback that either resolves or rejects
    });
}

getUserPromise(1).then(user => console.log(user)); // { id: 1, name: 'User 1' }
getUserPromise(-1).catch(error => console.log(error.message)); // 'Invalid ID'
```

<details>
<summary>Hint</summary>
Call `getUser(id, (error, user) => { ... })`. Inside the callback, if there's an error, call `reject(error)`, otherwise call `resolve(user)`.
</details>

---

## Promise Static Methods

### Exercise 8: Promise.all

Write a function `fetchAllUsers` that takes an array of user IDs and returns a Promise that resolves with an array of all users.

```javascript
function fetchAllUsers(ids) {
    // Step 1: Use ids.map() to create an array of promises
    // Step 2: Pass that array to Promise.all()
}

fetchAllUsers([1, 2, 3]).then(users => console.log(users));
// [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' }]
```

<details>
<summary>Hint</summary>
`const promises = ids.map(id => getUserPromise(id));` creates the array, then `return Promise.all(promises);`
</details>

### Exercise 9: Promise.race for Timeout

Write a function `fetchWithTimeout` that takes a Promise and a timeout in milliseconds. Return the Promise result if it resolves in time, or reject with "Timeout!" if too slow.

```javascript
function fetchWithTimeout(promise, ms) {
    // Create a timeout promise that rejects after ms
    // Use Promise.race to race them
}

const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done!'), 5000));
fetchWithTimeout(slowPromise, 1000).catch(error => console.log(error)); // 'Timeout!'
```

<details>
<summary>Hint</summary>
Create a timeout promise: `new Promise((_, reject) => setTimeout(() => reject('Timeout!'), ms))`. Then return `Promise.race([promise, timeoutPromise])`.
</details>

### Exercise 10: Promise.allSettled

Write a function `attemptAll` that takes an array of Promises and returns an object with `succeeded` and `failed` arrays.

```javascript
function attemptAll(promises) {
    return Promise.allSettled(promises).then(results => {
        // Loop through results
        // If result.status === 'fulfilled', add result.value to succeeded
        // If result.status === 'rejected', add result.reason.message to failed
    });
}

const testPromises = [
    Promise.resolve('A'),
    Promise.reject(new Error('B failed')),
    Promise.resolve('C')
];
attemptAll(testPromises).then(result => console.log(result));
// { succeeded: ['A', 'C'], failed: ['B failed'] }
```

<details>
<summary>Hint</summary>
Create two empty arrays, loop through results with a for...of loop, check `result.status`, and push to the appropriate array.
</details>

---

## Async/Await

### Exercise 11: Basic Async/Await

Rewrite Exercise 6's chaining using async/await syntax:

```javascript
async function tripleMultiply(n) {
    // Call multiplyAsync three times with await
    // Store each result and pass it to the next call
    // Return the final result
}

tripleMultiply(5).then(result => console.log(result)); // 40
```

<details>
<summary>Hint</summary>
```javascript
let result = await multiplyAsync(n);
result = await multiplyAsync(result);
result = await multiplyAsync(result);
return result;
```
</details>

### Exercise 12: Error Handling with Async/Await

Write an async function `safeGetUser` that returns the user object or `null` if an error occurs.

```javascript
async function safeGetUser(id) {
    try {
        // await getUserPromise and return the user
    } catch (error) {
        // return null if it fails
    }
}

safeGetUser(1).then(user => console.log(user)); // { id: 1, name: 'User 1' }
safeGetUser(-1).then(user => console.log(user)); // null
```

<details>
<summary>Hint</summary>
In the try block: `return await getUserPromise(id);`. In the catch block: `return null;`
</details>

### Exercise 13: Sequential vs Parallel

Write two functions that fetch users with IDs 1, 2, and 3:

```javascript
async function fetchUsersSequential() {
    // Fetch one at a time using three separate await calls
}

async function fetchUsersParallel() {
    // Start all three at once using Promise.all
}
```

<details>
<summary>Hint</summary>
Sequential: `const user1 = await getUserPromise(1);` (repeat for 2 and 3, return array).
Parallel: `return Promise.all([getUserPromise(1), getUserPromise(2), getUserPromise(3)]);`
</details>

### Exercise 14: Async Loop

Write an async function `processItems` that processes each item one at a time and returns all results.

```javascript
async function processItems(items, asyncProcessor) {
    const results = [];
    // Use a for...of loop
    // await each asyncProcessor(item) call
    // Push results to the array
    return results;
}

const asyncDouble = async (n) => {
    await wait(100);
    return n * 2;
};
processItems([1, 2, 3], asyncDouble).then(results => console.log(results)); // [2, 4, 6]
```

<details>
<summary>Hint</summary>
```javascript
for (const item of items) {
    const result = await asyncProcessor(item);
    results.push(result);
}
```
</details>

---

## Fetch API

### Exercise 15: Basic Fetch

Write a function `fetchJson` that fetches a URL and returns the parsed JSON.

```javascript
async function fetchJson(url) {
    const response = await fetch(url);
    // Check if response.ok is false, throw an error
    // Otherwise return response.json()
}

fetchJson('https://jsonplaceholder.typicode.com/users/1')
    .then(user => console.log(user.name));
```

<details>
<summary>Hint</summary>
```javascript
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
return response.json();
```
</details>

### Exercise 16: POST Request

Write a function `createPost` that sends a POST request to create a new post.

```javascript
async function createPost(title, body) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Include title, body, and userId: 1
        })
    });
    // Return the JSON response
}

createPost('My Title', 'My content').then(post => console.log(post));
```

<details>
<summary>Hint</summary>
The body should be: `JSON.stringify({ title, body, userId: 1 })`. Then return `response.json()`.
</details>

### Exercise 17: Fetch Multiple Resources

Write a function that fetches a user and their posts in parallel.

```javascript
async function fetchUserWithPosts(userId) {
    // Use Promise.all to fetch both at once:
    // - User: https://jsonplaceholder.typicode.com/users/{userId}
    // - Posts: https://jsonplaceholder.typicode.com/posts?userId={userId}
    // Return { user, posts }
}

fetchUserWithPosts(1).then(data => {
    console.log(data.user.name);
    console.log(data.posts.length);
});
```

<details>
<summary>Hint</summary>
```javascript
const [user, posts] = await Promise.all([
    fetchJson(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetchJson(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
]);
return { user, posts };
```
</details>

### Exercise 18: Retry Logic

Write a function that retries a fetch up to `maxRetries` times if it fails.

```javascript
async function fetchWithRetry(url, maxRetries) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // Try to fetch and return if successful
        } catch (error) {
            // Save the error, log the attempt, maybe wait before retrying
        }
    }
    
    // If we get here, all retries failed - throw lastError
}
```

<details>
<summary>Hint</summary>
In the try block: `return await fetchJson(url);`. In the catch block: save the error to `lastError` and optionally `await wait(1000)` before the next attempt.
</details>

