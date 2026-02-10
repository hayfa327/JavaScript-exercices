/* const arrayEvenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
 let sum = 0;
for (let i= 0; i< arrayEvenNumbers.length; i++) {
   sum += arrayEvenNumbers[i];
 }; 

 console.log(arrayEvenNumbers);
 console.log(sum); 

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

let n = 1; 
let count = 0; 
while (n < 1000) {
  n = n * 2; 
  count++
}
console.log(n);
console.log(count);*/

const day = "Sunday"; 
console.log("Weekend"); 

switch (day) {
    case "Friday": 
        console.log("its the end of the Weekday");
        break;  
    case "Monday": 
        console.log("its the start for the week");
        break; 
    case "Tuesday": 
        console.log("its the day for shopping"); 
        break; 
     case "Sunday":
     console.log("Time to rest!");
    break;
    default: 
    console.log("Invalid day")

}