// ============================================
// EXERCISE 3: Array Methods
// ============================================

// ============================================
// map()
// ============================================

// Exercise: Double the Numbers
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// Exercise: Extract Property Values
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
const names = users.map(user => user.name);
console.log('Names:', names); // ['Alice', 'Bob', 'Charlie']

// Exercise: Transform Objects
const products1 = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 499 },
];
const productStrings = products1.map(product => `${product.name}: $${product.price}`);
console.log('Product Strings:', productStrings);
// ['Laptop: $999', 'Phone: $699', 'Tablet: $499']

// ============================================
// filter()
// ============================================

// Exercise: Filter Even Numbers
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Exercise: Filter by Property
const products2 = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: false },
    { name: 'Tablet', price: 499, inStock: true },
    { name: 'Watch', price: 299, inStock: false },
];
const inStockProducts = products2.filter(product => product.inStock);
console.log('In Stock:', inStockProducts);
// [{ name: 'Laptop', ... }, { name: 'Tablet', ... }]

// Exercise: Filter with Multiple Conditions
const users2 = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false },
    { name: 'Diana', age: 22, active: true },
];
const activeAdults = users2.filter(user => user.age > 18 && user.active);
console.log('Active Adults:', activeAdults);
// [{ name: 'Alice', ... }, { name: 'Diana', ... }]

// ============================================
// includes() and indexOf()
// ============================================

// Exercise: Check Membership
const allowedRoles = ['admin', 'moderator', 'editor'];
const userRole = 'moderator';
const isAllowed = allowedRoles.includes(userRole);
console.log('Is Allowed:', isAllowed); // true

// Exercise: Find Position
const colors = ['red', 'green', 'blue', 'yellow'];
const bluePosition = colors.indexOf('blue');
console.log('Blue Position:', bluePosition); // 2

// ============================================
// reduce()
// ============================================

// Exercise: Sum of Numbers
const numbers3 = [10, 20, 30, 40, 50];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum); // 150

// Exercise: Find Maximum Value
const numbers4 = [23, 45, 12, 67, 34, 89, 21];
const max = numbers4.reduce((acc, num) => (num > acc ? num : acc), numbers4[0]);
console.log('Max:', max); // 89
// Alternative: const max = Math.max(...numbers4);

// Exercise: Count Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log('Fruit Counts:', fruitCounts);
// { apple: 3, banana: 2, orange: 1 }

// Exercise: Group by Property
const people = [
    { name: 'Alice', city: 'New York' },
    { name: 'Bob', city: 'London' },
    { name: 'Charlie', city: 'New York' },
    { name: 'Diana', city: 'London' },
];
const groupedByCity = people.reduce((acc, person) => {
    if (!acc[person.city]) {
        acc[person.city] = [];
    }
    acc[person.city].push(person.name);
    return acc;
}, {});
console.log('Grouped by City:', groupedByCity);
// { 'New York': ['Alice', 'Charlie'], 'London': ['Bob', 'Diana'] }

// ============================================
// slice() and splice()
// ============================================

// Exercise: Get Last N Elements
function getLastN(arr, n) {
    return arr.slice(-n);
}

console.log('Last 3:', getLastN([1, 2, 3, 4, 5], 3)); // [3, 4, 5]
console.log('Last 2:', getLastN([1, 2, 3, 4, 5], 2)); // [4, 5]

// Exercise: Remove and Insert
const letters = ['a', 'b', 'c', 'd', 'e'];
letters.splice(1, 2, 'x', 'y');
console.log('Modified Letters:', letters); // ['a', 'x', 'y', 'd', 'e']

// ============================================
// Chaining Array Methods
// ============================================

// Exercise: Chain filter and map
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = numbers5.filter(num => num % 2 === 0).map(num => num * num);
console.log('Even Squares:', evenSquares); // [4, 16, 36, 64, 100]

// Exercise: Complete Data Pipeline
const orders = [
    { id: 1, status: 'completed', total: 100 },
    { id: 2, status: 'pending', total: 200 },
    { id: 3, status: 'completed', total: 150 },
    { id: 4, status: 'cancelled', total: 75 },
    { id: 5, status: 'completed', total: 300 },
];

const totalRevenue = orders
    .filter(order => order.status === 'completed')
    .map(order => order.total)
    .reduce((acc, total) => acc + total, 0);

console.log('Total Revenue:', totalRevenue); // 550

// ============================================
// Challenging Exercises
// ============================================

// Challenge: Remove Duplicates
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log('Remove Duplicates (numbers):', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log('Remove Duplicates (strings):', removeDuplicates(['a', 'b', 'a', 'c', 'b']));
// ['a', 'b', 'c']

// Alternative using Set:
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// Challenge: Find Missing Items
function findMissing(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

const required = ['passport', 'ticket', 'visa', 'insurance'];
const packed = ['ticket', 'passport'];

console.log('Missing Items:', findMissing(required, packed));
// ['visa', 'insurance']
