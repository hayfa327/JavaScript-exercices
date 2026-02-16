# Array Methods

## map()

The `map()` method creates a new array by calling a function on every element in the original array.

### Exercise: Double the Numbers

Given an array of numbers, use `map()` to create a new array where each number is doubled.

```javascript
const numbers = [1, 2, 3, 4, 5];
// Your code here
// Expected output: [2, 4, 6, 8, 10]
```

### Exercise: Extract Property Values

Given an array of user objects, use `map()` to create an array of just their names.

```javascript
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
// Your code here
// Expected output: ['Alice', 'Bob', 'Charlie']
```

### Exercise: Transform Objects

Given an array of products, use `map()` to create an array of strings in the format "Product: $Price".

```javascript
const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 499 },
];
// Your code here
// Expected output: ['Laptop: $999', 'Phone: $699', 'Tablet: $499']
```

## filter()

The `filter()` method creates a new array with all elements that pass a test (return `true` from the callback).

### Exercise: Filter Even Numbers

Given an array of numbers, use `filter()` to create a new array containing only the even numbers.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your code here
// Expected output: [2, 4, 6, 8, 10]
```

### Exercise: Filter by Property

Given an array of products, use `filter()` to get only the products that are in stock.

```javascript
const products = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: false },
    { name: 'Tablet', price: 499, inStock: true },
    { name: 'Watch', price: 299, inStock: false },
];
// Your code here
// Expected output: [{ name: 'Laptop', ... }, { name: 'Tablet', ... }]
```

### Exercise: Filter with Multiple Conditions

Given an array of users, use `filter()` to get users who are:

- Over 18 years old AND
- Have an active account

```javascript
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false },
    { name: 'Diana', age: 22, active: true },
];
// Your code here
// Expected output: [{ name: 'Alice', ... }, { name: 'Diana', ... }]
```

## includes() and indexOf()

The `includes()` method checks if an array contains a value. The `indexOf()` method returns the index of a value (-1 if
not found).

### Exercise: Check Membership

Given an array of allowed roles, check if a user's role is allowed.

```javascript
const allowedRoles = ['admin', 'moderator', 'editor'];
const userRole = 'moderator';
// Your code here
// Expected output: true
```

### Exercise: Find Position

Given an array of colors, find the position of 'blue'.

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];
// Your code here
// Expected output: 2
```

## reduce()

The `reduce()` method executes a reducer function on each element, resulting in a single output value.

### Exercise: Sum of Numbers

Given an array of numbers, use `reduce()` to calculate the sum.

```javascript
const numbers = [10, 20, 30, 40, 50];
// Your code here
// Expected output: 150
```

### Exercise: Find Maximum Value

Given an array of numbers, use `reduce()` to find the maximum value.

```javascript
const numbers = [23, 45, 12, 67, 34, 89, 21];
// Your code here
// Expected output: 89
```

### Exercise: Count Occurrences

Given an array of strings, use `reduce()` to count how many times each string appears.

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Your code here
// Expected output: { apple: 3, banana: 2, orange: 1 }
```

### Exercise: Group by Property

Given an array of people, use `reduce()` to group them by their city.

```javascript
const people = [
    { name: 'Alice', city: 'New York' },
    { name: 'Bob', city: 'London' },
    { name: 'Charlie', city: 'New York' },
    { name: 'Diana', city: 'London' },
];
// Your code here
// Expected output: { 'New York': ['Alice', 'Charlie'], 'London': ['Bob', 'Diana'] }
```

## slice() and splice()

`slice()` returns a shallow copy of a portion of an array (non-mutating). `splice()` changes the contents of an array (
mutating).

### Exercise: Get Last N Elements

Write a function that returns the last n elements of an array using `slice()`.

```javascript
function getLastN(arr, n) {
    // Your code here
}

console.log(getLastN([1, 2, 3, 4, 5], 3)); // [3, 4, 5]
console.log(getLastN([1, 2, 3, 4, 5], 2)); // [4, 5]
```

### Exercise: Remove and Insert

Use `splice()` to remove 2 elements starting at index 1 and replace them with 'x' and 'y'.

```javascript
const letters = ['a', 'b', 'c', 'd', 'e'];
// Your code here
// Expected: ['a', 'x', 'y', 'd', 'e']
```

## Chaining Array Methods

You can chain multiple array methods together for powerful data transformations.

### Exercise: Chain filter and map

Given an array of numbers, get the squares of all even numbers.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your code here (use filter then map)
// Expected output: [4, 16, 36, 64, 100]
```

### Exercise: Complete Data Pipeline

Given an array of orders, calculate the total revenue from completed orders only.

Requirements:

1. Filter to only completed orders
2. Extract the total price from each order
3. Sum up all the prices

```javascript
const orders = [
    { id: 1, status: 'completed', total: 100 },
    { id: 2, status: 'pending', total: 200 },
    { id: 3, status: 'completed', total: 150 },
    { id: 4, status: 'cancelled', total: 75 },
    { id: 5, status: 'completed', total: 300 },
];
// Your code here
// Expected output: 550
```

## Challenging

### Challenge: Remove Duplicates

Write a function that removes duplicate values from an array.

```javascript
function removeDuplicates(arr) {
    // Your code here
    // Hint: You can use filter with indexOf
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // ['a', 'b', 'c']
```

### Challenge: Find Missing Items

Given two arrays, find all items that are in the first array but not in the second.

```javascript
function findMissing(arr1, arr2) {
    // Your code here
}

const required = ['passport', 'ticket', 'visa', 'insurance'];
const packed = ['ticket', 'passport'];

console.log(findMissing(required, packed)); // ['visa', 'insurance']
```
