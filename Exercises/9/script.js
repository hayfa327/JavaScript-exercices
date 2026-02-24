// Asynchronous JavaScript Practice
// Complete each exercise below. See Exercise.md for full instructions and hints.

// ============================================================
// CALLBACKS
// ============================================================

// Exercise 2: Create a Delay Function
// Just wrap setTimeout - this is a one-liner!
function delay(callback, ms) {
    // Your code here
}

delay(() => console.log('Hello after 1 second!'), 1000);

// Exercise 3: Countdown
// Use a for loop to schedule multiple setTimeouts with staggered delays
function countdown(n) {
    // Your code here
}

// countdown(3);

// ============================================================
// PROMISES
// ============================================================

// Exercise 4: Create a Promise
// Return a new Promise that resolves after ms milliseconds
function wait(ms) {
    return new Promise(resolve => {
        // Use setTimeout to call resolve after ms
    });
}

// wait(1000).then(() => console.log('1 second passed'));

// Exercise 5: Promise That Can Reject
// Use Math.random() > 0.5 to decide between resolve and reject
function randomSuccess() {
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// randomSuccess()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// Exercise 6: Promise Chaining
// Resolve with n * 2 after 500ms
function multiplyAsync(n) {
    return new Promise(resolve => {
        // Your code here
    });
}

// multiplyAsync(5)
//     .then(result => multiplyAsync(result))
//     .then(result => multiplyAsync(result))
//     .then(result => console.log(result)); // 40

// Exercise 7: Converting Callbacks to Promises
// This callback-based function is provided for you
function getUser(id, callback) {
    setTimeout(() => {
        if (id <= 0) {
            callback(new Error('Invalid ID'), null);
        } else {
            callback(null, { id, name: `User ${id}` });
        }
    }, 500);
}

// Wrap getUser in a Promise
function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        // Call getUser with a callback
        // In the callback: if error, reject(error); else resolve(user)
    });
}

// getUserPromise(1).then(user => console.log(user));
// getUserPromise(-1).catch(error => console.log(error.message));

// ============================================================
// PROMISE STATIC METHODS
// ============================================================

// Exercise 8: Promise.all
// Map ids to promises, then use Promise.all
function fetchAllUsers(ids) {
    // const promises = ids.map(id => getUserPromise(id));
    // return Promise.all(promises);
}

// fetchAllUsers([1, 2, 3]).then(users => console.log(users));

// Exercise 9: Promise.race for Timeout
// Race the original promise against a timeout promise
function fetchWithTimeout(promise, ms) {
    // const timeoutPromise = new Promise((_, reject) => {
    //     setTimeout(() => reject('Timeout!'), ms);
    // });
    // return Promise.race([promise, timeoutPromise]);
}

// const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done!'), 5000));
// fetchWithTimeout(slowPromise, 1000).catch(error => console.log(error)); // 'Timeout!'

// Exercise 10: Promise.allSettled
// Loop through results and sort into succeeded/failed arrays
function attemptAll(promises) {
    return Promise.allSettled(promises).then(results => {
        const succeeded = [];
        const failed = [];
        // Loop through results and check result.status
        return { succeeded, failed };
    });
}

// const testPromises = [
//     Promise.resolve('A'),
//     Promise.reject(new Error('B failed')),
//     Promise.resolve('C')
// ];
// attemptAll(testPromises).then(result => console.log(result));

// ============================================================
// ASYNC/AWAIT
// ============================================================

// Exercise 11: Basic Async/Await
// Call multiplyAsync three times with await
async function tripleMultiply(n) {
    // let result = await multiplyAsync(n);
    // result = await multiplyAsync(result);
    // ...
}

// tripleMultiply(5).then(result => console.log(result)); // 40

// Exercise 12: Error Handling with Async/Await
// Use try/catch to return user or null
async function safeGetUser(id) {
    try {
        // return await getUserPromise(id);
    } catch (error) {
        // return null;
    }
}

// safeGetUser(1).then(user => console.log(user));
// safeGetUser(-1).then(user => console.log(user)); // null

// Exercise 13: Sequential vs Parallel
// Sequential: await each call one at a time
async function fetchUsersSequential() {
    // const user1 = await getUserPromise(1);
    // const user2 = await getUserPromise(2);
    // const user3 = await getUserPromise(3);
    // return [user1, user2, user3];
}

// Parallel: start all at once with Promise.all
async function fetchUsersParallel() {
    // return Promise.all([
    //     getUserPromise(1),
    //     getUserPromise(2),
    //     getUserPromise(3)
    // ]);
}

// console.time('Sequential');
// fetchUsersSequential().then(users => {
//     console.timeEnd('Sequential'); // ~1500ms
//     console.log(users);
// });

// console.time('Parallel');
// fetchUsersParallel().then(users => {
//     console.timeEnd('Parallel'); // ~500ms
//     console.log(users);
// });

// Exercise 14: Async Loop
// Use for...of to process items one at a time
async function processItems(items, asyncProcessor) {
    const results = [];
    // for (const item of items) {
    //     const result = await asyncProcessor(item);
    //     results.push(result);
    // }
    return results;
}

// const asyncDouble = async (n) => {
//     await wait(100);
//     return n * 2;
// };
// processItems([1, 2, 3], asyncDouble).then(results => console.log(results));

// ============================================================
// FETCH API
// ============================================================

// Exercise 15: Basic Fetch
// Check response.ok, throw error if false, return response.json()
async function fetchJson(url) {
    const response = await fetch(url);
    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    // return response.json();
}

// fetchJson('https://jsonplaceholder.typicode.com/users/1')
//     .then(user => console.log(user.name));

// Exercise 16: POST Request
// Send a POST with JSON body
async function createPost(title, body) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // title, body, userId: 1
        })
    });
    // return response.json();
}

// createPost('My Title', 'My content').then(post => console.log(post));

// Exercise 17: Fetch Multiple Resources
// Use Promise.all to fetch user and posts in parallel
async function fetchUserWithPosts(userId) {
    // const [user, posts] = await Promise.all([
    //     fetchJson(`https://jsonplaceholder.typicode.com/users/${userId}`),
    //     fetchJson(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    // ]);
    // return { user, posts };
}

// fetchUserWithPosts(1).then(data => {
//     console.log(data.user.name);
//     console.log(data.posts.length);
// });

// Exercise 18: Retry Logic
// Loop up to maxRetries, try/catch each attempt
async function fetchWithRetry(url, maxRetries) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // return await fetchJson(url);
        } catch (error) {
            // lastError = error;
            // console.log(`Attempt ${attempt} failed`);
        }
    }
    
    throw lastError;
}

// fetchWithRetry('https://jsonplaceholder.typicode.com/users/1', 3)
//     .then(data => console.log(data));

