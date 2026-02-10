# JavaScript Fundamentals

## JavaScript Execution Model

### Exercise: Predict the outcome of the following code

Try and understand the output before running it.
Explain why it runs in this order.

```A, E, G, D, F, B, C
// I have remark here the console.log inside the function run before the promise 
```

```javascript
console.log('A');

setTimeout(() => {
    console.log('B');

    Promise.resolve().then(() => {
        console.log('C');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('D');
});

(async function() {
    console.log('E');
    await Promise.resolve();
    console.log('F');
})();

console.log('G');
```

## Loops

### Exercise: For Loop

Write a for loop that:
1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
2. The calculates the sum of those numbers in a second loop
3. Finally, prints the array and the sum

 ```js
 const arrayEvenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
 let sum = 0;
for (let i= 0; i< arrayEvenNumbers.length; i++) {
   sum += arrayEvenNumbers[i];
 }; 
 console.log(arrayEvenNumbers);
 console.log(sum); 
 ```

### Exercise: While Loop

Write a while loop that:

1. Starts with a number `n = 1`
2. Keeps doubling the number until it exceeds 1000
3. Counts how many iterations it took
4. Finally, prints the final number and the iteration count

```js
 let n = 1; 
let count = 0; 
while (n < 1000) {
  n = n * 2; 
  count++
}
console.log(n);
console.log(count);

 ```

## Control Flow

### Exercise: Switch Statement

Write a switch statement that:

1. Takes a variable `day` containing a day of the week (e.g., "Monday")
2. Prints whether the day is a "Weekday", "Weekend", or "Invalid day"
3. Also prints a custom message for each day (e.g., "Monday - Start of the work week!")
4. Test it with at least 3 different day values

```js
 const day = "Sunday"; 
console.log("Weekend"); 

switch (day) {
    case "Friday": 
    console.log("Weekday");
    console.log("its the end of the Weekday");
    break;  
    case "Monday": 
    console.log("Weekday");
    console.log("its the start for the week");
    break; 
    case "Tuesday": 
    console.log("Weekday");
    console.log("its the day for shopping"); 
    break; 
    case "Sunday":
        console.log("Weekdend");
    console.log("Time to rest!");
    break;
    default: 
    console.log("Invalid day")

}

 ```