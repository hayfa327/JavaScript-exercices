# JavaScript Fundamentals Practice

These exercises will help you practice core JavaScript concepts including variables, objects, classes, and arrays. Complete each exercise in `script.js`.

---

## Variables and Data Types

### Exercise 1: Variable Declarations

Predict the output of each code snippet before running it. Then explain why.

**Snippet A:**

```javascript
var x = 10;
let y = 20;
const z = 30;

x = 15;
y = 25;
// z = 35; // What happens if you uncomment this?

console.log(x, y, z);
```

**Snippet B:**

```javascript
console.log(a);
var a = 5;
console.log(a);

// console.log(b);
// let b = 10;
// Why is the above commented out?
```

**Snippet C:**

```javascript
let counter = 0;

for (var i = 0; i < 3; i++) {
  counter++;
}

console.log('counter:', counter);
console.log('i:', i); // What is the value of i?
```

### Exercise 2: Type Coercion

Predict the result of each expression, then verify by running them:

```javascript
console.log(5 + '3'); // ?
console.log('5' - 3); // ?
console.log('5' * '2'); // ?
console.log(true + 1); // ?
console.log(false + '1'); // ?
console.log(null + 1); // ?
console.log(undefined + 1); // ?
console.log([] + []); // ?
console.log([] + {}); // ?
console.log({} + []); // ?
```

---

## Loops and Conditionals

### Exercise 3: Sum of Multiples

Write a function `sumOfMultiples` that takes a number `n` and returns the sum of all numbers below `n` that are multiples of 3 or 5.

```javascript
// Your code here

console.log(sumOfMultiples(10)); // 23 (3 + 5 + 6 + 9)
console.log(sumOfMultiples(20)); // 78
console.log(sumOfMultiples(100)); // 2318
```

### Exercise 4: Prime Number Checker

Write a function `isPrime` that takes a number and returns `true` if it's a prime number, `false` otherwise.

```javascript
// Your code here

console.log(isPrime(2)); // true
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(1)); // false
console.log(isPrime(97)); // true
```

### Exercise 5: Generate Primes

Using your `isPrime` function, write a function `generatePrimes` that returns an array of all prime numbers up to and including `n`.

```javascript
// Your code here

console.log(generatePrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(generatePrimes(10)); // [2, 3, 5, 7]
```

---

## Strings

### Exercise 6: Count Vowels

Write a function `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u) in it. It should be case-insensitive.

```javascript
// Your code here

console.log(countVowels('hello')); // 2
console.log(countVowels('AEIOU')); // 5
console.log(countVowels('xyz')); // 0
console.log(countVowels('JavaScript')); // 3
```

### Exercise 7: Reverse a String

Write a function `reverseString` that takes a string and returns it reversed. Do NOT use the built-in `reverse()` method.

```javascript
// Your code here

console.log(reverseString('hello')); // "olleh"
console.log(reverseString('JavaScript')); // "tpircSavaJ"
console.log(reverseString('')); // ""
```

### Exercise 8: Palindrome Checker

Write a function `isPalindrome` that checks if a string is a palindrome. Ignore spaces, punctuation, and case.

```javascript
// Your code here

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Was it a car or a cat I saw')); // true
```

### Exercise 9: Title Case

Write a function `toTitleCase` that converts a string to title case (first letter of each word capitalized).

```javascript
// Your code here

console.log(toTitleCase('hello world')); // "Hello World"
console.log(toTitleCase('the quick brown fox')); // "The Quick Brown Fox"
console.log(toTitleCase('jAVASCRIPT is AWESOME')); // "Javascript Is Awesome"
```

---

## Arrays

### Exercise 10: Find Maximum

Write a function `findMax` that takes an array of numbers and returns the largest number. Do NOT use `Math.max()`.

```javascript
// Your code here

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-5, -2, -10])); // -2
console.log(findMax([42])); // 42
```

### Exercise 11: Remove Duplicates

Write a function `removeDuplicates` that takes an array and returns a new array with duplicates removed. Try solving this WITHOUT using `Set`.

```javascript
// Your code here

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // ["a", "b", "c"]
console.log(removeDuplicates([1, 1, 1, 1])); // [1]
```

### Exercise 12: Array Intersection

Write a function `intersection` that takes two arrays and returns an array containing only the elements that appear in both.

```javascript
// Your code here

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ["b", "c"]
```

### Exercise 13: Chunk Array

Write a function `chunkArray` that splits an array into groups of a specified size.

```javascript
// Your code here

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
console.log(chunkArray([1, 2, 3], 5)); // [[1, 2, 3]]
```

---

## Numbers and Math

### Exercise 14: Factorial

Write a function `factorial` that calculates the factorial of a number. (n! = n × (n-1) × (n-2) × ... × 1)

```javascript
// Your code here

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800
```

### Exercise 15: Fibonacci Sequence

Write a function `fibonacci` that returns an array containing the first `n` numbers of the Fibonacci sequence.

```javascript
// Your code here

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
```

---

## Objects

### Exercise 16: Count Occurrences

Write a function `countOccurrences` that takes an array and returns an object with each unique element as a key and its count as the value.

```javascript
// Your code here

