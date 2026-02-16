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

(async function () {
    console.log('E');
    await Promise.resolve();
    console.log('F');
})();

console.log('G');

// Output: A, E, G, B, D, F, C

// Create array of first 10 even numbers
const evenNumbers = [];
for (let i = 1; i <= 10; i++) {
    evenNumbers.push(i * 2);
}

// Calculate sum
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
}

console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log('Sum:', sum); // 110

// While Loop Exercise
// Double a number until it exceeds 1000
let n = 1;
let iterations = 0;

while (n <= 1000) {
    n *= 2;
    iterations++;
}

console.log('Final number:', n); // 1024
console.log('Iterations:', iterations); // 10

// Switch Statement Exercise
// Day of the week classifier
function classifyDay(day) {
    switch (day) {
        case 'Monday':
            console.log('Weekday');
            console.log('Monday - Start of the work week!');
            break;
        case 'Tuesday':
            console.log('Weekday');
            console.log('Tuesday - Getting into the groove!');
            break;
        case 'Wednesday':
            console.log('Weekday');
            console.log('Wednesday - Hump day!');
            break;
        case 'Thursday':
            console.log('Weekday');
            console.log('Thursday - Almost there!');
            break;
        case 'Friday':
            console.log('Weekday');
            console.log('Friday - TGIF!');
            break;
        case 'Saturday':
            console.log('Weekend');
            console.log('Saturday - Time to relax!');
            break;
        case 'Sunday':
            console.log('Weekend');
            console.log('Sunday - Rest and recharge!');
            break;
        default:
            console.log('Invalid day');
            console.log(`"${day}" is not a valid day of the week.`);
    }
}

// Test with different days
classifyDay('Monday');
classifyDay('Saturday');
classifyDay('Friday');
classifyDay('Funday'); // Invalid
