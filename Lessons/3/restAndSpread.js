const person = {
    name: 'John',
    age: 22,
    address: {
        street: 'streetName 2',
    },
    isBirthday: false,
    hobbies: ['reading', 'swimming'],
    greet: function () {
        console.log(`Hi ${this.name}`);
    }, // preferably use function keyword
    isRed: function () {
        console.log(`Is this red: ${isRed}`);
    },
    arrow: () => {
        console.log('I cannot use "this."');
    }, // cannot use the keyword this in arrow functions
};

const arr1 = [1, 2, 3, 4, 56, 6, 7, 8, 3, 2, 4, 6, 6, 23, 237];
const arr2 = [25, 6, 7, 3, 2, 4, 2, 1];

const newArr = [...arr1, ...arr2]; // spread merging two arrays
// console.log(newArr)
const personCopy = { ...person }; // spread on an object
// console.log(personCopy)

let first, rest;
[first, , , ...rest] = arr2; // rest operation is index based
console.log(first);
console.log(rest);