console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// { a: 3, b: 2, c: 1 }

console.log(countOccurrences([1, 2, 1, 3, 1, 2]));
// { 1: 3, 2: 2, 3: 1 }
```

### Exercise 17: Group By Property

Write a function `groupBy` that takes an array of objects and a property name, and groups the objects by that property.

```javascript
// Your code here

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 30 },
];

console.log(groupBy(people, 'age'));
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'Diana', age: 30 }]
// }
```

---

## Classes

### Exercise 18: Create a Book Class

Create a `Book` class with the following:

- Properties: `title`, `author`, `pages`, `isRead` (default: false)
- Method: `read()` - marks the book as read and returns a message
- Method: `getSummary()` - returns a string describing the book

```javascript
// Your code here

const book = new Book('1984', 'George Orwell', 328);
console.log(book.getSummary()); // "1984 by George Orwell, 328 pages"
console.log(book.isRead); // false
console.log(book.read()); // "You finished reading 1984!"
console.log(book.isRead); // true
```

### Exercise 19: Create a Library Class

Create a `Library` class that manages a collection of books:

- Property: `books` (an array of Book objects)
- Method: `addBook(book)` - adds a book to the library
- Method: `removeBook(title)` - removes a book by title
- Method: `findBook(title)` - returns the book with that title, or undefined
- Method: `listBooks()` - returns an array of all book titles
- Method: `getUnreadBooks()` - returns an array of unread books

```javascript
// Your code here

const library = new Library();

library.addBook(new Book('1984', 'George Orwell', 328));
library.addBook(new Book('Brave New World', 'Aldous Huxley', 288));
library.addBook(new Book('Fahrenheit 451', 'Ray Bradbury', 194));

console.log(library.listBooks()); // ["1984", "Brave New World", "Fahrenheit 451"]

const book = library.findBook('1984');
book.read();

console.log(library.getUnreadBooks().length); // 2

library.removeBook('Brave New World');
console.log(library.listBooks()); // ["1984", "Fahrenheit 451"]
```

### Exercise 20: Create a BankAccount Class

Create a `BankAccount` class with:

- Private property: `#balance`
- Constructor that accepts `accountHolder` and optional `initialBalance` (default 0)
- Method: `deposit(amount)` - adds to balance, returns new balance
- Method: `withdraw(amount)` - subtracts from balance if sufficient funds
- Method: `getBalance()` - returns current balance
- Method: `transfer(amount, toAccount)` - transfers money to another account

```javascript
// Your code here

const account1 = new BankAccount('Alice', 1000);
const account2 = new BankAccount('Bob', 500);

console.log(account1.getBalance()); // 1000
console.log(account1.deposit(200)); // 1200
console.log(account1.withdraw(100)); // 1100
console.log(account1.withdraw(5000)); // "Insufficient funds"

account1.transfer(300, account2);
console.log(account1.getBalance()); // 800
console.log(account2.getBalance()); // 800
```

### Exercise 21: Inheritance - Shape Classes

Create a class hierarchy for shapes:

1. Base class `Shape` with:
   - Property: `color`
   - Method: `describe()` - returns "A [color] shape"

2. Class `Rectangle` that extends `Shape`:
   - Properties: `width`, `height`
   - Method: `getArea()` - returns width \* height
   - Method: `getPerimeter()` - returns 2 \* (width + height)
   - Override `describe()` to include dimensions

3. Class `Circle` that extends `Shape`:
   - Property: `radius`
   - Method: `getArea()` - returns π \* radius²
   - Method: `getPerimeter()` - returns 2 \* π \* radius
   - Override `describe()` to include radius

```javascript
// Your code here

const rect = new Rectangle('blue', 10, 5);
console.log(rect.describe()); // "A blue rectangle, 10x5"
console.log(rect.getArea()); // 50
console.log(rect.getPerimeter()); // 30

const circle = new Circle('red', 7);
console.log(circle.describe()); // "A red circle with radius 7"
console.log(circle.getArea()); // ~153.94
console.log(circle.getPerimeter()); // ~43.98
```
