// JavaScript Fundamentals Practice
// Complete each exercise below. See Exercise.md for full instructions.

// ============================================================
// LOOPS AND CONDITIONALS
// ============================================================

// Exercise 3: Sum of Multiples (Exercises 1-2 are in Exercise.md only)
function sumOfMultiples(n) {
    // Your code here
}

console.log(sumOfMultiples(10)); // 23
console.log(sumOfMultiples(20)); // 78
console.log(sumOfMultiples(100)); // 2318

// Exercise 4: Prime Number Checker
function isPrime(n) {
    // Your code here
}

console.log(isPrime(2)); // true
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(1)); // false
console.log(isPrime(97)); // true

// Exercise 5: Generate Primes
function generatePrimes(n) {
    // Your code here
}

console.log(generatePrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(generatePrimes(10)); // [2, 3, 5, 7]

// ============================================================
// STRINGS
// ============================================================

// Exercise 6: Count Vowels
function countVowels(str) {
    // Your code here
}

console.log(countVowels('hello')); // 2
console.log(countVowels('AEIOU')); // 5
console.log(countVowels('xyz')); // 0
console.log(countVowels('JavaScript')); // 3

// Exercise 7: Reverse a String
function reverseString(str) {
    // Your code here
}

console.log(reverseString('hello')); // "olleh"
console.log(reverseString('JavaScript')); // "tpircSavaJ"
console.log(reverseString('')); // ""

// Exercise 8: Palindrome Checker
function isPalindrome(str) {
    // Your code here
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Was it a car or a cat I saw')); // true

// Exercise 9: Title Case
function toTitleCase(str) {
    // Your code here
}

console.log(toTitleCase('hello world')); // "Hello World"
console.log(toTitleCase('the quick brown fox')); // "The Quick Brown Fox"
console.log(toTitleCase('jAVASCRIPT is AWESOME')); // "Javascript Is Awesome"

// ============================================================
// ARRAYS
// ============================================================

// Exercise 10: Find Maximum
function findMax(arr) {
    // Your code here
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-5, -2, -10])); // -2
console.log(findMax([42])); // 42

// Exercise 11: Remove Duplicates
function removeDuplicates(arr) {
    // Your code here
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // ["a", "b", "c"]
console.log(removeDuplicates([1, 1, 1, 1])); // [1]

// Exercise 12: Array Intersection
function intersection(arr1, arr2) {
    // Your code here
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ["b", "c"]

// Exercise 13: Chunk Array
function chunkArray(arr, size) {
    // Your code here
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
console.log(chunkArray([1, 2, 3], 5)); // [[1, 2, 3]]

// ============================================================
// NUMBERS AND MATH
// ============================================================

// Exercise 14: Factorial
function factorial(n) {
    // Your code here
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800

// Exercise 15: Fibonacci Sequence
function fibonacci(n) {
    // Your code here
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]

// ============================================================
// OBJECTS
// ============================================================

// Exercise 16: Count Occurrences
function countOccurrences(arr) {
    // Your code here
}

console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// { a: 3, b: 2, c: 1 }

console.log(countOccurrences([1, 2, 1, 3, 1, 2]));
// { 1: 3, 2: 2, 3: 1 }

// Exercise 17: Group By Property
function groupBy(arr, property) {
    // Your code here
}

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

// ============================================================
// CLASSES
// ============================================================

// Exercise 18: Create a Book Class
// Your code here

const book = new Book('1984', 'George Orwell', 328);
console.log(book.getSummary()); // "1984 by George Orwell, 328 pages"
console.log(book.isRead); // false
console.log(book.read()); // "You finished reading 1984!"
console.log(book.isRead); // true

// Exercise 19: Create a Library Class
// Your code here

const library = new Library();

library.addBook(new Book('1984', 'George Orwell', 328));
library.addBook(new Book('Brave New World', 'Aldous Huxley', 288));
library.addBook(new Book('Fahrenheit 451', 'Ray Bradbury', 194));

console.log(library.listBooks()); // ["1984", "Brave New World", "Fahrenheit 451"]

const foundBook = library.findBook('1984');
foundBook.read();

console.log(library.getUnreadBooks().length); // 2

library.removeBook('Brave New World');
console.log(library.listBooks()); // ["1984", "Fahrenheit 451"]

// Exercise 20: Create a BankAccount Class
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

// Exercise 21: Inheritance - Shape Classes
// Your code here

const rect = new Rectangle('blue', 10, 5);
console.log(rect.describe()); // "A blue rectangle, 10x5"
console.log(rect.getArea()); // 50
console.log(rect.getPerimeter()); // 30

const circle = new Circle('red', 7);
console.log(circle.describe()); // "A red circle with radius 7"
console.log(circle.getArea()); // ~153.94
console.log(circle.getPerimeter()); // ~43.98
