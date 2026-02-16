// ==========================================
// JavaScript Array Methods Reference
// ==========================================

// ==========================================
// MUTATING METHODS (modify the original array)
// ==========================================

const arr = [1, 2, 3, 4, 56, 6, 7, 8, 3, 2, 4, 6, 6, 23, 237];

// push() - Adds one or more elements to the end of an array and returns the new length
arr.push(25);

// pop() - Removes the last element from an array and returns that element
arr.pop();

// shift() - Removes the first element from an array and returns that element
arr.shift();

// unshift() - Adds one or more elements to the beginning of an array and returns the new length
arr.unshift(25);

// splice() - Changes array contents by removing, replacing, or adding elements
arr.splice(0, 7);

// sort() - Sorts the elements of an array in place and returns the sorted array
// arr.sort()

// reverse() - Reverses the order of the elements in an array in place
arr.reverse();

// fill() - Fills all or part of an array with a static value
// arr.fill(0, 3)

// copyWithin() - Shallow copies part of an array to another location in the same array
// arr.copyWithin(0,3,4)

// ==========================================
// NON-MUTATING METHODS (return a new array or value)
// ==========================================

// concat() - Merges two or more arrays and returns a new array

// slice() - Returns a shallow copy of a portion of an array into a new array

// join() - Joins all elements of an array into a string
arr.join().replaceAll(',', '');

// toString() - Returns a string representing the array and its elements
arr.toString();

// toLocaleString() - Returns a localized string representing the array and its elements

// indexOf() - Returns the first index at which a given element can be found, or -1 if not present
arr.indexOf(6);

// lastIndexOf() - Returns the last index at which a given element can be found, or -1 if not present
arr.lastIndexOf(6);

// includes() - Determines whether an array includes a certain element, returning true or false
arr.includes(6);

// find() - Returns the first element that satisfies the provided testing function

// findIndex() - Returns the index of the first element that satisfies the provided testing function

// findLast() - Returns the last element that satisfies the provided testing function

// findLastIndex() - Returns the index of the last element that satisfies the provided testing function

// filter() - Creates a new array with all elements that pass the test implemented by the provided function
arr.filter(a => a > 6);

// map() - Creates a new array with the results of calling a provided function on every element
arr.map(a => {
    return a + 1;
});

// arr.filter(a => a > 6).map((a) => {
//   return a + 1
// })

// reduce() - Executes a reducer function on each element, resulting in a single output value
arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// reduceRight() - Executes a reducer function on each element from right to left, resulting in a single value

// forEach() - Executes a provided function once for each array element
arr.forEach(a => console.log(a));

// every() - Tests whether all elements in the array pass the provided function

// some() - Tests whether at least one element in the array passes the provided function

// flat() - Creates a new array with all sub-array elements concatenated into it recursively to the specified depth

// flatMap() - Maps each element using a mapping function, then flattens the result into a new array

// at() - Returns the element at the given index, allowing positive and negative integers

// with() - Returns a new array with the element at the given index replaced with the given value

// toSorted() - Returns a new array with the elements sorted (non-mutating version of sort)

// toReversed() - Returns a new array with the elements in reversed order (non-mutating version of reverse)

// toSpliced() - Returns a new array with some elements removed/replaced (non-mutating version of splice)

// ==========================================
// STATIC METHODS (called on Array itself)
// ==========================================

// Array.isArray() - Determines whether the passed value is an array

// Array.from() - Creates a new array from an array-like or iterable object

// Array.of() - Creates a new array from a variable number of arguments

// Array.fromAsync() - Creates a new array from an async iterable or array-like object

// ==========================================
// ITERATOR METHODS
// ==========================================

// keys() - Returns a new Array Iterator object that contains the keys for each index

// values() - Returns a new Array Iterator object that contains the values for each index

// entries() - Returns a new Array Iterator object that contains key/value pairs for each index
console.log(arr);
